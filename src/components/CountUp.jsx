import { useInView, useMotionValue, useSpring } from 'motion/react'
import { useCallback, useEffect, useRef } from 'react'

/**
 * CountUp — animates a number from `from` to `to` using a spring.
 * Starts when the element scrolls into view.
 *
 * Props:
 *   to         {number}  — target number
 *   from       {number}  — starting number (default 0)
 *   direction  {'up'|'down'} — default 'up'
 *   delay      {number}  — seconds before starting (default 0)
 *   duration   {number}  — rough duration in seconds (default 2)
 *   className  {string}
 *   startWhen  {boolean} — extra gate (default true)
 *   separator  {string}  — thousands separator e.g. '.' or ','
 *   onStart    {function}
 *   onEnd      {function}
 */
export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd,
}) {
  const ref = useRef(null)
  const motionValue = useMotionValue(direction === 'down' ? to : from)

  const damping = 20 + 40 * (1 / duration)
  const stiffness = 100 * (1 / duration)

  const springValue = useSpring(motionValue, { damping, stiffness })

  const isInView = useInView(ref, { once: true, margin: '0px' })

  const getDecimalPlaces = (num) => {
    const str = num.toString()
    if (str.includes('.')) {
      const decimals = str.split('.')[1]
      if (parseInt(decimals) !== 0) return decimals.length
    }
    return 0
  }

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to))

  const formatValue = useCallback(
    (latest) => {
      const hasDecimals = maxDecimals > 0
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      }
      const formatted = Intl.NumberFormat('en-US', options).format(latest)
      return separator ? formatted.replace(/,/g, separator) : formatted
    },
    [maxDecimals, separator]
  )

  // Set initial display value
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from)
    }
  }, [from, to, direction, formatValue])

  // Trigger spring when in view
  useEffect(() => {
    if (isInView && startWhen) {
      onStart?.()

      const t1 = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to)
      }, delay * 1000)

      const t2 = setTimeout(() => {
        onEnd?.()
      }, delay * 1000 + duration * 1000)

      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, duration, onStart, onEnd])

  // Subscribe to spring changes
  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = formatValue(latest)
    })
  }, [springValue, formatValue])

  return <span className={className} ref={ref} />
}
