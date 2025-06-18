
import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  animationDuration: string;
  color: string;
  delay: string;
}

const colors = ['#FFD6E0', '#C1E1FF', '#FFEEBA', '#D4FFDD', '#E6C6FF'];
const shapes = ['circle', 'square', 'triangle'];

const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const pieces: ConfettiPiece[] = [];
    
    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        animationDuration: `${Math.random() * 5 + 3}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: `${Math.random() * 5}s`,
      });
    }
    
    setConfetti(pieces);
  }, []);

  return (
    <div className="confetti-container" aria-hidden="true">
      {confetti.map((piece) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        return (
          <div
            key={piece.id}
            className="confetti"
            style={{
              left: `${piece.x}%`,
              top: '-20px',
              backgroundColor: piece.color,
              animation: `confetti-fall ${piece.animationDuration} linear infinite`,
              animationDelay: piece.delay,
              borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? '0' : '0',
              clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export default Confetti;
