import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPreviousImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }
  
  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  return (
    <section id="image-slider">
    <div id="image-dump">
      {images.map(({url, alt}, index) => (
        <img
          key={url}
          src={url}
          alt={alt}
          aria-hidden={imageIndex !== index}
          className="image-slider-image"
          style={{ translate: `${-100 * imageIndex}%` }}
        />
      ))}
    </div>
    <button
      aria-label="View Previous Image"
      onClick={showPreviousImage}
      className="image-slider-button"
      style={{ left: 0 }}
    ><ArrowBigLeft aria-hidden /></button>
    <button
      aria-label="View Next Image"
      onClick={showNextImage}
      className="image-slider-button"
      style={{ right: 0 }}
    ><ArrowBigRight aria-hidden /></button>
    <nav
      style={{
        position: "absolute",
        bottom: ".5rem",
        left: "50%",
        translate: "-50%",
        display: "flex",
        gap: ".25rem"
      }}
    >
      {images.map((_, i) => (
        <button
          key={i}
          aria-label={`View Image ${i + 1}`}
          className="image-slider-dot-button"
          onClick={() => setImageIndex(i)}
        >
          { i === imageIndex ? (
            <CircleDot aria-hidden />
          ) : (
            <Circle aria-hidden />
          )}
        </button>
      ))}
    </nav>
  </section>
  )
}