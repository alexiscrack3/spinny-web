import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Players } from "./containers/Players";
import { NotFound } from "./containers/NotFound";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/players" element={<Players />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
