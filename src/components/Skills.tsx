const skills = [
  {
    name: "MERN Stack Development",
    description:
      "Proficient in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experience in creating scalable applications with modern JavaScript frameworks, RESTful APIs, and database management. Currently working on projects that demonstrate expertise in the complete MERN stack ecosystem."
  },
  {
    name: "Next.js & React",
    description:
      "Skilled in developing modern, performant web applications using Next.js and React. Experience with server-side rendering, static site generation, and building responsive user interfaces. Comfortable with TypeScript, component-based architecture, and state management solutions."
  },
  {
    name: "Python & Django",
    description:
      "Strong foundation in Python programming with expertise in Django framework for backend development. Experience in building web applications, working with databases, and implementing REST APIs. Knowledge of Python libraries including Pandas, requests, and tkinter for desktop applications."
  },
  {
    name: "Database Management",
    description:
      "Experience with both SQL and NoSQL databases including MongoDB, NeonDB, and traditional relational databases. Skilled in database design, optimization, and integration with web applications. Understanding of data modeling and efficient query optimization."
  },
  {
    name: "Authentication & Security",
    description:
      "Experience implementing secure authentication systems using Clerk and other modern authentication providers. Knowledge of best practices for user authentication, authorization, and data security in web applications. Understanding of OAuth, JWT, and secure API development."
  },
  {
    name: "Leadership & Team Management",
    description:
      "Proven leadership experience managing teams of 15-20 members in international call centers. Demonstrated ability to motivate teams, achieve targets, and drive performance. Experience in policy development and organizational planning through focus group participation."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">{skill.name}</h3>
              <p className="text-gray-700 text-base">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 