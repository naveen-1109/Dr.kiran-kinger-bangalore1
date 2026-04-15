import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Award, Users, Clock, MapPin, IndianRupee, Building2 } from "lucide-react";
import doctorPhoto from "@/assets/doctor-kiran.png";
import FamilyLogo from "./FamilyLogo";

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl counter-glow">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { icon: Clock, value: 30, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 100, suffix: "K+", label: "Children Treated" },
  { icon: Building2, value: 5, suffix: "+", label: "Prestigious Hospitals" },
  { icon: GraduationCap, value: 5, suffix: "+", label: "Global Qualifications" },
];

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Doctor Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:-translate-x-8"
          >
            <div className="relative w-max mx-auto">
              <div className="w-72 md:w-80 rounded-3xl overflow-hidden shadow-elevated border-4 border-card">
                <img
                  src={doctorPhoto}
                  alt="Dr. Kiran Kinger - Consultant Pediatrician"
                  className="w-full h-auto block -mb-12 origin-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 shadow-glow">
                <p className="text-sm font-semibold text-foreground">⭐ 30+ Years Experience</p>
              </div>
              <div className="absolute -top-4 -left-4 glass-card p-3 shadow-glow">
                <p className="text-xs font-semibold text-foreground flex items-center gap-1">
                  <IndianRupee className="w-3 h-3" /> Consultation: ₹700
                </p>
              </div>
            </div>
            {/* Mobile visible logo perfectly stacked between them before about section */}
            <div className="md:hidden mt-12 z-20 w-full flex justify-center pb-4">
              <FamilyLogo />
            </div>
          </motion.div>


          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left lg:translate-x-6"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">About the Doctor</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Dr. Kiran Kinger — <span className="gradient-text block mt-1 md:inline md:mt-0">Child & Family Health Doctor</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-lg md:max-w-none">
              Dr. Kiran Kinger is a highly experienced and trusted doctor with over three decades of expertise in child and family healthcare. Known for his compassionate approach and accurate diagnosis, he provides personalized treatment ensuring the best care for every family member—from babies to adults.
            </p>

            <div className="space-y-4 mb-8 text-left max-w-md mx-auto md:mx-0 w-full">
              <div className="flex items-start gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">MBBS from Madras Medical College</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">DCH, MRCPCH & CCST (UK) — Trained in London, United Kingdom</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Visiting Consultant Paediatrician — Manipal Hospital, Bangalore</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Dr KINGERS Clinic, Medical Director and Consultant Paediatrician and Family Medical Doctor 🏥 ,Spencer Road, Frazer Town, Bangalore</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-8">
              {["Child & Family Consultation", "Family Wellness", "Medicare+ & Vaccination", "General Healthcare"].map((tag) => (
                <span key={tag} className="glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-accent-foreground text-center">
                  {tag}
                </span>
              ))}
            </div>


          </motion.div>

          {/* Centered Floating Logo between columns */}
          <div className="absolute top-[48%] left-1/2 lg:left-[46%] -translate-x-1/2 -translate-y-1/2 lg:top-1/2 z-30 pointer-events-none hidden md:block">
            <FamilyLogo />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 md:mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="glass-card p-4 sm:p-6 text-center shadow-elevated"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
