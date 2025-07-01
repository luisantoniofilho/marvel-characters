import { useNavigate } from "react-router";
import HeroCard from "../components/HeroCard";
import SearchBar from "../components/SearchBar";
import type { HeroType } from "../types/HeroType";
import { useState } from "react";

type HomeProps = {
  search: string;
  setSearch: (value: string) => void;
  setSelectedHero: React.Dispatch<React.SetStateAction<HeroType | null>>;
  heros: HeroType[];
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Home({
  search,
  setSearch,
  setSelectedHero,
  heros,
  favorites,
  setFavorites,
}: HomeProps) {
  const [sortAsc, setSortAsc] = useState(true);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const navigate = useNavigate();

  // Filtrando heróis com base no texto buscado
  let filteredHeros = (heros ?? []).filter((hero) =>
    hero.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Exibir apenas favoritos se habilitado
  if (showOnlyFavorites) {
    filteredHeros = filteredHeros.filter((hero) => favorites.includes(hero.id));
  }

  // Ordenação por título
  filteredHeros = filteredHeros.sort((a, b) => {
    if (a.title < b.title) return sortAsc ? -1 : 1;
    if (a.title > b.title) return sortAsc ? 1 : -1;
    return 0;
  });

  function handleCardClick(hero: HeroType) {
    setSelectedHero(hero);
    navigate("/hero");
  }

  function toggleSort() {
    setSortAsc(!sortAsc);
  }

  function toggleFavorite(id: number) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      if (favorites.length >= 5) {
        alert("Você só pode favoritar até 5 heróis.");
        return;
      }
      setFavorites([...favorites, id]);
    }
  }

  return (
    <main className="mx-4 mt-4 flex flex-col md:mx-10">
      {/* Cabeçalho */}
      <section className="mb-8 flex flex-col items-center text-center">
        <img
          className="mb-2 w-32 md:w-48"
          src="/logo/Group@3x.png"
          alt="Marvel logo"
        />
        <h1 className="text-textPrimary text-sm font-bold md:text-xl">
          EXPLORE O UNIVERSO
        </h1>
        <h3 className="mb-4 text-[6px] md:text-xs">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </h3>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-secondary text-primary h-7 w-[77%] md:h-10"
          inputClassName="placeholder:text-primary/60 md:text-sm md:placeholder:text-xs h-full pb-1 text-[8px] placeholder:text-[8px]"
          iconSize="w-3"
        />
      </section>

      {/* Ordenação e favoritos */}
      <section className="mb-4 flex items-center justify-between gap-2 text-[8px] lg:px-40">
        <h4 className="text-textTertiary text-[8px] md:text-sm">
          Encontrados {filteredHeros.length} heróis
        </h4>

        <div className="flex items-center gap-4 sm:gap-1 md:gap-4">
          {/* Ordenação por nome */}
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={toggleSort}
            title={`Ordenar por nome ${sortAsc ? "Z/A" : "A/Z"}`}
          >
            <span>
              <img
                className="h-3 md:h-4"
                src="/icones/heroi/noun_Superhero_2227044.png"
                alt="Ícone de herói"
              />
            </span>
            <span className="text-primary/75 text-[7px] md:text-sm">
              Ordenar por nome - {sortAsc ? "A/Z" : "Z/A"}
            </span>
            <p>
              <img
                className="w-7 md:w-8"
                src={
                  sortAsc ? "/toggle/Group 2@3x.png" : "/toggle/Group 6@3x.png"
                }
                alt="Ordenar A/Z"
              />
            </p>
          </div>

          {/* Favoritos */}
          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={() => setShowOnlyFavorites((prev) => !prev)}
            title={showOnlyFavorites ? "Mostrar todos" : "Mostrar favoritos"}
          >
            <img
              className="h-2 md:h-3"
              src={
                showOnlyFavorites
                  ? "/icones/heart/Path@3x.png"
                  : "/icones/heart/Path Copy 2@3x.png"
              }
              alt="Mostrar favoritos"
            />
            <span className="text-primary/75 text-[6.5px] md:text-sm">
              Somente favoritos
            </span>
          </div>
        </div>
      </section>

      {/* Lista de heróis */}
      <section className="mb-16 grid grid-cols-4 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:px-40 xl:grid-cols-5">
        {filteredHeros.map((hero) => (
          <div key={hero.id} onClick={() => handleCardClick(hero)}>
            <HeroCard
              name={hero.title}
              image={hero.image}
              onFavoriteClick={() => toggleFavorite(hero.id)}
              isFavorited={favorites.includes(hero.id)}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
