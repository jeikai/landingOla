import React from "react";
import { siteData } from "../data/siteData.js";

const Footer = () => (
  <footer className="bg-black text-white py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          {siteData.brand.name}
        </div>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          {siteData.brand.tagline}
        </p>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500">
            © 2025 OlaClass. All rights reserved. Made with ❤️ for future
            BigTech engineers.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;