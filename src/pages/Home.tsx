import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import profilePic from "../assets/profile.png";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 animate-slide-up">
            <div className="text-center p-8 max-w-4xl mx-auto">
                <div className="mb-8 relative inline-block">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto shadow-lg shadow-purple-500/20">
                        <img
                            src={profilePic}
                            alt="Revathi Anjana"
                            className="w-full h-full rounded-full object-cover border-4 border-background"
                        />
                    </div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background shadow-sm animate-pulse"></div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Revathi</span>
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105">
                        <Link to="/projects">View My Work</Link>
                    </Button>


                    <Button asChild variant="outline" className="px-8 py-6 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-white">
                        <Link to="/contact">Contact Me</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
