# 12. Packaging, distribution, and SemVer

When you turn code into a package, you are no longer only writing software. You are making a promise to strangers, including a future version of yourself. Distribution forces implicit assumptions to become explicit, because other people will build on top of them in ways you cannot fully predict.

This is why packaging and versioning are central to toolkits. A toolkit is, by definition, meant to be reused. Reuse makes stability valuable and makes change politically complicated.

## The constraint: code becomes someone else’s dependency

Inside one app, you can often fix mistakes quickly because you control the whole system. In a toolkit or library, consumers are outside your control. Their code has its own timelines, priorities, and risk tolerances. That means changes you consider “reasonable” can feel disruptive to them, and changes that are technically small can have large social cost.

Packaging is the technical act that turns this social reality into a concrete interface. The moment you publish, your internal decisions stop being internal. Your public surface becomes an ecosystem surface.

## What a “package” is, structurally

A package is a unit of distribution with a declared interface. In JavaScript ecosystems, the package is described by metadata that tells consumers what they are getting, what it depends on, and how it should be loaded. In practical terms, this metadata becomes part of the contract. It is not just bookkeeping; it is how other tools and other teams reason about compatibility.

This is why `package.json` is often described as an API contract. It encodes not only name and version, but also entry points, dependency expectations, and (sometimes) what environment the package assumes. It shapes how the package can be consumed, built, and upgraded.

## SemVer as promise-making

Semantic Versioning (SemVer) is often presented as a numbering scheme. More usefully, it is a language for making promises about change. A version number becomes a compact signal that tells consumers how much risk they are taking when they upgrade.

In the idealized model, breaking changes trigger a major version bump, additive backwards-compatible changes trigger a minor bump, and fixes trigger a patch bump. In reality, the hard part is not bumping numbers. The hard part is agreeing on what counts as “breaking,” especially for UI systems where behavior, styling, and accessibility can change in ways that are meaningful even when the API shape remains the same.

SemVer does not eliminate conflict. It gives teams a way to coordinate around it.

## The sociology of compatibility

Compatibility is not only technical. It is also about attention and trust. If upgrades are painful, consumers stop upgrading, which splits the ecosystem and increases maintenance burden. If you avoid breaking changes forever, the toolkit becomes a museum and innovation moves elsewhere. If you change too aggressively, you burn trust and force consumers to invest in defensive strategies.

Toolkits evolve within these incentives. Deprecation policies, migration paths, and clear release notes are not “nice to have.” They are mechanisms for maintaining a relationship with consumers. In a sense, versioning is a governance system.

## What to ignore (for now)

You can ignore most of the mechanics of publishing. You do not need to know the command that uploads a tarball to understand the tradeoff story. What matters is the conceptual shift: distribution turns a private codebase into a public contract, and versioning is the language you use to manage that contract over time.

## Bridge forward

Once you accept that a toolkit is a set of public promises, the design question becomes sharper. How do you design a toolkit so it can evolve without constantly betraying those promises? That is the final theme of this Primer: designing for evolution as a deliberate practice.

Next: `13_designing_for_evolution.md`

