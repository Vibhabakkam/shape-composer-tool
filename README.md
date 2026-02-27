# Shape Composer Tool

A React-based Canvas application that allows users to programmatically compose and manage shapes as distinct layers.

## Tech Stack

- React
- TypeScript
- Vite
- HTML5 Canvas API
- Plain CSS

## Features

- Add shapes (Circle, Square, Isosceles Triangle) to the canvas
- Choose from 6 colors (Red, Blue, Green, Black, Orange, Purple)
- Three size options (100x100, 200x200, 400x400)
- 9 point position system (Top Left, Top Center, Top Right, Middle Left, Middle Center, Middle Right, Bottom Left, Bottom Center, Bottom Right)
- Layers panel showing all added shapes
- Delete any shape from the canvas
- New shapes always appear on top of the stack
- Performance optimized with useCallback and useMemo

## How to Run
```bash
npm install
npm run dev
```

## Project Structure
```
src/
├── components/
│   ├── ControlPanel.tsx
│   ├── CanvasBoard.tsx
│   └── LayersPanel.tsx
├── interfaces/
│   └── index.ts
├── utils/
│   └── drawShapes.ts
├── App.tsx
└── main.tsx
```