import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Distributor Application",
    description: `A comprehensive sales management system built with React and Next.js, featuring Clerk authentication and NeonDB. This application streamlines transaction management for sales staff across multiple retail locations, providing real-time dashboards with transaction analytics, debtor tracking, and performance insights.`,
    image: "/myportfolio/vendor2.png"
  },
  {
    id: 2,
    title: "Invoice Pilot Application",
    description: `A sophisticated invoice management platform that enables businesses to create, customize, and send professional invoices with dynamic templates. Features an AI-powered interactive dashboard providing comprehensive trade analytics, financial insights, and automated reporting capabilities.`,
    image: "/myportfolio/Invoicepilot1.png"
  },
  {
    id: 3,
    title: "Blog Website",
    description: `A fully functional personal blog website where users can sign up and comment on the posts made by the author. The website shows a welcome message with the username and is mobile responsive. It was designed with Bootstrap and Flask framework. There is a contact form where users can contact the author.`,
    image: "/myportfolio/blog.jpg",
    link: "https://myblog-4k1k.onrender.com/"
  },
  {
    id: 4,
    title: "Mypass App",
    description: `A secure password management desktop application built with Python and Tkinter GUI framework. Features include automatic generation of strong, cryptographically secure passwords, encrypted storage of credentials in JSON format, and an intuitive interface for easy retrieval of saved login information. Implements best practices for password security and data protection.`,
    image: "/myportfolio/images/mypass.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and showcases different aspects of my development skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 