import { ImageSlider } from "./ImageSlider"
import cat1 from "/src/images/cat-1.jpeg"
import cat2 from "/src/images/cat-2.jpeg"
import cat3 from "/src/images/cat-3.jpeg"
import cat4 from "/src/images/cat-4.jpeg"
import cat5 from "/src/images/cat-5.jpeg"
import cat6 from "/src/images/cat-6.jpeg"

const IMAGES = [cat1, cat2, cat3, cat4, cat5, cat6]

export default function App() {
  return (
    <>
      <ImageSlider imageUrls={IMAGES} />
    </>
  )
}


// { url: cat1, alt: "Cat 1" },
// { url: cat2, alt: "Cat 2" },
// { url: cat3, alt: "Cat 3" },
// { url: cat4, alt: "Cat 4" },
// { url: cat5, alt: "Cat 5" },
// { url: cat6, alt: "Cat 6" },