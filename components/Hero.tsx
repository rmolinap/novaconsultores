
import React from 'react';
import { ChevronRightIcon } from './icons';

const Hero: React.FC = () => {
    return (
        <section className="bg-nova-light py-24 sm:py-32">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-nova-dark leading-tight">
                    Transforma tu Negocio con <br />
                    <span className="gradient-text">Automatización Inteligente</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600">
                    En Nova Consultores eliminamos tareas manuales para que te enfoques en crecer. Reduce costos, optimiza tu tiempo y opera sin fricciones.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="#contacto"
                        className="group flex items-center justify-center bg-nova-purple text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl shadow-nova-purple/30 w-full sm:w-auto"
                    >
                        Hablemos de tu Proyecto
                        <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
