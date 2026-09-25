import { motion } from 'framer-motion';

export function FloatingElements() {
  const elements = [
    { emoji: '💕', x: '10%', y: '20%', delay: 0, duration: 6 },
    { emoji: '✨', x: '85%', y: '15%', delay: 1, duration: 5 },
    { emoji: '🌸', x: '75%', y: '70%', delay: 2, duration: 7 },
    { emoji: '💖', x: '20%', y: '80%', delay: 1.5, duration: 6.5 },
    { emoji: '⭐', x: '50%', y: '10%', delay: 0.5, duration: 5.5 },
    { emoji: '🎀', x: '90%', y: '50%', delay: 2.5, duration: 6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingHearts() {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-[#DC8B92]/20"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}
