"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className=" flex items-center justify-center relative overflow-hidden "
    >
      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute w-full inset-0 bg-gradient-to-r from-background via-background/100 to-transparent hidden lg:block"></div>

      <div className="w-full h-fit  flex flex-col lg:flex-row relative max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="flex-1 mt-[8rem] relative flex items-center justify-center order-2 lg:order-1">
          {/* Floating elements - only show on desktop */}
          <div className="absolute inset-0 overflow-hidden hidden lg:block">
            <div className="absolute top-20 left-[30rem]  animate-float">
              <Code className="h-8 w-8 text-accent/30" />
            </div>
            <div className="absolute top-40 left-[35rem] animate-bounce-slow">
              <Sparkles className="h-6 w-6 text-accent/40" />
            </div>
            <div
              className="absolute bottom-40 left-1/4 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-4 h-4 bg-accent/20 rounded-full" />
            </div>
          </div>

          <div className="relative z-30 px-4 sm:px-8 lg:px-16 max-w-2xl w-full text-center lg:text-left">
            <div className="space-y-6 pb-[4rem]">
              <div className="space-y-4">
                <p className="text-accent text-base sm:text-lg font-medium animate-bounce-slow">
                  Hello, I'm
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="text-accent">Sostene</span>
                  <br />
                  <span className="text-white">BANANAYO</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/90 mb-4">
                  Computer & Software Engineer
                </h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Full Stack Developer with expertise in modern web
                  technologies. Graduate from University of Rwanda with hands-on
                  experience through Andela Technical Leadership Program.
                  Specialized in React, Node.js, and creating scalable software
                  solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold bg-transparent border-2"
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Portfolio
                </Button>
              </div>

              <div className="pt-8 flex justify-center lg:justify-start">
                <ArrowDown className="h-6 w-6 text-accent animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative order-1 lg:order-2 min-h-[300px] lg:min-h-full">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center lg:-ml-16">
              <div className="text-accent/40 text-center relative z-30">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <Code className="w-16 h-16 sm:w-24 sm:h-24 text-accent/60" />
                </div>
                <p className="text-base sm:text-lg">Your Image Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
