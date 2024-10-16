import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import { MarsQuellen } from "./pages/Mars-Quellen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Content children={<Contact />} />} />
        <Route path="/oratorium" element={<Content children={<Contact />} />} />
        <Route path="/mars-quellen" element={<MarsQuellen />} />
      </Routes>
    </BrowserRouter>
  );
}