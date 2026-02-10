# 00. How to read this book

This Primer is a map, not a manual. Its job is to make modern UI toolchains feel less like a pile of arbitrary choices by tracing a line from team constraints to tool choices and then to the tradeoffs those tools impose. If you read it straight through, the Counterfoil Reference Guide should stop feeling like a catalog of pragmatics and start feeling like a set of deliberate boundaries.

This matters because architecture decisions are rarely “purely technical.” They’re usually responses to constraints you already recognize: people rotate on and off teams; the codebase outlives its authors; deadlines force compromises that become debt; and everyone needs to coordinate while the target keeps moving. Without a vocabulary for the tools, it’s easy to cargo-cult patterns you don’t understand, or to over-personalize the system as taste and fashion. This book exists to reduce both.

## What this book is (and isn’t)

Throughout this Primer, “Primer” means the why-layer: origins, constraints, tradeoffs, and how parts relate. The “Reference Guide” is the where/what-layer: a pragmatic map of the Counterfoil codebase meant to stay useful over time. A “toolkit” is not just a pile of components; it’s a bundle of conventions and constraints that makes a certain kind of work easier for a group of people, not just for an individual. A “tradeoff” is a choice that makes one class of problems cheaper while making another class more expensive.

One boundary is worth stating plainly: this book is not about Counterfoil. Counterfoil is the lens that tells us which technologies are worth understanding (React, TypeScript, Vite, styling and tokens, Git and GitHub, packaging and distribution). Once those technologies are on the table, the subject is the technologies themselves and the incentives that made them popular.

## How to use the Primer alongside the Reference

Think of the Primer and the Reference as two different tools you use at different moments. The Primer is for judgment: it should help you explain what a piece of technology is buying you, what it is costing you, and what kinds of failure it tends to produce. The Reference is for navigation: it tells you where things are and what they do in this particular project. When you’re reading the Reference, the Primer should be running in the background, turning “implementation details” into questions about intent: what kind of change is this boundary trying to make safe, what coupling is being avoided, and what cost is being paid to buy that safety.

## A reading strategy

As you read, keep returning to a single pattern: what constraint is this responding to. Most stacks are not chosen because they are elegant; they are chosen because they make coordination cheaper. React, TypeScript, build tools, and conventions are all attempts to improve local reasoning, manage change without constant breakage, and keep many people moving without stepping on each other. The point of this book is to make those goals visible so that tools look like responses rather than fashion.

That approach has a cost: you won’t get the satisfaction of “I can now do X step-by-step.” You may feel like you’re learning the shape of a system rather than its buttons. That is intentional. The practical layer belongs in your actual work, in conversation with experienced engineers, and in the Reference Guide that maps the project.

When a chapter gets dense, don’t treat density as a signal that you should stop. Treat it as a cue to zoom out and look for the argument. Fine distinctions between similar tools can wait unless they change the tradeoff story, and implementation mechanics can wait unless they clarify a boundary.

## Bridge forward

Before we talk about specific technologies, we need a shared frame for what software teams are actually optimizing for, and why those pressures push systems toward certain shapes.

Next: `01_software_teams_and_constraints.md`

