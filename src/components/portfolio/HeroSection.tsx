import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const HeroSection = () => {
  const { displayText, currentColor } = useTypingAnimation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up opacity-0">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up opacity-0 stagger-1">
          I'm <span className="gradient-text">Waseem Aljumah</span>
        </h1>

        <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up opacity-0 stagger-2 h-8 md:h-10">
          <span className="text-foreground">I'm a </span>
          <span
            className={`${currentColor} font-semibold transition-colors duration-300`}
          >
            {displayText}
          </span>
          <span className="animate-pulse">|</span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up opacity-0 stagger-3">
          <a
            href="#contact"
            className="px-8 py-3 gradient-gold text-primary-foreground font-semibold rounded-lg shadow-gold hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-slide-up opacity-0 stagger-4">
          {[
            { icon: Github, href: "https://github.com/waseemaljumah" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/waseem-aljumah",
            },
            { icon: Mail, href: "mailto:Waseemaljumah@gmail.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
  href="#about"
  className="absolute bottom-0 text-muted-foreground hover:text-primary transition-colors animate-bounce"
  style={{ left: "48.3%", bottom: "-50px" }} // قللت من 50% إلى 45%
>
  <ArrowDown size={24} />
</a>
      </div>
    </section>
  );
};

export default HeroSection;
