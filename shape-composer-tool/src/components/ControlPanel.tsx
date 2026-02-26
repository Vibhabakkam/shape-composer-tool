import { useState } from 'react'
import type { ShapeType, ShapeColor, ShapeSize, ShapePosition, ShapeLayer } from '../interfaces'
import './ControlPanel.css'

interface ControlPanelProps {
  onAddShape: (shape: ShapeLayer) => void
}

const ControlPanel = ({ onAddShape }: ControlPanelProps) => {
  const [shape, setShape] = useState<ShapeType>('circle')
  const [color, setColor] = useState<ShapeColor>('red')
  const [size, setSize] = useState<ShapeSize>(100)
  const [position, setPosition] = useState<ShapePosition>('top-left')

  const handleAdd = () => {
    const newShape: ShapeLayer = {
      id: Date.now().toString(),
      shape,
      color,
      size,
      position
    }
    onAddShape(newShape)
  }

  return (
    <div className="control-panel">

      <div className="control-group">
        <label className="control-label">SHAPE</label>
        <select className="control-select" value={shape} onChange={e => setShape(e.target.value as ShapeType)}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">COLOR</label>
        <select className="control-select" value={color} onChange={e => setColor(e.target.value as ShapeColor)}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">SIZE FIT</label>
        <select className="control-select" value={size} onChange={e => setSize(Number(e.target.value) as ShapeSize)}>
          <option value={100}>100 x 100</option>
          <option value={200}>200 x 200</option>
          <option value={400}>400 x 400</option>
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">POSITION</label>
        <select className="control-select" value={position} onChange={e => setPosition(e.target.value as ShapePosition)}>
          <option value="top-left">Top Left</option>
          <option value="top-center">Top Center</option>
          <option value="top-right">Top Right</option>
          <option value="middle-left">Middle Left</option>
          <option value="middle-center">Middle Center</option>
          <option value="middle-right">Middle Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-center">Bottom Center</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
      </div>

      <button className="add-btn" onClick={handleAdd}>+ ADD SHAPE</button>

    </div>
  )
}

export default ControlPanel