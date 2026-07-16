import { motion } from 'framer-motion';
import akLogo from '../../assets/images/ak_logo.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1a1a1a] py-8 sm:py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Top section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 mb-10 md:mb-16 lg:mb-24"
        >
          {/* CTA text */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="w-full lg:max-w-[294px]">
            <p
              className="font-[family-name:var(--font-altone)] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[130%] sm:leading-[110%] lg:leading-[100%] text-center sm:text-left"
              style={{
                fontWeight: 400,
                background: 'linear-gradient(98.41deg, #F8EEA4 10.77%, #C7A008 93.44%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Maybe it&apos;s time we build something together.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-x-12 md:gap-x-16 sm:gap-y-6 w-full lg:w-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 sm:gap-3 md:gap-4 text-center sm:text-left">
              {['about', 'work', 'services', 'contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  className="font-[family-name:var(--font-altone)] text-[#F5F5F5] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] leading-[100%] lowercase"
                  whileHover={{ color: '#c9a84c', x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 sm:gap-3 md:gap-4 text-center sm:text-left">
              {['digiihost', 'quote your price', 'best rate websites'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.replace(/\s+/g, '-')}`}
                  className="font-[family-name:var(--font-altone)] text-[#F5F5F5] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] leading-[100%] lowercase"
                  whileHover={{ color: '#c9a84c', x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Column 3 - Social */}
            <div className="flex flex-col gap-3 sm:gap-3 md:gap-4 text-center sm:text-left">
              {['instagram', 'facebook', 'youtube', 'linkedin', 'x'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  className="font-[family-name:var(--font-altone)] text-[#F5F5F5] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] leading-[100%] lowercase"
                  whileHover={{ color: '#c9a84c', x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-6 pt-6 sm:pt-8 border-t border-[#333]"
        >
          {/* Logo */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[256px] h-auto"
            whileHover={{ scale: 1.05 }}
          >
            <img src={akLogo} alt="Alkesh Gupta" className="w-full h-auto object-contain" />
          </motion.div>

          {/* Copyright */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-altone)] text-[#F5F5F5]"
          >
            Copyright © <span className="font-sans">2026</span> Alkesh Gupta. All Rights Reserved. Powered By : DIIGIIHOST
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
