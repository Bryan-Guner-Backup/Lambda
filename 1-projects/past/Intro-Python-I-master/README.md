# Intro to Python I

_Note: This project spans two modules (modules 1 and 2). You should roughly try to finish the first half of the problems during module 1 and the second half of the problems during module 2._

It's time to learn a new language! Python!

Python is a popular, easy-to-use programming language that has significant
traction in the field.

Remember the goal is _learning to learn_, so keep track of what works for you
and what doesn't as you go through the process of exploring Python.

## Techniques for learning new languages

- Try to relate things you already know in another language (e.g. what an
  _array_ is) to the corresponding things in Python (e.g. a _list_) and how to
  use them.

- Write a bunch of "toy programs" that demonstrate different key features of the
  language

- Explore the standard library that's available for the language. Skim it
  briefly for now--the idea isn't to memorize everything but to file away
  generally what functionality is available.

- Write a more substantial toy program that uses a variety of the features.

Again, keep track of what works for you. Try different things to see what works
best for learning new languages.

## Resources

- [Installing Python 3](https://github.com/LambdaSchool/CS-Wiki/wiki/Installing-Python-3)
- [JavaScript<->Python cheatsheet](https://github.com/LambdaSchool/CS-Wiki/wiki/Javascript-Python-cheatsheet)
- [How to read Specs and Code](https://github.com/LambdaSchool/CS-Wiki/wiki/How-to-Read-Specifications-and-Code)
- [Python 3 standard library](https://docs.python.org/3.6/library/)

## Getting started

Make sure you have Python 3 installed. You can check this by running `python3 --version` in your terminal and ensuring that it returns a version string that is at least 3.6.5.

## Goals

- Learn the basic syntax and structure of Python

## Summary

- Implement a number of tiny Python programs that demonstrate Python syntax and
  language concepts.

## Instructions

_Note: This project spans two modules (modules 1 and 2). You should roughly try to finish the first half of the problems during module 1 and the second half of the problems during module 2._

Each directory inside the `src/` directory presents exercises revolving around a
particular concept in Python. Not all of these concepts are unique to Python (in
fact, most probably aren't). This means that you can leverage knowledge you've
obtained via exposure to other programming languages towards learning Python.

The suggested order for going through each of the directories is:

- `hello` -- Hello world
- `bignum` -- Print some big numbers
- `datatypes` -- Experiment with type conversion
- `modules` -- Learn to import from modules
- `printing` -- Formatted print output
- `lists` -- Python's version of arrays
- `tuples` -- Immutable lists typically for heterogenous data
- `slices` -- Accessing parts of lists
- `comprehensions` -- List comprehensions
- `dictionaries` -- Dictionaries
- `functions` -- Functions
- `args` -- Arguments and Keyword Arguments
- `scopes` -- Global, Local, and Non-Local scope
- `file_io` -- Read and write from files
- `cal` -- Experiment with module imports and implement a text-based calendar
- `classes` -- Classes and objects

## Stretch Goals

1. One of Python's main philosophical tenets is its emphasis on readability. To
   that end, the Python community has standardized around a style guide called
   [PEP 8](https://www.python.org/dev/peps/pep-0008/). Take a look at it and
   then go over the code you've written and make sure it adheres to what PEP 8
   recommends. Alternatively, PEP 8 linters exist for most code editors (you can
   find instructions on installing a Python linter for VSCode
   [here](https://code.visualstudio.com/docs/python/linting)). Try installing
   one for your editor!

2. Rewrite code challenges you've solved before or projects you've implemented
   before in a different language in Python. Start getting in as much practice
   with the language as possible!

3. Write a program to determine if a number, given on the command line, is prime.

   1. How can you optimize this program?
   2. Implement [The Sieve of
      Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), one
      of the oldest algorithms known (ca. 200 BC).
