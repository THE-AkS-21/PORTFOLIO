import { RevealOnScroll } from "../RevealOnScroll"
import logo from '/src/assets/AKS_logo.png'

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-3 justify-center ">
            <div className="h-80 w-80 rounded-full object-cover flex mx-auto"> 
                <img src={logo}  alt=""/> 
            </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent leading-right">
            Hi, I'm Ankit Kumar Singh
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm an engineer passionate about problem-solving and innovation. 
          With a background in computer science and extensive experience in software and web development, 
          I'm dedicated to delivering top-notch work. I'm committed to continuous professional 
          growth and development, always seeking new opportunities to expand my skills and knowledge.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-green-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-green-400/50 text-green-400 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-grey/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
