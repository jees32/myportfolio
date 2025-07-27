'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                Jees Jose
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 animate-fade-in-up animation-delay-200">
                Full Stack Developer (Python & Django)
              </h2>
              <p className="italic text-blue-700 text-lg animate-fade-in-up animation-delay-400">&ldquo;Building the web of today, exploring the intelligence of tomorrow.&rdquo;</p>
              <p className="text-lg text-gray-600 max-w-lg animate-fade-in-up animation-delay-600">
                As an aspiring Full Stack Developer, I specialize in backend technologies such as Python, Django and Node JS, while also working with front-end technologies REACT and NEXT JS. Passionate about creating user-centric digital solutions, I aim to leverage my technical skills to build innovative web applications that solve real-world problems and make a positive impact on users&apos; lives.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
              <a
                href="/projects"
                className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform inline-flex items-center justify-center"
              >
                <span className="flex items-center justify-center">
                  View My Work
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="/contact"
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center"
              >
                <span className="flex items-center justify-center">
                  Contact Me
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-1000">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <Image
                    src="/myportfolio/images/jees_photo.jpeg"
                    alt="Jees Jose Profile"
                    width={320}
                    height={320}
                    className="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce group-hover:animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 -right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
} 