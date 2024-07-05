import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 bg-gray-800 text-white border-t-2 border-t-gray-700 mt-auto">
      <div className="relative z-10 mx-auto max-w-7xl px-4 ml-auto mr-auto">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright 2024. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-400">
                Company
              </h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm hover:text-gray-200">About Us</Link></li>
                <li><Link to="/team" className="text-sm hover:text-gray-200">Team</Link></li>
                <li><Link to="/careers" className="text-sm hover:text-gray-200">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-400">
                Support
              </h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-sm hover:text-gray-200">Help Center</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-gray-200">Contact Us</Link></li>
                <li><Link to="/faq" className="text-sm hover:text-gray-200">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-400">
                Legals
              </h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-sm hover:text-gray-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-gray-200">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-sm hover:text-gray-200">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
