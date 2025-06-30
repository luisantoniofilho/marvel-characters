import useHeros from "../hooks/useHeros";

export default function Home() {
  const { heros, isLoading, error } = useHeros();

  console.log(heros);
  console.log(isLoading);
  console.log(error);

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

        <div className="bg-secondary text-primary flex h-7 w-[77%] items-center gap-6 rounded-full px-4">
          <span>
            <img className="w-3" src="/busca/Lupa/Shape.png" alt="Lupa" />
          </span>
          <input
            className="placeholder:text-primary/60 h-full flex-1 bg-transparent pb-1 outline-none placeholder:text-[8px]"
            type="text"
            placeholder="Procure por heróis"
          />
        </div>
      </section>

      <section className="mb-4 flex items-center justify-between text-[8px]">
        <h4 className="text-textTertiary">Encontrados 20 heróis</h4>

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
        {[...Array(20)].map((_, i) => (
          <div key={i} className="mb-1.5 flex flex-col gap-2">
            <div className="border-b-primary h-24 w-full overflow-hidden border-b-2">
              <img
                className="h-full w-full object-cover"
                src="star-lord.webp"
                alt="Star-Lord"
              />
            </div>

            <div className="text-textPrimary flex items-center justify-between text-[8px] font-semibold">
              <span>Star-Lord</span>
              <img
                src="/icones/heart/Path Copy 2@1,5x.svg"
                alt="Favoritar"
                className="h-2 w-2"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
