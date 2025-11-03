
import React from 'react';
import { BriefcaseIcon, ChartBarIcon, DocumentDuplicateIcon } from './icons'; // Using existing icons for demo

const ValueProposition: React.FC = () => {
    const features = [
        {
            icon: <ChartBarIcon className="w-8 h-8 text-nova-purple" />,
            title: "Análisis y Diagnóstico",
            description: "Mapeamos tus procesos actuales para identificar cuellos de botella y las mejores oportunidades de automatización con alto impacto."
        },
        {
            icon: <BriefcaseIcon className="w-8 h-8 text-nova-purple" />,
            title: "Implementación Low-Code",
            description: "Construimos flujos de trabajo automatizados usando herramientas modernas como n8n y APIs, garantizando una integración rápida y flexible."
        },
        {
            icon: <DocumentDuplicateIcon className="w-8 h-8 text-nova-purple" />,
            title: "Optimización Continua",
            description: "Monitoreamos el rendimiento de tus nuevas automatizaciones y las optimizamos para asegurar que tu negocio escale sin fricciones."
        }
    ];

    return (
        <section id="propuesta-de-valor" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-nova-dark">
                        Automatización Inteligente para Crecer Sin Fricciones
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Nuestra metodología se enfoca en entregar resultados tangibles, conectando tus sistemas para que trabajen por ti.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-nova-light p-8 rounded-xl border border-slate-200/80">
                            <div className="flex items-center justify-center bg-nova-purple/10 w-16 h-16 rounded-full mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-nova-dark mb-3">{feature.title}</h3>
                            <p className="text-slate-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
