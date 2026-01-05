import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white font-grifter text-4xl mb-2 uppercase">SPANISHLINGO</h2>
          <h3 className="text-brand-red font-grifter text-8xl lg:text-[220px] leading-none tracking-wider uppercase">
            STUDIOS
          </h3>
          <p className="text-white font-aeonik text-sm lg:text-lg uppercase max-w-4xl mx-auto mt-6 leading-relaxed">
            <span className="text-white">Where Punjabi beats meet Spanish rhythm. </span>
            <span className="text-brand-red font-gurmukhi">ਅਸੀਂ ਇੱਕ ਗਲੋਬਲ ਮਿਊਜ਼ਿਕ ਫਿਊਜ਼ਨ ਸਟੂਡੀਓ ਹਾਂ ਜੋ ਸਭਿਆਚਾਰਾਂ, ਸੁਰਾਂ ਅਤੇ ਜਜ਼ਬਾਤਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।</span>
            <span className="text-white"> — Creando pistas que hablan un solo idioma: la música.</span>
          </p>
        </motion.div>

        {/* Divider Line */}
        <div className="border-t border-white/20 mb-12"></div>

        {/* Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Quick Link Column */}
          <div>
            <h4 className="text-white font-aeonik font-bold text-xl uppercase mb-6">QUICK LINK</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('mixes')}
                  className="text-white font-aeonik uppercase hover:text-brand-red transition-colors text-left"
                >
                  MIXES
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="text-white font-aeonik uppercase hover:text-brand-red transition-colors text-left"
                >
                  MISSION
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('opportunities')}
                  className="text-white font-aeonik uppercase hover:text-brand-red transition-colors text-left"
                >
                  OPPORTUNITIES
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('founder')}
                  className="text-white font-aeonik uppercase hover:text-brand-red transition-colors text-left"
                >
                  FOUNDER
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white font-aeonik uppercase hover:text-brand-red transition-colors text-left"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4 className="text-white font-aeonik font-bold text-xl uppercase mb-6">CONTACT US</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-5 text-brand-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 17 21">
                  <path d="M8.1087 0C5.95892 0.00253616 3.89792 0.857658 2.37779 2.37778C0.857662 3.89791 0.00254125 5.95892 5.08945e-06 8.1087C-0.00197147 9.86541 0.571821 11.5744 1.63354 12.9739C1.63354 12.9739 1.85469 13.2651 1.89081 13.3071L8.1087 20.6403L14.3296 13.3034C14.362 13.2644 14.5839 12.9739 14.5839 12.9739L14.5846 12.9717C15.6456 11.5727 16.2191 9.86456 16.2174 8.1087C16.2149 5.95892 15.3597 3.89791 13.8396 2.37778C12.3195 0.857658 10.2585 0.00253616 8.1087 0ZM8.1087 11.0573C7.52552 11.0573 6.95544 10.8844 6.47054 10.5604C5.98564 10.2364 5.60771 9.77588 5.38454 9.23709C5.16136 8.6983 5.10297 8.10543 5.21674 7.53345C5.33052 6.96148 5.61134 6.43608 6.02372 6.02371C6.43609 5.61134 6.96148 5.33051 7.53346 5.21674C8.10543 5.10296 8.6983 5.16136 9.23709 5.38453C9.77588 5.60771 10.2364 5.98564 10.5604 6.47054C10.8844 6.95543 11.0573 7.52552 11.0573 8.1087C11.0563 8.89042 10.7454 9.63985 10.1926 10.1926C9.63985 10.7454 8.89043 11.0563 8.1087 11.0573Z" />
                </svg>
                <p className="text-white font-aeonik uppercase">GLOBAL — REMOTE COLLABORATIONS</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-4 text-brand-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 19 15">
                  <path d="M1.80952 14.4761C1.3119 14.4761 0.886059 14.2991 0.531998 13.945C0.177936 13.591 0.000603172 13.1648 0 12.6666V1.80951C0 1.3119 0.177333 0.886059 0.531998 0.531997C0.886662 0.177935 1.3125 0.000603172 1.80952 0H16.2856C16.7833 0 17.2094 0.177332 17.5641 0.531997C17.9187 0.886662 18.0958 1.3125 18.0952 1.80951V12.6666C18.0952 13.1642 17.9181 13.5904 17.5641 13.945C17.21 14.2997 16.7839 14.4767 16.2856 14.4761H1.80952ZM9.04758 7.98448C9.12297 7.98448 9.20229 7.97302 9.28553 7.9501C9.36876 7.92718 9.44778 7.89341 9.52257 7.84877L15.9237 3.84522C16.0444 3.76982 16.1348 3.67573 16.1952 3.56294C16.2555 3.45014 16.2856 3.32559 16.2856 3.18927C16.2856 2.88768 16.1575 2.66149 15.9011 2.5107C15.6448 2.35991 15.3809 2.36745 15.1095 2.53332L9.04758 6.3333L2.9857 2.53332C2.71427 2.36745 2.45039 2.36383 2.19404 2.52246C1.93769 2.6811 1.80952 2.90337 1.80952 3.18927C1.80952 3.34006 1.83967 3.47216 1.89999 3.58555C1.96031 3.69895 2.05078 3.78551 2.17142 3.84522L8.57258 7.84877C8.64797 7.89401 8.72729 7.92809 8.81053 7.95101C8.89377 7.97393 8.97278 7.98509 9.04758 7.98448Z" />
                </svg>
                <a href="mailto:hello@beatfusionstudio.com" className="text-white font-aeonik uppercase hover:text-brand-red transition-colors">
                  HELLO@BEATFUSIONSTUDIO.COM
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 17 17">
                  <path d="M15.2714 16.2174C13.3944 16.2174 11.5399 15.8084 9.70792 14.9903C7.87595 14.1722 6.20916 13.0121 4.70755 11.5098C3.20594 10.0076 2.0461 8.34085 1.22802 6.50948C0.40994 4.67812 0.000600644 2.82363 0 0.946015C0 0.675725 0.0900966 0.450483 0.27029 0.27029C0.450483 0.0900966 0.675725 0 0.946015 0H4.59493C4.80516 0 4.99286 0.0714766 5.15803 0.21443C5.32321 0.357383 5.42082 0.526164 5.45085 0.720773L6.03648 3.87416C6.06651 4.11441 6.059 4.31713 6.01395 4.48231C5.9689 4.64749 5.88631 4.79014 5.76619 4.91027L3.58134 7.11764C3.88166 7.67323 4.23815 8.20991 4.65079 8.72766C5.06343 9.24542 5.51782 9.74486 6.01395 10.226C6.47945 10.6915 6.96748 11.1233 7.47802 11.5216C7.98857 11.9198 8.52915 12.2838 9.09976 12.6135L11.217 10.4963C11.3522 10.3611 11.5288 10.2599 11.7468 10.1926C11.9648 10.1254 12.1787 10.1064 12.3883 10.1359L15.4966 10.7666C15.7069 10.8266 15.8795 10.9356 16.0147 11.0936C16.1498 11.2516 16.2174 11.4279 16.2174 11.6225V15.2714C16.2174 15.5417 16.1273 15.7669 15.9471 15.9471C15.7669 16.1273 15.5417 16.2174 15.2714 16.2174Z" />
                </svg>
                <a href="tel:18002221111" className="text-white font-aeonik uppercase hover:text-brand-red transition-colors">
                  1 (800) 222-1111
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-aeonik font-bold text-xl uppercase mb-6">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <form className="relative mb-8">
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full px-7 py-5 border border-white bg-transparent text-white placeholder-white/60 font-aeonik text-sm uppercase focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-brand-red text-white font-aeonik font-bold text-sm uppercase hover:bg-brand-red/90 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black border border-white flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-colors"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 36 36">
                  <path d="M24.1927 7.25781H27.658L20.0872 15.9107L28.9936 27.6853H22.02L16.558 20.5441L10.3082 27.6853H6.84079L14.9385 18.4301L6.39453 7.25781H13.5452L18.4824 13.7852L24.1927 7.25781ZM22.9764 25.6111H24.8966L12.5018 9.22304H10.4413L22.9764 25.6111Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black border border-white flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-colors"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 29 29">
                  <path d="M14.1888 0C6.3526 0 0 6.3526 0 14.1888C0 20.8427 4.58127 26.4263 10.7613 27.9598V18.5249H7.83561V14.1888H10.7613V12.3204C10.7613 7.4911 12.947 5.25268 17.6883 5.25268C18.5873 5.25268 20.1384 5.42919 20.7729 5.60513V9.53542C20.4381 9.50023 19.8563 9.48264 19.1338 9.48264C16.8074 9.48264 15.9084 10.364 15.9084 12.6552V14.1888H20.5431L19.7468 18.5249H15.9084V28.2737C22.9342 27.4252 28.3781 21.4432 28.3781 14.1888C28.3775 6.3526 22.0249 0 14.1888 0Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black border border-white flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 26 26">
                  <path d="M23.7088 0H1.8903C0.845135 0 0 0.825132 0 1.8453V23.7538C0 24.774 0.845135 25.6041 1.8903 25.6041H23.7088C24.754 25.6041 25.6041 24.774 25.6041 23.7588V1.8453C25.6041 0.825132 24.754 0 23.7088 0ZM7.59622 21.8185H3.79561V9.59654H7.59622V21.8185ZM5.69591 7.93127C4.47572 7.93127 3.49056 6.94611 3.49056 5.73092C3.49056 4.51572 4.47572 3.53057 5.69591 3.53057C6.91111 3.53057 7.89627 4.51572 7.89627 5.73092C7.89627 6.94111 6.91111 7.93127 5.69591 7.93127ZM21.8185 21.8185H18.0229V15.8775C18.0229 14.4623 17.9979 12.637 16.0476 12.637C14.0723 12.637 13.7722 14.1823 13.7722 15.7775V21.8185H9.9816V9.59654H13.6222V11.2668H13.6722C14.1773 10.3067 15.4175 9.29149 17.2628 9.29149C21.1084 9.29149 21.8185 11.8219 21.8185 15.1124V21.8185Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black border border-white flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 27 27">
                  <path d="M13.3596 6.50195C9.57031 6.50195 6.49609 9.57617 6.49609 13.3654C6.49609 17.1547 9.57031 20.2289 13.3596 20.2289C17.1489 20.2289 20.2231 17.1547 20.2231 13.3654C20.2231 9.57617 17.1489 6.50195 13.3596 6.50195ZM13.3596 17.8176C10.9013 17.8176 8.90745 15.8238 8.90745 13.3654C8.90745 10.9071 10.9013 8.91331 13.3596 8.91331C15.8179 8.91331 17.8117 10.9071 17.8117 13.3654C17.8117 15.8238 15.8179 17.8176 13.3596 17.8176Z" />
                  <path d="M22.0992 6.2254C22.0992 7.1127 21.379 7.82775 20.4969 7.82775C19.6096 7.82775 18.8945 7.10748 18.8945 6.2254C18.8945 5.3381 19.6148 4.62305 20.4969 4.62305C21.379 4.62305 22.0992 5.34332 22.0992 6.2254Z" />
                  <path d="M20.2715 0C16.2622 0 12.3429 1.1889 9.00926 3.41636C5.67563 5.64382 3.07738 8.80979 1.54308 12.5139C0.00878331 16.218 -0.39266 20.294 0.38952 24.2262C1.1717 28.1585 3.10237 31.7706 5.93739 34.6056C8.7724 37.4406 12.3844 39.3713 16.3167 40.1534C20.249 40.9356 24.3249 40.5342 28.029 38.9999C31.7332 37.4656 34.8991 34.8673 37.1266 31.5337C39.3541 28.2001 40.543 24.2808 40.543 20.2715C40.543 17.6094 40.0186 14.9734 38.9999 12.5139C37.9812 10.0545 36.488 7.81976 34.6056 5.93738C32.7232 4.055 30.4885 2.56181 28.029 1.54307C25.5696 0.524337 22.9336 0 20.2715 0ZM13.3596 6.50195C9.57031 6.50195 6.49609 9.57617 6.49609 13.3654C6.49609 17.1547 9.57031 20.2289 13.3596 20.2289C17.1489 20.2289 20.2231 17.1547 20.2231 13.3654C20.2231 9.57617 17.1489 6.50195 13.3596 6.50195Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white font-aeonik uppercase text-sm">
            2025 SPANISHLINGO STUDIOS. CRAFTED WITH RHYTHM & PASSION.
          </p>
        </div>
      </div>
    </footer>
  );
}
