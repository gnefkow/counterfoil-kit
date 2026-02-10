# 04. Types as contracts

Types are not “academic correctness.” In practice, they’re a way for a team to make **assumptions explicit** so change stays safe as the codebase outlives its authors.

TypeScript is popular for the same reason product teams write specs: not because it prevents all mistakes, but because it reduces ambiguity.

## The constraint: assumptions don’t scale

When a system grows, most bugs stop being syntax mistakes. They become wrong assumptions about what a thing can be, mismatches between modules (“I thought this field was optional”), and changes that accidentally break distant consumers. The underlying constraint is coordination: you need a scalable way to answer, “what shape of data is allowed here?” without asking the original author.

Types are one way of paying that coordination cost once, up front, instead of paying it repeatedly through confusion and breakage.

## What types are, in practical terms

A type is a set of allowed values plus the allowed operations on those values. Static checking is catching certain mistakes before running the program, while runtime checking is validating values while the program runs (especially at system boundaries where the outside world can hand you anything). A type system is the set of rules that determines what counts as compatible.

The most useful mental model for this book is social rather than mathematical: types are contracts between humans that a compiler can partially enforce. They are a way of making intent durable in a system that is otherwise easy to misread.

TypeScript is a pragmatic compromise. It adds a type layer to JavaScript, but it tries hard not to break JavaScript’s ecosystem. That compromise is why it is successful, and it is also why it sometimes feels leaky: you are not in a perfectly sealed world; you are adding structure to a language that was designed to be permissive.

## Why types matter more in toolkits than in apps

Types sit at the boundary between what you intend a module to accept or produce and what the world will actually hand you at runtime. In a toolkit or library context, that boundary becomes more important because you are publishing a surface area for other people to consume and you cannot rely on informal conversations to keep assumptions aligned. This is one reason TypeScript shows up so often in modern UI kits: it makes the shape of components, props, tokens, and configs legible without running the code.

## What types buy you (and what they cost)

Types buy faster reading because you can understand data flow without stepping through execution. They buy safer refactors because compiler errors become a map of what a change touches. They buy documentation that tries to stay current, because types usually rot slower than wikis. They also buy better boundaries, because a module can say “this is what I accept” without exposing its internals.

There is a sociological benefit here that matters just as much: types reduce the need for hero knowledge. They lower the barrier to contributing, because the system can explain itself more often without a meeting.

But types are not free. They introduce upfront friction because you must name concepts and decide ownership. They can produce false confidence when “it type-checks” is mistaken for “it is correct,” because types cannot guarantee meaning. They can also generate complexity pressure, where a team drifts into type wizardry that obscures intent.

The failure modes are predictable. Some teams model the wrong thing, encoding implementation details rather than domain constraints. Some over-generalize until types stop communicating anything. Some confuse boundaries and assume static types replace runtime validation at system edges like the network, storage, or user input. The deepest cultural risk is treating types as virtue rather than as a tool for reducing coordination cost.

## Alternatives and why teams choose them

Teams can reduce ambiguity without TypeScript, but they pay in other currencies. Dynamic typing paired with tests can keep iteration fast, but large refactors are harder and correctness moves to runtime and test coverage. Runtime schemas and validation are strong at boundaries, but they do not automatically improve internal legibility. Conventions and documentation are cheap, but fragile under pressure and staff turnover.

TypeScript’s appeal is that it offers a continuous stream of feedback as you change code, not just at runtime or in review.

You do not need to learn advanced generic gymnastics, deeply nested conditional types, or theoretical debates unless they change the tradeoff story for your context. The durable uses are simpler: make module boundaries legible, make invalid states harder to represent, and use compiler errors as a dependency map during change.

## Bridge forward

Types describe contracts. The next question is how to structure code so those contracts stay small, composable, and evolvable. That leads into the practical version of “object-oriented” thinking in UI kits: bundling behavior and data when it helps, but mostly leaning on composition rather than inheritance.

Next: `05_oop_and_composition_tradeoffs.md`

