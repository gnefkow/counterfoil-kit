Audience + promise
Primary reader: Who exactly (titles/roles), and what’s their “starting point” (what do they already know well vs misunderstand)?

This is an audience of one: me

Background: 15 years of experience as a UX designer, researcher, and product strategist. Worked on MANY teams as they transitioned to agile software development (often as a leader), certifications as scrum product owner and scrum master. 

No background in computer science. Did a 6-month full stack web development bootcamp, but that was years ago and most of the skills weren't used (other than improving conversations with dev teams.)



One-sentence promise: If the back cover had one claim, what is it?

It gives a structural overview of the core technologies in Counterfoil kit, and provides the overarching basis for getting into the specifics of @counterfoil_reference_guide



Outcome tests: What are 3 things a reader should be able to do after reading (as observable behaviors, not “understand”)?

be able to describe what react/typescript/vite/etc... are and why a team would choose to use them. 

be able to have deep discussions with more experienced software developers about decisions made, especially in broader architecture. 

Be able to read the @counterfoil_reference_guide and understand WHY the very pragmatic descriptions in that text are important (and how they contribute to the overall understanding of the code. )



Scope boundaries (Primer vs Reference vs “not in this book”)
Hard exclusions: What topics must NOT appear in the Primer even if relevant? (e.g. “how to use Counterfoil components”, “how to write React”, “how to publish npm packages”)

These things shouldn't be in there: “how to use Counterfoil components”, “how to write React”, “how to publish npm packages”

This is NOT a practical guide. This is more of a document that places these technologies in a historical, philosophical, and sociological context. 

It is also NOT about Counterfoil. It IS about the technologies that are in Counterfoil. 



Reference Guide dependency: Should the Primer assume the Reference exists, or be valuable standalone?

It should assume that the reference exists. The reference is VERY pragmatic, and something that is timeless and can be referred back to. The Primer is something that is more verbose and gives background on the technologies so that when I am discussing Counterfoil with other people, I'll have some understanding of what these technologies are and how they fit culturally, architecturally, and pragmatically within the context of decision making on teams. 



Counterfoil specificity: Should Primer be mostly framework-agnostic concepts with Counterfoil as an example, or explicitly “Counterfoil-first” throughout?

framework agnostic. However, the goal is to understand the specific things (react, typescript, etc...) that Counterfoil has in it. So think about Counterfoil as determining "what is important", but then, once we pull out that group of important things, we're writing about the THINGS, not counterfoil.



Page budget + depth tradeoffs
Page budget reality: Is 60 pages fixed, or can it vary (e.g. 40 / 80)? Any printing/layout constraints?

60 pages is a target. 40-80 would be fine. 

I'll be ultimately turning it into an ePub and reading it on an e-ink reader. 





Depth preference: Would you rather have (A) fewer topics, deeper, with exercises/checklists, or (B) broader survey with crisp heuristics?

- depth: yes
- Brief histories.
- Lots of explanations about "why"
- broader survey with crisp heuristics? → YES!
- NO exercises. 
- NO checklists. 





Reader patience: What’s the expected reading mode—one sitting, weekend, or “dip in”?

I'll probably read it all in a few sittings, and I'll read it linearly, straight through. The Reference is for dipping in and referencing back. This document, the Primer, is to be read straight through like a non-fiction book. Think about the structure as being a non-fiction book ABOUT something. 



Structure: the “spine” of the book
Best organizing metaphor: Which should be the main spine?
(A) Layers model (meaning → interface → implementation → distribution)
(B) Lifecycle (design → build → ship → maintain)
(C) Decision-making (tradeoffs, constraints, evaluation)
(D) Case study (evolving a toolkit over time)
Preferred narrative: Do you want one running example (a tiny toolkit evolving each part), or independent chapters?

The beginning should be: here are challenges that software teams face. This should be high-level and abstract, but assume that the reader has worked on a LOT of digital product teams, so it should dig deep into the trade-offs that are made at software architectural levels. 

then it should describe how the "core counterfoil technologies" (react, typescript, tailwind...) came about. Almost as an answer to those challenges. 

Then it should discuss the trade-offs between those technologies and other options that teams might use. It discusses why teams would make those trade-offs. This bit could have specific chapters for each of these. 

It should talk about distribution methods and library tradeoffs (both technical and sociological) as well. 

So I guess the core answer is: (C) Decision-making (tradeoffs, constraints, evaluation)





React + web stack assumptions
Platform commitment: Is this explicitly modern web + React + TypeScript, or should it generalize to “component-based UI” with React as one instance?

Both. It should start general, but then hone in on the specific aspects of these technologies. 



React section goal: Should Part IV teach “how React works conceptually,” or only what you need to evaluate a React-shaped toolkit?
Non-React readers: Do you care if someone using SwiftUI/Compose/Vue can still benefit, or is that out of scope?

