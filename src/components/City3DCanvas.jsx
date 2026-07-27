import React, { useEffect, useRef } from 'react';

export default function City3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setSize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 420;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Grid of 3D Building Towers
    const gridSize = 6;
    const buildings = [];
    const spacing = 45;

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        buildings.push({
          x: (c - (gridSize - 1) / 2) * spacing,
          z: (r - (gridSize - 1) / 2) * spacing,
          height: Math.random() * 80 + 30,
          targetHeight: Math.random() * 100 + 40,
          speed: Math.random() * 0.02 + 0.01,
          color: (r + c) % 2 === 0 ? '#a3b880' : '#6c7d53'
        });
      }
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 50;

      angle += 0.008;

      buildings.forEach(b => {
        // Pulse height
        b.height += (b.targetHeight - b.height) * b.speed;
        if (Math.abs(b.targetHeight - b.height) < 2) {
          b.targetHeight = Math.random() * 110 + 30;
        }

        // 3D Rotation Y
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);

        const rx = b.x * cosA - b.z * sinA;
        const rz = b.x * sinA + b.z * cosA;

        // Iso Perspective
        const scale = 300 / (300 + rz + 200);
        const px = cx + rx * scale;
        const py = cy + (rz * 0.4 - b.height) * scale;
        const pBaseY = cy + (rz * 0.4) * scale;
        const bWidth = 24 * scale;

        // Draw 3D Tower Column
        ctx.beginPath();
        ctx.rect(px - bWidth / 2, py, bWidth, pBaseY - py);
        ctx.fillStyle = 'rgba(108, 125, 83, 0.25)';
        ctx.strokeStyle = '#a3b880';
        ctx.lineWidth = 1.2 * scale;
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = '#a3b880';
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Top cap glow point
        ctx.beginPath();
        ctx.arc(px, py, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = '#f4efdf';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '420px', display: 'block' }} />
    </div>
  );
}
