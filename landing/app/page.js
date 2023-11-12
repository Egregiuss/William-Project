import Image from 'next/image'
import ImageSlider from './components/ImageSlider'
import img1 from "./images/insta.png"
import img2 from "./images/tiktok.png"
import img3 from "./images/twitter.png"

const images = [
  <Image src={img1}></Image> ,
  <Image src={img2}></Image>,
  <Image src={img3}></Image>,
  // Add more image URLs here
];


export default function Home() {
  return (
    <>
      <ImageSlider images={images}/>
    </>
  )
}
