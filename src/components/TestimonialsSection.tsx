import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Bridget",
    text: "Dr kiran Kinger is a very good pediatrician, we have been consulting doctor more than 16years for my kids, if there is any health issues it will be solved. We admire his patience and happy to recommend him. And also he treats for diabetes too",
    rating: 4,
    relation: "Mother of Two",
  },
  {
    name: "Sushma Girish",
    text: "Dr. Kiran Kinger is incredibly kind and attentive. He listens carefully and answers all the questions and explains the treatment plan clearly. He will follow up personally to ensure the condition of the patient.",
    rating: 5,
    relation: "Mother",
  },
  {
    name: "Prema",
    text: "I have had the privilege of knowing Dr. Kiran Kinger for over 13 years. Throughout this time, he has been the primary pediatrician not only for my daughters but also for all the children in our extended family. Between my two sisters and myself, a total of seven children have been under his consistent and dedicated care. Dr. Kiran Kinger exemplifies professionalism, compassion, and commitment. He is highly approachable and has always been available to address our concerns, whether through calls or messages, even beyond regular hours. His prompt responses and willingness to support at any time have been truly reassuring for our family. His clinical expertise, combined with his genuine care for his patients, makes him an outstanding doctor. We deeply appreciate his continuous support and the quality of care he provides. I would like to express my sincere gratitude to Dr. Kiran Kinger for his exceptional service and dedication to our family and the community.",
    rating: 5,
    relation: "Mother",
  },
  {
    name: "Suresh Patel",
    text: "Dr. Kinger's 33+ years of experience shows in every consultation. He identified an issue other doctors missed and provided the right treatment immediately.",
    rating: 5,
    relation: "Father",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What <span className="gradient-text">Parents Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 md:p-10 text-center shadow-elevated"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-bold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].relation}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-elevated transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "gradient-bg w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-elevated transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
