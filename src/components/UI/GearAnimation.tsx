import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GearAnimationProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const GearAnimation: React.FC<GearAnimationProps> = ({ 
  size = 'medium', 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sizes = {
    small: { width: 100, height: 100 },
    medium: { width: 200, height: 200 },
    large: { width: 300, height: 300 }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    let animationId: number;
    let time = 0;

    const drawGear = (
      x: number,
      y: number,
      radius: number,
      teeth: number,
      rotation: number,
      color: string
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw gear body
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw teeth
      ctx.fillStyle = '#002b5b';
      for (let i = 0; i < teeth; i++) {
        const angle = (i * Math.PI * 2) / teeth;
        const toothX = Math.cos(angle) * radius;
        const toothY = Math.sin(angle) * radius;

        ctx.save();
        ctx.translate(toothX, toothY);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.rect(-4, -15, 8, 30);
        ctx.fill();

        ctx.restore();
      }

      // Draw center hole
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background
      ctx.fillStyle = 'rgba(0, 43, 91, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Large gear
      drawGear(
        centerX,
        centerY,
        60,
        12,
        time * 0.5,
        '#57c5b6'
      );

      // Small gear - top left
      drawGear(
        centerX - 90,
        centerY - 90,
        40,
        8,
        -time * 0.8,
        '#159895'
      );

      // Small gear - bottom right
      drawGear(
        centerX + 90,
        centerY + 90,
        40,
        8,
        -time * 0.8,
        '#1a5f7a'
      );

      time += 0.02;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const { width, height } = sizes[size];

  return (
    <motion.div
      className={`gear-animation ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="gear-canvas"
      />
    </motion.div>
  );
};

export default GearAnimation;
