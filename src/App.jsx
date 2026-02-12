import { useState, useEffect } from "react";
import "./App.css";
import { filterProducts } from "./utils/filterProducts";
import { useDebounce } from "./hooks/useDebounce";

import { ProductsSection } from "./components/ProductsSection";
import { SearchFilter } from "./components/SearchFilter";

function App() {
  const [products, setProducts] = useState([]); //shape is array of objects, fetch will return a list of products
  const [searchQuery, setSearchQuery] = useState("")

  function handleSearchChange(value){
    setSearchQuery(value)
    
  }

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  //for debouncing
  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  const filteredProducts = filterProducts(products, debouncedSearchQuery)
  console.log(searchQuery)

  



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
