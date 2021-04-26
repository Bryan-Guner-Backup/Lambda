# Lambda University - July 20, 2017: Day 013, Thursday
## Coding Challenge #9
- "NEW_CODE_CHALLENGE" available in https://github.com/ryanhca/CS1-Code-Challenges
***
# [1st Lecture](https://youtu.be/sfaJU2Fa2Ew) w/Ben Nelson: Revie Code Challenge #8: binarySearch
***
#### LUNCH
***
# [2nd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ben Nelson: Concurrency Model & Event Loop
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
- setTimeout (similar to setInterval)
```js
console.log('1');

setTimeout(() => {
  do_something();
}, #ofMilliseconds);
```

- doesn't freeze the whole program
- "timeout" is relative to how async is handled
```js
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');
```

- logs 1, 3, 2 even at 0 milliseconds, Timeout gets pushed to the end of the "stack"

# Stack, Heap, Queue
- Stack frames
- Stack trace
- Message Queue (also the "action queue")
- browser events (click/mouse, incoming http, etc...)

***
# [3rd Lecture](https://youtu.be/B9P2_gkZJPY) w/Ryan Hamblin: Q&A / Review REACT
- whatever we pass to render is the parent of our tree.
- Life cycle methods
- componentWillMount
- setState
- `props` is a keyword
- `props` are read only
- to change object, do it where it is defined.
- can't update props passed to a child
- CODE SANDBOX EXAMPLE: https://codesandbox.io/s/qYKlXZRNy

***
# fin
