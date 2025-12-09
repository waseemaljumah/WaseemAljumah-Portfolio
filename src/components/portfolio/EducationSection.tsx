import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">My Academic Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary-foreground" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Bachelor's Degree in Computer Science</h3>
                <p className="text-primary font-medium mb-2">Taibah University</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span>Sep 2020 - May 2025</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Studied core computer science fundamentals including programming, data structures, 
                  algorithms, database systems, networking, and software engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;