"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-24 text-center w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Typing title */}
        <h1 className="text-4xl font-bold mb-4">
          <img
            src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!+👋;+I'm+Johnny+RAMANANJATOVO!;"
            alt="Typing SVG"
            className="mx-auto"
          />
        </h1>

        {/* Subtitle */}
        <h3 className="text-lg text-muted-foreground mb-6">
          A passionate second-year apprentice engineer from France 🇫🇷
        </h3>
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

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Button>
            See Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
};
