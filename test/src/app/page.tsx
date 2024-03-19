import Link from "next/link";

export default function Home(){
    return <>
    <h1>Welcome to our world</h1>
    <Link href="/blog">Blog</Link>
    <div></div>
    <Link href="/products">Products</Link>
    </>
}