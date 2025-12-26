import { getData } from "@/services/products";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
    const { slug } = await params;
    const products = await getData("http://localhost:3000/api/product");
    
  return (
    <div className="grid grid-cols-4 mt-5 place-items-center">
      {/* <h1>{slug ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 && 
      products.data.map((product: any) => (   
      <Link
      href={`/product/detail/${product.id}`} 
      key={product.id} 
      className="w-full max-w-sm bg-gray-800 text-white border border-gray-700 rounded-lg shadow my-5 p-8"
      >
              <img 
              className="rounded-t-lg object-cover h-96 w-full bg-white" 
              src={product.image} 
              alt="product image" />
          <div>
             
                  <h5 className="text-xl font-semibold tracking-tight text-white p-5 truncate">{product.title}</h5>
             
              <div className="flex items-center justify-between mt-3">
                  <span className="text-3xl font-extrabold text-heading">$ {product.price}</span>
                  <button type="button" className="inline-flex items-center  text-white bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                      <svg 
                      className="w-4 h-4 me-1.5" 
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                      >
                        <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                        </svg>
                      Add to cart
                  </button>
              </div>
          </div>
      </Link>

      ))}
      {slug && (
        <>
          <p>Category : {slug[0]}</p>
          <p>Gender : {slug[1]}</p>
          <p>id : {slug[2]}</p>
        </>
    )}
    </div>
  );
}