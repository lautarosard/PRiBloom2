import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number; // percentage
  delay: number; // seconds
  duration: number; // seconds
  size: number; // pixels
  rotation: number; // degrees
}

export default function CherryBlossoms() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate a fixed number of petals to keep performance high
    const list: Petal[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -15, // Negative delays so some petals start mid-way initially!
      duration: 12 + Math.random() * 16,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    }));
    setPetals(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: `-20px`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.2}px`,
            backgroundColor: '#ffccd4',
            backgroundImage: 'linear-gradient(135deg, #ffccd4 0%, #ffa3b1 100%)',
            borderRadius: '50% 0% 50% 50%', // Elegant organic sakura petal shape
            opacity: 0.7,
            transform: `rotate(${petal.rotation}deg)`,
            boxShadow: '0 1px 3px rgba(255, 180, 190, 0.2)',
            animation: `petal-fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
