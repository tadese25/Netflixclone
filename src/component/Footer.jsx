import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] py-12 text-gray-500 text-xs sm:text-sm border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-6">
        <p className="hover:underline cursor-pointer">
          Questions? Call 1-800-012-3456
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Speed Test</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Jobs</li>
            <li className="hover:underline cursor-pointer">Cookie Preferences</li>
            <li className="hover:underline cursor-pointer">Legal Notices</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Account</li>
            <li className="hover:underline cursor-pointer">Ways to Watch</li>
            <li className="hover:underline cursor-pointer">Corporate Information</li>
            <li className="hover:underline cursor-pointer">Only on Netflix</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Media Center</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Language Selector */}
        <div className="pt-2">
          <div className="inline-flex items-center space-x-2 border border-gray-700 rounded bg-black/40 px-3 py-1 text-gray-300">
            <Globe className="h-4 w-4" />
            <select className="bg-transparent focus:outline-none cursor-pointer text-xs">
              <option value="en" className="bg-[#141414] text-white">English</option>
              <option value="es" className="bg-[#141414] text-white">Español</option>
            </select>
          </div>
        </div>

        <p className="text-xs text-gray-600 pt-2">
          Netflix Clone Ethiopia &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;