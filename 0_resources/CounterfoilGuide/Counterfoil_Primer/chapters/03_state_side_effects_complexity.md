# 03. State, side effects, and why UI work is hard

UI isn’t hard because buttons are complicated. UI is hard because it is **software that lives in time**, and time turns small decisions into state.

Once you can see state and side effects clearly, a lot of modern UI architecture stops feeling mysterious—it starts looking like damage control.

## Why “simple screens” become complex

A UI is a promise to a user: if you do X, the system will respond in a way that makes sense. The “makes sense” part is where complexity hides, because “sense” is a story that unfolds over time. Even a simple screen is usually juggling what the user has typed, what the server last returned, what is currently loading, what failed and why, what is permitted, and what should be remembered versus reset. When those pieces are not explicit, behavior becomes emergent: the screen feels haunted, and the bug reports read like superstition.

Teams struggle here because state is often implicit, effects happen out of order, and timing turns perfectly reasonable code into “random” behavior. That is not a personal failure. It is the default shape of interactive software unless you actively impose structure.

## A vocabulary that makes UI legible

State is information that can vary over time and changes the system’s behavior. Derived data is anything you can compute from other state; storing it twice is a bet you should make consciously, because it creates the possibility of contradiction. Events are things that happen (a click, a timer, a network response) that can trigger state change. Side effects are interactions with the outside world: network calls, storage writes, timers, analytics, and DOM mutations.

Two distinctions show up in almost every architecture discussion. The first is local versus shared state: does this information belong to a single feature, or must multiple places agree about it. The second is synchronous versus asynchronous work: does it happen now, or does it happen later, possibly out of order. UI complexity tends to appear when you combine shared state with asynchrony, because then you are no longer just “drawing a screen.” You are managing a concurrent system with partial failure as a normal operating mode.

## Why modern UI stacks invest in explicitness

State and effects sit at a seam. On one side you want something pure: a description of what should be on screen. On the other side is the messy reality of latency, user behavior, and failure that cannot be eliminated. Modern UI stacks invest in explicit state models and predictable update paths because those choices make effects legible and testable, which makes change safer. Later, when we talk about React, you can read its core pitch as a bet: make rendering more like a pure function so state and effects become easier to reason about.

The payoff is not philosophical purity. The payoff is fewer haunted screens. When state and effects are explicit, behavior becomes more predictable, debugging becomes more systematic, and features can compose without accidental feedback loops.

## Tradeoffs and failure modes

Explicitness has costs. You have to name things, decide ownership (“who owns this state?”), and resist the temptation to model every possible future too early. Teams also fail in recurring ways. They duplicate state and create contradictions, they introduce implicit coupling when one feature secretly depends on another’s timing, they create effect soup by scattering side effects everywhere, and they ship timing bugs when stale responses and race conditions are treated as edge cases rather than as core design constraints.

The sociological failure mode is familiar: the state layer becomes scary, so the team avoids it, which makes it scarier. Complexity does not disappear when you avoid it; it just becomes implicit.

## Alternatives and why teams choose them

There is no single right way to handle UI state, only different bets. Imperative UI approaches mutate the UI directly in response to events; they can feel simpler early on, but behavior becomes hard to audit as features accumulate. Declarative approaches compute UI from state; they usually make reasoning easier at scale, but they force explicitness about state ownership. Centralized stores can simplify sharing but can also become god-objects; distributed state improves locality but can make coordination harder. Teams choose among these based on how much sharing is required, how complex the asynchronous behavior is, and how much predictability they need relative to speed of iteration.

You do not need to memorize a landscape of brand-name state libraries to reason well. You can also ignore micro-optimizations about re-rendering and elaborate formal state-machine approaches unless your product genuinely needs them. The core lens is simpler: what is the state, what is derived, what are the effects, who owns what, and when does it change.

## Bridge forward

Once a system has state, the team needs contracts about what shapes of state are allowed and what operations are valid. That is the role of types in practice: not academic correctness, but scalable coordination and safer change.

Next: `04_types_as_contracts.md`

