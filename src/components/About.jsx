import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16 px-6" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 mb-6">
          Hello! I'm a passionate <span className="font-semibold text-blue-600">Full Stack Web Developer</span> with experience building modern, scalable web applications using technologies like <strong>React, Node.js, Express, MongoDB</strong>, and more.
        </p>
        <p className="text-md text-gray-600">
          I love solving real-world problems with clean and efficient code. I'm always exploring new tools and frameworks to improve my workflow and build better solutions. Outside of coding, I enjoy contributing to open-source, reading tech blogs, and collaborating with other developers.
        </p>
      </div>
    </section>
  );
};

export default About;
