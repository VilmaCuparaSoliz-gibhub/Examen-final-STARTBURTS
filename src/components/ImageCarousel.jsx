import { useEffect, useState } from 'react'

export default function ImageCarousel({ images = [], items, visible = 1, interval = 2500, height = 70, width = '100%' }) {
  const sourceItems = items ?? images
  const normalized = sourceItems.map(item =>
    typeof item === 'string' ? { src: item, label: undefined, overlay: false } : { overlay: false, ...item }
  )
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, normalized.length - visible)

  useEffect(() => {
    if (normalized.length <= visible) return
    const id = setInterval(() => {
      setIndex(i => (i >= maxIndex ? 0 : i + 1))
    }, interval)
    return () => clearInterval(id)
  }, [normalized.length, visible, interval, maxIndex])

  const translate = (index * 100) / visible

  return (
    <div className="image-carousel" style={{ height: `${height}px`, width: typeof width === 'number' ? `${width}px` : width, ['--visible']: visible }}>
      <div className="ic-list" style={{ transform: `translateX(-${translate}%)` }}>
        {normalized.map((item, i) => (
          <div className={`ic-item ${item.overlay ? 'ic-item-overlay' : ''}`} key={i}>
            <img src={item.src} alt={item.label ?? `carousel-${i}`} />
            {item.label ? <div className={`ic-caption ${item.overlay ? 'ic-caption-overlay' : ''}`}>{item.label}</div> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
