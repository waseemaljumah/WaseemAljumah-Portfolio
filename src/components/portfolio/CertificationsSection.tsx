import { Award } from "lucide-react";

const certifications = [
  {
    title: "AI Track",
    issuer: "IBM",
    year: "2025",
    description: "AI Agents, LLMs, Chatbots, Generative AI Tools",
  },
  {
    title: "Packet Tracer Introduction",
    issuer: "Cisco",
    year: "2024",
    description: "Network simulation and configuration",
  },
  {
    title: "Cybersecurity Track",
    issuer: "FutureX | IBM",
    year: "2023",
    description: "EHE, Network Security, Penetration Testing",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">My Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Certifications & Courses</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center group-hover:shadow-gold transition-shadow">
                  <Award className="text-primary-foreground" size={28} />
                </div>
                <span className="text-sm text-muted-foreground">{cert.year}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
