import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";
import type { HeroType } from "../types/HeroType";
import { Label } from "../components/Label";
import ComicCard from "../components/RecentComicCard";

type HeroDetailsProps = {
  search: string;
  setSearch: (value: string) => void;
  hero: HeroType | null;
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function HeroDetails({
  search,
  setSearch,
  hero,
  favorites,
  setFavorites,
}: HeroDetailsProps) {
  const navigate = useNavigate();

  if (!hero) return <p>Nenhum herói selecionado.</p>;

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
    <main className="bg-tertiary text-textPrimary relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Cabeçalho */}
      <section className="flex gap-3 px-16 py-4 md:items-center lg:justify-around">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-20 cursor-pointer md:w-48"
            src="/logo/Logo transparente.png"
            alt="Marvel logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="flex justify-center md:flex-1">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-primary h-6 w-64 bg-white md:h-7 md:w-96"
            inputClassName="text-[9px] md:text-sm  placeholder:text-textSecondary md:placeholder:text-sm placeholder:text-[7px]"
            iconSize="w-2"
          />
        </div>
      </section>

      {/* Bloco principal */}
      <section className="relative z-10 flex flex-col items-start gap-6 px-10 py-6 sm:flex-row md:items-start md:gap-12 md:px-16">
        {/* Texto de fundo */}
        <h1 className="pointer-events-none absolute -top-4 left-1/2 z-0 -translate-x-1/2 text-[80px] font-black text-white uppercase sm:top-15 sm:left-85 sm:text-[180px] lg:left-150">
          {hero.title.split(" ")[0].toUpperCase()}
        </h1>

        <div className="z-10 flex-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-20 lg:mb-6">
            <h2 className="text-lg font-bold md:text-3xl">
              {hero.title.toUpperCase()}
            </h2>
            <img
              className="h-4 w-4 cursor-pointer"
              src={
                favorites.includes(hero.id)
                  ? "/icones/heart/Path@3x.png"
                  : "/icones/heart/Path Copy 2@1,5x.svg"
              }
              alt="Favoritar"
              onClick={() => toggleFavorite(hero.id)}
            />
          </div>

          <p className="text-textSecondary mb-4 w-full pr-2 text-[7px] sm:text-lg sm:text-[10px] md:leading-6 lg:mb-6 lg:text-xl lg:leading-8">
            {hero.description || "Descrição não disponível."}
          </p>

          <div className="flex flex-col md:mb-8">
            {/* Quadrinhos e filmes */}
            <div className="mb-4 flex flex-wrap gap-8 text-[8px]">
              <Label
                title="Quadrinhos"
                iconSrc="/icones/book/Group@3x.png"
                iconAlt="Quadrinhos"
                value={hero.comicsCount.toLocaleString()}
              />

              <Label
                title="Filmes"
                iconSrc="/icones/video/Shape@3x.png"
                iconAlt="Filmes"
                iconClassName="h-2.5 md:h-3"
                value={hero.moviesCount}
              />
            </div>

            <div className="flex items-center gap-2 text-[7px] font-medium md:text-sm">
              <span>Rating:</span>
              <img className="h-2" src="/review/Group 4@3x.png" />
            </div>

            <div>
              <span className="text-[6px] font-semibold md:text-xs">
                Último quadrinho: {hero.lastComicDate}
              </span>
            </div>
          </div>
        </div>

        {/* Imagem do personagem */}
        <div className="relative z-10 -mt-30 flex w-full justify-center pl-20 sm:mt-0 sm:w-auto sm:flex-shrink-0">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-52 drop-shadow-xl sm:w-[300px]"
          />
        </div>
      </section>

      {/* Últimos lançamentos */}
      <section className="px-6 md:px-14">
        <h2 className="mb-6 text-[9px] font-bold md:text-xs lg:text-lg">
          Últimos lançamentos
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6 xl:grid-cols-6">
          {hero.recentComics.map((comic, i) => (
            <ComicCard key={i} image={comic.image} title={comic.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
