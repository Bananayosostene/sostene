import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/Bananayosostene?tab=repositories",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/task-management-kanban.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/Bananayosostene?tab=repositories",
    },
    {
      title: "AI Chat Application",
      description:
        "An intelligent chatbot application powered by OpenAI API with conversation history and context awareness.",
      image: "/ai-chatbot-interface.png",
      technologies: ["React", "Python", "OpenAI API", "FastAPI"],
      liveUrl: "#",
      githubUrl: "https://github.com/Bananayosostene?tab=repositories",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "/weather-dashboard-interface.png",
      technologies: ["Vue.js", "Express", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/Bananayosostene?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-background border-none hover:border-accent/50 transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-gray-500 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-500 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
