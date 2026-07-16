import { useRef } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../ui/RevealText';
import manifesto1 from '../../assets/images/menifesto1.png';
import manifesto2 from '../../assets/images/menifesto2.png';
import manifesto3 from '../../assets/images/menifesto3.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Manifesto = () => {
  const brandTextRef = useRef(null);
  const founderTextRef = useRef(null);
  const businessTextRef = useRef(null);

  const forwardToReveal = (textRef) => (e) => {
    textRef.current?.revealAtY(e.clientY);
  };

  return (
    <section className="bg-[#052C27] py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-altone)] text-white text-center text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-[1.2] tracking-normal mb-10 sm:mb-16 md:mb-24"
        >
          The Brand Soul Manifesto
        </motion.h2>

        {/* Row 1: Image left, text right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          onMouseMove={forwardToReveal(brandTextRef)}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16 lg:gap-24 mb-10 sm:mb-16 md:mb-28"
        >
          <div className="w-full md:w-[40%] flex justify-center md:justify-start">
            <div className="w-[180px] h-[207px] sm:w-[220px] sm:h-[251px] md:w-[220px] md:h-[251px] lg:w-[350px] lg:h-[400px] rounded-lg overflow-hidden">
              <img
                src={manifesto1}
                alt="Brand concept"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-[60%] flex justify-center md:justify-start">
            <RevealText
              ref={brandTextRef}
              lines={[
                'A BRAND is',
                'not a logo.',
                "It's a living system",
                'of emotion',
                'and intention.',
              ]}
              highlights={['BRAND']}
              ladder="left"
              ladderStep={48}
              ladderStepMd={48}
            />
          </div>
        </motion.div>

        {/* Row 2: Text left, image right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseMove={forwardToReveal(founderTextRef)}
          className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-16 md:mb-28"
        >
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="w-[180px] h-[207px] sm:w-[220px] sm:h-[251px] md:w-[240px] md:h-[275px] lg:w-[350px] lg:h-[400px] rounded-lg overflow-hidden">
              <img
                src={manifesto2}
                alt="Founder concept"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex justify-center md:justify-start">
            <RevealText
              ref={founderTextRef}
              lines={[
                'A FOUNDER Is',
                'Not A Title.',
                "It's The Discipline",
                'To Build',
                'What Others Only',
                'Imagine.',
              ]}
              highlights={['FOUNDER']}
              ladder="right"
              ladderStep={48}
              ladderStepMd={48}
            />
          </div>
        </motion.div>

        {/* Row 3: Image left, text right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          onMouseMove={forwardToReveal(businessTextRef)}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16"
        >
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="w-[180px] h-[207px] sm:w-[220px] sm:h-[251px] md:w-[240px] md:h-[275px] lg:w-[350px] lg:h-[400px] rounded-lg overflow-hidden">
              <img
                src={manifesto3}
                alt="Business concept"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex justify-center md:justify-start">
            <RevealText
              ref={businessTextRef}
              lines={[
                'And BUSINESS Is',
                'Not About The Market',
                "It's About",
                'The Value',
                'You Choose To Create,',
                'Consistently',
              ]}
              highlights={['BUSINESS']}
              ladder="left"
              ladderStep={48}
              ladderStepMd={24}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
