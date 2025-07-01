export function toggleFavorite(
  id: number,
  favorites: number[],
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>,
) {
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
