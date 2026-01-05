import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white transition-colors duration-300";
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Revathi
                    </span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link to="/" className={`block py-2 px-3 md:p-0 ${isActive("/")}`} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block py-2 px-3 md:p-0 ${isActive("/about")}`}>About</Link>
                        </li>
                        <li>
                            <Link to="/projects" className={`block py-2 px-3 md:p-0 ${isActive("/projects")}`}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/intern" className={`block py-2 px-3 md:p-0 ${isActive("/intern")}`}>Experience</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`block py-2 px-3 md:p-0 ${isActive("/contact")}`}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
