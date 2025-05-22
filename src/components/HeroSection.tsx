import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/70 to-purple-50/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <motion.div 
        className="container-custom text-center relative z-10 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Heart className="inline-block h-12 w-12 text-primary-500 mb-4 animate-pulse" fill="#ec4899" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-script mb-6 gradient-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Happy Birthday <br />Fidhaa
        </motion.h1>
        
        <motion.div
          className="text-xl md:text-2xl text-gray-700 mb-8 h-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typewriter
            options={{
              strings: [
                'You mean the world to me',
                'Nta kuttyaan😚',
                'You are my sunshine',
                'I love you endlessly'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>
        
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="#message"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read My Message
          </motion.a>
          
          <motion.a
            href="#gallery"
            className="btn bg-white text-primary-500 border border-primary-200 hover:bg-primary-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Memories
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <HeartFloat top="15%" left="10%" size="20px" delay={0} duration={8} />
      <HeartFloat top="25%" right="15%" size="30px" delay={1.5} duration={10} />
      <HeartFloat top="70%" left="20%" size="25px" delay={0.8} duration={9} />
      <HeartFloat top="80%" right="10%" size="18px" delay={2} duration={7} />
    </section>
  );
};

interface HeartFloatProps {
  top: string;
  left?: string;
  right?: string;
  size: string;
  delay: number;
  duration: number;
}

const HeartFloat = ({ top, left, right, size, delay, duration }: HeartFloatProps) => {
  return (
    <motion.div
      className="absolute text-primary-300 opacity-60"
      style={{ 
        top, 
        left: left || 'auto', 
        right: right || 'auto',
        width: size,
        height: size
      }}
      initial={{ y: 0 }}
      animate={{ y: [-20, 20, -20] }}
      transition={{ 
        repeat: Infinity, 
        duration, 
        delay,
        ease: "easeInOut" 
      }}
    >
      <Heart size={size} fill="currentColor" />
    </motion.div>
  );
};

export default HeroSection;