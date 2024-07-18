import Navbar from "./components/NavBar";
import Product from "./components/products";
import Cart from "./components/cart";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [phones, setPh] = useState([
    {
      name: "Iphone 15 Pro max",
      price: 250000,
      img: "apple-iphone-15-pro-max.jpg",
      category: "Iphone",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Iphone 15 Pro",
      price: 225000,
      img: "apple-iphone-15-pro.jpg",
      category: "Iphone",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Iphone 14 Pro max",
      price: 200000,
      img: "apple-iphone-14-pro-max.jpg",
      category: "Iphone",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Iphone 14 Pro",
      price: 175000,
      img: "apple-iphone-14-pro.jpg",
      category: "Iphone",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Galaxy S24 Ultra",
      price: 300000,
      img: "s24-ultra.jpg",
      category: "Samsung",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Galaxy S24",
      price: 275000,
      img: "s24.jpg",
      category: "Samsung",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Galaxy S23 Ultra",
      price: 250000,
      img: "s23-ultra.jpg",
      category: "Samsung",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Galaxy S23",
      price: 225000,
      img: "s23.jpg",
      category: "Samsung",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Xiaomi MI 14T Pro",
      price: 175000,
      img: "14T-pro.jpg",
      category: "Xiaomi",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Xiaomi MI 14T",
      price: 150000,
      img: "14T.jpg",
      category: "Xiaomi",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Xiaomi MI 13T Pro",
      price: 150000,
      img: "13T-Pro.jpg",
      category: "Xiaomi",
      iscart: false,
      quantity: 1,
    },
    {
      name: "Xiaomi MI 13T",
      price: 125000,
      img: "13T.jpg",
      category: "Xiaomi",
      iscart: false,
      quantity: 1,
    },
  ]);
  const [phone, setPhone] = useState(phones);
  const FILT = (e) => {
    const updated = phones.filter((element) => {
      return element.category === e;
    });
    setPhone(updated);
  };
  const [quantity, setQ] = useState(0);
  const [price, setP] = useState(0);
  const [cart, setCart] = useState([]);
  const [value, setV] = useState(0);
  const [p,setPr] = useState(0)
  const add = (e) => {
    if (e.iscart === false) {
      setCart((c) => [...c, e]);
      alert(`${e.name} has been added to cart`);
      e.iscart = true;
      setP((p) => p + e.price);
      setV((v) => v + 1);
      setQ(e.quantity)
      setPr(e.price)
    } else {
      alert(`${e.name} is already in your cart`);
    }
  };
  const rem = (elm, e) => {
    setCart((c) => c.filter((_, index) => index !== e));
    setV((v) => v - 1);
    elm.iscart = false;
    setP((p) => p - elm.price);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          value={value}
          cart={cart}
          phones={phones}
          val={val}
        />
        <Routes basename="/app">
          <Route
            path="/"
            element={
              <Product
                phones={phones}
                add={add}
                phone={phone}
                FILT={FILT}
                setPhone={setPhone}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                price={price}
                quantity={quantity}
                rem={rem}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
