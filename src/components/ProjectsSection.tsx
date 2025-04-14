"use client";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SAP Development",
    description: "Worked on ABAP reports and integration with SAP CPI.",
    technos: ["ABAP", "SAP CPI"],
    icon: "Briefcase",
    link: "https://github.com/example/sap",
  },
  {
    id: 2,
    title: "Web3 Game",
    description: "Developed a decentralized game using React and Solidity.",
    technos: ["React", "Solidity", "Ethers.js"],
    icon: "Game",
    link: "https://github.com/example/web3game",
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "Created an AI chatbot using NextJS and GenKit.",
    technos: ["NextJS", "GenKit", "Typescript"],
    icon: "Chat",
    link: "https://github.com/example/aichatbot",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="glassmorphism-card">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technos.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
