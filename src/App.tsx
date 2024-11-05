import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import { SourcesPage } from "./pages/Mars-Quellen";
import Entwicklungshilfen from "./pages/Entwicklungshilfen";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Content children={<Contact />} />} />
        <Route path="oratorium" element={<Content children={<Contact />} />} />
        <Route path="mars-quellen" element={<SourcesPage />} />
        <Route path="entwicklungshilfen" element={<Entwicklungshilfen />} />
      </Routes>
    </HashRouter>
  );
}