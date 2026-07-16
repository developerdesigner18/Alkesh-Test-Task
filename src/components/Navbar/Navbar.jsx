import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import akLogo from '../../assets/images/ak_logo.svg';

const NAV_LINKS = [
  { name: 'Brand Soul', href: '#brand-soul' },
  { name: 'Building For Bharat', href: '#next-chapter' },
  { name: 'Learn with AG', href: '#testimonials' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Nav pill */}
      <div className="px-3 sm:px-4 md:px-6 mt-4 md:mt-[22px]">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#0d3b38] rounded-full py-2.5 md:py-3 pl-3 md:pl-4 pr-3 md:pr-4 flex items-center justify-between"
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 ms-3 md:ms-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={akLogo} alt="ALKESH Logo" className="h-4 md:h-5 lg:h-6" />
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex text-[#F5F5F5] font-medium items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white text-[12px] xl:text-[13px] font-normal relative"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[1px] bg-[#c9a84c]"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: '100%' },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#footer')}
            className="hidden lg:inline-block text-[#355450] bg-white font-semibold text-[12px] xl:text-[13px] border border-white/30 rounded-full px-4 xl:px-5 py-2"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#c9a84c',
              color: '#ffffff',
              borderColor: '#c9a84c',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Work With Me
          </motion.a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 -mr-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#0d3b38] rounded-2xl mt-2 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white text-[14px] py-3 px-4 rounded-lg hover:bg-white/10 transition-colors block"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#footer"
                  onClick={(e) => scrollToSection(e, '#footer')}
                  className="text-[#355450] bg-white text-[14px] font-semibold rounded-full px-5 py-3 text-center mt-3 block"
                >
                  Work With Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
