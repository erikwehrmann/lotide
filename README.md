# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _NOT_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @erikwehrmann/lotide`

**Require it:**

`const _ = require('@erikwehrmann/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the first (head) index of an array.
* `tail(arr)`: returns the last indexes (tail) of an array.
* `middle(arr)`: returns the middle index(es) of an array.
