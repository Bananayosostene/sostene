"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT ME", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "GET IN TOUCH", href: "#contact" },
    { name: "BLOGS", href: "#blog", highlight: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block">
            <div className="flex items-center bg-background backdrop-blur-sm rounded-full px-6 py-3 space-x-1">
              {/* Profile Image */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600">
                  <Image
                    src="/imgs/profile.svg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Navigation Items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-15 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    item.highlight
                      ? "bg-[#] text-white hover:bg-[#]"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
                <img
                  src="/api/placeholder/40/40"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  item.highlight
                    ? "bg-yellow-500/90 text-black hover:bg-yellow-400"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
