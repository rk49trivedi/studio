import { motion } from 'framer-motion';

export default function FounderSection() {
    return (
        <section id="founder" className="relative py-20 bg-black overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="relative min-h-[600px] lg:min-h-[800px] founder-section-container">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="founder-left-content"
                    >
                        {/* Text Overlay - "OUR FOUNDER" and "JIMMY BINDRA" */}
                        <div className="founder-text-overlay">
                            <p className="founder-our-founder">OUR FOUNDER</p>
                            <h3 className="founder-name">
                                JIMMY
                                BINDRA
                            </h3>
                        </div>
                    </motion.div>

                    {/* Middle - Background Image (Centered) */}
                    <div className="founder-background-image"></div>

                    {/* Right Side - Descriptive Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="founder-right-content"
                    >
                        <div className="founder-description">
                            <p>
                                A passionate Punjabi entrepreneur who's well travelled Globally & understands many Cultures, Music & Cinema from Jamaica, Mexico City, Medellin, Cuba & Latin America. Fluent in Spanish for almost 5years now is passionate about doing this great mix of rhythems & lyrics..
                            </p>
                            <p>
                                Also our Consultancy (SpanishLingo), have trained Professionals across US, Canada, Mexico, and Spain, building a foundation for global collaboration.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

