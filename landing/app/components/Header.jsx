import Link from "next/link"

export default function Header(){
    return(
        <div className="flex bg-black text-white justify-between items-center py-5 px-10">
            <div className="ml-8">Logo here</div>
            <div className="flex gap-12">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/discography">Discography</Link>
                <Link href="/news">News</Link>
                <Link href="/media">Media</Link>
                <Link href="/products">Product Store</Link>
                
        
            </div>
            <div className="mr-10 border-4 px-7 py-4 rounded-xl" >
                <p >Book Now</p>
            </div>
        </div>
    )
}