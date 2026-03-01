import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Diagnóstico Digital',
    description: 'Envie fotos do interior do seu veículo via WhatsApp. Nossa equipe avalia o estado atual e identifica o melhor tratamento.',
    badge: 'Rápido e prático',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Orçamento e Prazo',
    description: 'Definimos juntos o material ideal, o custo e o prazo de execução com total transparência. Sem surpresas.',
    badge: 'Transparência total',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Agendamento',
    description: 'Reservamos uma data exclusiva para o seu veículo. Atenção total, sem interrupções, entrega rigorosamente no prazo.',
    badge: 'Data exclusiva',
  },
]

const staggerClasses = ['', 'delay-200', 'delay-400']

export default function HowItWorks() {
  const ref = useScrollAnimation()

  return (
    <section id="como-funciona" className="py-24 bg-brand-graphite-dark relative overflow-hidden" ref={ref}>
      {/* Background decoratives */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-brand-orange text-sm font-semibold tracking-widest uppercase inline-block">Processo</span>
          <h2 className="scroll-reveal delay-100 text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Como funciona nosso{' '}
            <span className="text-gradient-orange">atendimento</span>
          </h2>
          <p className="scroll-reveal delay-200 text-gray-400 text-lg max-w-2xl mx-auto">
            Transformação sob medida com hora marcada. Trabalhamos com agendamento para que seu veículo receba <strong className="text-white">atenção total e exclusiva.</strong>
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-brand-orange/20 via-brand-orange to-brand-orange/20" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`scroll-reveal ${staggerClasses[i]} relative flex flex-col items-center text-center group`}
            >
              {/* Step number circle */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 border-2 border-brand-orange flex items-center justify-center text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-orange rounded-full text-xs font-black text-white flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
              <span className="inline-block text-xs font-semibold text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full">
                {step.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom callout box */}
        <div className="scroll-reveal mt-16 bg-brand-graphite border border-brand-orange/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-white font-bold text-xl mb-2">Transformação sob medida com hora marcada.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trabalhamos com agendamento para garantir que sua peça ou veículo receba atenção total, sem interrupções e com entrega rigorosamente no prazo combinado.
            </p>
          </div>
          <a
            href="https://wa.me/556599317888?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20consultar%20a%20disponibilidade%20de%20agenda."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 text-center whitespace-nowrap"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  )
}
