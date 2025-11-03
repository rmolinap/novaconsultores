
import React from 'react';

const testimonials = [
    {
        quote: "Nova Consultores transformó nuestra cadena de suministro. Ahora todo está conectado y hemos reducido errores en un 90%. El impacto en la eficiencia es increíble.",
        name: "Carlos Gutiérrez",
        title: "Director de Logística, Transportes Velox",
        avatar: "https://i.pravatar.cc/150?u=carlos"
    },
    {
        quote: "La automatización de nuestros reportes financieros nos ahorra 40 horas al mes. Su equipo es experto y ágil. Los recomiendo ampliamente para cualquier empresa que busque escalar.",
        name: "Sofía Herrera",
        title: "CFO, CrediFácil FinTech",
        avatar: "https://i.pravatar.cc/150?u=sofia"
    },
    {
        quote: "Pasamos de un caos de documentos a un sistema de validación automática que funciona 24/7. Es una herramienta imprescindible para escalar nuestras operaciones sin contratar más personal.",
        name: "Javier Mendoza",
        title: "Gerente de Operaciones, Retail Corp",
        avatar: "https://i.pravatar.cc/150?u=javier"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonios" className="py-20 bg-nova-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-nova-dark">Lo que Nuestros Clientes Dicen</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Historias de éxito de empresas que ya operan sin fricciones gracias a la automatización.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
                            <p className="text-slate-600 italic flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-6">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold text-nova-dark">{testimonial.name}</p>
                                    <p className="text-slate-500 text-sm">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
