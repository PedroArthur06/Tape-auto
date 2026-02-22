import couroNatural from '@/assets/rev-couro-natural.jpg'
import sintetico from '@/assets/rev-sintetico.png'
import volante from '@/assets/rev-volante.png'
import assoalho from '@/assets/rev-assoalho.png'
import forroPorta from '@/assets/rev-forro-porta.jpg'
import teto from '@/assets/rev-teto.jpg'
import costuraProgramada from '@/assets/costura-programada.png'

const services = [
  {
    id: 'couro-natural',
    title: 'Couro 100% Natural',
    description: 'Revestimento em couro legítimo com acabamento de fábrica. Durável, fácil de higienizar e visual premium.',
    image: couroNatural,
    tags: ['Couro legítimo', 'Alta durabilidade'],
  },
  {
    id: 'sintetico',
    title: 'Material Sintético',
    description: 'Alta performance e resistência ao calor do MT. Acabamento idêntico ao original, com grande variedade de cores.',
    image: sintetico,
    tags: ['Resistente ao calor', 'Custo-benefício'],
  },
  {
    id: 'volante',
    title: 'Revestimento de Volante',
    description: 'Volantes reformados e personalizados com couro costurado à mão. Grip perfeito e ergonomia superior.',
    image: volante,
    tags: ['Costura manual', 'Grip premium'],
  },
  {
    id: 'assoalho',
    title: 'Assoalho',
    description: 'Revestimento completo do assoalho com proteção contra umidade, isolamento acústico e visual renovado.',
    image: assoalho,
    tags: ['Antiderrapante', 'Isolamento acústico'],
  },
  {
    id: 'forro-porta',
    title: 'Forro de Porta',
    description: 'Reforma completa dos forros de porta. Aparência de zero km com material e acabamento de referência.',
    image: forroPorta,
    tags: ['Aparência zero km', 'Material premium'],
  },
  {
    id: 'teto',
    title: 'Revestimento de Teto',
    description: 'Substituição do forro de teto original por materiais premium, eliminando bolhas, manchas e mofo definitivamente.',
    image: teto,
    tags: ['Anti-mofo', 'Material premium'],
  },
]

const featuredService = {
  id: 'costura-programada',
  title: 'Costura Programada & Personalizado',
  subtitle: 'Para quem quer ir além do padrão',
  description:
    'O diferencial da Tapeçauto. Desenvolvemos projetos exclusivos com combinações de duas cores, costuras programadas e padrões esportivos — como aqueles bancos de corrida. Do design à execução, criamos um interior único para o seu veículo.',
  image: costuraProgramada,
  tags: ['Duas cores', 'Costura programada', 'Padrão esportivo', 'Projeto exclusivo'],
}

function ServiceCard({ service }) {
  const waMsg = encodeURIComponent(
    `Olá! Vi o site e gostaria de solicitar um orçamento para o serviço de ${service.title}. Já sei que o atendimento é por agendamento e gostaria de ver as datas disponíveis.`
  )

  return (
    <div className="group relative overflow-hidden rounded-xl bg-brand-graphite border border-brand-graphite-light hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-40 sm:h-40 overflow-hidden flex-shrink-0 lg:h-50">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-brand-graphite/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{service.title}</h3>
        {/* Descrição oculta no mobile para manter o card compacto */}
        <p className="hidden sm:block text-gray-400 text-xs leading-relaxed flex-1">{service.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5 sm:pt-2 sm:border-t sm:border-brand-graphite-light">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  )
}

export default function ServicesGallery() {
  const waMsg = encodeURIComponent(
    'Olá! Vi o site e gostaria de solicitar um orçamento. Já sei que o atendimento é por agendamento e gostaria de ver as datas disponíveis para o serviço de '
  )
  const waFeatured = encodeURIComponent(
    'Olá! Vi o site e gostaria de saber mais sobre o serviço de Costura Programada e Personalizado. Gostaria de ver as datas disponíveis e discutir meu projeto.'
  )

  return (
    <section id="servicos" className="py-24 bg-brand-graphite-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Serviços que <span className="text-gradient-orange">Transformam</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada serviço é executado por profissionais especializados, com materiais de primeira
            linha e prazo rigoroso.
          </p>
        </div>

        {/* Grid: 2 cols mobile / 3 cols desktop — 6 serviços */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3 mb-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-brand-orange/30 hover:border-brand-orange/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/15 bg-brand-graphite">
          <div className="flex flex-col md:flex-row h-auto">
            {/* Image — left on desktop, top on mobile */}
            <div className="relative md:w-1/3 h-56 sm:h-64 md:h-auto overflow-hidden flex-shrink-0">
              <img
                src={featuredService.image}
                alt={featuredService.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Premium badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-brand-orange px-2.5 py-1 rounded-full">
                <span className="text-white text-xs font-black uppercase tracking-wider">✦ Premium</span>
              </div>
            </div>

            {/* Content — right on desktop, below on mobile */}
            <div className="flex flex-col justify-center p-4 sm:p-5 md:px-10 md:py-4 gap-3 md:gap-4 flex-1">
              <div>
                <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
                  {featuredService.subtitle}
                </span>
                <h3 className="text-white font-black text-xl md:text-2xl mt-1 leading-tight">
                  {featuredService.title}
                </h3>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl line-clamp-2 md:line-clamp-none">
                {featuredService.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {featuredService.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs font-semibold text-white bg-brand-orange px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/5565999999999?text=${waFeatured}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 text-xs sm:text-sm whitespace-nowrap"
                >
                  Quero um projeto exclusivo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>

        {/* Footer hint */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Não encontrou o que precisa?{' '}
          <a
            href={`https://wa.me/5565999999999?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline font-semibold"
          >
            Fale com a gente pelo WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
