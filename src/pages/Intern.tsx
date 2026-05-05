import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, Code2, Database, Server } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars, Line } from "@react-three/drei";
import { Suspense } from "react";

const TechNode = ({ position, color, size = 0.3 }: any) => (
  <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
    <mesh position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} metalness={0.8} roughness={0.2} />
    </mesh>
  </Float>
);

const Intern = () => {
  const internships = [
    {
      title: "Full Stack Developer Intern",
      company: "ADigiElite",
      duration: "Dec 2025 - Present",
      location: "Hybrid - Dindigul, Tamil Nadu",
      description: "Developed and maintained full-stack web applications using Next.js and Convex, contributing to both frontend and backend development.",
      highlights: [
        "Developing scalable full-stack web applications using React , Next.js 14 and Convex backend",
        "Implementing real-time data synchronization and reactive UI components",
        "Designing modern, responsive user interfaces with Tailwind CSS and Shadcn UI",
        "Optimizing application performance and ensuring type safety with TypeScript",
        "Collaborating with the team to deliver high-quality software solutions"
      ],
      color: "from-cyan-500 to-blue-500",
      iconBg: "bg-cyan-500/10",
      icon: Code2,
    },
  ];

  const techNodes = [
    { pos: [-5, 3, 0], color: "#06b6d4" },
    { pos: [5, 3, 0], color: "#a855f7" },
    { pos: [-3, -2, -2], color: "#ec4899" },
    { pos: [3, -2, -2], color: "#3b82f6" },
    { pos: [0, 5, -3], color: "#10b981" },
    { pos: [0, -4, 1], color: "#f59e0b" },
  ];

  return (
    <section id="internships" className="relative min-h-screen overflow-hidden bg-[#040613] text-white py-24">
      {/* Tech Flow Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.3} />
            <pointLight position={[-5, 3, 5]} intensity={0.8} color="#06b6d4" />
            <pointLight position={[5, 3, 5]} intensity={0.8} color="#a855f7" />
            
            {/* Tech Nodes - Connected Spheres */}
            {techNodes.map((node, i) => (
              <TechNode key={i} position={node.pos} color={node.color} size={0.35} />
            ))}

            {/* Animated Stars Background */}
            <Stars radius={100} depth={60} count={2500} factor={6} saturation={0.8} fade speed={0.8} />

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.25} />
          </Canvas>
        </Suspense>
      </div>

      {/* Content - Now Fully Visible */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 backdrop-blur-sm bg-slate-950/40 py-8 rounded-3xl border border-white/5">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Internships</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Professional experience in full-stack and frontend development</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {internships.map((internship, index) => {
            const IconComponent = internship.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 backdrop-blur-sm p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-3 hover:border-white/20"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-60 blur-2xl group-hover:opacity-80 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${internship.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${internship.color}`}>
                    {internship.title}
                  </h3>

                  {/* Company */}
                  <p className="text-lg font-semibold text-gray-300 mb-4">{internship.company}</p>

                  {/* Meta Info */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6 text-sm text-gray-400 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      {internship.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      {internship.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{internship.description}</p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Database className="w-4 h-4" /> Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {internship.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <span className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${internship.color} group-hover/item:scale-150 transition-transform`} />
                          <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Intern;
