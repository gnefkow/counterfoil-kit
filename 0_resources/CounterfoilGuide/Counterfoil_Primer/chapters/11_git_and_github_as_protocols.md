# 11. Git and GitHub as collaboration protocols

It is tempting to think of Git as a tool you learn in order to run commands. A more useful frame is to think of Git as a protocol for how a team remembers change. GitHub (or similar platforms) sits on top of that protocol and turns it into a social workflow: proposals, review, negotiation, and accountability.

If you want to become an “actor in the developer world,” this is one of the key cultural systems. Not because you need to memorize every command, but because the workflow encodes how teams manage risk and trust.

## The constraint: teams need shared memory

Software development produces a steady stream of decisions: what changed, why it changed, and what assumptions it depends on. If those decisions live only in people’s heads, teams become fragile. If they live only in tickets, they drift away from the actual code. Git is an attempt to bind memory to the artifact that matters: the repository.

The deep benefit is not time travel, though time travel is nice. The deep benefit is that change becomes legible and discussable. A team can point to a particular moment and say, “this is what we meant then,” and can see how that meaning evolved.

## Commits as units of meaning

A commit is often described as a snapshot, but the more important idea is that it is a unit of intent. A good commit says, implicitly, “this set of changes belongs together and has one reason to exist.” When commits are coherent, a codebase becomes easier to evolve because you can reason about change as a sequence of decisions rather than as an undifferentiated pile of edits.

This is why teams care about history quality more in toolkits and libraries than in many apps. A toolkit is an object others depend on. Its change story is part of its public surface. When breakage happens, people need a way to trace what promise changed and why.

## Branches and pull requests as negotiation spaces

Branches are a way to do parallel work without forcing half-finished ideas into the shared trunk. They create a space where intent can be formed before it becomes a commitment the whole team must live with.

Pull requests turn that space into a negotiation. They make work reviewable, not only for correctness but for coherence with the toolkit’s constraints: surface area, naming, boundaries, and tradeoffs. In healthy teams, review is not gatekeeping. It is a coordination mechanism that spreads context and reduces the probability of hidden coupling.

## CI and checks as automated skepticism

Continuous integration is best understood as automated skepticism. A human reviewer cannot reliably catch every regression, and they should not have to. Tests, linting, and build checks act as mechanical constraints that prevent certain classes of failure from reaching the shared branch.

The sociological benefit is subtle but real. When checks are trustworthy, review conversations can move up a level. People can spend time on intent and tradeoffs rather than on catching typos and formatting. When checks are noisy or inconsistent, teams revert to superstition and fear, and the workflow becomes performative.

## GitHub as social infrastructure

Platforms like GitHub add layers that are less about code and more about governance: issues, discussions, review threads, approvals, labels, and release notes. These features can feel bureaucratic, but they are often attempts to solve recurring problems: prioritization, accountability, and shared understanding.

From the perspective of a toolkit, governance matters. Toolkits live longer than individual projects, and they accumulate consumers. That means they also accumulate obligations. A release is not just a deployment; it is a promise-making event. A changelog is not just marketing; it is a contract narrative.

You can ignore most Git command trivia until a concrete situation demands it. The important mental model is simpler: Git is how a team encodes memory into the repo, and GitHub-style workflows are how a team negotiates change in public. If you can follow a pull request discussion and understand why a reviewer cares about boundaries, you already have the kind of understanding this Primer is trying to give you.

## Bridge forward

Git and GitHub help a team coordinate change inside a repository. The next question is what happens when your code is not only used by your team, but distributed to others. That is where packaging and versioning show up as explicit social contracts.

Next: `12_packaging_distribution_and_semver.md`

