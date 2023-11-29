import { ImageSlider } from "./ImageSlider"
import cat1 from "/src/images/cat-1.jpeg"
import cat2 from "/src/images/cat-2.jpeg"
import cat3 from "/src/images/cat-3.jpeg"
import cat4 from "/src/images/cat-4.jpeg"
import cat5 from "/src/images/cat-5.jpeg"
import cat6 from "/src/images/cat-6.jpeg"
import "./image-slider.css"

const IMAGES = [
  { url: cat1, alt: "Cat one"},
  { url: cat2, alt: "Cat two"},
  { url: cat3, alt: "Cat three"},
  { url: cat4, alt: "Cat four"},
  { url: cat5, alt: "Cat five"},
  { url: cat6, alt: "Cat six"},
];

export default function App() {
  return (
    <section aria-label="Image Slider" id="image-slider-container">
      <ImageSlider images={IMAGES} />
    </section>
  )
}
