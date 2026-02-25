import { useEffect, useRef } from 'react'
import type { ShapeLayer } from '../interfaces'
import { drawAllShapes } from '../utils/drawShapes'

interface CanvasBoardProps {
  layers: ShapeLayer[]
}

const CanvasBoard = ({ layers }: CanvasBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasWidth = 600
  const canvasHeight = 600

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    drawAllShapes(ctx, layers, canvasWidth, canvasHeight)
  }, [layers])

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      style={{ border: '1px solid black', background: '#f0f0f0' }}
    />
  )
}

export default CanvasBoard