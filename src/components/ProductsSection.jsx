import "./ProductsSection.css";
import noResultsImage from "../assets/noResult.jpeg"
export function ProductsSection({ products }) {
  return (
    <>
      <div className="products-section">
        {products.length > 0 ?
            (products.map((product) => {
          return (
            <div className="product" key={product._id}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <h2>Price: ${product.price}</h2>
              <h2>category: {product.category}</h2>
              <h2>Sizes: {product.size.join(", ")}</h2>
            </div>
          );
        })) : <div className="no-results h-screen flex flex-col items-center mt-[3em]">
        <img className="no-results-image rounded-lg opacity-35" src={noResultsImage} alt="no results" />
        <h2 className="text-[1.2em]">No result found</h2>
        </div>}
      </div>
    </>
  );
}
