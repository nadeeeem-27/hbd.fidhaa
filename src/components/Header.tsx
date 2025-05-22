import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="h-6 w-6 text-primary-500" fill="#ec4899" />
          <span className="text-xl font-script font-bold text-primary-600">For Fidhaa</span>
        </motion.div>
        
        <nav>
          <ul className="flex space-x-6">
            <NavItem href="#hero" label="Home" />
            <NavItem href="#message" label="Message" />
            <NavItem href="#gallery" label="Memories" />
            <NavItem href="#wishes" label="Wishes" />
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <motion.a 
        href={href}
        className="text-gray-800 hover:text-primary-500 font-medium transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.a>
    </li>
  );
};

export default Header;