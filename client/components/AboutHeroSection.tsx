export default function AboutHeroSection() {
    return (
        <section className="relative about-hero-section overflow-hidden">
            <div className="w-full">
                {/* Background Image with Overlay */}
                <div className="relative w-full h-full about-hero-image-container">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black z-10" />
                    <img
                        src="/about/hero/banner.png"
                        alt="Our Artists"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 z-20 h-full flex items-center justify-center">
                    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
                        <div className="about-hero-content">
                            <h1 className="about-hero-heading">
                                OUR ARTISTS
                            </h1>
                            <p className="about-hero-description">
                                Meet the talented voices behind our Punjabi x Spanish music fusion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

