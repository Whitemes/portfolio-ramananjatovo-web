"use client";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-24 text-center">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Johnny 👋</h1>
        <p className="text-lg text-muted-foreground mb-8">
          SAP ABAP Developer | Web3 & AI Enthusiast
        </p>
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
