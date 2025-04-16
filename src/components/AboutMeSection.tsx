"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section className="py-12 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texte */}
          <div className="text-center md:text-left">
            <p className="mb-4">
              I am an SAP ABAP developer with a passion for Web3 and AI. I am currently studying engineering and
              exploring the intersection of traditional enterprise systems with cutting-edge decentralized technologies.
            </p>
            <p className="mb-4">
              My interests include blockchain, decentralized applications, machine learning, and the potential of AI to
              transform industries. I am always eager to learn new technologies and contribute to innovative projects.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button>
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/500/300"
              alt="About Me"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
