import "./ProductsSection.css";
export function ProductsSection({ products }) {
  return (
    <>
      <div className="products-section">
        {products.map((product) => {
          return (
            <div className="product" key={product._id}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <h2>Price: ${product.price}</h2>
              <h2>category: {product.category}</h2>
              <h2>Sizes: {product.size.join(", ")}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
