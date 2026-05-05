import { BookOpen, Trophy, Award, Code2, Database} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { Zap, Target } from "lucide-react";

const animationStyles = `
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
    animation: slideInBottom 0.8s ease-out forwards;
  }
`;

const About = () => {
  const skills = [
    { name: "Frontend", items: ["HTML", "React", "TypeScript", "Tailwind CSS", "Next.js", "ShadCN UI", "JavaScript"] },
    { name: "Backend", items: ["PHP", "MySQL", "Firebase"] },
    { name: "Tools", items: ["Git", "VS Code", "Vercel", "Tableau", "Power BI"] },
    { name: "Languages", items: ["Python", "C", "Java (Basics)"] },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Mepco Schlenk Engineering College, Sivakasi",
      year: "2024 – 2026",
      details: "CGPA: 8.56 (3rd Sem) – Pursuing",
      icon: BookOpen,
    },
    {
      degree: "B.Com with Computer Applications",
      school: "Sri S. Ramasamy Naidu Memorial College, Sattur",
      year: "2021 – 2024",
      details: "CGPA: 8.51",
      icon: BookOpen,
    },
    {
      degree: "Class XII",
      school: "Sri Kalaivani Matric Hr. Sec. School",
      year: "2021",
      details: "94%",
      icon: Award,
    },
    {
      degree: "Class X",
      school: "Sri Kalaivani Matric Hr. Sec. School",
      year: "2019",
      details: "90%",
      icon: Award,
    },
  ];

  const certifications = [
    "Internet of Things – NPTEL",
    "Programming in Java – NPTEL",
    "Java (Basics) – HackerRank",
    "SQL (Intermediate) – HackerRank",
    "Explore Machine Learning Using Python – Infosys Springboard",
    "English for Technical Professionals – IEEE",
  ];

  const achievements = [
    "Organized the Treasure Hunt event at Gyanmitra (College Fest)",
    "State-level Throwball Player (District & State)",
    "App Development event – Kalasalingam Academy (2025)",
    "AI–Conclave - Mepco Schlenk Engineering College (2025)",
    "Data Analytics MasterClass by NoviTech (2025)",
    "Power BI Bootcamp by NoviTech (Dec 2025)",
  ];

  return (
    <>
      <style>{animationStyles}</style>
      <section id="about" className="relative min-h-screen overflow-hidden bg-[#040613] text-white py-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 14], fov: 32 }}>
              <ambientLight intensity={0.35} />
              <directionalLight position={[5, 5, 5]} intensity={1.1} />
              <pointLight position={[-7, 3, 5]} intensity={0.5} color="#06b6d4" />
              <pointLight position={[7, -3, 5]} intensity={0.5} color="#a855f7" />
              <Stars radius={60} depth={40} count={1800} factor={4.5} saturation={0.65} fade speed={0.6} />
              <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1.5}>
                <mesh position={[-3, 1.5, 0]} rotation={[0.2, 0.8, 0]}>
                  <octahedronGeometry args={[1.2, 0]} />
                  <meshStandardMaterial color="#14b8a6" emissive="#0f766e" metalness={0.5} roughness={0.2} />
                </mesh>
              </Float>
              <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1.3}>
                <mesh position={[3.5, -1, 0]} rotation={[0.4, 0.5, 0.1]}>
                  <tetrahedronGeometry args={[1.3, 0]} />
                  <meshStandardMaterial color="#f59e0b" emissive="#d97706" metalness={0.45} roughness={0.25} />
                </mesh>
              </Float>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.35} />
            </Canvas>
          </Suspense>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Me</span>
            </h2>
          </div>

          {/* Main About Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-in-bottom">
              <div className="flex items-center gap-4 mb-4">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold">Developer</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Final-year MCA student and Full Stack Developer Intern with hands-on experience in building production-grade web applications using Next.js, React, Tailwind CSS, and Convex.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold">Creative</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I combine modern front-end frameworks like React/Next.js with scalable backend services to build interfaces that feel effortless and systems that stay reliable in production.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-in-bottom" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold">Focused</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I am focused on writing maintainable code, iterating with feedback, and delivering features end-to-end—from idea and prototype to deployment and monitoring.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 animate-slide-in-bottom">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
              {skills.map((skillGroup, index) => (
                <div key={index} className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400">{skillGroup.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs hover:bg-white/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 animate-slide-in-bottom">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div key={index} className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6 hover:shadow-lg hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-sm text-cyan-400 mb-2">{edu.school}</p>
                        <p className="text-xs text-gray-400 mb-1">{edu.year}</p>
                        <p className="text-sm text-gray-400">{edu.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-slide-in-bottom" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Trophy className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-bottom" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-2xl font-bold mb-6">Achievements & Workshops</h3>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Virtual Experience */}
          <div className="max-w-6xl mx-auto mt-8">
            <h3 className="text-2xl font-bold mb-6 animate-slide-in-bottom">Virtual Experience</h3>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-lg animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4 mb-4">
                <Database className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Deloitte Australia – Data Analytics Job Simulation</h4>
                  <p className="text-sm text-gray-400 mb-4">January 2026</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>Completed a data analytics simulation focused on forensic technology and business intelligence use cases</li>
                <li>Analyzed and classified structured datasets using Excel to derive business insights</li>
                <li>Built an interactive Tableau dashboard to visualize key performance indicators</li>
                <li>Applied data interpretation techniques to simulate real-world consulting problem-solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
