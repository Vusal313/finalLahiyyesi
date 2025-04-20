import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Foother from "./components/Foother";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ProductDetail from "./ProductDetail"; // bu satırı ekle

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Foother />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Bu satır eklendi */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
