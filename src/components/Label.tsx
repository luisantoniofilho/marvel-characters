type LabelProps = {
  title: string;
  iconSrc: string;
  iconAlt: string;
  iconClassName?: string;
  value: string | number;
};

export function Label({
  title,
  iconSrc,
  iconAlt,
  iconClassName = "h-3 md:h-5",
  value,
}: LabelProps) {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-[6px] font-bold md:text-sm">{title}</h5>
      <div className="flex items-center gap-2">
        <img className={iconClassName} src={iconSrc} alt={iconAlt} />
        <span className="md:text-xs">{value}</span>
      </div>
    </div>
  );
}
