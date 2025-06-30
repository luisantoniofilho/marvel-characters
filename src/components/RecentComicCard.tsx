type ComicCardProps = {
  image: string;
  title: string;
};

export default function ComicCard({ image, title }: ComicCardProps) {
  return (
    <div className="text-center text-[6px]">
      <img
        className="mx-auto mb-2 w-full max-w-[100px] md:max-w-none"
        src={image}
        alt={title}
      />
      <p className="font-semibold">{title}</p>
    </div>
  );
}
