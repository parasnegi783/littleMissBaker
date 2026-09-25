import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-[#FBF4F0] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1]
              }
            }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92] flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-xl"
            >
              <span className="text-4xl">🧁</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3 }
              }}
              className="text-[#6E4C3B] font-[Great_Vibes] text-3xl"
            >
              Little Miss Baker
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ 
                width: '100%',
                transition: { delay: 0.5, duration: 0.8 }
              }}
              className="h-1 bg-gradient-to-r from-[#DC8B92] to-[#B95A66] rounded-full mt-4 mx-auto max-w-[200px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
