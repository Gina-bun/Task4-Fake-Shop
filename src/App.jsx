import { useState, useEffect } from "react";
import "./App.css";
import { filterProducts } from "./utils/filterProducts";

import { ProductsSection } from "./components/ProductsSection";
import { SearchFilter } from "./components/SearchFilter";

function App() {
  const [products, setProducts] = useState([]); //shape is array of objects, fetch will return a list of products
  const [searchQuery, setSearchQuery] = useState("")

  function handleSearchChange(value){
    setSearchQuery(value)
    
  }

  const filteredProducts = filterProducts(products, searchQuery)

  console.log(searchQuery)

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
      <div className="app-container">
        <SearchFilter searchQuery={searchQuery} onSearchChange={handleSearchChange}/>
        <ProductsSection products={filteredProducts} />
      </div>
    </>
  );
}

export default App;
