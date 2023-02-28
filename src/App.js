import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import { Route, Routes } from "react-router-dom";
import Searched from "./pages/Searched";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/searched/:search" element={<Searched />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
