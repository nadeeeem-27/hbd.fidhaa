import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 relative">
      <div className="container-custom">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Heart className="h-10 w-10 text-primary-500" fill="#ec4899" />
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-script mb-3 gradient-text">Fidhaa, I love you</h2>
          <p className="text-gray-600 mb-8">Today, tomorrow, and always</p>
          
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-secondary-300 to-gold-300"></div>
    </footer>
  );
};

export default Footer;