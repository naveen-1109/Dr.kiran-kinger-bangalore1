import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Baby, Activity, Syringe, Stethoscope, HeartPulse, Brain } from "lucide-react";

const services = [
  { icon: Baby, title: "Child & Family Consultation", desc: "Comprehensive consultations for infants, toddlers, children, and family members with personalized care plans." },
  { icon: Activity, title: "Growth & Development", desc: "Expert monitoring and guidance for healthy physical and cognitive development milestones." },
  { icon: Syringe, title: "Medicare & Vaccination+", desc: "Complete vaccination schedules and Medicare available for all age categories including adults." },
  { icon: Stethoscope, title: "General Family Healthcare", desc: "Routine check-ups, illness management, and preventive healthcare for children and parents." },
  { icon: HeartPulse, title: "Newborn Care", desc: "Specialized neonatal care including health screenings, feeding guidance, and early intervention." },
  { icon: Brain, title: "Developmental Assessment", desc: "Thorough evaluation of behavioral, speech, and learning milestones with expert recommendations." },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setTilt({ x: -y, y: x });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 cursor-pointer group hover:shadow-elevated transition-all duration-500"
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-5 group-hover:shadow-glow transition-all duration-500">
        <service.icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
    </motion.div>
  );
}

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Specialized <span className="gradient-text block mt-1 sm:inline sm:mt-0">Child & Family Care</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive child and family healthcare services delivered with 30+ years of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
