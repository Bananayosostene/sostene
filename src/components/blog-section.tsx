"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";

export default function BlogSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for building large-scale React applications that can grow with your team and user base.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/react-code-editor.png",
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging technologies and trends that will shape the future of web development in the coming years.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Technology",
      image: "/futuristic-web-development.png",
    },
    {
      title: "Optimizing Database Performance",
      excerpt:
        "Tips and techniques for improving database performance in production applications with real-world examples.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Database",
      image: "/database-optimization-dashboard.png",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="blog" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-accent">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software development and
            technology
          </p>
        </div>

        {/* Newsletter Subscription */}
        <Card className="bg-background border-none mb-16 overflow-hidden">
          <div className="gradient-accent p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent-foreground flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-accent-foreground" />
                <div className="w-10 h-10 rounded-full bg-accent/40 border-2 border-accent-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-accent-foreground mb-2">
              Subscribe to My Newsletter
            </h3>
            <p className="text-accent-foreground/80 mb-6">
              Get the latest posts and insights delivered directly to your inbox
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-accent-foreground text-accent border-0 flex-1"
                required
              />
              <Button
                type="submit"
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-8"
                disabled={isSubscribed}
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </Button>
            </form>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className="bg-background border-none hover:border-accent/50 transition-all duration-300 group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {post.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-gray-500 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent-foreground hover:bg-accent p-0 h-auto font-medium group/btn"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
