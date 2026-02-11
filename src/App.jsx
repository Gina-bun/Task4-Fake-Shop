import { useState, useEffect } from "react";
import "./App.css";

import { ProductsSection } from "./components/ProductsSection";
import { SearchFilter } from "./components/SearchFilter";

function App() {
  const [products, setProducts] = useState([]); //shape is array of objects, fetch will return a list of products

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
      <div className="app-container">
        <SearchFilter/>
        <ProductsSection products={products}/>
      </div>
    </>
  );
}

export default App;
