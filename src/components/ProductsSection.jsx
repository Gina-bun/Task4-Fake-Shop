import { ProductImage } from "./ProductImage";
import "./ProductsSection.css";
import noResultsImage from "../assets/noResult.jpeg"


export function ProductsSection({ products }) {
  return (
    <>
      <div className="flex justify-center mt-8 px-6">
        {products.length > 0 ?
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
             {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <ProductImage src={product.image} alt={product.title}/>
              <h2>{product.title}</h2>
              <h2>Price: ${product.price}</h2>
              <h2>category: {product.category}</h2>
              <h2>Rating: {product.rating.rate} ({product.rating.count} reviews)</h2>
              <button className="bg-green-600 p-1 w-full rounded-md mt-1">Add to Cart</button>
            </div>
          );
        })} 
        </div>
         : (<div className="no-results h-screen flex flex-col items-center mt-[3em]">
          <div className="w-64 aspect-square relative">
            <img 
            className="no-results-image rounded-lg opacity-35 object-contain w-full h-full" 
            src={noResultsImage} 
            alt="no results" 
           />
          </div>
        
        <h2 className="text-[1.2em]">No results found</h2>
        </div>)}
      </div>
    </>
  );
}
