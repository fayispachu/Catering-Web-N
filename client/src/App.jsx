import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Beverages from "./pages/Beverages";
import Header from "./components/Header";
import CateringDashboard from "./pages/CateringDashboard";

function AppWrapper() {
  const location = useLocation();

  // Hide header on dashboard
  const hideHeader = location.pathname === "/dashboard";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beverage" element={<Beverages />} />
        <Route path="/dashboard" element={<CateringDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
