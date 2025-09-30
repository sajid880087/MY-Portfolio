import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2, Shield, Cloud, Bot } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Virtual Mouse",
      description: "AI-powered virtual mouse control system using computer vision and hand gesture recognition",
      tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      github: "https://github.com/sajid880087/virtualmouse",
      icon: Bot,
      featured: true,
    },
    {
      title: "FastAPI Authentication System",
      description: "Secure authentication and authorization system with JWT tokens and role-based access control",
      tech: ["FastAPI", "Python", "JWT", "SQLAlchemy"],
      github: "https://github.com/sajid880087/Fastapi-signup-AND-login-Authentication",
      icon: Shield,
      featured: true,
    },
    {
      title: "Weather API",
      description: "Real-time weather information API with location-based forecasting and historical data",
      tech: ["Python", "Flask", "OpenWeatherMap API", "REST"],
      github: "https://github.com/sajid880087/Weather_api",
      icon: Cloud,
    },
    {
      title: "Digital Creations Portfolio",
      description: "Modern portfolio website showcasing digital art and creative projects",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/sajid880087/sajid-digital-creations",
      icon: Code2,
    },
    {
      title: "Chatbot GPT",
      description: "AI-powered conversational chatbot with natural language processing capabilities",
      tech: ["Python", "NLP", "Machine Learning", "Flask"],
      github: "https://github.com/sajid880087/chatgpt",
      icon: Bot,
    },
    {
      title: "Harisetu",
      description: "Web application project focusing on user experience and modern design patterns",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/sajid880087/Harisetu",
      icon: Code2,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className={`group glass hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-secondary text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Featured
                  </div>
                )}

                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                        <Icon className="w-5 h-5 text-background" />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;