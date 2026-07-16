import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import journeyImage from '../../assets/images/journey.png';

const Journey = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] py-10 sm:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.h2
          animate={isInView ? { x: 0 } : { x: '-120%' }}
          transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-[#1a1a1a] text-[24px] sm:text-[32px] md:text-[40px] font-medium leading-snug mb-4"
        >
          <span className="block text-center sm:text-left">My journey didn&apos;t start with a business plan</span>
          <span className="block text-center sm:text-left">It started with questions</span>
        </motion.h2>
      </div>

      <motion.div
        animate={isInView ? { x: 0 } : { x: '-120%' }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
        className="w-full h-[1px] bg-[#d0d0d0]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="py-10 sm:py-16 mb-8 sm:mb-12 max-w-md mx-auto sm:ml-auto sm:mr-0 flex flex-col gap-4 sm:gap-5">
          <motion.p
            animate={isInView ? { x: 0 } : { x: '120%' }}
            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
            className="text-[#3A3A3A] text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            Why do some brands connect deeply while others don&apos;t?
          </motion.p>
          <motion.p
            animate={isInView ? { x: 0 } : { x: '120%' }}
            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.35 }}
            className="text-[#3A3A3A] text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            Why do some founders feel aligned, while others burn out chasing trends?
          </motion.p>
        </div>

        <div className="w-full">
          <img
            src={journeyImage}
            alt="Digihost Brand Soul Found"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Journey;
