import { ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "AutoPartSA – E-Platform for Car Spare Parts",
    description: "Graduation project: An e-platform connecting users with certified car agencies and spare parts providers for online purchases and maintenance booking.",
    tags: ["E-Commerce", "Full Stack", "React"],
    image: "🚗",
    color: "from-emerald-500/20 to-teal-500/20",
    liveUrl: "https://vehicle-management-25.netlify.app/",
    githubUrl: "https://drive.google.com/drive/folders/1OVG9wkI6qv4Uwr4_UxmslefIn2jQwzDK",
  },
  {
    title: "Bookmark Saver",
    description: "A practical web application to save and manage your bookmarks efficiently.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "🔖",
    color: "from-purple-500/20 to-pink-500/20",
    liveUrl: "https://waseemaljumah.github.io/Bookmark-Saver/",
    githubUrl: "https://github.com/waseemaljumah/Bookmark-Saver",
  },
  {
    title: "Old Portfolio",
    description: "A clean and responsive information card component built with HTML, CSS.",
    tags: ["HTML", "CSS"],
    image: "🌐",
    color: "from-blue-900/40 to-indigo-900/40",
    liveUrl: "https://waseemaljumah.github.io/Information_card/",
    githubUrl: "https://github.com/waseemaljumah/Information_card",
  },
  {
    title: "Information Card",
    description: "A clean and responsive information card component built with HTML, CSS.",
    tags: ["HTML", "CSS"],
    image: "📋",
    color: "from-blue-500/20 to-indigo-500/20",
    liveUrl: "https://waseemaljumah.github.io/Information_card/",
    githubUrl: "https://github.com/waseemaljumah/Information_card",
  },
  {
    title: "Login Page",
    description: "A modern and responsive login page design with clean UI/UX.",
    tags: ["HTML", "CSS"],
    image: "🔐",
    color: "from-orange-500/20 to-amber-500/20",
    liveUrl: "https://waseemaljumah.github.io/Login-Page/",
    githubUrl: "https://github.com/waseemaljumah/Login-Page",
  },
];

const projectFolders = [
  { name: "Database Projects", url: "https://drive.google.com/drive/folders/1oq6r4vVqi69yfmQhK9fJw9C-NDN4lhLY" },
  { name: "Java Projects", url: "https://drive.google.com/drive/folders/1lWmrKBLjw3nfmlRW3_Qy_-AOeNsFuwpT" },
  { name: "Python Projects", url: "https://drive.google.com/drive/folders/1gmgPCRaeBvE7hLTIYvwvKl6Uhoquwaok" },
  { name: "Software Analysis Projects", url: "https://drive.google.com/drive/folders/1zKb2E-Wlw7isXk5AZNVOoCwjLi9X4xxV" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden glass-card hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </span>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Folders */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">More Project Files</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {projectFolders.map((folder, index) => (
              <a
                key={index}
                href={folder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg glass-card hover:border-primary/50 transition-all duration-300 group"
              >
                <FolderOpen size={18} className="text-primary" />
                <span className="text-sm group-hover:text-primary transition-colors">{folder.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
