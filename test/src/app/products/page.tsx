import Link from "next/link";

export default function Products(){
    return(<>
        <h1>All Products</h1>
        <h2><Link href="products/1">Product 1</Link></h2>
        <h2><Link href="products/2">Product 2</Link></h2>
        <h2><Link href="products/3" replace>Product 3</Link></h2>
        <Link href="/">Go to Home</Link>
    </>)
}