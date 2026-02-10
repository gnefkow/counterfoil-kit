# 05. OOP and composition (without ideology)

Object-oriented programming is not a religion. It is a cluster of techniques for managing complexity by bundling state and behavior behind boundaries. The interesting question is not whether OOP is “good” or “bad,” but what kinds of constraints it helps a team satisfy, and what kinds of costs it tends to introduce.

UI toolkits are a useful case study because they sit at the intersection of two pressures: they need strong, stable public surfaces for many consumers, and they need internal flexibility because UI requirements change constantly. That combination is why modern UI libraries talk about “components” and “composition” far more than they talk about class hierarchies.

## Why OOP exists in the first place

Once a system has state, you have to decide where that state lives and how it is allowed to change. OOP’s answer is simple: put data and the functions that operate on that data in the same place, and expose a controlled interface to the outside world. That answer can be pragmatic. It can reduce the number of ways a system can be misused, and it can make intent more legible, especially when the same concepts are manipulated in many places.

It is also easy to overestimate what OOP promises. Bundling does not magically remove coupling; it relocates it. A class with many responsibilities can become a “nice-looking box” that hides a mess. For teams, the relevant question is always the same: does this boundary make change safer, or does it make change harder to see?

## Interfaces as social contracts

In everyday TypeScript, the most durable part of “OOP” is often not classes at all. It is interfaces: naming the shape of something and the operations you can perform on it. In that sense, interfaces are a continuation of the previous chapter’s theme. They are contracts that make module boundaries explicit, but now the boundary is not only “what file exports what,” it is “what kinds of objects are allowed to flow through the system.”

This is also where ideological debates become unhelpful. Teams rarely choose between “OOP” and “functional programming” in the abstract. They choose combinations of techniques that make local reasoning easier in a particular domain. UI work tends to reward a certain mix: pure-ish functions for rendering, explicit state ownership, and composition as the default reuse mechanism.

## Why inheritance is rare in UI toolkits

Inheritance is attractive because it promises reuse. You write behavior once in a base class, then specialize it in subclasses. The problem is that inheritance often trades one kind of duplication for another: duplication of assumptions. A subclass inherits not just code, but constraints about how the base class expects to be used. Over time, teams discover that the “shared” behavior they tried to centralize becomes an anchor. It is hard to change because every consumer has implicitly relied on it in slightly different ways.

UI toolkits amplify this problem. Components are used in unpredictable combinations. The surface area must stay stable across many contexts. A deep inheritance tree tends to create brittle APIs, because internal decisions leak outward as “inherited behavior.” This is why you see a preference for composition. Instead of saying “this thing is a specialized kind of that thing,” composition says “this thing contains or combines other things.” It is a smaller claim, and smaller claims age better.

## Composition as a bias toward small promises

Composition is not a single pattern; it is a bias. It prefers many small, explicit pieces over a few large, implicit ones. It also aligns with the sociological realities from chapter one. Small pieces can be owned, reviewed, refactored, and replaced with less coordination. They support local reasoning. They also make contracts easier to draw, because you can keep public surfaces narrow.

In UI libraries, composition shows up in familiar ways. Components are built from other components. Behavior is delegated into smaller utilities or hooks. “Theme” and “tokens” are not inherited; they are injected through context, props, or variables. Even when the implementation uses objects internally, the API often tries to look like a set of composable parts rather than a rigid hierarchy.

## What this costs, and what it buys

The cost of composition is that you have to do more explicit wiring. You have to decide which concerns are separate, and you have to accept that not everything can be centralized cleanly. A composition-first system can also become noisy if the boundaries are poorly chosen, because you end up with many small pieces that are difficult to find or name.

The benefit is that reuse becomes less magical and more negotiable. Instead of inheriting behavior you did not ask for, you pull in behavior you can see. Instead of needing global agreement to change a base class, you can improve one component or one abstraction at a time. That is a trade that UI toolkits often make on purpose.

You do not need to memorize design pattern catalogs to get value from this chapter. The durable lesson is structural: prefer boundaries that keep promises small, keep public surfaces narrow, and make dependencies explicit. When you feel drawn toward inheritance, treat it as a signal to ask what behavior you are trying to reuse and whether that reuse can be expressed as composition instead.

## Bridge forward

So far we have been talking about internal forces: constraints, boundaries, state, and contracts. The next step is to name the thing that sits on top of all of those decisions in the UI world: the toolkit itself. What counts as a toolkit, how it differs from a framework or a design system, and why “a good tool” is as much a social achievement as a technical one.

Next: `06_what_a_toolkit_is.md`

