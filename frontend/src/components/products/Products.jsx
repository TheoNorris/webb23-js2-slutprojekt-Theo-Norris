import { useState, useEffect } from "react";
import { Search } from "./Search";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { ProductPage } from "./ProductPage";

export function Products({ setAppBasketProducts }) {
  const [status, setStatus] = useState("ok");
  const [products, setProducts] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [basketProducts, setBasketProducts] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [dataGlobe, setDataGlobe] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");

      let url = "http://localhost:3100/products";

      url = `http://localhost:3100/products?${filterType}=${searchWord}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();

        setDataGlobe(data);

        if (data.length === 0) {
          setProducts([]);
          setStatus("error");
        } else {
          let updatedProducts = data;

          if (priceFilter === "high") {
            updatedProducts = data.sort((a, b) => b.price - a.price);
          } else if (priceFilter === "low") {
            updatedProducts = data.sort((a, b) => a.price - b.price);
          }

          setProducts(updatedProducts);
          setStatus("ok");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setStatus("error");

        setProducts([]);
      }
    };

    fetchData();
  }, [searchWord]);

  useEffect(() => {
    if (dataGlobe.length === 0) return;

    let updatedProducts = [...dataGlobe];

    if (priceFilter === "high") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (priceFilter === "low") {
      updatedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(updatedProducts);
  }, [priceFilter]);

  useEffect(() => {
    setAppBasketProducts(basketProducts);
  }, [basketProducts]);

  return (
    <div id="product-page">
      <div id="product-container">
        <h2 className="header-h1">ALL PRODUCTS</h2>
        <Search
          setSearchWord={setSearchWord}
          setFilterType={setFilterType}
          setPriceFilter={setPriceFilter}
        />
        <div id="status-div">
          {status === "loading" && <Loading />}
          {status === "error" && <Error />}
          {status === "ok" &&
            products.map((product) => (
              <ProductPage
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                quantity={product.quantity}
                image={product.image}
                setBasketProducts={setBasketProducts}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
