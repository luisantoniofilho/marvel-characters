export type RecentComic = {
  title: string;
  image: string;
};

export type HeroType = {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  comicsCount: number;
  moviesCount: number;
  lastComicDate: string;
  recentComics: RecentComic[];
};
