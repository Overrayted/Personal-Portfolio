import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        ]

    const backendSkills = [
        "Python",
        "SQL",
        "Java",
         "Flask",
         "Firebase",
        ]

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">About Me </h2>

            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Second-year Computer Science student at Western University 
                    who is always looking to learn and apply new concepts into creating functional solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2_8px_rgba(255,0,255,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2_8px_rgba(255,0,255,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>HBSc in Computer Science </strong> - Western University (2024-Present)
                        </li>
                        <li>
                            Relevant Coursework: CS Fundamentals I (python), Foundations of CS (discrete math), CS Fundamentals II (Java), Intro to Buisness (Ivey Buisness Foundations)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300 ">
                        <h4 className="font-semibold"> Associate Merchant Intern at Loblaw Company Limited (Summer 2025)</h4>
                        <p>Supported retail operations by coordinating store distributions, performing assortment integrity checks, and maintaining clear communication with store teams and distribution centers</p>
                        
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}