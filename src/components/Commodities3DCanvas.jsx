import React, { useEffect, useRef } from 'react';

export default function Commodities3DCanvas() {
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

    // Global Trade Hub Nodes (Lat, Lon)
    const hubs = [
      { name: 'Dubai (HQ)', lat: 25.2, lon: 55.27 },
      { name: 'London', lat: 51.5, lon: -0.12 },
      { name: 'New York', lat: 40.7, lon: -74.0 },
      { name: 'Singapore', lat: 1.35, lon: 103.8 },
      { name: 'Rotterdam', lat: 51.92, lon: 4.47 },
      { name: 'Houston', lat: 29.76, lon: -95.36 },
      { name: 'Tokyo', lat: 35.67, lon: 139.65 }
    ];

    const radius = 150;
    let rotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      rotation += 0.006;

      // Convert Lat/Lon to 3D Points on Sphere
      const projected = hubs.map(h => {
        const phi = (90 - h.lat) * (Math.PI / 180);
        const theta = (h.lon + rotation * (180 / Math.PI)) * (Math.PI / 180);

        const x0 = radius * Math.sin(phi) * Math.cos(theta);
        const y0 = radius * Math.cos(phi);
        const z0 = radius * Math.sin(phi) * Math.sin(theta);

        const scale = 320 / (320 + z0 + 160);
        return {
          name: h.name,
          x: cx + x0 * scale,
          y: cy - y0 * scale,
          scale,
          z: z0
        };
      });

      // Draw Wireframe Latitude Rings
      ctx.strokeStyle = 'rgba(203, 122, 65, 0.15)';
      ctx.lineWidth = 1;
      for (let r = -60; r <= 60; r += 30) {
        ctx.beginPath();
        const rRad = radius * Math.cos(r * Math.PI / 180);
        const yOff = radius * Math.sin(r * Math.PI / 180);
        ctx.ellipse(cx, cy - yOff * 0.7, rRad, rRad * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw Animated Trade Arc Lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          if (projected[i].z > -50 && projected[j].z > -50) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);

            // Curve arc control point
            const midX = (projected[i].x + projected[j].x) / 2;
            const midY = (projected[i].y + projected[j].y) / 2 - 30;

            ctx.quadraticCurveTo(midX, midY, projected[j].x, projected[j].y);
            ctx.strokeStyle = 'rgba(229, 169, 98, 0.45)';
            ctx.lineWidth = 1.5 * Math.min(projected[i].scale, projected[j].scale);
            ctx.stroke();
          }
        }
      }

      // Draw Trade Hub Nodes
      projected.forEach(p => {
        if (p.z > -80) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4.5 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = '#e5a962';
          ctx.shadowBlur = 15 * p.scale;
          ctx.shadowColor = '#cb7a41';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Label
          ctx.fillStyle = '#edf2fb';
          ctx.font = `${Math.max(10, Math.floor(12 * p.scale))}px Plus Jakarta Sans, sans-serif`;
          ctx.fillText(p.name, p.x + 8, p.y + 4);
        }
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
