# trim-canvas

<!-- releases / versioning -->
[![package-json](https://img.shields.io/github/package-json/v/agilgur5/trim-canvas.svg)](https://npmjs.org/package/trim-canvas)
[![releases](https://img.shields.io/github/release/agilgur5/trim-canvas.svg)](https://github.com/agilgur5/trim-canvas/releases)
[![commits](https://img.shields.io/github/commits-since/agilgur5/trim-canvas/latest.svg)](https://github.com/agilgur5/trim-canvas/commits/master)
<br><!-- downloads -->
[![dt](https://img.shields.io/npm/dt/trim-canvas.svg)](https://npmjs.org/package/trim-canvas)
[![dy](https://img.shields.io/npm/dy/trim-canvas.svg)](https://npmjs.org/package/trim-canvas)
[![dm](https://img.shields.io/npm/dm/trim-canvas.svg)](https://npmjs.org/package/trim-canvas)
[![dw](https://img.shields.io/npm/dw/trim-canvas.svg)](https://npmjs.org/package/trim-canvas)
<br><!-- status / activity -->
[![build status](https://img.shields.io/travis/agilgur5/trim-canvas/master.svg)](https://travis-ci.org/agilgur5/trim-canvas)
<br>
[![NPM](https://nodei.co/npm/trim-canvas.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/trim-canvas)

A tiny (< 100 LoC) library for trimming whitespace from a `canvas` element with no dependencies.

## Installation

`npm i -S trim-canvas`

## Usage

```javascript
import trimCanvas from 'trim-canvas'

let canvas = document.createElement('canvas')

// do some drawing on it ...

trimCanvas(canvas)
// now the whitespace has been trimmed
```

If you don't want to mess with your existing canvas, then simply clone the canvas element beforehand.

`trim-canvas` returns the canvas element for easy chaining.

## Example

Can see how `trim-canvas` is used inside of `react-signature-canvas` [here](https://github.com/agilgur5/react-signature-canvas/blob/310bff81813509a4035bedfe50d76e7045a880cb/src/index.js#L53-L64).
It includes a step for cloning the canvas.

## Demo

You can see a demo of `trim-canvas` [here](https://agilgur5.github.io/react-signature-canvas/).

<small>*(N.B. this is the demo for [`react-signature-canvas`](https://github.com/agilgur5/react-signature-canvas) which depends on `trim-canvas`)*</small>

## Credits

Credits go to [@efc](https://github.com/efc) for writing a quick version of this in [this issue](https://github.com/szimek/signature_pad/issues/49#issue-29108215) and to the original [StackOverflow Answer](http://stackoverflow.com/a/12178531/3431180) that was credited in that issue.
