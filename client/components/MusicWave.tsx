import { motion } from 'framer-motion';

interface MusicWaveProps {
  className?: string;
  color?: string;
}

export default function MusicWave({ className = '', color = '#D63D32' }: MusicWaveProps) {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {bars.map((index) => (
        <motion.div
          key={index}
          animate={{
            scaleY: [1, 2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut",
          }}
          className="w-1 h-4 rounded-full origin-center"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
