# Counterfoil Design Philosophy

This philosophy outlines the pattern preferences for how our code should work in this project. 

### **Our Philosophical Basis**
We assume that the builders who will use Counterfoil come with a "design" mindset. We think about "how things are used" first, and "how they are built" second. 

### **Application Design Philosophy**

This project follows a **modular, parsimonious design philosophy**. When generating or modifying code, follow these rules strictly:

#### 1. File and Module Structure

- **No large "god files."**
  - A single file should rarely exceed ~150–200 lines.
  - If a file grows, extract logic into smaller modules immediately.
- Separate concerns clearly:
  - UI components
  - state / logic (hooks, services)
  - styling abstractions
  - configuration
- Prefer **many small, boring files** over a few clever ones.

#### 2. Components

- Components should be **simple, composable, and narrowly scoped**.
- Avoid monolithic "Main.tsx" or "App.tsx" files containing full app logic.
- Each component should:
  - do *one thing*
    - "One thing" is defined from a **design perspective**, not an implementation perspective. For example, `Text` does one thing: apply typography treatment. The fact that it can render as `<h1>`, `<p>`, or `<span>` is an implementation detail—not multiple responsibilities. Primitives should map to design concepts, and smart defaults handle the underlying HTML semantics.
  - accept explicit props
  - delegate logic when possible
- Favor composition over condition-heavy components.

#### 3. Styling

- **Styling is abstracted and semantic.**
- Do NOT inline raw colors, spacing values, or typography.
- Use design tokens and utility classes derived from them.
- Components should read semantically (e.g. `text-primary`, not `text-blue-500`).
- If styling logic becomes complex, extract it.

#### 4. State and Logic

- Business logic does not live inside UI components unless trivial.
- Reusable or non-visual logic should be:
  - custom hooks
  - helper modules
  - services
- Avoid tightly coupling state to rendering.

#### 5. General Code Style

- Prefer clarity over cleverness.
- Prefer explicitness over inference.
- Avoid premature abstraction, but **do not hesitate to refactor** once patterns emerge.
- Optimize for long-term readability and change, not shortest code.

#### 6. Defaults for AI-generated Code

When generating code:

- Assume this is a **real application**, not a demo or tutorial.
- Start with a reasonable folder structure.
- Ask to split files if something becomes large.
- Never place the entire app in a single file unless explicitly instructed.



**Layout primitives**

We introduce layout primitives only to encode *rhythm and relationship*, not to replace CSS or enforce page structure. Layout components should remain simple, composable, and unsurprising.



**Standardness over elegance.** 

Using standard protocols and packages is key to making things robust and easily fixable over time. When in doubt, we always choose the option that is the most popular because it will be understandable and supported by more human and AI developers.

- We are LESS concerned with: elegance, efficiency, speed. 

- We are MORE concerned with: standard patterns and packages, transparency, robustness.
