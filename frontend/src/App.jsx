import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AddService from "./pages/AddService";
import BookNow from "./pages/BookNow";
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/addservice" element={<AddService />} />
         <Route path="/book" element={<BookNow />} />
      </Routes>
    </>
  );
}

export default App;
