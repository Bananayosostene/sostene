import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "GraphQL",
  ];

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and beautiful user
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-background border-none shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative">
                    <Image
                      src="/avatar.png"
                      alt="Sostene BANANAYO"
                      width={120}
                      height={120}
                      className="rounded-full animate-float"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-card animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      Sostene BANANAYO
                    </h3>
                    <p className="text-accent font-medium">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-card-foreground leading-relaxed mb-6">
                  I&apos;m a passionate software developer with over 5 years of
                  experience in building scalable web applications. I specialize
                  in modern JavaScript frameworks and have a strong background
                  in both frontend and backend development. I love turning
                  complex problems into simple, beautiful, and intuitive
                  solutions.
                </p>

                <p className="text-card-foreground leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through technical writing and mentoring.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-background border-none">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-card-foreground mb-6">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-none">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-card-foreground mb-4">
                  Experience
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-accent pl-4">
                    <h5 className="font-semibold text-card-foreground">
                      Senior Full Stack Developer
                    </h5>
                    <p className="text-accent text-sm">
                      TechCorp Inc. • 2022 - Present
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Leading development of enterprise web applications using
                      React, Node.js, and AWS.
                    </p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h5 className="font-semibold text-card-foreground">
                      Frontend Developer
                    </h5>
                    <p className="text-muted-foreground text-sm">
                      StartupXYZ • 2020 - 2022
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Built responsive web applications and improved user
                      experience metrics by 40%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
