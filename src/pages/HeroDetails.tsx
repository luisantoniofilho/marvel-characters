import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";
import type { HeroType } from "../types/HeroType";

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
    <main className="bg-tertiary text-textPrimary relative flex h-[95vh] w-full flex-col overflow-x-hidden">
      {/* Cabeçalho */}
      <section className="flex items-center justify-between px-16 py-2">
        <div className="flex items-center gap-8">
          <img
            className="w-24 cursor-pointer"
            src="/logo/Logo transparente.png"
            alt="Marvel logo"
            onClick={() => navigate("/")}
          />

          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-primary h-5 w-64 bg-white"
            inputClassName="text-[10px] placeholder:text-textSecondary placeholder:text-[6px]"
            iconSize="w-2"
          />
        </div>
      </section>

      {/* Bloco principal */}
      <section className="relative z-10 flex items-start gap-12 px-16 py-6">
        {/* Texto de fundo */}
        <h1 className="absolute -top-2 left-28 z-0 text-[140px] font-black text-white uppercase">
          {hero.title.split(" ")[0].toUpperCase()}
        </h1>

        <div className="z-10 flex-1">
          <div className="mb-2 flex items-center gap-14">
            <h2 className="text-lg font-bold">{hero.title.toUpperCase()}</h2>
            <img
              className="h-3 cursor-pointer"
              src={
                favorites.includes(hero.id)
                  ? "/icones/heart/Path@3x.png"
                  : "/icones/heart/Path Copy 2@1,5x.svg"
              }
              alt="Favoritar"
              onClick={() => toggleFavorite(hero.id)}
            />
          </div>

          <p className="text-textSecondary mb-4 w-36 pr-2 text-[7px] leading-3">
            {hero.description || "Descrição não disponível."}
          </p>

          <div className="mb-8 flex flex-col">
            {/* Quadrinhos e filmes */}
            <div className="mb-2 flex flex-wrap gap-12 text-[8px]">
              <div className="flex flex-col gap-2">
                <h5 className="text-[5px] font-bold">Quadrinhos</h5>
                <div className="flex items-center gap-2">
                  <img
                    className="h-3"
                    src="/icones/book/Group@3x.png"
                    alt="Quadrinhos"
                  />
                  <span>{hero.comicsCount.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h5 className="text-[5px] font-bold">Filmes</h5>
                <div className="flex items-center gap-2">
                  <img
                    className="h-2.5"
                    src="/icones/video/Shape@3x.png"
                    alt="Filmes"
                  />
                  <span>{hero.moviesCount}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[7px] font-medium">
              <span>Rating:</span>
              <img className="h-1.5" src="/review/Group 4@3x.png" />
            </div>

            <div>
              <span className="text-[6px] font-semibold">
                Último quadrinho: {hero.lastComicDate}
              </span>
            </div>
          </div>
        </div>

        {/* Imagem do personagem */}
        <div className="relative z-10 -mt-6">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-[400px] drop-shadow-xl"
          />
        </div>
      </section>

      {/* Últimos lançamentos */}
      <section className="px-14">
        <h2 className="mb-6 text-[10px] font-bold">Últimos lançamentos</h2>
        <div className="grid grid-cols-6 gap-6">
          {hero.recentComics.map((comic, i) => (
            <div key={i} className="text-[6px]">
              <img
                className="mx-auto mb-2"
                src={comic.image}
                alt={comic.title}
              />
              <p className="font-semibold">{comic.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
