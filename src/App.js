import React from "react";
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://6447ed9c50c2533744339a45.mockapi.io/items").then((res) => {
      setItems(res.data);
    });
    axios.get("https://6447ed9c50c2533744339a45.mockapi.io/cart").then((res) => {
      setCartItems(res.data);
    });
    axios.get("https://64510355a322196911582cd4.mockapi.io/favorites").then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6447ed9c50c2533744339a45.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://64510355a322196911582cd4.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://64510355a322196911582cd4.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch {
      alert("Cant add to favorite");
    }
  };

  const onRemoveCart = (id) => {
    axios.delete(`https://6447ed9c50c2533744339a45.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  document.body.style.overflow = cartOpened ? "hidden" : "auto";

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveCart} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites items={favorites} onAddToFavorites={onAddToFavorites} />}
        />
      </Routes>
    </div>
  );
}

export default App;
