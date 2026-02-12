import { useState, useEffect } from "react";
import "./App.css";
import { filterProducts } from "./utils/filterProducts";
import { useDebounce } from "./hooks/useDebounce";
import { Spinner } from "./components/Spinner";
import { ErrorMessage } from "./components/ErrorMessage";

import { ProductsSection } from "./components/ProductsSection";
import { SearchFilter } from "./components/SearchFilter";

function App() {
  const [products, setProducts] = useState([])//shape is array of objects, fetch will return a list of products
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError]  = useState(null)

  function handleSearchChange(value) {
    setSearchQuery(value);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://fakestoreapiserver.reactbd.org/api/products",
        );
        const responseObject = await response.json();

        setProducts(responseObject.data);

        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Something went wrong, please try again later( •̯́ ₃ •̯̀)")
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //for debouncing
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredProducts = filterProducts(products, debouncedSearchQuery);
  console.log(searchQuery);

  return (
    <>
      <div className="app-container">
        {loading ? (
          <Spinner/>
        ) : error ? (
          <ErrorMessage error={error}/>
        ) : (
          <>
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
            <ProductsSection products={filteredProducts} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
