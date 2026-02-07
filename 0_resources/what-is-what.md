# What is What

This document explains **what each tool is** and **why it exists in the Counterfoil Toolkit**.
 The goal is not just to describe *how* the kit works, but to preserve *why these choices were made*, so the system remains legible and intentional over time.

Counterfoil is intentionally conservative about *infrastructure* and deliberate about *systems*.
 Nothing here is trendy for its own sake—the stack exists to support clarity, longevity, and shared understanding between design and engineering. Nothing should feel magical, hidden, or unjustifiable.



## Strategic / Opinionated Choices

---



### React

**What it is**
 A component-based JavaScript library for building user interfaces using composable, declarative components.

**Why we use it in Counterfoil**
 Counterfoil is a **component system first**, not a page-first website. React maps cleanly onto design-system thinking: buttons, inputs, layouts, and patterns as reusable units. It also gives us a shared mental model with developers, strong ecosystem support, and an easy path from “design kit” → “real production UI.”

We also use React because we want to be thinking in terms of interfaces that can convert between web and mobile. A component-first approach helps us think across multiple platforms. 



### Tailwind CSS

**What it is**
 A utility-first CSS framework that provides low-level class utilities instead of pre-styled components.

**Why we use it in Counterfoil**
 Counterfoil is about **tokens, constraints, and systems—not vibes**. Tailwind lets us encode spacing, color, typography, and layout rules directly into the language of the UI without hiding them behind opaque abstractions. This keeps the kit honest, inspectable, and aligned with how modern teams actually build interfaces.



### TypeScript

**What it is**
 A statically typed superset of JavaScript that adds type safety, tooling, and clearer contracts.

**Why we use it in Counterfoil**
 Counterfoil is meant to be **shared, extended, and trusted**. TypeScript turns component props, tokens, and APIs into explicit contracts instead of tribal knowledge. This reduces ambiguity, improves editor tooling, and makes the kit safer to evolve without accidental breakage.



### Vite

**What it is**
 A modern frontend build tool and dev server that emphasizes fast startup, instant HMR, and minimal configuration.

**Why we use it in Counterfoil**
 Counterfoil is a **thinking environment**, not just an output artifact. Vite keeps feedback loops tight so experimenting with tokens, components, and layouts feels lightweight instead of infrastructural. It also stays out of the way—important for a toolkit meant to be understood, not worshipped.





## Standard / infrastructure Choices

---

Not philosophically special, but worth knowing what they are if using the toolkit (if you don't already know). 



### Node.js

**What it is**
 A JavaScript runtime used to execute build tools, dev servers, and scripts outside the browser.

**Why we use it in Counterfoil**
 Node is the foundation of the modern frontend ecosystem. It runs Vite, Tailwind, and our tooling pipeline. We don’t treat it as part of the “design system”—it’s just the necessary substrate.



### Yarn

**What it is**
 A package manager for installing and managing project dependencies.

**Why we use it in Counterfoil**
 Yarn provides deterministic installs, lockfiles, and predictable dependency resolution. This matters for a toolkit intended to be cloned, shared, and revisited years later—consistency beats novelty.



### Git

**What it is**
 A distributed version control system for tracking changes over time.

**Why we use it in Counterfoil**
 Counterfoil is a **living system**. Git gives us history, reversibility, and a shared timeline of decisions. It’s how the kit accumulates wisdom instead of just files.











Think of the pipeline like this:

| thing              | What it does                 |
| ------------------ | ---------------------------- |
| semanticTokens.css | defines meaning              |
| base.css           | assembles styling system     |
| postcss.config.js  | tells Tailwind how to expand |
| tailwind.config.ts | maps tokens to utilities     |
| vite.config.ts     | runs everything              |
| main.tsx           | activates it                 |

