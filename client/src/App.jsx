import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Beverages from "./pages/Beverages";
import Header from "./components/Header";
import CateringDashboard from "./pages/CateringDashboard";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

// Import your context
import { UserProvider } from "./context/UserContext";

function AppWrapper() {
  const location = useLocation();

  // Hide header on login and dashboard pages
  const hideHeader = ["/login", "/dashboard"].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beverage" element={<Beverages />} />
        <Route path="/dashboard" element={<CateringDashboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
