# Lambda University - October 18, 2017: Day 76, Wednesday
## Coding Challenge #65
- "Merge Sort" available in https://repl.it/student/submissions/1824513
***
# [1st Lecture](https://youtu.be/H4psSvw7DJQ) w/Sean Chen: Review Code Challenge #65: mergeSort
- https://piazza.com/class/j63w1pdyopf7kj?cid=76

***
#### LUNCH
***
# [2nd Lecture](https://youtu.be/tlH7An5IIJk) w/Thomson Comer: Theory of Computation Intro, pt.1
- https://github.com/LambdaSchool/Theory-Of-Computation
- Atonement of Theory, definitions based on mathematical relationships
- Finite State Automaton: given state, output a word; OR; given a state output a word and a new state
- 6 Turing primitives: move left, move right, read, write, erase, do nothing https://stackoverflow.com/a/28148643/5225057
- A language is a set of states which point to the States output
- Kleene plus and Kleene star
- regular grammar vs regular expression (regex is a higher order of abstraction)
- `S` for Start state
- ASSIGNMENT:
```
G_1
S -> a
S -> aS
S -> bS
S -> NULL
```
- https://www.lucidchart.com/invitations/accept/23d48d6a-2f0c-42e7-81cd-84df474541ce
## [@54m58s](https://youtu.be/tlH7An5IIJk?t=54m58s) Mini-Lab Assignment: Graph a Regular Grammar String

***
# [3rd Lecture](https://youtu.be/QGWRbPGtaME) w/Thomson Comer: Theory of Computation Intro, pt.2
- Context-Free Grammar (a little weird for creating natural language)
- Backus-Naur Form of a Context-Free Grammar
- Assignment: create a sub-programming language
- Halting problem f(x) vs g(f(x))
- Turing invented his "Turing Machine" in an attempt to resolve the halting problem
- "will an automata return a specific response to a question?"
- Some automata will enter an infinite loop, how do we evaluate and predict the strings that generate an infinite loop. Can we invent a grammar which can predict and resolve the halting problem?
- some autimata cannot be created
- certain programs get too complex too quickly - not computable, even if decideable
- intractability
- asymptotic complexity (Big O) at a certain point certain ones are too big to compute
- Goedel's incompleteness theorem: http://jacqkrol.x10.mx/assets/articles/godel-1931.pdf
- Write a JS dialect using BNF
## [@1h10m45s](https://youtu.be/QGWRbPGtaME?t=1h10m45s) Lab Assignment: Create a Programming language

***
# fin
