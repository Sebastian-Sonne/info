import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import { SourcesPage } from "./pages/Mars-Quellen";
import Entwicklungshilfen from "./pages/Entwicklungshilfen";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route index element={<Home />} />
        <Route path="mars-quellen" element={<SourcesPage />} />
        <Route path="entwicklungshilfen" element={<Entwicklungshilfen />} />
      </Routes>
    </HashRouter>
  );
}