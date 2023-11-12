import Image from "next/image"
import insta from "../images/insta.png"
import tiktok from "../images/tiktok.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"

export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center gap-6 bg-black text-white mt-4 py-6">
            <div className="flex justify-center items-center gap-6">
                <div className="w-20 h-10"><Image className="w-10" src={insta}></Image></div>
                <div className="w-20 h-10"><Image className="w-10" src={tiktok}></Image></div>
                <div className="w-20"><Image className="w-10" src={twitter}></Image></div>
                <div className="w-20 "><Image className=" h-20" src={youtube}></Image></div>
            </div>
            <div>logo</div>
            <div className="flex gap-4">
                <p>Terms</p>
                <p>Privacy</p>
                <p>About</p>
            </div>
            <div>© 2023 Eugee. Designed and Developed by Wallpaper Guy</div>
        </div>
    )
}