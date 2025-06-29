import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import HeroDetails from "./pages/HeroDetails";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-textSecondary font-display flex min-h-screen flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<HeroDetails />} />
          </Routes>
        </div>
        <footer className="bg-primary h-9 w-full"></footer>
      </div>
    </BrowserRouter>
  );
}
