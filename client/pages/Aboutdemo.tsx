import { Link } from "react-router-dom";

const artists = [
    {
        name: "Carlos León",
        description: "Spanish vocalist bringing warm Latin soul.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/147ae1cba8c5618801bc70a20380d78498997ff4?width=800",
    },
    {
        name: "DJ Riko Singh",
        description: "Punjabi beatmaker with urban crossover flow.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/5c833002d0890c0f7689dfc12e132e9dd12fe299?width=800",
    },
    {
        name: "Aisha Gill",
        description: "Bilingual singer with melodic emotional tone.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/4136b47a518111dfb003e24c73361176cef18e42?width=800",
    },
    {
        name: "Maria Vega",
        description: "Flamenco-inspired harmony specialist.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/2c87f2e0861f422ddb08b89262d1ae74730ed59c?width=800",
    },
    {
        name: "DJ Tanu",
        description: "Fusion-oriented producer merging reggaeton with bhangra.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/141fd357663acff4246aee1d364d9210679a26f3?width=800",
    },
    {
        name: "El Rito",
        description: "Spanish rap vocalist with cultural depth.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/98fb9a64112373bdd3db8fc77b4d7864167b56bc?width=800",
    },
    {
        name: "Sofia Navarro",
        description: "Spanish–Latin pop vocalist with bright high-tones and emotional expression.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/4f8912a8673195018fb4a3689f2f0ddc4f61aae1?width=800",
    },
    {
        name: "Gurdeep \"Deep\" Brar",
        description: "Punjabi folk-inspired singer with traditional roots and modern appeal.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/726df9e47192cfe5a2ce37785793a764155bd1d6?width=800",
    },
    {
        name: "Mateo Cruz",
        description: "Producer & sound engineer specializing in vocal layering and atmospheric mixes.",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/49e5229dae45879afce3188829bb75fe1586be71?width=800",
    },
];

export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] md:h-[800px] lg:h-[1028px] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black z-10" />
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/d86cbf750674542b01bfe9af92ccbfd7b272f789?width=2880"
                        alt="Concert crowd"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 h-full flex items-center justify-center">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] w-full">
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
            </section>

            {/* Artists Grid Section */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {artists.map((artist, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Artist Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Artist Info - Positioned at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-body font-bold text-lg md:text-xl text-white uppercase mb-1.5">
                                        {artist.name}
                                    </h3>
                                    <p className="font-body text-sm md:text-base text-white uppercase leading-relaxed">
                                        {artist.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See More Link */}
                <div className="text-center mt-12 md:mt-16">
                    <Link
                        to="/artists"
                        className="inline-block font-body font-bold text-lg md:text-xl text-white underline hover:text-brand-red transition-colors uppercase"
                    >
                        See More
                    </Link>
                </div>
            </section>
        </div>
    );
}
