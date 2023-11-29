import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"

type ImageSliderProps = {
  imageUrls: string[]
}

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPreviousImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }
  
  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }

  return (
  <>
    <section id="image-slider">
      <div id="image-dump">
        {imageUrls.map(url => (
          <img
            key={url}
            src={url}
            className="image-slider-image"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPreviousImage}
        className="image-slider-button"
        style={{ left: 0 }}
      ><ArrowBigLeft /></button>
      <button
        onClick={showNextImage}
        className="image-slider-button"
        style={{ right: 0 }}
      ><ArrowBigRight /></button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem"
        }}
      >
        {imageUrls.map((_, i) => (
          <button
            key={i}
            className="image-slider-dot-button"
            onClick={() => setImageIndex(i)}
          >
            { i === imageIndex ? <CircleDot /> : <Circle /> }
          </button>
        ))}
      </div>
    </section>
  </>
 ) 
}