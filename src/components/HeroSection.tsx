"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 text-center w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Typing title */}
        <h1 className="text-4xl font-bold mb-4">
          <img
            src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!+%F0%9F%91%8B;+I'm+Johnny+RAMANANJATOVO!"
            alt="Typing SVG"
            className="mx-auto"
          />
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground mb-8">
          SAP ABAP Developer | Web3 & AI Enthusiast
        </p>

        {/* Coding GIF */}
        <div className="flex justify-center mb-8">
          <img
            src="https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=ecf05e47nxxyc03qpgpn3b0jhzh308j7l6hpf8cq0t96j0kf&rid=giphy.gif&ct=g"
            alt="Coding GIF"
            className="rounded-md shadow-md w-[300px] h-[180px] object-cover"
          />
        </div>

        {/* Skills Logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-8 h-8" alt="Java" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JS" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-8 h-8" alt="Docker" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-8 h-8" alt="GitHub" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="w-8 h-8" alt="Linux" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" className="w-8 h-8" alt="WordPress" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button>
            See Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
