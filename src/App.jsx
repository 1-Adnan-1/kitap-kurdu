import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import RomanSayfasi from "./pages/Roman";
import HikayeSayfasi from "./pages/Hikaye";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ürünler" element={<Product />} />
          <Route path="/kategori" element={<Category />}>
            <Route path="hikaye" element={<HikayeSayfasi />} />
            <Route path="roman" element={<RomanSayfasi />} />
          </Route>
          <Route path="/detay/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
