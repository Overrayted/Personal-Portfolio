import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div class="px-4 w-150 grid grid-cols-1 md:grid-cols-1 gap-6">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">Contact me</h2>

                    <a href="mailto:Rayhan24k@gmail.com" className="text-center w-full border border-purple-500 text-purple-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:text-white hover:bg-purple-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]">
                        Email
                    </a>

                    <a href="http://www.linkedin.com/in/rayhan-mohamed" target="_blank" rel="noopener noreferrer" className="text-center w-full border border-purple-500 text-purple-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:text-white hover:bg-purple-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]">
                        Linkedin
                    </a>

                    <a href="https://www.instagram.com/raynoo.m/" target="_blank" rel="noopener noreferrer" className=" text-center w-full border border-purple-500 text-purple-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:text-white hover:bg-purple-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]">
                        Instagram
                    </a>

                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className=" text-center w-full border border-purple-400 text-purple-400 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:text-white hover:bg-purple-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]">
                        View Resume
                    </a>




            </div>
        </RevealOnScroll>
    </section>
}