import { motion } from "framer-motion";

export function HeartIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
    </svg>
  );
}

export function BowIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 32" fill="none">
      <path
        d="M24 16C24 16 16 4 8 8C0 12 4 20 8 20C12 20 24 16 24 16Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M24 16C24 16 32 4 40 8C48 12 44 20 40 20C36 20 24 16 24 16Z"
        fill="currentColor"
        opacity="0.8"
      />
      <circle cx="24" cy="16" r="4" fill="currentColor" />
      <path
        d="M22 20C22 20 20 28 22 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26 20C26 20 28 28 26 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            fontSize: `${12 + (i % 3) * 8}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

export function SectionDivider() {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 py-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HeartIcon className="w-3 h-3 text-pink-300" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <SparkleIcon className="w-3 h-3 text-pink-300" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <HeartIcon className="w-3 h-3 text-pink-300" />
      </motion.div>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
    </motion.div>
  );
}
