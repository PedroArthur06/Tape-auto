const services = [
  {
    id: 'couro',
    title: 'Bancos em Couro',
    description: 'Revestimento em couro legítimo e ecológico com costuras personalizadas. Acabamento de fábrica garantido.',
    icon: '🛋️',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    detail: 'Couro legítimo · Ecológico · Personalizado',
  },
  {
    id: 'teto',
    title: 'Teto e Colunas',
    description: 'Forração de teto, colunas A/B/C e painéis com material premium anti-mofo e resistente ao calor.',
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    detail: 'Anti-mofo · Resistente ao calor · Premium',
  },
  {
    id: 'volante',
    title: 'Volantes',
    description: 'Restauração e personalização de volantes em couro costurado à mão. Grip perfeito e conforto superior.',
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    detail: 'Costura manual · Couro legítimo · Grip premium',
  },
  {
    id: 'classicos',
    title: 'Restauração de Clássicos',
    description: 'Especialistas em restaurar interiores de veículos clássicos respeitando a originalidade e estética da época.',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    detail: 'Fidelidade original · Especialistas · Clássicos',
  },
]

export default function ServicesGallery() {
  return (
    <section id="servicos" className="py-24 bg-brand-graphite-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">O que fazemos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Serviços que <span className="text-gradient-orange">Transformam</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada serviço é executado por profissionais especializados, com materiais de primeira linha e prazo rigoroso.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="group relative overflow-hidden rounded-2xl bg-brand-graphite card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-2xl">{s.icon}</span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{s.description}</p>
                <span className="inline-block text-xs font-semibold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                  {s.detail}
                </span>
              </div>

              {/* Hover overlay CTA */}
              <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-all duration-300 pointer-events-none" />

              {/* Bottom orange accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/5565999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Tapeçauto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
          >
            Consultar Disponibilidade de Agenda
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
