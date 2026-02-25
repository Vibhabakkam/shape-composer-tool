import { useState } from 'react'
import type { ShapeLayer } from './interfaces'
import ControlPanel from './components/ControlPanel'
import CanvasBoard from './components/CanvasBoard'
import LayersPanel from './components/LayersPanel'

const App = () => {
  const [layers, setLayers] = useState<ShapeLayer[]>([])

  const handleAddShape = (newShape: ShapeLayer) => {
    setLayers([newShape, ...layers])
  }

  const handleDeleteShape = (id: string) => {
    setLayers(layers.filter(layer => layer.id !== id))
  }

  return (
    <div>
      <h1>Shape Composer Tool</h1>
      <div>
        <ControlPanel onAddShape={handleAddShape} />
        <CanvasBoard layers={layers} />
        <LayersPanel layers={layers} onDeleteShape={handleDeleteShape} />
      </div>
    </div>
  )
}

export default App