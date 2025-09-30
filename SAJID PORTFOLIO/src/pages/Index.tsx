import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Sajid Inamdar - AI/ML Developer & Cybersecurity Enthusiast | Portfolio";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Sajid Inamdar's portfolio - AI/ML Developer and Cybersecurity Enthusiast. Explore innovative projects in artificial intelligence, machine learning, web development, and ethical hacking.");
    }
    
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sajid Inamdar",
      "jobTitle": "AI/ML Developer & Cybersecurity Enthusiast",
      "url": window.location.href,
      "sameAs": [
        "https://github.com/sajid880087",
        "https://www.linkedin.com/in/sajid-inamdar-20a725355",
        "https://instagram.com/sajid__8080"
      ],
      "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Web Development", "Python", "Flask", "FastAPI"],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Mysore"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-4 text-center border-t border-border/20">
        <p className="text-sm text-muted-foreground">
          © 2024 Sajid Inamdar. Built with passion and code.
        </p>
      </footer>
    </div>
  );
};

export default Index;
