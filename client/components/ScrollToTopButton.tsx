import { motion, AnimatePresence } from 'framer-motion';

interface ScrollToTopButtonProps {
    show: boolean;
    onClick: () => void;
}

export default function ScrollToTopButton({ show, onClick }: ScrollToTopButtonProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={onClick}
                    className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center hover:bg-brand-red/90 transition-colors shadow-lg glow-red"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

