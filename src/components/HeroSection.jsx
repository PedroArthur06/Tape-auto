import heroBg from '@/assets/img-hero.png'
import CountUp from '@/components/CountUp'

export default function HeroSection() {
  const waMessage = encodeURIComponent(
    'Olá! Vi o site e gostaria de solicitar um orçamento. Já sei que o atendimento é por agendamento e gostaria de ver as datas disponíveis para o serviço de '
  )

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 text-brand-orange text-sm font-semibold tracking-widest uppercase mb-6 animate-fade-in">
          <span className="w-8 h-px bg-brand-orange" />
          Cuiabá · Várzea Grande · Mato Grosso
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-slide-up max-w-3xl">
          Sua referência em{' '}
          <span className="text-gradient-orange">Tapeçaria Automotiva</span>{' '}
          em Mato Grosso.
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Transformamos o interior do seu veículo com acabamento de fábrica e materiais de alta performance.
          Atendemos Cuiabá, Várzea Grande e interior do estado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={`https://wa.me/556599317888?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.117 1.524 5.847L.057 23.886l6.187-1.45A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.359-.214-3.724.873.906-3.64-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Agendar Diagnóstico Gratuito
          </a>

          <a
            href="#servicos"
            className="flex items-center gap-2 text-white border border-white/30 hover:border-brand-orange hover:text-brand-orange font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300"
          >
            Ver Serviços
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[
            { from: 0, to: 30, suffix: '+', label: 'Anos de experiência' },
            { from: 0, to: 5000, suffix: '+', label: 'Veículos transformados', separator: '.' },
            { from: 0, to: 100, suffix: '%', label: 'Acabamento de fábrica' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-brand-orange text-3xl font-black flex items-baseline gap-0.5">
                <CountUp
                  from={s.from}
                  to={s.to}
                  duration={2}
                  separator={s.separator || ''}
                  className="tabular-nums"
                />
                <span>{s.suffix}</span>
              </span>
              <span className="text-gray-400 text-sm mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs uppercase tracking-widest">Role para baixo</span>
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
