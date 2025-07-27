export default function About() {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Hi! I'm Jees Jose — an aspiring full-stack developer currently pursuing a Master of Computer Applications (MCA) online. I'm passionate about building modern web applications and exploring the possibilities of AI in software development.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                My technical skill set includes the MERN stack (MongoDB, Express.js, React.js, Node.js), NEXT JS, Python, Java, and database management systems (DBMS). I'm also continuously strengthening my knowledge of core computer science concepts such as data structures, operating systems, and object-oriented programming.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed">
                I believe in learning by doing, and I enjoy turning ideas into practical, scalable solutions through code. Whether it's developing interactive UIs, working with APIs, or exploring machine learning, I'm always eager to take on new challenges and grow as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Key Skills Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.23 12.004a2.236 2.236 0 0 0-2.235 2.236 2.236 2.236 0 0 0 2.235 2.236 2.236 2.236 0 0 0 2.235-2.236 2.236 2.236 0 0 0-2.235-2.236zm-2.648 10.756c-1.816 0-3.56-.549-5.04-1.583a9.494 9.494 0 0 1-3.12-4.21 9.413 9.413 0 0 1-.576-2.583c-.096-.9.013-1.8.32-2.64.308-.84.81-1.6 1.47-2.22.66-.62 1.46-1.08 2.34-1.35.88-.27 1.8-.33 2.72-.18.92.15 1.8.52 2.56 1.08.76.56 1.38 1.28 1.82 2.12.44.84.68 1.8.68 2.76 0 1.06-.28 2.1-.82 3.02-.54.92-1.32 1.7-2.24 2.28-.92.58-1.96.88-3.04.88z"/>
                  </svg>
                </div>
                <div className="text-gray-900 font-semibold">React</div>
              </div>
              <div className="text-sm text-gray-600">Frontend Development</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-gray-900 font-semibold">Next JS</div>
              </div>
              <div className="text-sm text-gray-600">Full Stack Framework</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm-2 16.018V8.018h4v8h-4zm6-8.018v8h2V8h-2z"/>
                  </svg>
                </div>
                <div className="text-gray-900 font-semibold">Django</div>
              </div>
              <div className="text-sm text-gray-600">Python Framework</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-gray-900 font-semibold">MERN Stack</div>
              </div>
              <div className="text-sm text-gray-600">MongoDB, Express, React, Node</div>
            </div>
          </div>
        </div>

        {/* Work Experience Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-12 h-1 bg-blue-600 mr-4"></span>
            Work Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">MERN Stack Developer</h4>
              </div>
              <div className="text-sm text-gray-600 font-semibold mb-2">Elshaddai Cloud Solutions • Jan 2025 - Present</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Currently working as a MERN Stack Developer, developing modern web applications using MongoDB, Express.js, React.js, and Node.js. Building scalable and user-centric solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Team Leader</h4>
              </div>
              <div className="text-sm text-gray-600 font-semibold mb-2">Phykon • 5 years</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Led a team of 15 agents at Phykon, Trivandrum, achieving consistent performance from the Team during a 5-year tenure as a Team Leader in a voice-based international BPO.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Subject Matter Expert</h4>
              </div>
              <div className="text-sm text-gray-600 font-semibold mb-2">Phykon • 7 years</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Started as senior technical support executive and was promoted to Subject Matter Expert. Responsibilities included supporting and mentoring junior agents, creating training materials, and ensuring quality of services.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Senior Technical Support</h4>
              </div>
              <div className="text-sm text-gray-600 font-semibold mb-2">Sutherland Global Services • 3 years</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Handled customer calls and troubleshooting for antivirus software installation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Customer Service Representative</h4>
              </div>
              <div className="text-sm text-gray-600 font-semibold mb-2">Reliance BPO • 2 years</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Handled customer inquiries and provided assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Education Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-12 h-1 bg-blue-600 mr-4"></span>
            Academic Record
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform text-center border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">MCA</div>
              <div className="text-gray-700 font-semibold mb-2">SRM Institute of Science and Technology</div>
              <div className="text-gray-600">Currently Pursuing</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform text-center border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">B.Com</div>
              <div className="text-gray-700 font-semibold mb-2">MG University</div>
              <div className="text-gray-600">2004</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform text-center border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">12th</div>
              <div className="text-gray-700 font-semibold mb-2">GVHSS Kadavoor</div>
              <div className="text-gray-600">1999</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-12 h-1 bg-blue-600 mr-4"></span>
            Additional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <h4 className="font-semibold text-gray-900">Python Bootcamp</h4>
              </div>
              <p className="text-gray-700 text-sm">The complete Python Boot camp from Zero to Hero in Python from Udemy</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <h4 className="font-semibold text-gray-900">Django Masterclass</h4>
              </div>
              <p className="text-gray-700 text-sm">Django 4 and Python Full Stack Developer Masterclass from Udemy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 