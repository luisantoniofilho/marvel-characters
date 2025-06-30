import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import HeroDetails from "./pages/HeroDetails";
import useHeros from "./hooks/useHeros";
import type { HeroType } from "./types/HeroType";
import { useLocalStorage } from "./hooks/useLocaStorage";

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedHero, setSelectedHero] = useState<HeroType | null>(null);
  const [favorites, setFavorites] = useLocalStorage<number[]>(
    [],
    "favorite-hero-ids",
  );

  const { heros = [] } = useHeros();

  return (
    <BrowserRouter>
      <div className="text-textSecondary font-display flex min-h-screen flex-col">
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  search={search}
                  setSearch={setSearch}
                  setSelectedHero={setSelectedHero}
                  heros={heros}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path="/hero"
              element={
                <HeroDetails
                  search={search}
                  setSearch={setSearch}
                  hero={selectedHero}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
          </Routes>
        </div>
        <footer className="bg-primary h-[5vh] w-full"></footer>
      </div>
    </BrowserRouter>
  );
}
