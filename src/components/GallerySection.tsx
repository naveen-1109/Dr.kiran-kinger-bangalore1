import { motion } from "framer-motion";

const galleryItems = [
  { title: "Reception Area", color: "from-primary/20 to-secondary/20" },
  { title: "Consultation Room", color: "from-secondary/20 to-primary/20" },
  { title: "Play Zone", color: "from-primary/30 to-accent/30" },
  { title: "Feeding and Changing Room", color: "from-accent/30 to-secondary/20" },
  { title: "Diagnostic Center", color: "from-secondary/20 to-primary/30" },
  { title: "Wellness Lounge", color: "from-primary/20 to-secondary/30" },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Facility</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clinic <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl aspect-square group cursor-pointer bg-gradient-to-br ${item.color}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-2 sm:p-4 md:p-6 text-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 w-11/12 max-w-[200px]">
                  <p className="font-bold text-foreground text-xs sm:text-sm md:text-base">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
