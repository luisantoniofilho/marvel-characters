import HeroCard from "../components/HeroCard";
import SearchBar from "../components/SearchBar";
import type { HeroType } from "../types/HeroType";

type HomeProps = {
  search: string;
  setSearch: (value: string) => void;
  setSelectedHero: React.Dispatch<React.SetStateAction<HeroType | null>>;
  heros: HeroType[];
};

export default function Home({
  search,
  setSearch,
  setSelectedHero,
  heros,
}: HomeProps) {
  const filteredHeros = (heros ?? []).filter((hero) =>
    hero.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="mx-10 mt-4 flex flex-col">
      <section className="mb-8 flex flex-col items-center">
        <img className="mb-2 w-32" src="/logo/Group@3x.png" alt="Marvel logo" />
        <h1 className="text-textPrimary text-sm font-bold">
          EXPLORE O UNIVERSO
        </h1>
        <h3 className="mb-4 text-[6px]">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </h3>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-secondary text-primary h-7 w-[77%]"
          inputClassName="placeholder:text-primary/60 h-full pb-1 text-[8px] placeholder:text-[8px]"
          iconSize="w-3"
        />
      </section>

      <section className="mb-4 flex items-center justify-between text-[8px]">
        <h4 className="text-textTertiary">
          Encontrados {filteredHeros.length} heróis
        </h4>

        <div className="flex items-center gap-4">
          {/* Ordenação por nome */}
          <div className="flex items-center gap-3">
            <span>
              <img
                className="h-3"
                src="/icones/heroi/noun_Superhero_2227044.png"
                alt="Ícone de herói"
              />
            </span>
            <span className="text-primary/75 text-[7px]">
              Ordernar por nome - A/Z
            </span>
            <p>
              <img
                className="w-7"
                src="/toggle/Group 2.svg"
                alt="Ordenar A/Z"
              />
            </p>
          </div>

          {/* Favoritos */}
          <div className="flex gap-1">
            <img
              className="h-2"
              src="/icones/heart/Path.svg"
              alt="Mostrar favoritos"
            />
            <span className="text-primary/75 text-[6.5px]">
              Somente favoritos
            </span>
          </div>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-4 gap-6">
        {filteredHeros.map((hero) => (
          <div key={hero.id} onClick={() => handleCardClick(hero)}>
            <HeroCard
              name={hero.title}
              image={hero.image}
              onFavoriteClick={() => console.log("Favoritar", hero.title)}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
