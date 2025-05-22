import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.button
        className="p-2 rounded-full bg-primary-100 text-primary-500 hover:bg-primary-200 transition-colors"
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </motion.button>
      
      <motion.button
        className="p-2 rounded-full bg-primary-100 text-primary-500 hover:bg-primary-200 transition-colors"
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>
      
      <span className="text-sm text-gray-600">
        {isPlaying ? "Playing music" : "Play music"}
      </span>
    </motion.div>
  );
};

export default AudioPlayer;