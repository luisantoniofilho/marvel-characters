type HeroCardProps = {
  name: string;
  image: string;
  onFavoriteClick?: () => void;
  isFavorited?: boolean;
};

export default function HeroCard({
  name,
  image,
  isFavorited,
  onFavoriteClick,
}: HeroCardProps) {
  return (
    <div className="mb-1.5 flex cursor-pointer flex-col gap-2">
      <div className="border-b-primary h-24 w-full overflow-hidden border-b-2">
        <img className="h-full w-full object-cover" src={image} alt={name} />
      </div>

      <div className="text-textPrimary flex items-center justify-between text-[8px] font-semibold">
        <span>{name}</span>
        <img
          src={
            isFavorited
              ? "/icones/heart/Path@3x.png"
              : "/icones/heart/Path Copy 2@1,5x.svg"
          }
          alt="Favoritar"
          className="h-2 w-2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
        />
      </div>
    </div>
  );
}
