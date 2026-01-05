export default function AboutHeroSection() {
    return (
        <section className="relative h-[800px] md:h-[800px] lg:h-[800px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 h-full">
                {/* Background Image with Overlay */}
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black z-10" />
                    <img
                        src="/about/hero/banner.svg"
                        alt="About Us"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 z-20 h-full flex items-center justify-center">
                    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
                        <div className="pt-32 md:pt-48">
                            <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] font-bold text-white uppercase leading-none mb-4">
                                OUR ARTISTS
                            </h1>
                            <p className="font-body text-base md:text-lg text-white max-w-2xl">
                                Meet the talented voices behind our Punjabi x Spanish music fusion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

