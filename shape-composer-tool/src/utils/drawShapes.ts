import type { ShapeLayer } from '../interfaces'

const getPosition = (position: ShapeLayer['position'], size: number, canvasWidth: number, canvasHeight: number): { x: number, y: number } => {
  const positions = {
    'top-left':      { x: 0,                        y: 0 },
    'top-center':    { x: (canvasWidth - size) / 2,  y: 0 },
    'top-right':     { x: canvasWidth - size,         y: 0 },
    'middle-left':   { x: 0,                         y: (canvasHeight - size) / 2 },
    'middle-center': { x: (canvasWidth - size) / 2,  y: (canvasHeight - size) / 2 },
    'middle-right':  { x: canvasWidth - size,         y: (canvasHeight - size) / 2 },
    'bottom-left':   { x: 0,                         y: canvasHeight - size },
    'bottom-center': { x: (canvasWidth - size) / 2,  y: canvasHeight - size },
    'bottom-right':  { x: canvasWidth - size,         y: canvasHeight - size },
  }
  return positions[position]
}

const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
  const radius = size / 2
  const centerX = x + radius
  const centerY = y + radius
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

const drawSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, size, size)
}

const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
  const topX = x + size / 2
  const topY = y
  const bottomLeftX = x
  const bottomLeftY = y + size
  const bottomRightX = x + size
  const bottomRightY = y + size

  ctx.beginPath()
  ctx.moveTo(topX, topY)
  ctx.lineTo(bottomLeftX, bottomLeftY)
  ctx.lineTo(bottomRightX, bottomRightY)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
}

export const drawAllShapes = (ctx: CanvasRenderingContext2D, layers: ShapeLayer[], canvasWidth: number, canvasHeight: number) => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  const reversedLayers = [...layers].reverse()

  reversedLayers.forEach(layer => {
    const { x, y } = getPosition(layer.position, layer.size, canvasWidth, canvasHeight)

    if (layer.shape === 'circle') {
      drawCircle(ctx, x, y, layer.size, layer.color)
    } else if (layer.shape === 'square') {
      drawSquare(ctx, x, y, layer.size, layer.color)
    } else if (layer.shape === 'triangle') {
      drawTriangle(ctx, x, y, layer.size, layer.color)
    }
  })
}