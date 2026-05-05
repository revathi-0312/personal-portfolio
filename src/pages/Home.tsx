import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImg from "../assets/profile.png";


const AnimatedShape = ({ position, rotation, color, geometry }: any) => (
  <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
    <mesh position={position} rotation={rotation}>
      {geometry === "box" && <boxGeometry args={[0.8, 0.8, 0.8]} />}
      {geometry === "sphere" && <sphereGeometry args={[0.6, 32, 32]} />}
      {geometry === "torus" && <torusGeometry args={[0.7, 0.2, 16, 32]} />}
      <meshStandardMaterial color={color} emissive={color} metalness={0.6} roughness={0.2} wireframe={false} />
    </mesh>
  </Float>
);

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
        setText(current.substring(0, next));
        return next;
      });
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#040613] text-white flex items-center justify-center">
      {/* Animated 3D Background - Tech Shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 14], fov: 40 }}>
            <ambientLight intensity={0.35} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-8, 5, 0]} intensity={0.6} color="#06b6d4" />
            <pointLight position={[8, -5, 0]} intensity={0.6} color="#a855f7" />

            {/* Animated Tech Shapes */}
            <AnimatedShape position={[-5, 4, -3]} rotation={[0.5, 1, 0.2]} color="#06b6d4" geometry="sphere" />
            <AnimatedShape position={[5, 3, -2]} rotation={[0.3, 0.5, 0.1]} color="#a855f7" geometry="box" />
            <AnimatedShape position={[-3, -4, -1]} rotation={[0.2, 0.8, 0]} color="#ec4899" geometry="torus" />
            <AnimatedShape position={[4, -3, -2]} rotation={[0.6, 0.3, 0.4]} color="#10b981" geometry="sphere" />
            <AnimatedShape position={[0, 5, -3]} rotation={[0.4, 0.6, 0.2]} color="#f59e0b" geometry="box" />

            {/* Stars Background */}
            <Stars radius={90} depth={60} count={2200} factor={5.5} saturation={0.75} fade speed={0.6} />

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left Side - Text Content - Animate from Left */}
          <div className="space-y-8 animate-slide-in-left">
            <style>{`
              @keyframes slideInLeft {
                from {
                  opacity: 0;
                  transform: translateX(-100px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              .animate-slide-in-left {
                animation: slideInLeft 0.8s ease-out forwards;
              }
            `}</style>

            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Revathi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 h-12 font-semibold">
                {text}<span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I design and develop 3D web interfaces and production‑ready full‑stack app.
              With a mix of full‑stack development and data analytics, I build products that not only look good but also tell clear stories through data.            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/revathi-0312"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:text-cyan-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/revathi-anjana-025684239/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-blue-400" />
              </a>
              <a
                href="mailto:revathianjana12@gmail.com"
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:text-purple-400" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-semibold group"
              >
                <a href="/Projects" className="flex items-center gap-2">
                  View Projects
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:bg-white/10 text-white font-semibold"
              >
                <a href="/contact">Contact Me</a>

              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image - Animate from Bottom */}
          <div className="relative flex justify-center items-center animate-slide-in-bottom">
            <style>{`
              @keyframes slideInBottom {
                from {
                  opacity: 0;
                  transform: translateY(100px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-slide-in-bottom {
                animation: slideInBottom 1s ease-out forwards;
                animation-delay: 0.3s;
              }
            `}</style>

            {/* Glowing Orb Background - Always Visible */}
            <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl opacity-100" />

            {/* Profile Image Container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 hover:border-cyan-500/70 transition-all duration-500 shadow-2xl hover:shadow-[0_0_80px_rgba(6,182,212,0.5)] z-20">

              {/* Image */}
              <img
                src={profileImg}
                alt="Revathi"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Animated Ring - Always Visible */}
            <div className="absolute w-96 h-96 rounded-full border-2 border-cyan-500/50 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute w-80 h-80 rounded-full border-2 border-purple-500/40 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
