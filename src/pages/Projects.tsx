import { Badge } from "@/components/ui/badge";
import {
  Database,
  Server,
  Code2,
  Gamepad2,
  BarChart4,
  ClipboardList,
  Boxes,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";

const ProjectCard = ({ project, index }: any) => (
  <div
    className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-[0_35px_120px_-45px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_45px_180px_-50px_rgba(0,0,0,0.9)] ${project.hoverBorder} animate-slide-in-bottom`}
    style={{ transformStyle: "preserve-3d", animationDelay: `${index * 0.2}s` }}
  >
    
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
        animation: slideInBottom 0.8s ease-out forwards;
      }
    `}</style>
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-80 blur-2xl" />
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-14 h-14 rounded-3xl flex items-center justify-center ${project.iconBg} group-hover:scale-110 transition-transform`}
        >
          <project.icon className={`w-7 h-7 ${project.iconColor}`} />
        </div>
        <span className="text-muted-foreground font-mono text-sm border border-white/10 px-3 py-1 rounded-2xl bg-white/5">
          {project.year}
        </span>
      </div>

      <h3
        className={`text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}
      >
        {project.title}
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech: string, techIndex: number) => (
          <Badge
            key={techIndex}
            variant="secondary"
            className="bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 transition-colors"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="space-y-3 pt-6 border-t border-border/50">
        <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Code2 className="w-4 h-4" /> Key Highlights
        </h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight: string, hIndex: number) => (
            <li
              key={hIndex}
              className="flex items-start gap-2 text-sm text-gray-400"
            >
              <span
                className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${project.color}`}
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website (3D Interactive)",
      year: "DEC 2025",
      description:
        "Built an interactive 3D personal portfolio website featuring animated 3D shapes, real-time typing effects, smooth scroll animations, comprehensive education timeline, and skill showcases. Showcases 3D web development expertise with modern dark theme and glassmorphic design.",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind CSS", "R3F", "Drei"],
      highlights: [
        "3D animated shapes using Three.js (spheres, torus, cones, cylinders, knots)",
        "Real-time typing effect for role descriptions with auto-cycle rotation",
        "Smooth entrance animations (slide-in from bottom/left) with staggered delays",
        "Interactive profile card with rotating animated rings and glowing effects",
        "Comprehensive skills section (Frontend, Backend, Tools, Languages)",
        "Responsive design with mobile-first approach and cross-platform compatibility",
      ],
      icon: Boxes,
      color: "from-cyan-500 to-purple-500",
      hoverBorder: "hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
    },
    {
      title: "Job Application Tracker (Full Stack Web App)",
      year: "FEB 2026",
      description:
        "Developed a full-stack job application tracking system using Next.js and Firebase, enabling users to manage applications and monitor their progress in real-time with an intuitive and responsive interface.",
      technologies: ["Next.js", "Firebase", "Shadcn UI", "Tailwind CSS"],
      highlights: [
        "Implemented real-time application tracking with status updates (Applied, Interview, Offer, Rejected)",
        "Integrated Firebase for authentication, database storage, and live data synchronization",
        "Designed a clean and responsive UI using Tailwind CSS for seamless user experience",
        "Built dynamic forms to add, update, and manage job applications efficiently",
        "Ensured data consistency and performance with optimized Firebase queries",
      ],
      icon: ClipboardList,
      color: "from-cyan-500 to-yellow-500",
      hoverBorder: "hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
    },
    {
      title: "Sales Analytics Dashboard (Full Stack Web App)",
      year: "FEB 2026",
      description:
        "Developed a full-stack sales analytics dashboard using React, Node.js, and MongoDB to visualize sales data and performance metrics. Implemented real-time data updates, user authentication, and responsive design for cross-platform compatibility.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      highlights: [
        "Real-time data visualization with Chart.js",
        "User authentication and authorization with JWT",
        "Designed RESTful APIs using Express.js and MongoDB to manage sales, users, and revenue data.",
        "Added advanced filtering (date range, category, status) with proper loading and error handling.",
      ],
      icon: BarChart4,
      color: "from-blue-500 to-pink-500",
      hoverBorder: "hover:border-purple-500/50",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      title: "Memory Match Game",
      year: "JAN 2026",
      description:
        "Developed an interactive Memory Card Game using JavaScript, HTML, and CSS, featuring smart shuffle logic to prevent adjacent matches, move counter for performance tracking. Implemented responsive UI with smooth card interactions to enhance gameplay experience.",
      technologies: ["HTML", "JavaScript", "CSS"],
      highlights: [
        "Smart shuffle algorithm to prevent adjacent matches",
        "Responsive card grid with flip animations",
        "Minimum moves with match tracking",
        "Move counter for performance tracking",
      ],
      icon: Gamepad2,
      color: "from-green-500 to-amber-500",
      hoverBorder: "hover:border-green-500/50",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
    },
    {
      title: "Project Management System",
      year: "MAY 2025",
      description:
        "Built a role-based project management portal for efficient task allocation with secure authentication and an interactive dashboard. Reduced task delays by 35%.",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
      highlights: [
        "Role-based access control",
        "35% reduction in task delays",
        "Interactive dashboard",
      ],
      icon: Database,
      color: "from-orange-500 to-green-500",
      hoverBorder: "hover:border-orange-500/50",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
    },
    {
      title: "Train Ticket Reservation System",
      year: "MAY 2024",
      description:
        "Designed and developed a comprehensive ticket reservation system with form validation and automated booking summaries. Improved booking efficiency by 40% with zero duplicate entries.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      highlights: [
        "40% improvement in booking efficiency",
        "100% accurate data storage",
        "Automated booking summaries",
      ],
      icon: Server,
      color: "from-cyan-500 to-emerald-500",
      hoverBorder: "hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
    },
  ];

  return (
    <section id="projects" className="relative py-24 min-h-screen overflow-hidden bg-[#040613] text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 12], fov: 32 }}>
            <ambientLight intensity={0.35} />
            <directionalLight position={[5, 5, 5]} intensity={1.1} />
            <pointLight position={[-5, -4, -5]} intensity={0.8} color="#06b6d4" />
            <pointLight position={[5, 4, 5]} intensity={0.6} color="#a855f7" />
            <Stars radius={50} depth={30} count={1500} factor={4} saturation={0.6} fade speed={0.5} />
            <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.8}>
              <mesh position={[-3.5, 1.5, 0]} rotation={[0.4, 0.8, 0]}>
                <icosahedronGeometry args={[1.1, 0]} />
                <meshStandardMaterial
                  color="#8b5cf6"
                  emissive="#7c3aed"
                  metalness={0.55}
                  roughness={0.18}
                />
              </mesh>
            </Float>
            <Float speed={1.1} rotationIntensity={0.3} floatIntensity={1.4}>
              <mesh position={[3.2, -1.3, -0.5]} rotation={[0.3, 0.5, 0.2]}>
                <torusGeometry args={[1.2, 0.32, 24, 64]} />
                <meshStandardMaterial
                  color="#14b8a6"
                  emissive="#0f766e"
                  metalness={0.45}
                  roughness={0.22}
                />
              </mesh>
            </Float>
            <Float speed={1.4} rotationIntensity={0.2} floatIntensity={1.3}>
              <mesh position={[0, -2.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[26, 14]} />
                <meshStandardMaterial color="#020617" opacity={0.45} transparent />
              </mesh>
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
          </Canvas>
        </Suspense>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications I've built to solve practical problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <img
            src="https://ghchart.rshah.org/revathi-0312"
            alt="GitHub Contribution Chart"
            className="rounded-3xl w-full max-w-2xl border border-white/10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
