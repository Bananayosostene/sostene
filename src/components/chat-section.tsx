"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Mail, Phone, MapPin, X } from "lucide-react";
import Image from "next/image";

export default function ChatSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Sostene. How can I help you today?",
      sender: "bot",
      time: "10:30 AM",
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user" as const,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll get back to you soon.",
          sender: "bot" as const,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-background border-none">
              <CardHeader>
                <CardTitle className="text-gray-500">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Email</h4>
                      <p className="text-gray-400">sbananayo98@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Phone</h4>
                      <p className="text-gray-400">+250788724867</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:col-span-2">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Location</h4>
                      <p className="text-gray-400">Nyarugenge, Kigali</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Online Status Card */}
          <div className="space-y-6">
            <Card className="bg-background border-none flex items-center justify-center">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Image
                      src="/avatar.png"
                      alt="Sostene BANANAYO"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500">
                      Sostene BANANAYO
                    </h4>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="secondary"
                        className="bg-green-500/10 text-green-500 border-green-500/20"
                      >
                        Online
                      </Badge>
                      <button
                        onClick={() => setIsChatOpen(true)}
                        className=" bg-transparent border-none hover:text-accent/90 "
                      >
                        <MessageCircle className="h-5 w-10 mr-2 mt-2 text-accent animate-bounce" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-gray-490 text-sm mb-4">
                  Usually responds within a short time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <Button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg animate-bounce-slow z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-background border border-border rounded-lg shadow-xl z-50 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/avatar.png"
                  alt="Sostene BANANAYO"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-card" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-500 text-sm">
                  Sostene BANANAYO
                </h4>
                <p className="text-green-500 text-xs">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsChatOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t border-border"
          >
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
