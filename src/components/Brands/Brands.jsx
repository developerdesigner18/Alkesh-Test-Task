import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BRANDS } from '../../constants';
import digihostImg from '../../assets/images/digihost.png';

const Brands = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40% 0px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getImage = (brand) => {
    return digihostImg;
  };

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
      {/* Main heading - full width */}
      <div className="overflow-hidden flex justify-center">
        <div className="flex flex-col items-start">
          <motion.h1
            className="font-[family-name:var(--font-anton)] text-[#355450] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] leading-[1.1] mb-2 sm:mb-4"
            animate={isInView ? { x: 0 } : { x: '-100%' }}
            transition={{ duration: 1.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            The Stronger The Soul
          </motion.h1>
          <motion.h1
            className="font-[family-name:var(--font-anton)] text-[#355450] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] leading-[1.1] mb-6 sm:mb-8 pl-[calc(1.75em-5px)]"
            animate={isInView ? { x: 0 } : { x: '100%' }}
            transition={{ duration: 1.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            The Stronger The Brand
          </motion.h1>
        </div>
      </div>

      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
        {/* Subheading */}
        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="font-[family-name:var(--font-altone)] text-[#355450] pt-10 sm:pt-16 md:pt-28 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-medium leading-[1.2] text-center mb-3"
        >
          Brands That Carry My Soul
        </motion.h2>

        {/* Description */}
        <motion.p
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.55 }}
          className="font-[family-name:var(--font-altone)] text-[#5C5C5C] max-w-[580px] mx-auto text-[12px] md:text-[14px] lg:text-[16px] leading-[1.4] text-center"
        >
          Over the years, I&apos;ve had the privilege of shaping brands that became more than businesses — they became movements.
        </motion.p>
      </div>

      {/* Brands list */}
      <div className="w-full">
        {BRANDS.map((brand, index) => {
          const image = getImage(brand);
          const isLast = index === BRANDS.length - 1;
          const isFirst = index === 0;
          const borderClasses = `border-t border-[#E5E5E5] ${isLast ? 'border-b' : ''}`;
          const isHovered = hoveredIndex === index;
          const isOpen = hoveredIndex === null ? isFirst : isHovered;

          return (
            <div
              key={brand.id}
              className={`w-full ${borderClasses} transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8">
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  className="group cursor-pointer flex flex-row items-center w-full py-8 sm:py-12 lg:py-14 outline-none focus-visible:ring-2 focus-visible:ring-[#355450] focus-visible:ring-offset-2 rounded-lg"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setHoveredIndex(hoveredIndex === index ? null : index);
                    }
                  }}
                >
                  {/* Brand image on left - expands on hover (first one is always open) */}
                  <div className="w-[40%] flex-shrink-0 pr-3 sm:pr-6 md:pr-8 lg:pr-12">
                    <div className="flex justify-end">
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                        }}
                        transition={{ duration: isOpen ? 0.8 : 0, ease: [0.25, 0.8, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="w-[140px] sm:w-[200px] md:w-[280px] lg:w-[316px] aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                          <motion.img
                            initial={false}
                            animate={{
                              opacity: isOpen ? 1 : 0,
                              scale: isOpen ? 1 : 0.95,
                            }}
                            transition={{ duration: isOpen ? 1.4 : 0, ease: 'easeOut' }}
                            src={image}
                            alt={brand.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Brand text on right */}
                  <div className="w-[60%] text-left overflow-hidden flex flex-col justify-center">
                    <h3 className="font-[family-name:var(--font-anton)] text-[#355450] text-[18px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[52px] leading-[1.1] truncate">
                      {brand.name}
                    </h3>
                    {brand.description && (
                      <p className="font-[family-name:var(--font-altone)] text-[#5C5C5C] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[1.3] mt-2 line-clamp-2">
                        {brand.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
