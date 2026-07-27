import React, { useEffect, useRef } from 'react';

export default function Zehn3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setSize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 360;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const numNodes = 40;
    const nodes = [];
    const sphereRadius = 130;

    for (let i = 0; i < numNodes; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      nodes.push({
        x0: sphereRadius * Math.sin(phi) * Math.cos(theta),
        y0: sphereRadius * Math.sin(phi) * Math.sin(theta),
        z0: sphereRadius * Math.cos(phi),
        pulse: Math.random() * Math.PI
      });
    }

    let rotY = 0;
    let rotX = 0.2;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      rotY += 0.009;

      const projected = nodes.map(n => {
        n.pulse += 0.04;
        const radOffset = Math.sin(n.pulse) * 8;

        const rx = (sphereRadius + radOffset) * Math.sin(Math.acos(n.z0 / sphereRadius)) * Math.cos(Math.atan2(n.y0, n.x0));
        const ry = (sphereRadius + radOffset) * Math.sin(Math.acos(n.z0 / sphereRadius)) * Math.sin(Math.atan2(n.y0, n.x0));
        const rz = n.z0;

        // Rotate Y & X
        let x1 = rx * Math.cos(rotY) - rz * Math.sin(rotY);
        let z1 = rx * Math.sin(rotY) + rz * Math.cos(rotY);

        let y2 = ry * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = ry * Math.sin(rotX) + z1 * Math.cos(rotX);

        const scale = 300 / (300 + z2 + 150);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
          z: z2
        };
      });

      // Draw Neural Synapse Connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(184, 98, 53, ${0.45 * (1 - dist / 80) * projected[i].scale})`;
            ctx.lineWidth = 1.2 * projected[i].scale;
            ctx.stroke();
          }
        }
      }

      // Draw Glowing Nodes
      projected.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1.5, 3.5 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = '#b86235';
        ctx.shadowBlur = 15 * p.scale;
        ctx.shadowColor = '#b86235';
        ctx.fill();
        ctx.shadowBlur = 0;
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
      <canvas ref={canvasRef} style={{ width: '100%', height: '360px', display: 'block' }} />
    </div>
  );
}
