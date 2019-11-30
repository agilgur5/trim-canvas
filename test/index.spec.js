import trimCanvas from '../index.js'

describe('trimCanvas', () => {
  it('should trim whitespace', () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 1000
    canvas.height = 1000

    ctx.fillStyle = 'purple'
    ctx.fillRect(450, 450, 100, 100) // 100x100 purple box in center

    trimCanvas(canvas)
    expect(canvas.width).toBe(100)
    expect(canvas.height).toBe(100)
  })
})
