import { useEffect, useState } from 'react'

export default function VerticalRotator({ images = [], interval = 2500, height = 70, width = '120px' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length === 0) return
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className="horizontal-rotator" style={{ height: `${height}px`, width: typeof width === 'number' ? `${width}px` : width }}>
      <div className="hr-list" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="hr-item" key={i}>
            <img src={src} alt="thumbnail" />
          </div>
        ))}
      </div>
    </div>
  )
}
