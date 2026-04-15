import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Droplets, Apple, CheckCircle2, ChevronDown, Activity } from "lucide-react";

// Types
type SectionType = "loose" | "hard" | "normal";

interface DigestionGuide {
  id: SectionType;
  title: string;
  types: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  content: { text: string; highlight?: boolean }[];
}

const DIGESTION_GUIDES: DigestionGuide[] = [
  {
    id: "loose",
    title: "Loose Stools",
    types: "Types 5, 6, 7",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    icon: <Droplets className="w-5 h-5" />,
    content: [
      { text: "Primary goal is to prevent dehydration." },
      { text: "Ensure adequate fluid intake with Oral Rehydration Solution (ORS) or clear broths.", highlight: true },
      { text: "Offer easily digestible foods like bananas, rice, applesauce, and toast (BRAT diet)." },
      { text: "Avoid milk, greasy foods, and high-sugar juices, as they can worsen symptoms." }
    ]
  },
  {
    id: "hard",
    title: "Hard Stools",
    types: "Types 1, 2, 3",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    icon: <Apple className="w-5 h-5" />,
    content: [
      { text: "Often a sign of mild constipation." },
      { text: "Increase daily water and clear fluid intake strictly.", highlight: true },
      { text: "Introduce more fiber-rich foods like pears, plums, peaches, and whole grains." },
      { text: "Encourage physical activity to help stimulate bowel movements." }
    ]
  },
  {
    id: "normal",
    title: "Normal Stools",
    types: "Type 4",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    icon: <CheckCircle2 className="w-5 h-5" />,
    content: [
      { text: "Indicates a healthy, well-functioning digestive system." },
      { text: "Maintain current hydration levels and a balanced diet.", highlight: true },
      { text: "Continue providing a variety of colorful fruits and vegetables." },
      { text: "Ensure regular meal times and healthy routines are kept." }
    ]
  }
];

export default function ChildGutHealthSection() {
  const [openSection, setOpenSection] = useState<SectionType | null>("loose");

  const toggleSection = (id: SectionType) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden" id="gut-health">
      
      {/* Decorative Gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-300/20 dark:bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Corner Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-8 left-8 hidden lg:flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 z-20"
      >
        <Activity className="w-4 h-4 text-blue-500" />
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Educational Health Tip</span>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Child Gut Health & Stool Guide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Simple dietary guidelines to help manage your child’s digestion and bowel health.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:mx-0 mx-auto max-w-lg lg:max-w-none w-full"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/60 dark:bg-slate-800/40 backdrop-blur-xl border border-white/80 dark:border-slate-700/50 shadow-[0_8px_40px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.3)] p-4 md:p-6 pb-2">
              
              <div className="absolute top-8 left-8 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg text-white text-xs font-medium">
                <Info className="w-3.5 h-3.5" />
                Educational Reference
              </div>
              
              <div className="rounded-2xl overflow-hidden relative shadow-inner bg-slate-100 dark:bg-slate-800">
                <img 
                  src="/images/stool_chart_illustration.png" 
                  alt="Educational Gut Health Chart" 
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Adapted securely for pediatric educational reference only.</p>
              </div>
            </div>
            
            {/* Soft decorative background shadow for image */}
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-blue-400/10 to-teal-400/10 dark:from-blue-600/10 dark:to-teal-600/10 blur-xl -z-10" />
          </motion.div>

          {/* Right Side - Content Guide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            
            {DIGESTION_GUIDES.map((guide) => (
              <div 
                key={guide.id}
                className="rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleSection(guide.id)}
                  className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors duration-300 ${openSection === guide.id ? guide.bgColor : 'bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 ${guide.color}`}>
                      {guide.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{guide.title}</h3>
                      <p className={`text-sm font-semibold uppercase tracking-wider mt-1 ${guide.color}`}>
                        {guide.types}
                      </p>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm transition-transform duration-300 ${openSection === guide.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openSection === guide.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <ul className="space-y-4">
                          {guide.content.map((item, index) => (
                            <li key={index} className="flex flex-col">
                              {item.highlight ? (
                                <div className={`px-4 py-3 rounded-xl flex items-start gap-3 border ${guide.id === 'loose' ? 'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800' : guide.id === 'hard' ? 'bg-orange-50 border-orange-200 dark:bg-orange-950/30 dark:border-orange-800' : 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800'}`}>
                                  <div className={`h-2 w-2 rounded-full mt-2 shrink-0 ${guide.id === 'loose' ? 'bg-blue-500' : guide.id === 'hard' ? 'bg-orange-500' : 'bg-emerald-500'}`} />
                                  <span className={`font-semibold ${guide.color}`}>{item.text}</span>
                                </div>
                              ) : (
                                <div className="flex items-start gap-3 px-4">
                                  <div className="h-1.5 w-1.5 rounded-full mt-2 shrink-0 bg-slate-300 dark:bg-slate-600" />
                                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</span>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
          
        </div>

        {/* Footer Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            For educational purposes only. Consult your doctor or pediatrician immediately if symptoms persist.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
