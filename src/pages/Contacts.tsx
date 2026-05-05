import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const socials = [
    { icon: Mail, label: "Email", value: "revathianjana12@gmail.com", href: "mailto:revathianjana12@gmail.com" },
    { icon: Github, label: "GitHub", value: "github.com/revathi-0312", href: "https://github.com/revathi-0312" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/revathi-anjana-025684239", href: "https://linkedin.com/in/revathi-anjana-025684239" },
  ];

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden bg-[#040613] text-white py-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 15], fov: 33 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.1} />
            <Stars radius={70} depth={45} count={1900} factor={4.8} saturation={0.68} fade speed={0.55} />
            <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.6}>
              <mesh position={[-4, 1, 0]} rotation={[0.3, 0.7, 0.2]}>
                <dodecahedronGeometry args={[1.1, 0]} />
                <meshStandardMaterial color="#ec4899" emissive="#db2777" metalness={0.55} roughness={0.2} />
              </mesh>
            </Float>
            <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.4}>
              <mesh position={[4, -1.5, 0]} rotation={[0.5, 0.4, 0.1]}>
                <icosahedronGeometry args={[1.2, 0]} />
                <meshStandardMaterial color="#3b82f6" emissive="#1e40af" metalness={0.5} roughness={0.22} />
              </mesh>
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.32} />
          </Canvas>
        </Suspense>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">Touch</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-slate-950/80 hover:bg-slate-950/95 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30">
                  <social.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{social.label}</p>
                  <p className="font-semibold text-white">{social.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <Input
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input
                  placeholder="your@email.com"
                  type="email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <Textarea
                  placeholder="Your message here..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-semibold">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
