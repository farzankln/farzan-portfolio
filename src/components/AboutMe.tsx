"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  const text = {
    title: "About Me",
    content: `I'm a Computer Engineer specializing in software
              development. Currently, I work with JavaScript, focusing on modern
              frameworks such as React and Next.js to build dynamic and
              responsive web applications. For styling, I use Tailwind CSS,
              ensuring clean, scalable, and user-friendly designs. I have
              hands-on experience working with MongoDB, as well as integrating
              APIs and implementing authentication systems for secure and
              efficient applications. Passionate about creating modern,
              attractive, and standard-compliant designs, I always strive to
              deliver high-quality solutions that enhance user experience.Below
              are selected projects and recent articles.`,
  };

  return (
    <section className="bg-neutral-900 rounded-2xl text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">{text.title}</h2>
      </div>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg leading-relaxed"
      >
        {text.content}
      </motion.p>
    </section>
  );
};
export default AboutMe;
