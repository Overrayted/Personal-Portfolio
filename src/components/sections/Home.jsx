import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4 mx-auto max-w-screen-md">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent tracking-tight py-3">
                    Hello, I'm Ray
                </h1>

                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden">
                    <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-r from-green-400 to-purple-500">
                        <div className="rounded-full overflow-hidden w-full h-full bg-white">
                            <img src="/rayhan.jpg" alt="Rayhan Mohamed" className="w-full h-full object-cover scale-[2.0] object-[65%_50%]"/>
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto py-3">
                    I'm Rayhan Mohamed, an aspiring software developer.
                    My goal is to create solutions that make life just a little bit simpler.
                    Always learning, always building, not always one project at a time.
                </p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-green-400/80 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                        hover:translate-y-0.5 hover:shadow-[0_0_16px_rgba(0,255,0,0.4)]"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="border border-green-400/50 text-green-400 py-3 px-6 rounded font-medium transition-all duration-200
                        hover:translate-y-0.5 hover:shadow-[0_0_16px_rgba(255,0,255,0.4)] hover:bg-purple-500/50"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
