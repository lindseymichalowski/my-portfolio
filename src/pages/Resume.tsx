import { Link } from 'react-router-dom';

const Resume = () => {
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
                        LINDSEY MICHALOWSKI
                    </h1>
                    <p className="text-lg md:text-xl uppercase mt-4 max-w-xl">
                        RESUME
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

            {/* Resume Content */}
            <section className="px-6 py-12 bg-white text-black max-w-4xl mx-auto space-y-12">

                {/* Header + Contact */}
                <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                        Technical Project Manager | Software Development Leader | Aligning Engineering with Strategy
                    </p>
                    <div className="text-sm text-gray-700 mt-3 space-y-1">
                        <p>San Diego, CA</p>
                        <p>
                            <a href="mailto:lindsey.michalowski@gmail.com" className="text-green-600 hover:underline">
                                lindsey.michalowski@gmail.com
                            </a> · (847) 312-0386
                        </p>
                        <p>
                            <a href="https://linkedin.com/in/lindseymichalowski" className="text-green-600 hover:underline">
                                linkedin.com/in/lindseymichalowski
                            </a>
                        </p>
                    </div>
                </section>

                {/* Professional Summary */}
                <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
                    <p className="text-gray-800 text-base leading-relaxed">
                        Technical Project Manager with over 15 years of experience in software development and project leadership.
                        Skilled in managing full lifecycle projects, fostering Agile methodologies, and coordinating cross-functional teams.
                        Successfully led initiatives resulting in improved application performance and streamlined engineering workflows.
                        Proven ability to optimize resources and manage risks while exceeding client expectations. Ready to leverage
                        expertise to drive impactful results and enhance project delivery at any organization.
                    </p>
                </section>


                {/* Core Competencies */}
                <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Core Competencies</h3>
                    <ul className="divide-y divide-gray-200">
                        <li className="py-3">
                            <span className="font-semibold text-gray-800 block">DevOps & Infrastructure</span>
                            <span className="text-gray-600 text-sm">
                                CI/CD pipelines, infrastructure scaling & configuration, system integration, DevOps tooling & planning
                            </span>
                        </li>
                        <li className="py-3">
                            <span className="font-semibold text-gray-800 block">Tools & Platforms</span>
                            <span className="text-gray-600 text-sm">
                                Jira, Confluence, Jira Service Management, Zoho Desk, Microsoft Project, Git, TFS, ITSM platforms
                            </span>
                        </li>
                        <li className="py-3">
                            <span className="font-semibold text-gray-800 block">Security & Compliance</span>
                            <span className="text-gray-600 text-sm">
                                HIPAA/SOC2 environments, data encryption research, Secret-level (DoD) clearance
                            </span>
                        </li>
                        <li className="py-3">
                            <span className="font-semibold text-gray-800 block">Project & Program Management</span>
                            <span className="text-gray-600 text-sm">
                                Full lifecycle project delivery, budget & resource planning, risk/dependency management, SLA & incident response, KPI development, vendor selection
                            </span>
                        </li>
                        <li className="py-3">
                            <span className="font-semibold text-gray-800 block">Agile & Methodologies</span>
                            <span className="text-gray-600 text-sm">
                                Agile (Scrum, Kanban), Waterfall, Agile transformation & coaching, backlog/roadmap ownership, facilitation of standups, retros, planning, and grooming
                            </span>
                        </li>
                        <li className="py-3">
                            <span className="font-semibold text-gray-800 block">Cross-Functional Leadership</span>
                            <span className="text-gray-600 text-sm">
                                Team leadership across QA, engineering, and data; career development & mentoring; stakeholder engagement; client-facing communication; cross-team coordination
                            </span>
                        </li>
                        <li className="py-3">
                            <span className="font-semibold text-gray-800 block">Soft Skills</span>
                            <span className="text-gray-600 text-sm">
                                Strong communicator across technical and non-technical audiences, strategic thinker, process improvement advocate, adaptable team builder, energized by fast-paced environments
                            </span>
                        </li>
                    </ul>
                </section>

                {/* Technical Leadership */}
                <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Technical Leadership</h3>
                    <div className="space-y-8">
                        {/* Technology Partners */}
                        <div>
                            <h4 className="font-bold text-xl">Technical Project Manager</h4>
                            <p className="text-base">Technology Partners Inc</p>
                            <p className="text-sm text-gray-600 mb-2">St Louis, MO, Remote · Feb 2022 – Present</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Lead full lifecycle technical projects—from planning to execution to delivery—across software development, infrastructure upgrades, systems integration, and managed application services</li>
                                <li>Oversee ongoing support and enhancement of live applications, coordinating with clients and engineering teams to manage SLAs, incident response, release planning, and long-term application health.</li>
                                <li>Facilitate Agile ceremonies (standups, planning, retrospectives, backlog grooming) to ensure efficient team collaboration and progress tracking.</li>
                                <li>Coordinate cross-functional teams (engineering, infrastructure, product, business stakeholders) to define project scope and success metrics. Identify project risks, manage budgets, optimize resource allocation, and ensure projects meet business and technical goals.</li>
                                <li>Act as primary stakeholder liaison, providing proactive communication and issue resolution throughout project lifecycles and ongoing support engagements.</li>
                            </ul>
                        </div>

                        {/* Tandem Diabetes */}
                        <div>
                            <h4 className="font-bold text-xl">Technical Program Manager</h4>
                            <p className="text-base">Tandem Diabetes Care</p>
                            <p className="text-sm text-gray-600 mb-2">San Diego, CA · Nov 2020 – Feb 2022</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Managed multi-team engineering programs within the Systems Engineering group.</li>
                                <li>Developed internal tooling and refined processes to streamline engineering workflows and improve productivity.</li>
                                <li>Delivered strategic communication to business stakeholders to align engineering execution with organizational goals.</li>
                            </ul>
                        </div>

                        {/* BCLP */}
                        <div>
                            <h4 className="font-bold text-xl">Product Dev Manager / Engineering Manager</h4>
                            <p className="text-base">Bryan Cave Leighton Paisner</p>
                            <p className="text-sm text-gray-600 mb-2">Remote · Jan 2018 – Nov 2020</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Led a distributed development team across engineering, QA, and data to design scalable applications</li>
                                <li>Directed Agile transformation across 3 teams (22 people), including coaching and rollout of unified methodologies.</li>
                                <li>Partnered with leadership on budget planning, infrastructure scaling, and vendor selection.</li>
                                <li>Championed career growth through structured 1-on-1s, mentoring, and team building.</li>
                                <li>Oversaw technical architecture, DevOps planning, and infrastructure configuration.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Software Development */}
                <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Software Development</h3>
                    <div className="space-y-8">
                        {/* Repeat structure for each job */}
                        <div>
                            <h4 className="font-bold text-xl">Senior Software Engineer</h4>
                            <p className="text-base">Bryan Cave Leighton Paisner</p>
                            <p className="text-sm text-gray-600 mb-2">St. Louis, MO · Aug 2013 – Dec 2017</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Built client communication, task, and workflow applications using C#.NET MVC, SQL, Angular, and JavaScript frameworks.</li>
                                <li>Served as project lead on key initiatives: gathered requirements, performed code reviews, and managed deployment pipelines.</li>
                                <li>Provided application support to internal users, ensuring optimal performance and uptime.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-xl">Level III Web Developer</h4>
                            <p className="text-base">Ameren</p>
                            <p className="text-sm text-gray-600 mb-2">St. Louis, MO · Apr 2013 – Aug 2013</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Designed and implemented a new database to integrate modern applications with legacy systems.</li>
                                <li>Authored complex SQL reports and conducted system analysis to streamline reporting infrastructure.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-xl">Web Developer</h4>
                            <p className="text-base">Joyce Meyer Ministries</p>
                            <p className="text-sm text-gray-600 mb-2">Fenton, MO · Mar 2011 – Apr 2013</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Built promotional and ecommerce sites using C#, JavaScript, AJAX, and SQL.</li>
                                <li>Provided input on design architecture and delivered rapid-turnaround marketing sites.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-xl">Senior Software Developer</h4>
                            <p className="text-base">NCI Information Systems</p>
                            <p className="text-sm text-gray-600 mb-2">Scott Air Force Base, IL · Oct 2008 – Mar 2011</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Developed web applications (C#, SQL, AJAX) for the US Air Force’s AAMS program.</li>
                                <li>Performed requirements gathering, data encryption research, and full lifecycle software delivery.</li>
                                <li>Held Secret-level security clearance.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-xl">Level II Software Engineer</h4>
                            <p className="text-base">MSDSonline</p>
                            <p className="text-sm text-gray-600 mb-2">Chicago, IL · Mar 2006 – Jul 2008</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Built OSHA-compliant document management tools using VB.NET, SQL, AJAX, and Crystal Reports</li>
                                <li>Supported both customers and internal stakeholders on technical issues and product use.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-xl">IT Associate</h4>
                            <p className="text-base">Technology Consulting Associates</p>
                            <p className="text-sm text-gray-600 mb-2">Atlanta, GA · Jun 2005 – Mar 2006</p>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1 text-sm">
                                <li>Developed SDLC-driven IT automation tools using .NET, SQL, and XML.</li>
                                <li>Authored project documentation and contributed to weekly build cycles.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Certification */}
                <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Certification</h3>
                    <p className="text-sm text-gray-700">
                        <strong>PMI-ACP Certification</strong><br />
                        2017–2020<br />
                        Project Management Institute<br />
                        Credential ID #2049727
                    </p>
                </section>

                {/* Education */}
                <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Education</h3>
                    <p className="text-sm text-gray-700">
                        <strong>BA in Business and Information Systems, Minor in Computer Science</strong><br />
                        2001–2005<br />
                        Indiana University – Bloomington, IN
                    </p>
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

export default Resume;
