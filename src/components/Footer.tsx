import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-xl">Dr. Kiran <span className="text-primary">Kinger</span></span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Child & Family Health Doctor with 30+ years of experience providing compassionate, comprehensive healthcare for children and families.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Why Us", "Testimonials", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="block text-sm text-background/60 hover:text-background transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <div className="space-y-2">
              {["Child & Family Consultation", "Family Wellness", "Medicare+ & Vaccination", "Newborn Care", "General Healthcare"].map((s) => (
                <p key={s} className="text-sm text-background/60">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Affiliated With</h4>
            <div className="space-y-2">
              {["Manipal Hospital, Bangalore"].map((h) => (
                <p key={h} className="text-sm text-background/60">{h}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col items-center justify-center gap-4 text-center w-full">
          <p className="text-sm text-background/40">© {new Date().getFullYear()} Dr. Kiran Kinger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
