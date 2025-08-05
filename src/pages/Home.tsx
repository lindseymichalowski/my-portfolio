import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <section className="relative w-screen h-screen bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('/images/Hero_PalmTrees_BlackWhite2.jpg')" }}></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="font-black text-5xl md:text-7xl lg:text-8xl text-green-500 tracking-wide drop-shadow-lg">
                    LINDSEY MICHALOWSKI
                </h1>
                <p className="text-lg md:text-2xl uppercase mt-4">
                    Where engineering excellence meets business outcomes.
                </p>
            </div>
            <nav className="absolute top-6 right-6 z-20 space-x-6 text-base md:text-lg font-medium tracking-wide">
                <Link to="/resume" className="text-white hover:text-green-500 transition-colors duration-200">Resume</Link>
                <Link to="/projects" className="text-white hover:text-green-500 transition-colors duration-200">Projects</Link>
                <Link to="/create" className="text-white hover:text-green-500 transition-colors duration-200">Create</Link>
                <Link to="/contact" className="text-white hover:text-green-500 transition-colors duration-200">Contact Me</Link>
            </nav>
            <div className="absolute top-6 left-6 z-20">
                <Link to="/">
                    <img
                        src="/images/LM_Logo.png"
                        alt="Logo"
                        className="w-10 h-10 md:w-12 md:h-12 object-contain hover:opacity-80 transition-opacity duration-200"
                    />
                </Link>
            </div>

            <footer className="bg-black text-white px-6 py-8 mt-16">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
                    {/* Name / Logo */}
                    <div className="flex items-center gap-3">
                        <img src="/images/LM_Logo.png" alt="Logo" className="w-8 h-8" />
                        <span className="font-semibold text-lg tracking-wide">Lindsey Michalowski</span>
                    </div>

                    {/* Nav links */}
                    <div className="space-x-6 text-sm md:text-base">
                        <Link to="/resume" className="hover:text-green-500 transition">Resume</Link>
                        <Link to="/projects" className="hover:text-green-500 transition">Projects</Link>
                        <Link to="/contact" className="hover:text-green-500 transition">Contact</Link>
                    </div>

                    {/* Social / contact */}
                    <div className="text-sm space-y-1">
                        <a href="mailto:lindsey.michalowski@gmail.com" className="text-green-500 hover:underline">lindsey.michalowski@gmail.com</a><br />
                    </div>
                </div>

                {/* Divider + Copyright */}
                <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Lindsey Michalowski. All rights reserved.
                </div>
            </footer>
        </section>
    );
};

export default Home;
