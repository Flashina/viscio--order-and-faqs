import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Order from "./Pages.jsx/Order";
import Faqs from "./Pages.jsx/Faqs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
