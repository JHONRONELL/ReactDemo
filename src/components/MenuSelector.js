import React from 'react';

import HTMLElements from '../DataElements/HTMLElements';
export default function MenuSelector() {

    function MobileMenu() {
        const [isOpen, setIsOpen] = React.useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="lg:hidden">
                <nav className="bg-gray-800">
                    <div className="container mx-auto px-4 py-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <a href="#" className="text-white text-lg font-bold">Logo</a>
                            </div>
                            <div>
                                <button onClick={toggleMenu} className="text-white focus:outline-none">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={isOpen ? "block" : "hidden"} id="mobile-menu">
                        <ul className="mt-2">
                            <li><a href="#" className="block px-4 py-2 text-white">Home</a></li>
                            <li><a href="#" className="block px-4 py-2 text-white">About</a></li>
                            <li className="relative">
                                <button className="block px-4 py-2 text-white w-full text-left">Services</button>
                                <ul className="absolute top-full left-0 bg-gray-800 w-full hidden">
                                    <li><a href="#" className="block px-4 py-2 text-white">Service 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-white">Service 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-white">Service 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="block px-4 py-2 text-white">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

    function DesktopMenu() {
        const handleMouseEnter = (event) => {
            event.currentTarget.querySelector('ul').classList.remove('hidden');
        };

        const handleMouseLeave = (event) => {
            event.currentTarget.querySelector('ul').classList.add('hidden');
        };

        return (
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">JRA</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><a>About</a></li>
    <li><a>Contact</a></li>
      <li><a>Professional Details</a></li>
      <li>
        <details>
          <summary>
            Demo Works
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>React</a></li>
            <li><a>React Next JS</a></li>
            <li><a>React Redux JS</a></li>
            <li><a>Angular</a></li>
            <li><a>PHP</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
        );
    }

    return (
        <>
            <MobileMenu />
            <DesktopMenu />
        </>
    );

}

