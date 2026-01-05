import { Link } from "react-router-dom";

const artists = [
    {
        name: "Carlos León",
        description: "Spanish vocalist bringing warm Latin soul.",
        image: "/about/hero/artist/147ae1cba8c5618801bc70a20380d78498997ff4.png",
    },
    {
        name: "DJ Riko Singh",
        description: "Punjabi beatmaker with urban crossover flow.",
        image: "/about/hero/artist/5c833002d0890c0f7689dfc12e132e9dd12fe299.png",
    },
    {
        name: "Aisha Gill",
        description: "Bilingual singer with melodic emotional tone.",
        image: "/about/hero/artist/4136b47a518111dfb003e24c73361176cef18e42.png",
    },
    {
        name: "Maria Vega",
        description: "Flamenco-inspired harmony specialist.",
        image: "/about/hero/artist/2c87f2e0861f422ddb08b89262d1ae74730ed59c.png",
    },
    {
        name: "DJ Tanu",
        description: "Fusion-oriented producer merging reggaeton with bhangra.",
        image: "/about/hero/artist/141fd357663acff4246aee1d364d9210679a26f3.png",
    },
    {
        name: "El Rito",
        description: "Spanish rap vocalist with cultural depth.",
        image: "/about/hero/artist/98fb9a64112373bdd3db8fc77b4d7864167b56bc.png",
    },
    {
        name: "Sofia Navarro",
        description: "Spanish–Latin pop vocalist with bright high-tones and emotional expression.",
        image: "/about/hero/artist/4f8912a8673195018fb4a3689f2f0ddc4f61aae1.png",
    },
    {
        name: "Gurdeep \"Deep\" Brar",
        description: "Punjabi folk-inspired singer with traditional roots and modern appeal.",
        image: "/about/hero/artist/726df9e47192cfe5a2ce37785793a764155bd1d6.png",
    },
    {
        name: "Mateo Cruz",
        description: "Producer & sound engineer specializing in vocal layering and atmospheric mixes.",
        image: "/about/hero/artist/49e5229dae45879afce3188829bb75fe1586be71.png",
    },
];

export default function ArtistsGridSection() {
    return (
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] ">
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
    );
}

