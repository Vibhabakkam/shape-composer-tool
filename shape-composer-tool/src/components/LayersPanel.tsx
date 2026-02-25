import type { ShapeLayer } from '../interfaces'

interface LayersPanelProps {
  layers: ShapeLayer[]
  onDeleteShape: (id: string) => void
}

const LayersPanel = ({ layers, onDeleteShape }: LayersPanelProps) => {
  return (
    <div>
      <h3>Layers</h3>
      {layers.map((layer, index) => (
        <div key={layer.id}>
          <span>{index + 1}. {layer.shape} [{layer.position}]</span>
          <button onClick={() => onDeleteShape(layer.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default LayersPanel