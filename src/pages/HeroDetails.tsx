import SearchBar from "../components/SearchBar";
  return (
    <main className="bg-tertiary text-textPrimary relative flex h-[95vh] w-full flex-col overflow-x-hidden">
      {/* Cabeçalho com logo e busca */}
      <section className="flex items-center justify-between px-16 py-2">
        <div className="flex items-center gap-8">
          <img
            className="w-24"
            src="/logo/Logo transparente.png"
            alt="Marvel logo"
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

      {/* Bloco principal com nome, descrição e imagem */}
      <section className="relative z-10 flex items-start gap-12 px-16 py-6">
        {/* Texto de fundo "HULK" */}
        <h1 className="absolute -top-2 left-28 z-0 text-[140px] font-black text-white uppercase">
          Hulk
        </h1>

        <div className="z-10 flex-1">
          <div className="items-cente mb-2 flex items-center gap-14">
            <h2 className="text-lg font-bold">HULK</h2>
            <img
              className="h-3"
              src="/icones/heart/Path@3x.png"
              alt="Favoritar"
            />
          </div>

          <p className="text-textSecondary mb-4 w-36 pr-2 text-[7px] leading-3">
            O Hulk, por vezes referido como O Incrível Hulk é um personagem de
            quadrinhos/banda desenhada do gênero super-herói, propriedade da
            Marvel Comics, editora pela qual as histórias do personagem são
            publicadas desde sua criação, nos anos 1960.
          </p>

          <div className="flex flex-col">
            {/* Quadrinhos e filmes */}
            <div className="mb-2 flex flex-wrap gap-12 text-[8px]">
              {/* Quadrinhos */}
              <div className="flex flex-col gap-2">
                <h5 className="text-[5px] font-bold">Quadrinhos</h5>
                <div className="flex items-center gap-2">
                  <img
                    className="h-3"
                    src="/icones/book/Group@3x.png"
                    alt="Quadrinhos"
                  />
                  <span>3.000</span>
                </div>
              </div>

              {/* Filmes */}
              <div className="flex flex-col gap-2">
                <h5 className="text-[5px] font-bold">Filmes</h5>
                <div className="flex items-center gap-2">
                  <img
                    className="h-2.5"
                    src="/icones/video/Shape@3x.png"
                    alt="Quadrinhos"
                  />
                  <span>40</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 text-[7px] font-medium">
              <span>Rating:</span>
              <img className="h-1.5" src="/review/Group 4@3x.png" />
            </div>

            {/* Último quadrinho */}
            <div>
              <span className="text-[6px] font-semibold">
                Último quadrinho: 13 fev. 2020
              </span>
            </div>
          </div>
        </div>

        {/* Imagem do personagem */}
        <div className="relative z-10 -mt-6">
          <img
            src="/hulk transparente.png"
            alt="Hulk"
            className="w-[250px] drop-shadow-xl"
          />
        </div>
      </section>

      {/* Últimos lançamentos */}
      <section className="px-14">
        <h2 className="mb-6 text-[10px] font-bold">Últimos lançamentos</h2>
        <div className="grid grid-cols-6 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="text-[6px]">
              <img
                className="mx-auto mb-2"
                src="/quadrinhos.jpg"
                alt="Capa HQ"
              />
              <p className="font-semibold">Lorem Ipsum Dolor Sit.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
