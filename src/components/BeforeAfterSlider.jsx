import { useState, useRef, useCallback, useEffect } from 'react'

import antesImg from '@/assets/antes.png'
import depoisImg from '@/assets/depois.png'

const BEFORE_IMG = antesImg
const AFTER_IMG  = depoisImg

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return 50
    const x = clientX - rect.left
    return Math.min(100, Math.max(0, (x / rect.width) * 100))
  }, [])

  const handlePointerDown = (e) => {
    e.preventDefault()
    setDragging(true)
    containerRef.current?.setPointerCapture(e.pointerId)
  }
  const handlePointerMove = useCallback((e) => {
    if (!dragging) return
    setPosition(getPercent(e.clientX))
  }, [dragging, getPercent])
  const handlePointerUp = () => setDragging(false)

  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp)
    return () => window.removeEventListener('pointerup', handlePointerUp)
  }, [])

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">Veja a diferença</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Antes & <span className="text-gradient-orange">Depois</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Arraste o divisor para ver a transformação completa. É isso que a Tapeçauto faz com o interior do seu veículo.
          </p>
        </div>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-4xl h-[420px] sm:h-[520px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-black/60 border border-brand-graphite"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        >
          {/* After (base layer) */}
          <img
            src={AFTER_IMG}
            alt="Depois da tapeçaria"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          <span className="absolute right-4 bottom-4 bg-brand-orange text-white text-sm font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest z-10">
            Depois
          </span>

          {/* Before (clipped layer) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={BEFORE_IMG}
              alt="Antes da tapeçaria"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <span className="absolute left-4 bottom-4 bg-black/70 text-white text-sm font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest">
              Antes
            </span>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg shadow-black/50 pointer-events-none"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl pointer-events-none border-4 border-brand-orange z-20"
            style={{ left: `${position}%` }}
          >
            <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6 italic">
          * Imagens ilustrativas dos padrões de acabamento aplicados pela equipe Tapeçauto
        </p>
      </div>
    </section>
  )
}
