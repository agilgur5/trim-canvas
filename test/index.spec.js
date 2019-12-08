import { describe, it, expect } from 'jest-without-globals'

import trimCanvas from '../src/index.js'

describe('trimCanvas', () => {
  it('should trim whitespace (and nothing else)', () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 1000
    canvas.height = 1000

    ctx.fillStyle = 'purple'
    ctx.fillRect(450, 450, 100, 100) // 100x100 purple box in center
    ctx.fillRect(550, 550, 100, 100) // 100x100 purple box down-right of center
    // should look like this basically:
    //      _
    //     |_|_
    //       |_|
    //

    trimCanvas(canvas)
    expect(canvas.width).toBe(200)
    expect(canvas.height).toBe(200)
  })

  it('should trim everything if only whitespace', () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1000
    canvas.height = 1000

    trimCanvas(canvas)
    // should probably be 0, not 1, but that's easier said than done: https://github.com/agilgur5/trim-canvas/pull/9#discussion_r352376718
    expect(canvas.width).toBe(1)
    expect(canvas.height).toBe(1)
  })
})
