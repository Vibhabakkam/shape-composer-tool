import { useEffect, useRef } from 'react'
import type { ShapeLayer } from '../interfaces'
import { drawAllShapes } from '../utils/drawShapes'
import './CanvasBoard.css'

interface CanvasBoardProps {
  layers: ShapeLayer[]
}

const CanvasBoard = ({ layers }: CanvasBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasWidth = 600
  const canvasHeight = 560

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    drawAllShapes(ctx, layers, canvasWidth, canvasHeight)
  }, [layers])

  return (
    <div className="canvas-wrapper">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="canvas-board"
      />
    </div>
  )
}

export default CanvasBoard