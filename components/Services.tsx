
import React from 'react';
import { CheckIcon } from './icons';

const plans = [
    {
        name: "Diagnóstico Inicial",
        price: "$25,000 MXN",
        description: "Mapeo de procesos y un roadmap claro de automatización para tu empresa.",
        features: ["Análisis de hasta 3 procesos", "Identificación de oportunidades", "Roadmap estratégico", "Estimación de ROI"],
        cta: "Solicitar Diagnóstico",
        highlight: false,
    },
    {
        name: "Proyecto de Automatización",
        price: "Desde $65,000 MXN",
        description: "Implementación de flujos automáticos personalizados para tus necesidades.",
        features: ["Todo en Diagnóstico Inicial", "Desarrollo de flujos", "Integración de sistemas (APIs)", "Capacitación de equipo", "Soporte post-lanzamiento"],
        cta: "Iniciar Proyecto",
        highlight: true,
    },
    {
        name: "Retainer Mensual",
        price: "$12,000 - $25,000 MXN/mes",
        description: "Soporte continuo, monitoreo y optimización de tus automatizaciones.",
        features: ["Soporte prioritario", "Monitoreo de flujos", "Optimización continua", "Reportes de rendimiento"],
        cta: "Más Información",
        highlight: false,
    },
];

const Services: React.FC = () => {
    return (
        <section id="servicios" className="py-20 bg-nova-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-nova-dark">Planes a la Medida de tu Crecimiento</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Elige el plan que mejor se adapte a tus objetivos, desde el diagnóstico hasta la optimización continua.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`flex flex-col rounded-xl p-8 border ${plan.highlight ? 'bg-nova-dark text-white border-nova-purple' : 'bg-white border-slate-200'}`}>
                            {plan.highlight && (
                                <span className="bg-nova-purple text-white text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">Más Popular</span>
                            )}
                            <h3 className={`text-2xl font-semibold ${plan.highlight ? 'text-white' : 'text-nova-dark'}`}>{plan.name}</h3>
                            <p className={`mt-2 ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{plan.description}</p>
                            <div className={`my-8 text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-nova-dark'}`}>
                                {plan.price}
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <CheckIcon className={`w-5 h-5 mr-3 ${plan.highlight ? 'text-nova-purple' : 'text-green-500'}`} />
                                        <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contacto" className={`w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.highlight ? 'bg-nova-purple hover:bg-opacity-90 text-white' : 'bg-nova-purple/10 text-nova-purple hover:bg-nova-purple/20'}`}>
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
