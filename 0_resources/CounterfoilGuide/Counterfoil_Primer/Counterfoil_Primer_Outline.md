# Counterfoil Primer — Canonical Outline

This Primer is a **companion** to the Counterfoil Reference Guide.

- **What this is**: a linear, non-fiction explainer that gives **structural + historical + sociological context** for the technologies found in Counterfoil (React, TypeScript, Vite, Tailwind/tokens, Git/GitHub, packaging).
- **What this is not**: a practical guide or tutorial.
  - No “how to use Counterfoil components”
  - No “how to write React”
  - No “how to publish npm packages”

## Spine (how the book is organized)

Decision-making under constraints:

1. Start with the **problems software teams actually have** (coordination, change, scale, ambiguity).
2. Show how common tools/ideas **emerged as responses** to those problems.
3. Evaluate each tool as a set of **tradeoffs** (technical *and* sociological), including alternatives.
4. Connect the pieces into a coherent “why this stack looks like this” mental model.

## Target length

- **Target**: ~60 pages
- **Acceptable range**: ~40–80 pages
- **Reading mode**: read straight through like non-fiction (Reference Guide is for dipping in).

## Chapter template (required)

All chapters must follow the same structure:

- See: `Counterfoil_Primer_Chapter_Template.md`
- (Write with: `Counterfoil_Primer_Writing_Prompt.md`)

## Table of contents (with page budgets)

### Part 0 — Orientation (2 pages)

**00. How to read this book** (2)

- Intent: set expectations, define boundaries (Primer vs Reference), and introduce the “constraints → tools → tradeoffs” spine.
- File: `chapters/00_how_to_read.md`

### Part I — What software teams are optimizing for (12 pages)

**01. Software teams and constraints** (5)

- Intent: architecture as coordination over time; ambiguity costs; why “structure” becomes a product requirement.
- File: `chapters/01_software_teams_and_constraints.md`

**02. Modules, dependencies, and local reasoning** (4)

- Intent: why modularity exists; dependency graphs as organizational artifacts; local vs global reasoning.
- File: `chapters/02_modules_dependencies_local_reasoning.md`

**03. State, side effects, and why UI work is hard** (3)

- Intent: state vs derived values; side effects; why “simple screens” become complex systems.
- File: `chapters/03_state_side_effects_complexity.md`

### Part II — Contracts and composition (10 pages)

**04. Types as contracts (TypeScript as a team technology)** (5)

- Intent: what a type really is; compile-time vs runtime; TS as change-management and shared vocabulary.
- File: `chapters/04_types_as_contracts.md`

**05. OOP and composition (without ideology)** (5)

- Intent: objects/interfaces as tools; why composition dominates UI kits; where inheritance still shows up.
- File: `chapters/05_oop_and_composition_tradeoffs.md`

### Part III — Toolkits as social technology (8 pages)

**06. What a “toolkit” is (and isn’t)** (4)

- Intent: toolkit vs framework vs design system; what “good tool” means for teams (learnability, predictability, recoverability).
- File: `chapters/06_what_a_toolkit_is.md`

**07. A brief history of UI toolkits** (4)

- Intent: recurring pressures across eras; what changed and what didn’t; why today’s patterns rhyme with older ones.
- File: `chapters/07_ui_toolkits_history.md`

### Part IV — The Counterfoil stack as a set of bets (34 pages)

This part is “stack-specific” (React/TS/Vite/Tailwind/etc) but **not Counterfoil-specific**. Counterfoil is only an example lens.

**08. React as a UI architecture** (10)

- Intent: React’s mental model *only to the depth needed* to evaluate React-shaped toolkits; why this architecture won culturally.
- File: `chapters/08_react_as_ui_architecture.md`

**09. Styling systems: CSS, tokens, and tradeoffs** (9)

- Intent: CSS as a programming environment; tokens/variables as contracts; utility vs component CSS vs CSS-in-JS as coordination strategies.
- File: `chapters/09_styling_systems_and_tokens.md`

**10. Toolchains as infrastructure (Vite as exemplar)** (6)

- Intent: why build tools exist; dev/prod split; bundling/transpilation as “compatibility labor,” not fashion.
- File: `chapters/10_toolchain_as_infrastructure.md`

**11. Git and GitHub as collaboration protocols** (5)

- Intent: version control as time travel; PRs/reviews/CI as social technologies for quality and trust.
- File: `chapters/11_git_and_github_as_protocols.md`

**12. Packaging, distribution, and SemVer** (4)

- Intent: what a package *is*; semver as promise-making; compatibility pressure; ecosystem incentives.
- File: `chapters/12_packaging_distribution_and_semver.md`

### Part V — Designing for evolution (6 pages)

**13. Designing a toolkit that can evolve** (6)

- Intent: public API design; boundaries; deprecation; docs/tests/examples as quality loops (conceptual, not procedural).
- File: `chapters/13_designing_for_evolution.md`

## Boundary note: Primer vs Reference Guide

- **Primer**: durable mental models, origins, tradeoffs, vocabulary; read linearly.
- **Reference Guide**: pragmatic, timeless “what is this, where is it, what does it do”; read non-linearly.
