# Lambda University - July 07, 2017: Day 004, Friday
## [1st Lecture](https://youtu.be/JxCVug-Jo_s): w/Ben Nelson - Closure & Recursion review
- closure pertains to higher order functions
- [A closure is the combination of a function and the lexical environment within which that function was declared.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- the function that gets returned can go back and look into the declaring function
- function needs to store variables in a place that won't go away when function done

### [@2m](https://youtu.be/JxCVug-Jo_s?t=2m): counter problem
```js
const counter = () => {

  // // version 1 √
  // let count = 0;
  // const increment = () => count += 1;
  // return increment;
  //
  // // verion 2 √
  // let count = 0;
  // const increment = i => count += 1; // Interesting that this works - why?
  // return increment;
  //
  // // version 3 √
  // let count = 0;
  // return () => count += 1;

  // version 4 √
  let count = 0;        // <---
  return () => count++; // <---

};

// const myCounterFunction = counter;// <--- Not sure what the difference is here
// console.log(myCounterFunction()); // <---

// assigns variable name myCounterFunction to the same memory block where the function const lives
const myCounterFunction = counter(); // <---- references to the return of the counter function
console.log(myCounterFunction()); // 0

myCounterFunction(); // ++ 1
myCounterFunction(); // ++ 2
myCounterFunction(); // ++ 3
myCounterFunction(); // ++ 4
console.log(myCounterFunction()); // ++ 5
```

```js
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const myCounterFunction = counter;

console.log(counter);
console.log(myCounterFunction);

const result = myCounterFunction();

console.log(result); // ---> JUST RETURNS THE INTERNAL FUNCTION!!!!!!!!!!!!!!!!
```

### [@27m21s](https://youtu.be/JxCVug-Jo_s?t=27m21s): factorial problem
- started explaining recursion with fibonacci, but switched to factorial
```js
const nFactorial = (n) => { // 5
  // !5 = 5 * 4 * 3 * 2 * 1
  if (n === 1) return 1;
  return n * nFactorial(n - 1); // 4
};

const factorial = nFactorial(5);
console.log(factorial);
```

### [@41m50s](https://youtu.be/JxCVug-Jo_s?t=41m50s): matching leaves
- constraint - will either find a number or object
- Depth first search (vs. breadth first)
```js
const checkMatchingLeaves = (obj) => {
  // leafValue

  // recursive function
    // iterate over the keys on obj
      // if obj[key] is an object then checkMatchingLeaves(obj[key])
      // if leafValue is undefined set it to obj[key]
      // check if leafValue is equal to obj[key] - return false if not
  // call recursive function

};

const tree1 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 1,
        },
      },
    },
    y: 2
  },
};
```

***
# LUNCH
***

# [2nd Lecture](https://youtu.be/-9h9f600Q3Y): w/Ryan Hamblin - 4 PRINCIPLES OF `this`
- [Ryan's `this` worksheet](Week01/Day04/this-explained-master)
  - also available on GitHub: https://github.com/ryanhca/this-explained

### [@14s](https://youtu.be/-9h9f600Q3Y?t=14s): keyword: `this`
- `this` remains nothing until a given context - just like the pronoun "this"
-
## [@2m55s](https://youtu.be/-9h9f600Q3Y?t=2m55s): PRINCIPLE #1
#### 1. Whenever a function is contained in the GLOBAL scope, the value of `this` inside of that function will be the WINDOW object.
  1a. WINDOW in node environment or browser

  ```js
  function greet(name) {
    console.log('Hello' + name);
    console.log(this); // <---- prints out the ENTIRE hug global object, parameters, methods, etc
  };

  greet('Ryan');
  ```

  1b. in JS everything is wrapped in a global scope
    - node uses global, window is browsers
  ```js
  global: {
    function greet(name) {
      console.log('Hello' + name);
      console.log(this);
    };
  }

  greet('Ryan');
  ```

## [@10m35s](https://youtu.be/-9h9f600Q3Y?t=10m35s): PRINCIPLE #2
#### 2. Whenever a function is called by a PRECEDING DOT, the object BEFORE THE DOT is "this"
  2a. functions in objects are METHODS

  ```js
  const me = {
    greeting: 'Hello!',
    sayHello: function(name) {
        console.log(this.greeting + ' ' + name); // This `this` points to the me object, not it's global/WINDOW wrapper
        console.log(this); // <------ NOT pointing to the global object, now pointing to the CONTEXT of the me object
    },
  };

  me.sayHello('Ryan');
  ```
  2b. Hmmm:
  ```js
  const me = {
    self: this,
  }
  ```

## [@22m40s](https://youtu.be/-9h9f600Q3Y?t=22m40s): PRINCIPLE #3
#### 3. Whenever a CONSTRUCTOR FUNCTION is used, `this` refers to the "SPECIFIC INSTANCE OF THE OBJECT" that is created and returned by the constructor function.
  3b. ...

  ```js
  function person(options) {
  lexical environment this === {};
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.sayName = function() {
      console.log('Hello, my name is ' + options.firstName + ' ' + options.lastName) // <--- Works without the this = options declarations
      console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName);
    }
  }

  const fred = new person({
    firstName: 'Fred',
    lastName: 'Flintstone'
  });

  fred.sayName();

  const barney = new person({
    firstName: 'Barney',
    lastName: 'Rubble'
  });

  barney.sayName();
  ```

## [@36m22s](https://youtu.be/-9h9f600Q3Y?t=36m22s): PRINCIPLE #4
#### 4. Whenever JavaScript's CALL OR APPLY method is used, `this` is EXPLICITLY DEFINED.
  4a.
  ```js
  fred.sayName.call(barney); // call takes usually just one argument
  barney.sayName.apply(fred); // apply can take an array of arguments - "a"pply "a" is for array :)
  ```

call and apply methods allow you to execute a function in a different context
The first argument passed to either of these methods explicitly sets what `this` points to
Because call and apply are explicit, they present the clearest case of what `this` points to
This is evident by looking at the name property logged to the console by each invocation of the sayName method

***

## [3rd Lecture](https://youtu.be/LtW4eEK39SE): w/Ryan Hamblin - this.js HOMEWORK REVIEW
- NOTE: blocked out video/AUDIO ONLY
- `class()`, `bind()`, & `apply()`
- Constructor functions
- abstraction of Prototypes
- Classes

***

## End of Week Sprint
- https://docs.google.com/document/d/1vRfNyFEI8CIPRfktUDWpdeyccfqmcCARPuIBLIyqLh4/edit
- What went well?
- What would you different?

OOOH ADD That I am in Lambda University to LinkedIn!!!!!!!!!!!!!!!
Also, start a blog - ONLINE PRESENCE
Maybe it's time to twitter... ?
