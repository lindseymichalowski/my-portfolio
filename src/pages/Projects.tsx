import { Link } from 'react-router-dom';

const Projects = () => {
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
                        Projects
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
                {/* Project Case Studies */}
                <section>

                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
                        <h3 className="text-2xl font-semibold mb-1">
                            <img src="/images/GreenCheckmark.png" alt="Success" className="inline w-8 h-8 mr-2 align-middle" />
                            Project 1: Postgraduate Coursework Platform – Prestigious Medical University (2025)
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">Role: <span className="font-medium text-gray-700">Technical Project Manager</span></p>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Overview</h4>
                            <p className="text-base text-gray-800">Led the development of a centralized platform to curate and manage postgraduate coursework data, integrating Databricks for data orchestration and Tableau for visualization.</p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Challenges</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Fragmented datasets with inconsistent approval processes</li>
                                <li>Manual coordination between coaches, admins, and systems</li>
                                <li>High visibility from leadership with need for accuracy and reliability</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Actions</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Designed a data curation platform to manage and approve student/course updates before publication</li>
                                <li>Integrated data pipelines between core systems, Databricks, and Tableau</li>
                                <li>Implemented automated data-release workflows and tools for dynamic coach assignments</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Results</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Significantly improved administrative efficiency and data accuracy</li>
                                <li>Reduced turnaround time for updates and eliminated manual errors</li>
                                <li>Created a scalable infrastructure supporting real-time educational insights</li>
                                <li>Received high praise from university leadership for project execution, technical direction, and communication</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Stakeholder Feedback:</h4>

                            <p className="text-gray-700 text-base italic mb-10">"This platform has transformed how we manage postgraduate coursework data. By integrating with
                                our core systems and providing a structured approval workflow, we’ve significantly improved data accuracy and efficiency—allowing faculty and
                                administrators to focus on student success." – Prestigious Medical School Leadership</p>

                            <p className="text-gray-700 text-base italic mb-10">“Lindsey has been an outstanding asset to this complex project at Washington University School
                                of Medicine. She has skillfully applied her organizational, agile, and communication expertise to keep this .NET-based greenfield build on time
                                and within budget. Beyond project management, Lindsey’s technical development knowledge has been invaluable — helping guide critical decisions
                                to achieve the right outcomes in a challenging legacy environment undergoing modernization. The application she supported carries the highest
                                visibility, serving both executive leadership and student users, and her contributions have been instrumental in its
                                success.” -- Prestigious Medical School Leadership/Stakeholder</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
                        <h3 className="text-2xl font-semibold mb-1">
                            <img src="/images/GreenCheckmark.png" alt="Success" className="inline w-8 h-8 mr-2 align-middle" />
                            Project 2: Enterprise Communication Platform Integration (2023)
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">Role: <span className="font-medium text-gray-700">Technical Project Manager</span></p>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Overview</h4>
                            <p className="text-base text-gray-800">
                                Brought in to rescue an enterprise Microsoft Teams and Outlook integration project that was behind schedule and misaligned with stakeholder expectations.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Challenges</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 pl-4">
                                <li>Delivery roadblocks and unclear ownership</li>
                                <li>Disconnected communication between technical and non-technical stakeholders</li>
                                <li>Eroding stakeholder confidence due to delays</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Actions</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 pl-4">
                                <li>Realigned product, UX, IT, and project management teams under a unified delivery strategy</li>
                                <li>Removed delivery blockers by clarifying scope, sequencing work, and reestablishing accountability</li>
                                <li>Led integrated sprint planning and status reporting to increase transparency</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Results</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 pl-4">
                                <li>Delivered a seamless employee recognition platform integration</li>
                                <li>Restored executive and stakeholder confidence</li>
                                <li>Reestablished team cohesion and momentum toward successful delivery</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
                        <h3 className="text-2xl font-semibold mb-1">
                            <img src="/images/GreenCheckmark.png" alt="Success" className="inline w-8 h-8 mr-2 align-middle" />
                            Project 3: Custom iOS/Android App for Nonprofit Serving Veterans (2024)
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">Role: <span className="font-medium text-gray-700">Technical Project Manager</span></p>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Overview</h4>
                            <p className="text-base text-gray-800">
                                Led the development of a custom cloud-based mobile app (iOS and Android) to streamline operations and improve veteran engagement.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Challenges</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 pl-4">
                                <li>Disconnected workflows between staff and veteran clients</li>
                                <li>Lack of centralized tools for scheduling and communication</li>
                                <li>Need for an intuitive experience accessible to non-technical users</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Actions</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 pl-4">
                                <li>Collaborated with stakeholders to define user needs and functional requirements</li>
                                <li>Oversaw app design and development, including real-time communication, service scheduling, and status tracking features</li>
                                <li>Guided end-to-end delivery, including testing, user onboarding, and app store deployment</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Results</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 pl-4">
                                <li>Improved transparency and efficiency for staff operations</li>
                                <li>Enabled real-time engagement between veterans and support teams</li>
                                <li>Delivered an accessible and empowering mobile experience tailored to the nonprofit’s mission</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
                        <h3 className="text-2xl font-semibold mb-1">
                            <img src="/images/GreenCheckmark.png" alt="Success" className="inline w-8 h-8 mr-2 align-middle" />
                            Project 4: Agile Transformation & Process Streamlining – Insurance Industry (2022)
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">Role: <span className="font-medium text-gray-700">Atlassian Administration & Scrum Master</span></p>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Overview</h4>
                            <p className="text-base text-gray-800">Partnered with engineering and project management leadership to streamline development processes, modernize tooling, and implement Agile best practices.</p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Challenges</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Fragmented Jira configuration and workflows</li>
                                <li>Lack of structured collaboration between management and technical teams</li>
                                <li>Ineffective knowledge sharing and documentation</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Actions</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Designed and implemented advanced Jira workflows, custom boards, and dashboards to enhance visibility and team alignment</li>
                                <li>Collaborated with project managers to define scalable Confluence structures and reusable templates</li>
                                <li>Facilitated Agile ceremonies (standups, planning, retrospectives, backlog grooming) to ensure smooth adoption</li>
                                <li>Provided continuous coaching and support to ensure team buy-in and long-term success</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Results</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Increased delivery visibility and reduced friction in sprint planning and execution</li>
                                <li>Empowered both developers and leadership with actionable dashboards and documentation</li>
                                <li>Successfully embedded a sustainable Agile process, improving throughput and team engagement</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
                        <h3 className="text-2xl font-semibold mb-1">
                            <img src="/images/GreenCheckmark.png" alt="Success" className="inline w-8 h-8 mr-2 align-middle" />
                            Project 5: Automated Bank Reconciliation – Home Building Company (2023)
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">Role: <span className="font-medium text-gray-700">Technical Project Manager</span></p>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Overview</h4>
                            <p className="text-base text-gray-800">Led the delivery of an automated bank reconciliation system to replace a manual, error-prone Excel-based process across 24 bank accounts.</p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Challenges</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Reconciliation required several days of manual effort each month</li>
                                <li>No centralized system for AP or cash visibility</li>
                                <li>High risk of human error and delayed reporting</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Actions</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Designed and implemented a fully digitized reconciliation workflow</li>
                                <li>Delivered real-time dashboards for daily, weekly, and monthly financial insights</li>
                                <li>Standardized processes for AP and financial reporting across the organization</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">Results</h4>
                            <ul className="list-disc list-inside pl-4 text-gray-800 space-y-1">
                                <li>Cut reconciliation time from 5 days to under 5 hours</li>
                                <li>Increased financial accuracy and reduced risk</li>
                                <li>Freed up accounting staff to focus on strategic tasks</li>
                                <li>Positioned the company for scalable growth with automated cash management</li>
                            </ul>
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

export default Projects;
