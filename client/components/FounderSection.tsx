import { motion } from 'framer-motion';

export default function FounderSection() {
    return (
        <section id="founder" className="relative py-20 lg:py-32 bg-black">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative max-w-lg mx-auto">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/cf5c4fc92ee20ff35f47bd43e332884c1870c879"
                                alt="Jimmy Bindra - Founder"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Founder Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <p className="text-white font-grifter text-3xl lg:text-5xl mb-4">OUR FOUNDER</p>
                        <h3 className="text-brand-red font-grifter text-6xl lg:text-[182px] leading-none mb-6">
                            JIMM<span className="inline-block">Y</span>
                            <br />
                            BINDRA
                        </h3>

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

