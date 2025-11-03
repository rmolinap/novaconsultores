
import React from 'react';
import { LinkedInIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <a href="#" className="text-2xl font-bold text-nova-dark">
                            Nova<span className="text-nova-purple">.</span>
                        </a>
                        <p className="text-slate-500 mt-2">Automatización Inteligente para Crecer Sin Fricciones.</p>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        <a href="mailto:contacto@novaconsultores.mx" className="text-slate-500 hover:text-nova-purple transition-colors">
                            <MailIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-nova-purple transition-colors">
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-6 text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Nova Consultores. Todos los derechos reservados. Hecho en México.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
