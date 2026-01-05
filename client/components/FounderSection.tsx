import { motion } from 'framer-motion';

export default function FounderSection() {
    return (
        <section id="founder" className="relative py-20  bg-black overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="relative min-h-[600px] lg:min-h-[800px]">
                    {/* Left Side - Image with Text Overlay (More Space) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative lg:w-[70%]"
                    >

                        {/* Text Overlay - "OUR FOUNDER" and "JIMMY BINDRA" - Overlapping more */}
                        <div className="absolute top-56 left-0 z-10">
                            <p className="text-white font-grifter text-3xl lg:text-5xl mb-4">OUR FOUNDER</p>
                            <h3 className="text-brand-red font-grifter text-6xl lg:text-[182px] leading-none mb-6">
                                JIMMY
                                <br />
                                BINDRA
                            </h3>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <img
                                src="/section6/young-handsome-man-wearing-jeans-jaket-studio.svg"
                                alt="Jimmy Bindra - Founder"
                                className="w-full h-auto object-cover"
                            />
                        </div>


                    </motion.div>

                    {/* Right Side - Descriptive Text (Gap from Top, Less Space) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative lg:absolute lg:right-0 lg:top-0 lg:pt-56 lg:w-[30%]"
                    >
                        <div className="space-y-6 text-white font-aeonik font-bold text-sm lg:text-lg uppercase leading-relaxed">
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

