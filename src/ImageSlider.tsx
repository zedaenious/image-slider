import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import "./image-slider.css"

type ImageSliderProps = {
  imageUrls: string[]
}

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

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
      ><ArrowBigLeft /></button>
      <button
        className="image-slider-button"
        style={{ right: 0 }}
      ><ArrowBigRight /></button>
    </section>
  </>
 ) 
}