import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:angelo@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-500 hover:text-gray-600 transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="flex gap-4 items-center justify-center">
            <p className="text-gray-500 text-sm">
              © 2024 Sostene BANANAYO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
