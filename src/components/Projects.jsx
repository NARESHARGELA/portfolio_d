import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills, projects, and resume. Built using React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS'],
    image: '/portfolio.png', // place in public folder or use a URL
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with authentication, cart, and payment system.',
    tech: ['MERN Stack'],
    image: '/ecommerce.png',
    link: 'https://your-ecommerce-link.com',
  },
  {
    title: 'Blog CMS',
    description: 'A content management system for blogging, with Markdown support and admin panel.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    image: '/blog.png',
    link: 'https://your-blog-link.com',
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
