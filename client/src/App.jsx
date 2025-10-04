import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Beverages from "./pages/Beverages";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beverage" element={<Beverages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
