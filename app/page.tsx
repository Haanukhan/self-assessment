"use client";

import { useState, useEffect } from "react";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LockIcon, Sparkles, Key, UserPlus, ShieldCheck } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Interactive glow effect */}
      <div
        className="absolute bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transition-all duration-300 ease-in-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: isHovering ? "400px" : "300px",
          height: isHovering ? "400px" : "300px",
        }}
      ></div>

      <Card
        className="w-full max-w-md bg-black/40 backdrop-blur-md shadow-2xl border-t border-l border-white/20"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <CardContent className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur"></div>
              <div className="relative bg-black rounded-full p-4">
                <LockIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mt-4">
              Authentication
            </h1>
            <p className="text-purple-200">Secure. Seamless. Spectacular.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-white/80">
            <div className="space-y-2">
              <Key className="w-8 h-8 mx-auto text-pink-400" />
              <p className="text-xs">Robust Security</p>
            </div>
            <div className="space-y-2">
              <UserPlus className="w-8 h-8 mx-auto text-purple-400" />
              <p className="text-xs">Easy Onboarding</p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="w-8 h-8 mx-auto text-indigo-400" />
              <p className="text-xs">Data Protection</p>
            </div>
          </div>

          <LoginButton>
            <Button
              size="lg"
              className="mt-5 w-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" /> Let's Start
            </Button>
          </LoginButton>
        </CardContent>
      </Card>
    </main>
  );
}
