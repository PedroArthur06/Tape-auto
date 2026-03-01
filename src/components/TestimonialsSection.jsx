import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'Rodrigo Figueiredo',
    handle: 'Google Reviews ⭐⭐⭐⭐⭐',
    description:
      'Fiz o revestimento completo dos bancos do meu Corolla em couro natural. Ficou IGUAL saído de fábrica — acabamento impecável, costura perfeita. Vale cada centavo. Recomendo de olhos fechados!',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Camila Brandão',
    handle: 'Google Reviews ⭐⭐⭐⭐⭐',
    description:
      'Impressionante a qualidade do serviço! Levei meu HB20 para reformar o volante e o forro das portas. Atendimento super profissional, entregaram no prazo combinado e o resultado superou minhas expectativas.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Marcos Oliveira',
    handle: 'Google Reviews ⭐⭐⭐⭐⭐',
    description:
      'Vim de Rondonópolis especialmente para fazer o serviço na Tapeçauto. O agendamento foi perfeito, fui atendido na hora certa e em um dia o carro estava pronto. A costura programada ficou simplesmente incrível!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Fernanda Lima',
    handle: 'Google Reviews ⭐⭐⭐⭐⭐',
    description:
      'Mandei a peça do teto por logística e eles me avisaram quando chegou, fizeram o serviço com agilidade e devolveram sem nenhum problema. Atendimento pelo WhatsApp muito rápido e claro. Nota 10!',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'André Carvalho',
    handle: 'Google Reviews ⭐⭐⭐⭐⭐',
    description:
      'Fiz o revestimento do assoalho e o forro do teto do meu Jeep. Qualidade absurda, material top e preço justo. O carro parece que saiu da concessionária. Equipe super competente e honesta.',
    image: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Juliana Souza',
    handle: 'Google Reviews ⭐⭐⭐⭐⭐',
    description:
      'Melhor tapeçaria de Cuiabá sem dúvida! Reformei os quatro bancos da minha Hilux em material sintético e ficou melhor que couro. Resistente ao calor do MT e visual premium. Recomendo a todos!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
]

export default function TestimonialsSection() {
  const ref = useScrollAnimation()

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden" ref={ref}>
      {/* Decorative glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="scroll-reveal text-brand-orange text-sm font-semibold tracking-widest uppercase inline-block">
              Depoimentos
            </span>
            <h2 className="scroll-reveal delay-100 text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
              O que nossos{' '}
              <span className="text-gradient-orange">clientes dizem</span>
            </h2>
          </div>

          {/* Google rating badge */}
          <div className="scroll-reveal delay-200 flex items-center gap-4 bg-brand-graphite border border-brand-graphite-light rounded-2xl px-6 py-4 self-start md:self-auto flex-shrink-0">
            <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div>
              <p className="text-white font-black text-2xl leading-none">5.0</p>
              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 text-xs">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="scroll-reveal">
          <AnimatedTestimonials data={testimonials} autoPlay interval={6000} />
        </div>
      </div>
    </section>
  )
}
