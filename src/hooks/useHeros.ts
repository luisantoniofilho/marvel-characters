import { useEffect, useState } from "react";
import { Md5 } from "ts-md5";

export default function useHeros() {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Variável para teste
  const heroName = "Thor";

  useEffect(() => {
    async function fetchHeroes() {
      try {
        setIsLoading(true);
        setError("");

        const ts = Date.now().toString();
        const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
        const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
        const hash = Md5.hashStr(ts + privateKey + publicKey);

        const baseURL = "https://gateway.marvel.com/v1/public/characters";

        // Api não funciona, retorna erro 418 (código de erro que nem deveria ser utilizado)
        const url = `${baseURL}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${heroName}`;

        const res = await fetch(url);
        const json = await res.json();

        console.log("DATA: ", json);

        if (!json.data?.results || json.data.results.length === 0) {
          throw new Error("Nenhum herói encontrado");
        }

        setHeros(json.data.results);
      } catch (error) {
        console.error("Erro completo:", error);
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setIsLoading(false);
      }
    }

    fetchHeroes();
  }, []);

  return { heros, isLoading, error };
}
