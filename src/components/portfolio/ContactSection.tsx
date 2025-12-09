import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Waseemaljumah@gmail.com",
    href: "mailto:Waseemaljumah@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 59 992 6127",
    href: "tel:+966599926127",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Saudi Arabia",
    href: "https://www.google.com/maps/place/Saudi+Arabia",
  },
];

const socialLinks = [
    {
    icon: Mail,
    label: "Email",
    href: "mailto:Waseemaljumah@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/waseem-aljumah",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/waseemaljumah",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or want to discuss opportunities? Feel free to reach out 
              through any of the following channels or fill out the form.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center group-hover:shadow-gold transition-shadow">
                    <item.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-primary/50 transition-all duration-300 group"
                  >
                    <social.icon size={18} className="text-primary" />
                    <span className="text-sm group-hover:text-primary transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-xl glass-card space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 gradient-gold text-primary-foreground font-semibold rounded-lg shadow-gold hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
