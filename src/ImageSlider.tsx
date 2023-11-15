import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import "./image-slider.css"

type ImageSliderProps = {
  imageUrls: string[]
}

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPreviousImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }
  
  function showNextImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }

  return (
  <>
    <section style={{
      width: "100%",
      height: "100%",
      position: "relative",
    }}>
      <img src={imageUrls[imageIndex]} className="image-slider-image" />
      <button
        className="image-slider-button"
        style={{ left: 0 }}
        onClick={showPreviousImage}
      ><ArrowBigLeft /></button>
      <button
        className="image-slider-button"
        style={{ right: 0 }}
        onClick={showNextImage}
      ><ArrowBigRight /></button>
    </section>
  </>
 ) 
}