import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import vyrranLogo from '@/assets/vyrran-logo.png';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src={vyrranLogo}
            alt="Vyrran Technologies"
            className="w-24 h-24 mx-auto"
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(184 100% 50% / 0.3)",
                "0 0 40px hsl(184 100% 50% / 0.6)",
                "0 0 20px hsl(184 100% 50% / 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-cyber font-bold text-foreground mb-6 tracking-wider"
        >
          VYRRAN TECH
        </motion.h1>

        <div className="w-64 h-1 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-neon rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-muted-foreground font-futura"
        >
          Initializing the future...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;