import { motion } from 'framer-motion';

interface DecorativePlayButtonProps {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  delay?: number;
}

export default function DecorativePlayButton({
  size = 80,
  top,
  left,
  right,
  bottom,
  rotate = 0,
  delay = 0,
}: DecorativePlayButtonProps) {
  const position: any = {};
  if (top) position.top = top;
  if (left) position.left = left;
  if (right) position.right = right;
  if (bottom) position.bottom = bottom;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      style={{
        ...position,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className="absolute hidden lg:block"
    >
      {/* Outer Circle */}
      <div className="relative w-full h-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-brand-red/30"
        />
        
        {/* Inner Button */}
        <div className="absolute inset-2 rounded-full bg-brand-red/80 backdrop-blur-lg flex items-center justify-center group hover:bg-brand-red transition-colors cursor-pointer">
          <svg
            className="w-1/2 h-1/2 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 28 29"
          >
            <path d="M11.5239 19.2616C10.7846 15.9664 9.3126 9.25935 9.33873 8.79338L19.1075 12.4832L11.5239 19.2616Z" />
          </svg>
        </div>

        {/* Glow Effect */}
        <motion.div
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-brand-red/20 blur-xl -z-10"
        />
      </div>
    </motion.div>
  );
}
