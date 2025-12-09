import { Github, Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="text-primary" size={14} fill="currentColor" /> by Waseem Aljumah
          </p>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/waseemaljumah" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/waseem-aljumah" },
              { icon: Mail, href: "mailto:Waseemaljumah@gmail.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;