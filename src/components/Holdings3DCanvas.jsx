import React, { useEffect, useRef } from 'react';

export default function Holdings3DCanvas() {
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

    // 3D Particles Matrix
    const numParticles = 60;
    const particles = [];
    const radius = 160;

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      particles.push({
        x0: radius * Math.sin(phi) * Math.cos(theta),
        y0: radius * Math.sin(phi) * Math.sin(theta),
        z0: radius * Math.cos(phi),
        size: Math.random() * 2.5 + 1.5
      });
    }

    let angleY = 0;
    let angleX = 0.3;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      angleY += 0.005;

      const projected = particles.map(p => {
        // Rotate around Y
        let x1 = p.x0 * Math.cos(angleY) - p.z0 * Math.sin(angleY);
        let z1 = p.x0 * Math.sin(angleY) + p.z0 * Math.cos(angleY);
        
        // Rotate around X
        let y2 = p.y0 * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = p.y0 * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Perspective scale factor
        const fov = 350;
        const scale = fov / (fov + z2 + 200);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
          z: z2
        };
      });

      // Sort by Z for depth rendering
      projected.sort((a, b) => b.z - a.z);

      // Draw connection lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.35 * (1 - dist / 90) * projected[i].scale})`;
            ctx.lineWidth = 1 * projected[i].scale;
            ctx.stroke();
          }
        }
      }

      // Draw glowing 3D particle nodes
      projected.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, 3 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = '#fce8a6';
        ctx.shadowBlur = 12 * p.scale;
        ctx.shadowColor = '#d4af37';
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
      <canvas ref={canvasRef} style={{ width: '100%', height: '420px', display: 'block' }} />
    </div>
  );
}
