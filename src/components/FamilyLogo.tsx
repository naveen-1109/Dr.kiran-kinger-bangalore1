import { motion } from "framer-motion";

const FamilyLogo = () => {
  return (
    <motion.div 
      className="relative z-30 flex justify-center pointer-events-none"
      style={{ perspective: "1000px" }}
    >
      <div className="relative flex justify-center items-center pointer-events-auto">
        {/* Soft Glowing Gradient Blob Background */}
        <motion.div 
          className="absolute w-36 h-36 md:w-44 md:h-44 bg-gradient-to-tr from-blue-500/20 to-teal-400/20 blur-2xl rounded-full mix-blend-screen"
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated Glass Card + Logo Container */}
        <motion.div
          animate={{ y: [-4, 4, -4], scale: [1, 1.04, 1] }} // Breathing scale + slow float
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5 }} // Micro parallax tilt
          className="relative flex justify-center items-center p-3 md:p-4 bg-white/10 backdrop-blur-xl rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.15)] cursor-pointer border border-white/30 group"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Inner highlight ring */}
          <div className="absolute inset-0 rounded-full border-[1.5px] border-white/50 mix-blend-overlay"></div>

          {/* Logo Image */}
          <img 
            src="https://res.cloudinary.com/dtu6v3jya/image/upload/f_auto,q_auto/Untitled_g5ay0e" 
            alt="Premium Family Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
            style={{ transform: "translateZ(15px)" }} // True depth effect
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FamilyLogo;
