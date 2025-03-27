import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TailwindCSS"
  ];

  const backendSkills = ["Golang", "C++", "AWS", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent text-center">
            {" "}
            ABOUT ME
          </h2>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <p className="text-gray-500 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4 text-center"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4 text-center"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>
                  <strong> B.Tech. in Mathematics & Computing </strong> - DELHI TECHNOLOGICAL UNIVERSITY
                  (2020-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-500">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Frontend Development for Garg Defence and Aerospace Pvt. Ltd. (SEPT 2024 - NOV 2024){" "}
                  </h4>
                  <p>
                  Developed a high-performance, scalable, and responsive frontend for Garg Defence and 
                  Aerospace Pvt. Ltd., a company specializing in defense and aerospace solutions. 
                  The project involved designing and implementing an intuitive, 
                  user-friendly interface that enhances user engagement while ensuring seamless navigation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    IN-HOUSE INTERN | STUDENT ERP PORTAL (JUL 2023 – AUG 2023){" "}
                  </h4>
                  <p>
                  Provided secure access for students to view academic records such as marks and 
                  personal details. Implemented a user-friendly interface for teachers to update marks 
                  and attendance records efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
