import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-black ">
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
          <h3 className="text-brand-red font-grifter  leading-none tracking-wider uppercase footer-studios-heading">
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
                <a href="mailto:jimmybindra@spanishlingo.com" className="text-white font-aeonik uppercase hover:text-brand-red transition-colors">
                  jimmybindra@spanishlingo.com
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
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.7375" y="0.7375" width="57.525" height="57.525" rx="28.7625" stroke="white" stroke-width="1.475" />
                  <g clip-path="url(#clip0_944_295)">
                    <path d="M29.4983 18.5448C33.0684 18.5448 33.4912 18.5605 34.8952 18.6231C36.2 18.6805 36.9046 18.8997 37.3744 19.0824C37.9955 19.3225 38.4444 19.6148 38.9089 20.0793C39.3786 20.5491 39.6657 20.9927 39.9058 21.6138C40.0885 22.0835 40.3077 22.7934 40.3651 24.093C40.4277 25.5022 40.4434 25.925 40.4434 29.4899C40.4434 33.0599 40.4277 33.4827 40.3651 34.8867C40.3077 36.1915 40.0885 36.8962 39.9058 37.3659C39.6657 37.987 39.3734 38.4359 38.9089 38.9004C38.4391 39.3701 37.9955 39.6572 37.3744 39.8973C36.9046 40.08 36.1948 40.2992 34.8952 40.3566C33.486 40.4192 33.0632 40.4349 29.4983 40.4349C25.9283 40.4349 25.5055 40.4192 24.1015 40.3566C22.7967 40.2992 22.092 40.08 21.6223 39.8973C21.0012 39.6572 20.5523 39.3649 20.0878 38.9004C19.618 38.4307 19.331 37.987 19.0909 37.3659C18.9082 36.8962 18.689 36.1863 18.6316 34.8867C18.569 33.4775 18.5533 33.0547 18.5533 29.4899C18.5533 25.9198 18.569 25.497 18.6316 24.093C18.689 22.7882 18.9082 22.0835 19.0909 21.6138C19.331 20.9927 19.6233 20.5438 20.0878 20.0793C20.5575 19.6096 21.0012 19.3225 21.6223 19.0824C22.092 18.8997 22.8019 18.6805 24.1015 18.6231C25.5055 18.5605 25.9283 18.5448 29.4983 18.5448ZM29.4983 16.1387C25.8709 16.1387 25.4168 16.1543 23.9919 16.217C22.5722 16.2796 21.5962 16.5092 20.7507 16.8381C19.8686 17.1825 19.1222 17.6366 18.3811 18.383C17.6347 19.1242 17.1806 19.8705 16.8361 20.7474C16.5073 21.5981 16.2776 22.569 16.215 23.9886C16.1524 25.4187 16.1367 25.8728 16.1367 29.5003C16.1367 33.1278 16.1524 33.5819 16.215 35.0067C16.2776 36.4264 16.5073 37.4024 16.8361 38.248C17.1806 39.1301 17.6347 39.8764 18.3811 40.6176C19.1222 41.3587 19.8686 41.818 20.7454 42.1573C21.5962 42.4861 22.567 42.7158 23.9867 42.7784C25.4116 42.841 25.8656 42.8567 29.4931 42.8567C33.1206 42.8567 33.5747 42.841 34.9996 42.7784C36.4192 42.7158 37.3953 42.4861 38.2408 42.1573C39.1177 41.818 39.864 41.3587 40.6052 40.6176C41.3463 39.8764 41.8056 39.1301 42.1449 38.2532C42.4737 37.4024 42.7034 36.4316 42.766 35.012C42.8286 33.5871 42.8443 33.133 42.8443 29.5055C42.8443 25.878 42.8286 25.424 42.766 23.9991C42.7034 22.5794 42.4737 21.6034 42.1449 20.7578C41.8161 19.8705 41.362 19.1242 40.6156 18.383C39.8745 17.6419 39.1281 17.1825 38.2512 16.8433C37.4005 16.5145 36.4297 16.2848 35.01 16.2222C33.5799 16.1543 33.1258 16.1387 29.4983 16.1387Z" fill="white" />
                    <path d="M29.4963 22.6406C25.707 22.6406 22.6328 25.7148 22.6328 29.5041C22.6328 33.2934 25.707 36.3676 29.4963 36.3676C33.2856 36.3676 36.3598 33.2934 36.3598 29.5041C36.3598 25.7148 33.2856 22.6406 29.4963 22.6406ZM29.4963 33.9562C27.038 33.9562 25.0442 31.9624 25.0442 29.5041C25.0442 27.0458 27.038 25.052 29.4963 25.052C31.9546 25.052 33.9484 27.0458 33.9484 29.5041C33.9484 31.9624 31.9546 33.9562 29.4963 33.9562Z" fill="white" />
                    <path d="M38.236 22.3641C38.236 23.2514 37.5157 23.9664 36.6336 23.9664C35.7463 23.9664 35.0312 23.2461 35.0312 22.3641C35.0312 21.4768 35.7515 20.7617 36.6336 20.7617C37.5157 20.7617 38.236 21.482 38.236 22.3641Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_944_295">
                      <rect width="26.7232" height="26.7232" fill="white" transform="translate(16.1367 16.1387)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center pb-8 lg:pb-8">
          <p className="text-white font-aeonik uppercase text-sm">
            2025 SPANISHLINGO STUDIOS. CRAFTED WITH RHYTHM & PASSION.
          </p>
        </div>
      </div>
    </footer>
  );
}
