
import React from 'react';
import { TruckIcon, ChartBarIcon, DocumentDuplicateIcon } from './icons';

const industries = [
    {
        icon: <TruckIcon className="w-10 h-10 text-nova-purple" />,
        name: "Logística y Supply Chain",
        slogan: "Logística ágil, conectada y sin errores.",
        description: "Automatizamos el seguimiento de envíos, la gestión de inventario y la documentación para una cadena de suministro más eficiente y transparente."
    },
    {
        icon: <ChartBarIcon className="w-10 h-10 text-nova-purple" />,
        name: "Finanzas y Contabilidad",
        slogan: "Automatiza tu control financiero y enfócate en crecer.",
        description: "Optimizamos flujos de facturación, conciliaciones bancarias y generación de reportes para que tengas visibilidad y control total de tus finanzas."
    },
    {
        icon: <DocumentDuplicateIcon className="w-10 h-10 text-nova-purple" />,
        name: "Operaciones y Documentos",
        slogan: "Automatización inteligente para crecer sin fricciones.",
        description: "Eliminamos tareas administrativas repetitivas, clasificamos documentos y validamos datos automáticamente para que tu equipo sea más productivo."
    }
];

const Industries: React.FC = () => {
    return (
        <section id="industrias" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-nova-dark">Soluciones Especializadas por Industria</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Aplicamos nuestra experiencia en automatización para resolver los desafíos específicos de tu sector.
                    </p>
                </div>

                <div className="space-y-12">
                    {industries.map((industry, index) => (
                        <div key={industry.name} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2">
                                <div className="inline-flex items-center justify-center bg-nova-purple/10 w-20 h-20 rounded-2xl mb-6">
                                    {industry.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-nova-dark">{industry.name}</h3>
                                <p className="text-nova-purple font-semibold mt-2 mb-4 text-lg">"{industry.slogan}"</p>
                                <p className="text-slate-600">{industry.description}</p>
                            </div>
                            <div className="md:w-1/2">
                                <img src={`https://picsum.photos/seed/${industry.name.replace(/\s/g, '')}/600/400`} alt={industry.name} className="rounded-xl shadow-2xl object-cover w-full h-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
