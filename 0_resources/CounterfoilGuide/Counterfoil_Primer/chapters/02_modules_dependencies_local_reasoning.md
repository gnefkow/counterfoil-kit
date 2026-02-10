# 02. Modules, dependencies, and local reasoning

Modules are not primarily a “code organization” trick. They’re a **coordination technology**: a way for a team to say, “you can work here without needing to understand everything else.”

If you want to understand why modern toolkits emphasize small components, explicit imports, and strict boundaries, this is the root.

## Why boundaries exist

Teams do not scale by adding more intelligence. They scale by adding structure that makes intelligence reusable. Without boundaries, every change becomes a full-system negotiation; “simple” edits require accidental archaeology; and people become afraid to touch code they do not fully understand.

The constraint here is cognitive. A human brain cannot keep a large system’s full state in working memory, so teams aim for local reasoning: the ability to predict the consequences of a change by looking at a small region of the codebase. A module boundary is one way of buying that ability.

## A small vocabulary for modularity

In this context, a module is a named unit of code with a boundary. In practice it is often a file or a directory whose internals can change without forcing all consumers to change. A dependency is an edge in the graph: A depends on B if A needs B to function. Coupling describes how much two things must change together, while cohesion describes how strongly the things inside a module belong together. A module’s public API (its surface area) is the part you are implicitly or explicitly promising to keep stable.

If you are used to product thinking, this should feel familiar. The public API is the user interface of a module. The internals are implementation details that you want the freedom to revise without breaking everyone else.

## How modularity shows up across the stack

Modularity is not only a code-level concern. It shows up in UI systems as components and composition, in tooling as build pipelines, and in distribution as packages with versioned contracts. This is why later chapters keep circling back to “surface area”: it is the point where social promises become technical realities.

You can already see the shape of the modern stack from this lens. TypeScript is, among other things, a contract language for module boundaries. React encourages composition boundaries. Package managers and SemVer formalize module promises across teams and time.

## What modularity buys you (and what it costs)

When boundaries work, they buy change isolation and parallel work. They make a codebase legible as a map: names become navigation, and ownership becomes clearer. They also make governance possible, because you can treat the public surface differently from internal implementation details.

There is also a cultural effect that teams underestimate. Good boundaries create psychological safety. People will touch code when they can predict what they might break.

But modules can fail in ways that look like “bad code” while actually being “bad boundaries.” Some teams over-modularize, creating too many tiny pieces with no clear story. Others under-modularize, letting everything depend on everything until local reasoning collapses. Boundaries leak when consumers rely on internals, which makes refactors expensive. Dependency graphs turn into knots through circular dependencies and cross-cutting concerns (logging, styling, analytics, permissions) that quietly reintroduce coupling. The sociological failure mode behind many of these is boundary drift: “just this once” exceptions become norms, and the real architecture becomes implicit.

## Alternatives and enforcement styles

Different teams enforce boundaries in different ways. Some rely on conventions (“we just don’t import internal paths”), which is cheap and flexible but fragile under pressure. Others enforce boundaries with tools (lint rules, build constraints, typed public APIs), paying an upfront cost for stronger guarantees. Others rely on organizational enforcement through ownership and code review norms, which can work well but depends on culture and attention.

Modularity also has multiple “scales.” A team might choose a monorepo with clear packages or many repos; a single deployable or many services. These choices are usually responses to coordination cost, not technical virtue.

You can ignore the search for the perfect folder structure; it does not exist. You can also ignore naming bikesheds unless they are hiding a boundary problem, and you can ignore theoretical purity debates about coupling and cohesion. Instead, watch the graph in practice. Where do changes tend to ripple? Which modules are too central to refactor safely? Which boundaries are treated as public even if nobody admits it?

## Bridge forward

Modularity gives you a way to structure a system, but UI systems add an additional pressure: the visible surface is interactive, time-based, and full of cascading effects. To understand why React and related patterns exist, we need a shared model for state and side effects.

Next: `03_state_side_effects_complexity.md`

