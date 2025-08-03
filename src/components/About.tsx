import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* 👤 Left-Aligned Image with Styled Border */}
          <motion.div
            className="rounded-xl overflow-hidden border border-purple-600 shadow-md hover:shadow-purple-500/30 transition duration-300 md:ml-6"
            variants={fadeInUp}
          >
            <img
              src="/AmanKumar.jpg" // Ensure this image is inside the public/ folder
              alt="Aman Kumar"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* 🧑‍💻 About Text Section */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              Hello! I'm <span className="text-white font-semibold">Aman Kumar</span>, a dedicated <span className="text-indigo-400">Full Stack MERN Developer</span> with a passion for building responsive and efficient web applications that solve real-world problems.
            </motion.p>

            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              I'm also skilled in <span className="text-blue-400 font-semibold">C++</span> and <span className="text-green-400 font-semibold">Python</span>, with a strong grasp of data structures, algorithms, and backend systems. Whether it's frontend UI or backend APIs, I love crafting smooth and scalable digital experiences.
            </motion.p>

            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              I’m always curious to learn and grow as a developer. With a problem-solving mindset and a focus on clean, maintainable code, I aim to build software that makes a positive impact.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
