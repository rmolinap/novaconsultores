
import React from 'react';
import { ChevronRightIcon } from './icons';

const CTA: React.FC = () => {
    return (
        <section id="contacto" className="bg-nova-dark text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    ¿Listo para eliminar la fricción en tus operaciones?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
                    Agenda una llamada de 30 minutos sin costo y descubre el potencial de la automatización para tu empresa. Demos el primer paso hacia la eficiencia total.
                </p>
                <div className="mt-8">
                     <a
                        href="mailto:contacto@novaconsultores.mx"
                        className="group inline-flex items-center justify-center bg-nova-purple text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl shadow-nova-purple/40"
                    >
                        Agenda tu diagnóstico
                        <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
