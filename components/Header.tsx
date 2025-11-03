
import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons';

const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#industrias', label: 'Industrias' },
    { href: '#testimonios', label: 'Testimonios' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-nova-dark">
                        Nova<span className="text-nova-purple">.</span>
                    </a>
                    
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-slate-600 hover:text-nova-purple transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    
                    <a href="#contacto" className="hidden md:inline-block bg-nova-purple text-white font-medium py-2 px-5 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-nova-purple/30">
                        Agendar Diagnóstico
                    </a>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-nova-dark focus:outline-none">
                            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="text-slate-600 hover:text-nova-purple transition-colors duration-300 text-center py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                             <a href="#contacto" className="bg-nova-purple text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-nova-purple/30 text-center" onClick={() => setIsMenuOpen(false)}>
                                Agendar Diagnóstico
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
