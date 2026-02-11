import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import profilePic from "../assets/profile.png";

export default function Home() {
  const roles = [
    "Full Stack Developer Intern",
    "Data Analytics Enthusiast",
    "Next.js Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

 useEffect(() => {
  const current = roles[index];

  if (!deleting && subIndex === current.length) {
    setTimeout(() => setDeleting(true), 1200);
    return;
  }

  if (deleting && subIndex === 0) {
    setDeleting(false);
    setIndex((prev) => (prev + 1) % roles.length);
    return;
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) => {
      const next = prev + (deleting ? -1 : 1);
      setText(current.substring(0, next)); // ✅ use next value
      return next;
    });
  }, deleting ? 40 : 80);

  return () => clearTimeout(timeout);
}, [subIndex, deleting, index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* Left Content */}
        <div className="text-center md:text-left animate-slide-up">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Revathi
            </span>
          </h1>

          {/* Typing Effect */}
          <h2 className="text-xl md:text-2xl text-primary font-semibold h-8 mb-6">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
            I build scalable, performance-driven web applications using
            Next.js, React, and Tailwind CSS. Passionate about transforming
            data into actionable insights through analytics and visualization.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            <Button
              asChild
              className="px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 transition"
            >
              <Link to="/projects">View My Work</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white"
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-purple-500/30">
              <img
                src={profilePic}
                alt="Revathi"
                className="w-full h-full rounded-full object-cover border-4 border-background"
              />
            </div>
            <div className="absolute bottom-4 right-6 w-5 h-5 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
