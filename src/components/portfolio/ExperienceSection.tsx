import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Where I've Worked</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-primary-foreground" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">IT Intern</h3>
                <p className="text-primary font-medium mb-2">Anwar Al Madinah Movenpick Hotel</p>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>June 2024 – August 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Madinah, Saudi Arabia</span>
                  </div>
                </div>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Network maintenance and troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hardware maintenance and technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Working with enterprise systems like Opera PMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Providing technical assistance to hotel staff</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;