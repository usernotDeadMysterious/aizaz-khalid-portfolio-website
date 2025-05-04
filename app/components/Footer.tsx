import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left - Text */}
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Aizaz Khalid. All rights reserved.
        </p>

        {/* Right - Icons */}
        <div className="flex gap-4 items-center">
          <a href="https://github.com/usernotDeadMysterious" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aizaz-khalid-a0864425a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:aizazkhalid852@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
