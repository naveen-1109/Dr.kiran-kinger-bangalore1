import { motion } from "framer-motion";
import { Calendar, MessageCircle, Shield, Heart, Stethoscope } from "lucide-react";
import babyAlone from "@/assets/baby_alone.png";
import childAlone from "@/assets/child_alone.png";
import DNAHelix from "./DNAHelix";

const teenagerUrl = "https://res.cloudinary.com/dtu6v3jya/image/upload/v1776174662/pexels-pavel-ariel-alexandrovsky-404400434-15427734_pgcnpw.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      {/* Gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      {/* 3D Animation Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <DNAHelix />
      </div>

      {/* Floating medical icons */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="glass-card p-3 rounded-2xl shadow-glow">
          <Heart className="w-6 h-6 text-destructive" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[8%] hidden lg:block"
      >
        <div className="glass-card p-3 rounded-2xl shadow-glow">
          <Stethoscope className="w-6 h-6 text-primary" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">30+ Years of Trusted Child & Family Care</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-foreground"
            >
              Compassionate Care for Your Child's{" "}
              <span className="gradient-text block mt-1 md:inline md:mt-0">Healthy Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 md:mb-10 leading-relaxed"
            >
              Expert child and family healthcare with 30+ years of trusted experience. Dr. Kiran Kinger — your family's well-being is our priority.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >

              <a
                href="https://wa.me/919880677666"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 rounded-full font-semibold text-foreground hover:shadow-elevated transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                Contact on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right - Child images asymmetric layout */}
          <div className="relative h-[420px] md:h-[520px] hidden md:block">
            {/* Gradient blobs behind images */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/15 rounded-full blur-3xl" />

            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-0"
            >
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/40 blur-sm group-hover:blur-md transition-all duration-500" />
                <img
                  src={childAlone}
                  alt="Cheerful child alone"
                  width={800}
                  height={1024}
                  className="relative w-56 h-72 md:w-64 md:h-80 object-cover rounded-3xl shadow-elevated group-hover:scale-[1.02] transition-transform duration-500 bg-white"
                />
              </motion.div>
            </motion.div>

            {/* Smaller image - bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-12 right-0 z-10"
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-sm group-hover:blur-md transition-all duration-500" />
                <img
                  src={babyAlone}
                  alt="Cute smiling baby alone"
                  width={640}
                  height={640}
                  loading="lazy"
                  className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl shadow-elevated group-hover:scale-[1.03] transition-transform duration-500 bg-white"
                />
              </motion.div>
            </motion.div>

            {/* Smaller image - top right (Teenager) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-12 right-0 z-10 hidden lg:block"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 blur-sm group-hover:blur-md transition-all duration-500" />
                <img
                  src={teenagerUrl}
                  alt="Confident teenager standing alone"
                  width={640}
                  height={640}
                  loading="lazy"
                  className="relative w-32 h-32 md:w-40 md:h-40 object-cover object-top rounded-2xl shadow-elevated group-hover:scale-[1.03] transition-transform duration-500 bg-white"
                />
              </motion.div>
            </motion.div>

            {/* Glass stat card floating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute top-2 right-0 z-30"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="glass-card p-4 shadow-glow">
                  <p className="text-sm font-bold text-foreground">100K+</p>
                  <p className="text-xs text-muted-foreground">Children Treated</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Glass card bottom center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30"
            >
              <div className="glass-card px-5 py-3 shadow-glow">
                <p className="text-xs font-semibold text-foreground">⭐ Trusted by Thousands of Parents</p>
              </div>
            </motion.div>
          </div>

          {/* Mobile images horizontally stacked but wrapping to prevent overflow */}
          <div className="md:hidden flex flex-wrap justify-center gap-4 py-4 w-full">
            {[babyAlone, childAlone, teenagerUrl].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="flex-shrink-0 w-[45%] max-w-[160px]"
              >
                <div className="relative group w-full">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-sm" />
                  <img
                    src={src}
                    alt={"Gallery image " + i}
                    loading="lazy"
                    className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-elevated bg-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
