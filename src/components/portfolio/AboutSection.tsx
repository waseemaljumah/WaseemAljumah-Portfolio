import { Code2, Wrench, BarChart3, Download } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Web Development",
    description: "HTML, CSS, JavaScript & front-end development",
  },
  {
    icon: Wrench,
    title: "IT Support",
    description:
      "Hardware maintenance, network troubleshooting & technical support",
  },
  {
    icon: BarChart3,
    title: "Business & Systems Analysis",
    description: "requirements gathering & process optimization",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Get to know me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <div className="relative">
  <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl gradient-gold p-1">
    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
      <img
        src="/my-photo.jpg"
        alt="My Photo"
        className="w-full h-full object-cover object-top rounded-2xl"
      />
    </div>
  </div>

  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
  <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
</div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Computer Science Graduate | Fresh Graduate 2025
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Highly motivated Computer Science graduate from Taibah University
              with practical experience in IT support, business and system
              analysis, and front-end development. Looking for an opportunity to
              leverage problem-solving abilities, technical expertise, and a
              user-centered approach to support organizational objectives and
              enhance scalable digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              During my internship at Anwar Al Madinah Movenpick Hotel, I gained
              hands-on experience in network maintenance, hardware
              troubleshooting, and working with enterprise systems like Opera
              PMS.
            </p>

            {/* Download CV Button */}
            <a
              href="Waseem-Aljumah-CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-gold text-primary-foreground font-semibold rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 mb-8"
            >
              <Download size={18} />
              Download CV
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "5+", label: "Projects" },
                { number: "2025", label: "Graduate" },
                { number: "3+", label: "Certifications" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-secondary/50"
                >
                  <span className="text-2xl font-bold gradient-text">
                    {stat.number}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:shadow-gold transition-shadow">
                <feature.icon className="text-primary-foreground" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
