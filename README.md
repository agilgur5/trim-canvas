# trim-canvas

[![NPM](https://nodei.co/npm/trim-canvas.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/trim-canvas)

A tiny (< 100 LoC) library for trimming whitespace from a `canvas` element with
no dependencies.

## Installation

`npm i -S trim-canvas`

## Usage

```
import trimCanvas from 'trim-canvas'

let canvas = document.createElement('canvas')

// do some drawing on it ...

trimCanvas(canvas)
// now the whitespace has been trimmed
```

If you don't want to mess with your existing canvas, then simply clone the
canvas element beforehand.

`trim-canvas` returns the canvas element for easy chaining.

## Credits

Credits go to [@efc](https://github.com/efc) for writing a quick version of this
in [this issue](https://github.com/szimek/signature_pad/issues/49#issue-29108215)
and to the original [StackOverflow Answer](http://stackoverflow.com/a/12178531/3431180)
that was credited in that issue.
