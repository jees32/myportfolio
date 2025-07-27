'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Jees Jose</h3>
          <p className="text-gray-400 mb-3 text-sm">
            Full Stack Developer (Python & Django)
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-3">
            <a 
              href="https://myblog-4k1k.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform text-sm"
            >
              MyBlog
            </a>
            <a 
              href="https://x.com/Jeesjoseva" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform text-sm"
            >
              Twitter/X
            </a>
            <a 
              href="https://www.linkedin.com/in/jees-jose-3185b3117/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform text-sm"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-3">
            <p className="text-gray-400 text-sm">
              © 2024 Jees Jose. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 