export type ShapeType = 'circle' | 'square' | 'triangle';

export type ShapeColor = 'red' | 'blue' | 'green' | 'black' | 'orange' | 'purple';

export type ShapeSize = 100 | 200 | 400;

export type ShapePosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ShapeLayer {
  id: string;
  shape: ShapeType;
  color: ShapeColor;
  size: ShapeSize;
  position: ShapePosition;
}