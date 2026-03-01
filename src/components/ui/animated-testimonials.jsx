import { useState, useEffect, useRef } from 'react'

/**
 * AnimatedTestimonials — pure React + Tailwind implementation.
 * Props:
 *   data: Array<{ name, handle, description, image }>
 *   autoPlay?: boolean  (default true)
 *   interval?: number   (ms, default 5000)
 */
export function AnimatedTestimonials({ data = [], autoPlay = true, interval = 5000 }) {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next') // 'next' | 'prev'
  const timerRef = useRef(null)

  const go = (index, dir = 'next') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
    }, 350)
  }

  const next = () => go((active + 1) % data.length, 'next')
  const prev = () => go((active - 1 + data.length) % data.length, 'prev')

  useEffect(() => {
    if (!autoPlay) return
    timerRef.current = setInterval(next, interval)
    return () => clearInterval(timerRef.current)
  }, [active, autoPlay, interval])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    if (autoPlay) timerRef.current = setInterval(next, interval)
  }

  if (!data.length) return null

  const item = data[active]

  const slideClass = animating
    ? direction === 'next'
      ? 'opacity-0 translate-x-8'
      : 'opacity-0 -translate-x-8'
    : 'opacity-100 translate-x-0'

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      {/* Card stack visual (background cards) */}
      <div className="relative flex flex-col md:flex-row gap-8 items-center">

        {/* === Avatar column === */}
        <div className="relative flex-shrink-0 w-28 h-28 md:w-40 md:h-40">
          {/* shadow rings */}
          {data.map((d, i) => {
            const offset = (i - active + data.length) % data.length
            if (offset === 0 || offset > 4) return null
            const scale = 1 - offset * 0.07
            const z = 10 - offset
            return (
              <img
                key={i}
                src={d.image}
                alt=""
                className="absolute inset-0 w-full h-full rounded-full object-cover border-2 border-brand-graphite-light"
                style={{
                  transform: `scale(${scale}) translateX(${offset * 12}px) translateY(${offset * 4}px)`,
                  zIndex: z,
                  opacity: 1 - offset * 0.2,
                  transition: 'all 0.4s ease',
                }}
              />
            )
          })}

          {/* active avatar */}
          <img
            src={item.image}
            alt={item.name}
            className="relative z-20 w-full h-full rounded-full object-cover border-2 border-brand-orange shadow-lg shadow-orange-500/30"
            style={{ transition: 'all 0.4s ease' }}
          />
        </div>

        {/* === Text column === */}
        <div
          className={`flex-1 transition-all duration-350 ease-out ${slideClass}`}
          style={{ transitionDuration: '350ms' }}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 font-medium">
            <span className="text-brand-orange text-4xl font-black leading-none mr-1 -mt-2 inline-block">"</span>
            {item.description}
            <span className="text-brand-orange text-4xl font-black leading-none ml-1 inline-block">"</span>
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 rounded-full bg-brand-orange" />
            <div>
              <p className="text-white font-bold text-sm">{item.name}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.handle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-10">
        {/* Prev */}
        <button
          onClick={() => { prev(); resetTimer() }}
          className="w-10 h-10 rounded-full border border-brand-graphite-light bg-brand-graphite hover:border-brand-orange hover:text-brand-orange text-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => { go(i, i > active ? 'next' : 'prev'); resetTimer() }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'bg-brand-orange w-6' : 'bg-brand-graphite-light w-1.5 hover:bg-gray-500'
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => { next(); resetTimer() }}
          className="w-10 h-10 rounded-full border border-brand-graphite-light bg-brand-graphite hover:border-brand-orange hover:text-brand-orange text-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Próximo"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
