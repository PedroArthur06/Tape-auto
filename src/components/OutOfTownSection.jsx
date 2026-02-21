export default function OutOfTownSection() {
  const waMsg = encodeURIComponent(
    'Olá! Vim do interior e gostaria de planejar minha visita. Gostaria de verificar a disponibilidade para o serviço de '
  )

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative orange glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-graphite to-brand-graphite-dark border border-brand-graphite-light rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
                alt="Rodovia Mato Grosso"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-graphite md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite to-transparent md:hidden block" />

              {/* Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-brand-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-white text-xs font-semibold">Atendemos todo o MT</span>
              </div>
            </div>

            {/* Text side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">
                🚗 Clientes do Interior
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                Vem do interior?{' '}
                <span className="text-gradient-orange">Planeje sua visita.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Atendemos clientes de todo o Mato Grosso mediante <strong className="text-white">agendamento prévio</strong>.
                Entre em contato para validarmos a disponibilidade de peças e equipe, garantindo que sua viagem seja
                produtiva e o serviço concluído <strong className="text-white">no prazo combinado.</strong>
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Agendamento exclusivo para clientes de fora',
                  'Prazo garantido — planeje só uma viagem',
                  'Atendemos peças enviadas por logística',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5565999999999?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.117 1.524 5.847L.057 23.886l6.187-1.45A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.359-.214-3.724.873.906-3.64-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Planejar Minha Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
