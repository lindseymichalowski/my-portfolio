import { Link } from 'react-router-dom';

const Contact = () => {
    return (

        <div className="w-screen bg-black text-white">
            {/* HERO: Half-screen intro */}
            <section className="relative h-[50vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('/images/Hero_PalmTrees_BlackWhite2.jpg')" }}
                ></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="font-black text-4xl md:text-6xl text-green-500 tracking-wide drop-shadow-lg">
                        LETS CONNECT!!!
                    </h1>
                    <p className="text-lg md:text-xl uppercase mt-4 max-w-xl">
                        Open to projects, partnerships, or just a great conversation.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <span className="text-green-500 text-2xl animate-bounce">↓</span>
                        <span className="text-green-500 text-2xl animate-bounce delay-200">↓</span>
                        <span className="text-green-500 text-2xl animate-bounce delay-400">↓</span>
                    </div>
                </div>

                {/* Nav + Logo */}
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
            </section>

            <section className="px-6 py-12 bg-white text-black max-w-4xl mx-auto space-y-12">
                <section className="px-6 py-12 bg-white text-black max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
                        <p className="text-lg text-gray-600">
                            Whether you have a project in mind, want to collaborate, or just want to say hi — I’d love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        {/* Email */}
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
                            <p className="text-sm text-gray-500 uppercase">Email</p>
                            <a href="mailto:lindsey.michalowski@gmail.com" className="text-green-600 text-lg font-medium hover:underline">
                                lindsey.michalowski@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
                            <p className="text-sm text-gray-500 uppercase">Phone</p>
                            <p className="text-lg font-medium text-gray-800">(847) 312-0386</p>
                        </div>

                        {/* LinkedIn */}
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
                            <p className="text-sm text-gray-500 uppercase">LinkedIn</p>
                            <a
                                href="https://linkedin.com/in/lindseymichalowski"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 text-lg font-medium hover:underline"
                            >
                                linkedin.com/in/lindseymichalowski
                            </a>
                        </div>

                        {/* GitHub */}
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
                            <p className="text-sm text-gray-500 uppercase">GitHub</p>
                            <a
                                href="https://github.com/lindseymichalowski"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 text-lg font-medium hover:underline"
                            >
                                github.com/lindseymichalowski
                            </a>
                        </div>

                        {/* Calendly */}
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200 col-span-1 md:col-span-2">
                            <p className="text-sm text-gray-500 uppercase">Book a Call</p>
                            <a
                                href="https://calendly.com/lindseymichalowski"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 text-lg font-medium hover:underline"
                            >
                                calendly.com/lindseymichalowski
                            </a>
                        </div>
                    </div>
                </section>



            </section>


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
        </div>
    );
};

export default Contact;
