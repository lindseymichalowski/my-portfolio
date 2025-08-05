import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-black text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url('/images/Hero_PalmTrees_BlackWhite2.jpg')" }}
            ></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="font-black text-5xl md:text-7xl lg:text-8xl text-green-500 tracking-wide drop-shadow-lg">
                    LINDSEY MICHALOWSKI
                </h1>
                <p className="text-lg md:text-2xl uppercase mt-4">
                    Where engineering excellence meets business outcomes.
                </p>
                <div className="mt-8 flex gap-4">
                    <span className="text-green-500 text-2xl animate-bounce">↓</span>
                    <span className="text-green-500 text-2xl animate-bounce delay-200">↓</span>
                    <span className="text-green-500 text-2xl animate-bounce delay-400">↓</span>
                </div>
            </div>

            <nav className="absolute top-6 right-6 z-20 space-x-6 text-base md:text-lg font-medium tracking-wide">
                <Link to="/resume" className="text-white hover:text-green-500 transition-colors duration-200">Resume</Link>
                <Link to="/create" className="text-white hover:text-green-500 transition-colors duration-200">Create</Link>
                <Link to="/contact" className="text-white hover:text-green-500 transition-colors duration-200">Contact Me</Link>
            </nav>
        </section>
    );
};

export default Hero;
