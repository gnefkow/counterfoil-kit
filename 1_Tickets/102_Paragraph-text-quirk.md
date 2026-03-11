
--------------------------------------------------------------------------------
*We have recieved the following in our mailbox from the comrades on the Velvella app team:*

## **Message:**
Dearest Counterfoil Team,

We wanted to flag a quirk we ran into while building Velella on top of Counterfoil. We are using Counterfoil the way we expect many app teams will: relying on its primitives, spacing tokens, and semantic typography styles to move quickly through feature work without hand-styling every UI surface. In that context, we found a behavior in the `Text` primitive that was surprising enough to cost us debugging time, and we think it could easily surprise other teams as well.


#### **The Context**
We discovered this while building a compact "Year Facts" panel that stacked a title and subtitle vertically using Counterfoil layout primitives. The component looked straightforward: use `Stack` to control vertical spacing, use `Text` for the title and description, and then tune the spacing with gap tokens and line-height. When the visual gap between the two text elements was much larger than expected, our first assumption was that our `Stack` gap, local classes, or token values were off.

That assumption turned out to be wrong. The spacing bug was coming from the browser's default paragraph margins, which were still being applied through Counterfoil's `Text` primitive. Because the component presents itself as a general-purpose text primitive rather than as a lightly styled paragraph wrapper, the source of the spacing was not obvious during implementation.


#### **The issue:**
The core issue is that `Text` currently renders a raw `<p>` element, so browser-default paragraph behavior is still active. In practice, that means app teams can believe they are controlling spacing through Counterfoil layout primitives while an unseen user-agent margin is also participating in layout. This is especially confusing because the `Text` API exposes typography concepts like `h1`, `h2`, `body1`, and `body2`, which makes it feel like a general typography primitive rather than a paragraph-specific component.

From an app team's perspective, this creates two problems. First, the behavior is surprising: a developer can reduce gaps, tweak line-height, and add utility classes without realizing the real source of the space is the native `<p>` margin. Second, the burden of solving the problem falls to each application individually, even though the issue originates in a shared primitive. For a library used across multiple apps, that means the same debugging cycle is likely to repeat unless the behavior is made explicit or corrected centrally.



#### **Proposed Solution**
We think the right long-term answer is a library-level fix, not just a docs note. A short note in a "gotchas" section would still be useful as immediate protection for teams, but it would only document the surprise rather than remove it.

A library-level fix would mean that Counterfoil's `Text` primitive fully owns the layout behavior of the element it renders, instead of inheriting browser-default paragraph spacing. In practical terms, that likely means one of the following:

- Reset paragraph margins inside the `Text` component or within Counterfoil's base styles so that `Text` has predictable spacing wherever it is used.
- Make the underlying rendered element explicit and flexible, so teams can choose whether they want a paragraph, span, or heading semantics without getting unintended paragraph margins.
- Align the public API and documentation with the rendered HTML semantics, so a component that looks like a typography primitive does not quietly behave like a browser-default paragraph.

Our preference would be for Counterfoil to ensure that `Text` participates in layout predictably by default, with spacing controlled by Counterfoil layout primitives and app-level composition rather than user-agent margins. That would make the primitive safer for downstream teams and would prevent each app from having to discover and patch the same quirk on its own.


--------------------------------------------------------------------------------


## **Implementation Planning**

### Diagnosis

The Velella team's report is valid. The root cause is a mismatch between the `Text` API and its rendered output:

1. **API implies general typography.** The `size` prop accepts `h1`–`h6`, `body1`, `body2`, which suggests semantic flexibility.
2. **Implementation is paragraph-only.** The component always renders `<p>`, regardless of size.
3. **Consumer setup skips Tailwind preflight.** The recommended install path (Option A in README) imports `semanticTokens.css` + `CounterfoilComponents.css`, which do not include Tailwind's base reset. So downstream apps inherit browser-default paragraph margins.

This creates two problems:
- **Layout surprise:** Spacing is controlled by hidden user-agent margins, not `Stack`/`Inline` gaps.
- **Semantic mismatch:** `<Text size="h1">` renders a `<p>`, which is incorrect for accessibility and SEO.

---

### Recommended Solution

**Add an `as` prop with smart defaults, and unconditionally reset margins.**

#### Behavior

| `size`  | Default `as` | Rationale                                    |
| ------- | ------------ | -------------------------------------------- |
| `h1`    | `<h1>`       | Semantic heading                             |
| `h2`    | `<h2>`       | Semantic heading                             |
| `h3`    | `<h3>`       | Semantic heading                             |
| `h4`    | `<h4>`       | Semantic heading                             |
| `h5`    | `<h5>`       | Semantic heading                             |
| `h6`    | `<h6>`       | Semantic heading                             |
| `body1` | `<span>`     | Neutral inline; no margin, no block behavior |
| `body2` | `<span>`     | Neutral inline; no margin, no block behavior |

Consumers can override:

```tsx
<Text size="h3" as="p">Visually large, semantically a paragraph</Text>
<Text size="body1" as="label">Body-sized label</Text>
```

The component applies `m-0` unconditionally, so margins are always controlled by Counterfoil layout primitives.

---

### Why This Approach

1. **Semantic HTML by default.** Headings render as headings. Accessibility and SEO work out of the box.
2. **Predictable layout.** Margin reset lives in the component, not in a global stylesheet that consumers may or may not import.
3. **Explicit control.** The `as` prop lets teams override when needed (e.g., render a `<label>`, `<div>`, or `<p>`).
4. **Minimal API disruption.** This is additive. Existing call sites get better defaults; no props are removed or renamed.
5. **Internal components improve.** `TableCell`, `InputField`, `CheckboxField`, etc. currently render `<p>` in awkward contexts. With `body1`/`body2` defaulting to `<span>`, these become neutral wrappers.
6. **Matches the designer's mental model.** Designers don't think "I need an `<h2>` here"—they think "I need medium-prominent text." This approach lets them stay in design-space (picking visual classes) while the system handles implementation details (semantic HTML).

---

### Alternatives Considered

| Option                                         | Verdict                                                                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Just reset margins on `<p>`**                | Fixes layout but doesn't fix semantic mismatch (`h1` still renders `<p>`).                                           |
| **Split into `Heading`, `Paragraph`, `Label`** | Forces designers to answer an implementation question (what HTML element?) before the design question (what visual treatment?). Counterfoil primitives should map to design concepts, not HTML concepts. |
| **Rename sizes to `xl`, `lg`, `md`**           | Removes heading connotation but loses familiar mental model. The problem is the element, not the names.              |
| **Default `body1`/`body2` to `<p>`**           | Paragraphs are block-level with historical margin baggage. `<span>` is the neutral choice; teams can opt into `<p>`. |

---

### Implementation Checklist

- [x] Add `as` prop to `Text` component with union type: `"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div"`
- [x] Create default-element map keyed by `size`
- [x] Render the resolved element with `m-0` class applied unconditionally
- [x] Audit internal usages (`TableCell`, `InputField`, `CheckboxField`, `RadioField`, `TextareaField`, `TableHeaderCell`, `TableEmptyState`) and add explicit `as` where appropriate — **No changes needed; all use `body1`/`body2` which now correctly default to `<span>`**
- [x] Update `Text.stories.tsx` to demonstrate `as` prop
- [x] Update `docs/4_Component-Overview.md` with new prop documentation
- [ ] Notify downstream teams (Velella, others) of the change