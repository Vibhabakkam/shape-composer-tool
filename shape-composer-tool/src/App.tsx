import { useState, useCallback } from 'react'
import type { ShapeLayer } from './interfaces'
import ControlPanel from './components/ControlPanel'
import CanvasBoard from './components/CanvasBoard'
import LayersPanel from './components/LayersPanel'
import './App.css'

const App = () => {
  const [layers, setLayers] = useState<ShapeLayer[]>([])

  const handleAddShape = useCallback((newShape: ShapeLayer) => {
    setLayers(prev => [newShape, ...prev])
  }, [])

  const handleDeleteShape = useCallback((id: string) => {
    setLayers(prev => prev.filter(layer => layer.id !== id))
  }, [])

  return (
    <div className="app">
      <h1 className="app-title">Shape-Composer-Tool</h1>
      <div className="app-body">
        <ControlPanel onAddShape={handleAddShape} />
        <CanvasBoard layers={layers} />
        <LayersPanel layers={layers} onDeleteShape={handleDeleteShape} />
      </div>
    </div>
  )
}

export default App