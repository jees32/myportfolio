'use client';


import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Details
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <Image src="/images/office.jpg" alt="Office" width={144} height={114} className="rounded-lg mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600 text-lg">I&apos;m always open to discussing new opportunities, interesting projects, and potential collaborations. Let&apos;s connect and explore how we can work together.</p>
            </div>
            
            <div className="space-y-6">
              {/* Email Contact */}
              <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <a href="mailto:jees32@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium">
                    jees32@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <a href="tel:918714297594" className="text-green-600 hover:text-green-800 transition-colors duration-300 font-medium">
                    +91 8714297594
                  </a>
                </div>
              </div>

              {/* LinkedIn Profile */}
              <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/jees-jose-3185b3117/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you have a project in mind, want to discuss potential opportunities, or simply want to connect, I&apos;d love to hear from you. I&apos;m committed to responding promptly and look forward to our conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 