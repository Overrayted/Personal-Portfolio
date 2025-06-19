import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2_8px_rgba(255,0,255,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Flappy Goose Game </h3>
                    <p className="text-gray-400 mb-4">
                        Flappy Bird Clone game made in Unity.
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {["Unity", "C#"].map((tech, key) => (<span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2_8px_rgba(255,0,255,0.1)] transition-all">
                                    {tech}
                                </span>))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Overrayted/flappybird-clone" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
                 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2_8px_rgba(255,0,255,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Chat App </h3>
                    <p className="text-gray-400 mb-4">
                        Chat application with real time messaging, chat creation and google authentication.
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {["Next.js", "React","Firebase"].map((tech, key) => (<span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2_8px_rgba(255,0,255,0.1)] transition-all">
                                    {tech}
                                </span>))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Overrayted/chatapp" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2_8px_rgba(255,0,255,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> ProjectF </h3>
                    <p className="text-gray-400 mb-4">
                        Onboard flight computer using arduino nano.
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {["C++"].map((tech, key) => (<span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2_8px_rgba(255,0,255,0.1)] transition-all">
                                    {tech}
                                </span>))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Overrayted/projectF" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
                 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2_8px_rgba(255,0,255,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Personal Portfolio </h3>
                    <p className="text-gray-400 mb-4">
                        The website your looking at right now!
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {["Javascript","React", "TailwindCSS"].map((tech, key) => (<span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2_8px_rgba(255,0,255,0.1)] transition-all">
                                    {tech}
                                </span>))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#home" className="text-purple-400 hover:text-purple-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
    };