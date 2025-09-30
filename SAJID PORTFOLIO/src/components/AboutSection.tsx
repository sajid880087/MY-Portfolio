import { Code2, Shield, Sparkles, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, title: "AI/ML Developer", color: "from-primary to-primary-glow" },
    { icon: Shield, title: "Cybersecurity", color: "from-secondary to-secondary-glow" },
    { icon: Sparkles, title: "Innovation", color: "from-accent to-accent-glow" },
    { icon: GraduationCap, title: "BCA Student", color: "from-primary to-secondary" },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <Card className="glass p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Hi! I'm <span className="font-semibold text-primary">Sajid Inamdar</span>, an aspiring 
              AI/ML Developer and Cybersecurity Enthusiast. I'm passionate about exploring new technologies, 
              solving real-world problems using AI, and learning ethical hacking to strengthen digital security.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Currently, I'm pursuing my <span className="font-semibold text-secondary">BCA at the University of Mysore</span>, 
              and I enjoy building innovative projects that combine AI, web development, and automation. 
              I love experimenting with new tools and frameworks, and my goal is to create impactful 
              solutions in the fields of Artificial Intelligence and Cybersecurity.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, I enjoy researching new technologies and staying updated with the 
              latest trends in AI, machine learning, and cybersecurity.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {highlights.map(({ icon: Icon, title, color }, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`} />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium text-center">{title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;