// pages/api/map-preview.js
import { createCanvas } from 'canvas';

export default function handler(req, res) {
  const width = 1200;
  const height = 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#f9f9f9';
  ctx.fillRect(0, 0, width, height);

  // Example buildings
  const buildings = [
    { x: 100, y: 100, w: 200, h: 150, name: 'Business Faculty', color: '#a3d8f4' },
    { x: 400, y: 100, w: 200, h: 150, name: 'Science Faculty', color: '#b8f4a3' },
    { x: 100, y: 300, w: 500, h: 100, name: 'Administration', color: '#f4d1a3' },
  ];

  buildings.forEach((b) => {
    ctx.fillStyle = b.color;
    ctx.fillRect(b.x, b.y, b.w, b.h);

    ctx.fillStyle = '#000';
    ctx.font = '20px sans-serif';
    ctx.fillText(b.name, b.x + 10, b.y + 30);
  });

  // Send as PNG
  res.setHeader('Content-Type', 'image/png');
  canvas.pngStream().pipe(res);
}
