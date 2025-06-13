import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  symbol: string;
  color: string;
}

const AnimatedBackground = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const symbols = ["$", "₽", "€", "£"];
    const colors = [
      "text-green-400",
      "text-orange-400",
      "text-yellow-400",
      "text-purple-400",
    ];

    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 0.5,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setElements(newElements);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          y: element.y <= -5 ? 105 : element.y - element.speed * 0.1,
          x: element.x + Math.sin(Date.now() * 0.001 + element.id) * 0.05,
        })),
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.color} font-bold transition-all duration-1000 opacity-20 hover:opacity-60`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
            transform: `rotate(${element.id * 45}deg)`,
            animation: `float ${3 + element.id * 0.5}s ease-in-out infinite alternate`,
          }}
        >
          {element.symbol}
        </div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-green-500/10 blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/2 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl animate-pulse delay-2000" />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
