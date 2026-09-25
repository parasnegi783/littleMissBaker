import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";

// Fade in up animation
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Fade in down
export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Fade in left
export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Fade in right
export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Scale in
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Stagger container
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger item
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Text reveal animation
export const textReveal = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Hover lift effect
export const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98 }
};

// Magnetic button effect
export const magneticButton = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 }
};

// Floating animation
export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Rotate animation
export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Scroll-triggered component wrapper
export function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {children}
    </motion.div>
  );
}

// Parallax wrapper
export function Parallax({ children, offset = 50 }: { children: ReactNode; offset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

// Counter animation hook
export function useCounter(end: number, duration: number = 2, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!startOnView || isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, startOnView, isInView]);

  return { count, ref };
}

// Text split animation component
export function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5 }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Card with 3D tilt effect
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 10);
    setRotateY((centerX - x) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

// Gradient animation
export function AnimatedGradient({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: "200% 200%"
      }}
    >
      {children}
    </motion.div>
  );
}

// Reveal on scroll with custom variants
export function RevealOnScroll({
  children,
  variants = fadeInUp,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  variants?: any;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        initial: variants.initial,
        animate: { ...variants.animate, transition: { ...variants.transition, delay } }
      }}
    >
      {children}
    </motion.div>
  );
}
