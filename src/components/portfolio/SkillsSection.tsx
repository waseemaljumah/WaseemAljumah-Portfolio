import { 
  Code2, 
  FileCode, 
  Braces, 
  Coffee, 
  Network, 
  Wrench, 
  FileSpreadsheet,
  Hotel,
  Database,
  Monitor,
  Shield,
  Users,
  Lightbulb,
  Zap,
  MessageSquare,
  Target,
  RefreshCw,
} from "lucide-react";

const technicalSkills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: FileCode },
  { name: "JavaScript", icon: Braces },
  { name: "Java", icon: Coffee },
  { name: "Python", icon: FileSpreadsheet },
  { name: "Microsoft Office", icon: FileSpreadsheet },
  { name: "Opera PMS", icon: Hotel },
  { name: "Packet Tracer", icon: Database },
  { name: "IT Support", icon: Wrench },
  { name: "Hardware Maintenance", icon: Monitor },
  { name: "Network Fundamentals", icon: Network },
  { name: "Network Troubleshooting", icon: Network },
];

const personalSkills = [
  { name: "Team Collaboration", icon: Users },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Fast Learner", icon: Zap },
  { name: "Strong Communication", icon: MessageSquare },
  { name: "Commitment & Accuracy", icon: Target },
  { name: "Adaptable to New Systems", icon: RefreshCw },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">What I know</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Technologies</h2>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {technicalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-3 group-hover:shadow-gold transition-shadow">
                    <IconComponent className="text-primary-foreground" size={24} />
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Personal Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {personalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="text-primary" size={20} />
                  </div>
                  <span className="text-xs font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
