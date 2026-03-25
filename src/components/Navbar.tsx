import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path
            ? "text-blue-400 font-semibold"
            : "text-gray-300 hover:text-white transition-colors duration-300";
    };

    return (
        <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                >
                    Revathi
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    <Menu size={24} />
                </button>

                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Menu */}
                <div
                    className={`
                        ${isOpen ? "block" : "hidden"}
                        absolute top-16 right-4 w-56
                        bg-slate-900 border border-white/10
                        rounded-xl shadow-lg
                        md:static md:block md:w-auto md:bg-transparent md:border-0 md:shadow-none
                    `}
                >
                    <ul className="flex flex-col gap-3 p-4 md:flex-row md:gap-8 md:p-0">

                        <li>
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md ${isActive("/")} hover:bg-white/10`}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md ${isActive("/about")} hover:bg-white/10`}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/projects"
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md ${isActive("/projects")} hover:bg-white/10`}
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/intern"
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md ${isActive("/intern")} hover:bg-white/10`}
                            >
                                Experience
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md ${isActive("/contact")} hover:bg-white/10`}
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}