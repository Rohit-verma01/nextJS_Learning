import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <Link href="/products">Go Back</Link>
      <h1>Product {params.productId}</h1>
    </>
  );
}
