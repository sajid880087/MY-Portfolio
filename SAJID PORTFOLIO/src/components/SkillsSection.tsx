import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, GitBranch, Server, Shield } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
      color: "from-primary to-primary-glow",
    },
    {
      icon: Palette,
      title: "Web Development",
      skills: ["Bootstrap", "Flask", "FastAPI", "React"],
      color: "from-secondary to-secondary-glow",
    },
    {
      icon: Database,
      title: "Data Science",
      skills: ["Pandas", "Matplotlib", "Seaborn", "NumPy"],
      color: "from-accent to-accent-glow",
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub"],
      color: "from-primary to-secondary",
    },
    {
      icon: Server,
      title: "DevOps",
      skills: ["Docker", "Linux", "CI/CD"],
      color: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing"],
      color: "from-destructive to-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-background/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ icon: Icon, title, skills, color }, index) => (
            <Card 
              key={index}
              className="group glass hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <div className="relative z-10 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${color} opacity-90`}>
                    <Icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;