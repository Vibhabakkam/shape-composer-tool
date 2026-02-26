import type { ShapeLayer } from '../interfaces'
import './LayersPanel.css'

interface LayersPanelProps {
  layers: ShapeLayer[]
  onDeleteShape: (id: string) => void
}

const LayersPanel = ({ layers, onDeleteShape }: LayersPanelProps) => {
  return (
    <div className="layers-panel">
      <h3 className="layers-title">LAYERS</h3>
      {layers.length === 0 && (
        <p className="layers-empty">No shapes added yet</p>
      )}
      {layers.map((layer, index) => (
        <div key={layer.id} className="layer-item">
          <div className="layer-info">
            <span className="layer-index">{index + 1}</span>
            <span className="layer-name">
              {layer.shape.charAt(0).toUpperCase() + layer.shape.slice(1)} [{layer.position}]
            </span>
          </div>
          <button
            className="delete-btn"
            onClick={() => onDeleteShape(layer.id)}
          >
            🗑
          </button>
        </div>
      ))}
    </div>
  )
}

export default LayersPanel