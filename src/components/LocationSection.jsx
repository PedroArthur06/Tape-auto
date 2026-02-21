export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 bg-brand-graphite-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">Onde estamos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Fácil de <span className="text-gradient-orange">Encontrar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Localizada na Rodovia Palmiro Paes de Barros, de fácil acesso para quem vem de qualquer região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden h-80 lg:h-[420px] border border-brand-graphite shadow-2xl shadow-black/50">
            <iframe
              title="Localização Tapeçauto"
              src="https://maps.google.com/maps?q=Rodovia+Palmiro+Paes+de+Barros,+Cuiab%C3%A1,+MT&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.1)' }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Address */}
            <div className="bg-brand-graphite rounded-2xl p-6 border border-brand-graphite-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Endereço</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Rodovia Palmiro Paes de Barros<br />
                    Cuiabá — MT
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-brand-graphite rounded-2xl p-6 border border-brand-graphite-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Horários</h3>
                  <div className="flex flex-col gap-1.5 text-sm">
                    <div className="flex justify-between gap-6">
                      <span className="text-gray-400">Seg — Sex</span>
                      <span className="text-white font-medium">08h00 — 18h00</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-gray-400">Sábado</span>
                      <span className="text-white font-medium">08h00 — 12h00</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-gray-400">Domingo</span>
                      <span className="text-red-400 font-medium">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map links */}
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Rodovia+Palmiro+Paes+de+Barros+Cuiabá+MT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-brand-graphite hover:bg-brand-graphite-light border border-brand-graphite-light text-white font-medium px-5 py-3.5 rounded-xl transition-all duration-200 group"
              >
                <span className="text-xl">📍</span>
                <span>Abrir no Google Maps</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://waze.com/ul?q=Rodovia+Palmiro+Paes+de+Barros+Cuiabá+MT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-brand-graphite hover:bg-brand-graphite-light border border-brand-graphite-light text-white font-medium px-5 py-3.5 rounded-xl transition-all duration-200 group"
              >
                <span className="text-xl">🚗</span>
                <span>Abrir no Waze</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