That is out of scope, however, these should be mentioned so that tradeoffs are understood. 





Toolchain content (big potential scope creep)
Git/Vite/npm: Should Part VI stay in the Primer, move to an appendix, or become a separate “Tooling Primer” document?

It should be in the primer. Discuss what these things are, and how they should be thought about in a sociological context. If I were to become an "actor in the developer world", what are the things I should think about?



Expectation: Do you want readers to do these things (commands, workflows), or just gain vocabulary to follow engineering conversations?

Just gain vocabulary and foundational understanding. The reader (me) is thick into building things, both on my own, and with experienced development teams. There is also the Reference guide. So I have PLENTY of "practical" resources and projects. The Primer is NOT for that. 



Org-specific workflow: Should it describe your actual Counterfoil repo practices, or keep it generic?

It needs to discuss generic principles with Counterfoil as an example. Let's not assume that Counterfoil is necessarily the "best" solution. We can be critical of it. But, we should use it as an example. 



Styling + tokens (aligning with your repo philosophy)
Core stance: What is Counterfoil’s “point of view” on styling (tokens/utilities/theme APIs), and should the Primer explicitly argue for it?

it should not "argue" "for" counterfoil. We look to Counterfoil as the thing that determines what types of technologies are important. Nothing more. 

Also, I am the creator of counterfoil. I know more about the philosophy or what I want then I know about computer science. So this document will help me critique counterfoil. This is not a main point, but it does help us understand what is important: understanding of technologies, understanding of tradeoffs, and understanding of core computer science concepts. 



Must-cover concepts: Which are essential: semantic tokens vs raw tokens, CSS variables, cascade/specificity, utility classes, CSS-in-JS, design-to-code mapping?

I'm a designer. I deeply understand why semantic tokens are valuable and why CSS variables are valuable. 

I always come to projects with a user-centric intent and vision. What I lack is a deep understanding of the broad-CS principles that solutions architects use when they're thinking about how to design these systems. This is the language that I need to develop. 



Practical vs conceptual: Should there be any implementation-level examples, or purely mental models and evaluation criteria?

Conceptual. 



What to add, cut, or reorder from the current outline
Top 3 chapters to keep as-is (most valuable).
Top 3 chapters to cut or demote (appendix / link-out).
Missing chapter: What’s the one chapter you feel is missing right now (e.g., accessibility, ergonomics, API governance, versioning strategy, documentation systems, contribution models)?



Pedagogy + tone
Voice: More “friendly narrative,” “pragmatic handbook,” or “argumentative essay with opinions”?

argumentative essay with opinions. I read a lot of non-fiction books. Specifics of what I like are below. 



Learning aids: Do you want any of these: end-of-chapter checklists, “red flags,” mini-quizzes, exercises, diagrams, glossary callouts?

no. None of that. 



Examples: Should examples reference Counterfoil code directly, pseudocode only, or “famous public libraries” as reference points?

whatever makes the most sense to get the point across







### About the reader, Kyle:

Kyle is a UX designer with past full-stack experience who thinks like a systems architect, not a syntax memorizer.

He learns best when concepts are explained **structurally first**, then practically. He cares more about *why a thing exists*, *how parts relate*, and *what tradeoffs were made* than about exhaustive API reference. He prefers mental models over recipes.

He is highly technical in thinking, but not emotionally attached to code purity. He values:

- Clear abstractions
- Explicit file boundaries
- Real-world workflows
- Practical constraints
- Design intent

He wants to understand:

- What problem this solves
- Why this approach was chosen
- What alternatives exist
- How pieces connect
- What can safely be ignored

He does **not** want:

- Framework cheerleading
- Vague motivational language
- Long theoretical detours
- Overly clever abstractions
- “Just trust me” explanations

Tone should feel like:

> A calm senior engineer explaining a system to a thoughtful designer.

Writing style:

- Direct, grounded, slightly conversational
- Assumes intelligence, avoids jargon unless defined
- Explains concepts top-down, then zooms in
- Uses diagrams-in-words (“think of X as…”)
- Frequently summarizes with short bullets
- Calls out *optional complexity* vs *core concepts*
- Makes invisible architecture visible

Pedagogy:

- Start with the big picture
- Introduce one concept at a time
- Show minimal working examples
- Explicitly label what is essential vs advanced
- Use real project context, not toy examples
- Revisit ideas from different angles

Kyle prefers:

- Concrete file trees
- Explicit data flow descriptions
- Clear naming rationale
- Step-by-step system walkthroughs
- Honest explanations of messy realities

He is motivated by:

- Understanding how systems hang together
- Being able to reason independently afterward
- Building durable mental models

He is allergic to:

- Magic
- Implicit behavior
- Hidden coupling
- Unexplained defaults