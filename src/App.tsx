import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import { SourcesPage } from "./pages/Mars-Quellen";
import Entwicklungshilfen from "./pages/Entwicklungshilfen";
import DirectusScreen from "./pages/Directus";
import Brexit from "./pages/Brexit-Quellen";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route index element={<Home />} />
        <Route path="mars-quellen" element={<SourcesPage />} />
        <Route path="entwicklungshilfen" element={<Entwicklungshilfen />} />
        <Route path="brexit" element={<Brexit />} />
        {/*<Route path="directus" element={<DirectusScreen />} /> */}
      </Routes>
    </HashRouter>
  );
}