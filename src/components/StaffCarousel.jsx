import { useEffect, useState } from 'react'

export default function StaffCarousel({ items = [], visible = 3, interval = 3000 }) {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, items.length - visible)

  useEffect(() => {
    if (items.length <= visible) return
    const id = setInterval(() => {
      setIndex(i => (i >= maxIndex ? 0 : i + 1))
    }, interval)
    return () => clearInterval(id)
  }, [items.length, visible, interval, maxIndex])

  const translatePercent = (index * 100) / visible

  return (
    <div className="staff-carousel" style={{ ['--visible']: visible }}>
      <div className="sc-list" style={{ transform: `translateX(-${translatePercent}%)` }}>
        {items.map((it, i) => (
          <div className="sc-item" key={i}>
            <div className="sc-img">
              <img src={it.src} alt={it.name} />
            </div>
            <div className="sc-meta">
              <div className="sc-name">{it.name}</div>
              <div className="sc-role">{it.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
