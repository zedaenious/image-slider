import { ImageSlider } from "./ImageSlider"
import cat1 from "/src/images/cat-1.jpeg"
import cat2 from "/src/images/cat-2.jpeg"
import cat3 from "/src/images/cat-3.jpeg"
import cat4 from "/src/images/cat-4.jpeg"
import cat5 from "/src/images/cat-5.jpeg"
import cat6 from "/src/images/cat-6.jpeg"
// import cat7 from "/src/images/cat-7.jpeg"
// import cat8 from "/src/images/cat-8.jpeg"
// import cat9 from "/src/images/cat-9.jpeg"
// import cat10 from "/src/images/cat-10.jpeg"
// import cat11 from "/src/images/cat-11.jpeg"
// import cat12 from "/src/images/cat-12.jpeg"
// import cat13 from "/src/images/cat-13.jpeg"
// import cat14 from "/src/images/cat-14.jpeg"
// import cat15 from "/src/images/cat-15.jpeg"

const IMAGES = [
  { url: cat1, alt: "Cat 1" },
  { url: cat2, alt: "Cat 2" },
  { url: cat3, alt: "Cat 3" },
  { url: cat4, alt: "Cat 4" },
  { url: cat5, alt: "Cat 5" },
  { url: cat6, alt: "Cat 6" },
  /*
  { url: cat7, alt: "Cat 7" },
  { url: cat8, alt: "Cat 8" },
  { url: cat9, alt: "Cat 9" },
  { url: cat10, alt: "Cat 10" },
  { url: cat11, alt: "Cat 11" },
  { url: cat12, alt: "Cat 12" },
  { url: cat13, alt: "Cat 13" },
  { url: cat14, alt: "Cat 14" },
  { url: cat15, alt: "Cat 15" },
  */
]

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        maxWidth: "1200px",
        aspectRatio: "10 / 6",
      }}
    >
      <ImageSlider images={{IMAGES}} />
    </div>
  )
}
