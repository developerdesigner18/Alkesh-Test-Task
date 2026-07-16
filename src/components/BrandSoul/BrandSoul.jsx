import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import ppl1 from '../../assets/images/ppl1.png';
import ppl2 from '../../assets/images/ppl2.png';
import ppl3 from '../../assets/images/ppl3.png';
import ppl4 from '../../assets/images/ppl4.png';
import ppl5 from '../../assets/images/ppl5.png';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';

const PEOPLE_PHOTOS = [ppl1, ppl2, ppl3, ppl4, ppl5];
const BRAND_IMAGES = [brand1, brand2, brand3];

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);
  return matches;
};

const BrandSoul = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const photosRef = useRef(null);
  const photosInView = useInView(photosRef, { once: true, amount: 0.3 });
  const brandCardsRef = useRef(null);
  const brandCardsInView = useInView(brandCardsRef, { once: true, margin: '-40% 0px' });

  return (
    <section id="brand-soul" className="bg-white py-8 sm:py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Top text */}
        <p className="font-[family-name:var(--font-altone)] text-center text-[#5C5C5C] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-medium leading-[1.5] md:leading-[1.4] mb-6 sm:mb-8 md:mb-12">
          What began as a small digital agency slowly evolved into
          <br className="hidden md:block" />
          a place where we didn&apos;t just design websites or logos...
          <br className="hidden md:block" />
          <span className="text-black text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px]">we understood people.</span>
        </p>

        {/* People photos */}
        <div ref={photosRef} className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-5 mb-8 sm:mb-10 md:mb-16">
          {PEOPLE_PHOTOS.map((photo, index) => {
            const delay = isDesktop
              ? Math.abs(index - 2) * 0.15
              : index * 0.15;
            const duration = isDesktop
              ? 0.8 - Math.abs(index - 2) * 0.15
              : 0.5;

            return (
              <motion.div
                key={index}
                animate={photosInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
                transition={{ duration, ease: 'easeOut', delay }}
                className="w-[calc(45%-4px)] sm:w-[calc(30%-6px)] md:w-28 lg:w-32 xl:w-36 aspect-[3/4] overflow-hidden rounded-lg"
              >
                <motion.img
                  src={photo}
                  alt={`Team photo ${index + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Middle text */}
        <p className="font-[family-name:var(--font-altone)] text-center text-[#4a4a4a] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-3 sm:mb-4 md:mb-6 px-4">
          And somewhere along that path, the idea that defined everything
          <br className="hidden md:block" />
          I do was born
        </p>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-altone)] text-center text-[#355450] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] mb-8 sm:mb-10 md:mb-14 px-4">
          The Brand Soul Philosophy.
        </h2>

        {/* Brand cards */}
        <div ref={brandCardsRef} className="flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-14">
          {BRAND_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={brandCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`w-1/3 max-w-[140px] sm:max-w-[200px] md:max-w-[280px] rounded-2xl overflow-hidden ${index === 1 ? 'md:-translate-y-6' : ''}`}
            >
              <motion.img
                src={image}
                alt={`Brand ${index + 1}`}
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="font-[family-name:var(--font-altone)] text-center text-[#5C5C5C] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-medium leading-[1.5] md:leading-[1.4] max-w-3xl mx-auto px-4">
          Because every brand, just like every human, has a soul. When you find
          it, align with it, and express it with integrity —{' '}
          <span className="text-black">it creates movement.</span>
        </p>
      </div>
    </section>
  );
};

export default BrandSoul;
