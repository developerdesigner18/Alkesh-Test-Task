import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero_image.png';

const Hero = () => {
  return (
    <section className="relative h-screen bg-[#141414] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Alkesh Gupta"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient overlay - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-[#141414]/20" />

      {/* Center text - 60% from top */}
      <div className="relative z-10 h-full flex flex-col justify-start items-center pt-[55vh] sm:pt-[58vh] md:pt-[60vh]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[family-name:var(--font-altone)] text-white text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[120%] px-4"
        >
          Hi, I&apos;m <span className="text-[#c9a84c]">Alkesh Gupta</span> — a Founder,{' '}
          <br className="hidden sm:block" />
          Creator, and Soul Alchemist.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
