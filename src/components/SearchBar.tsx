import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  iconSize?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Procure por heróis",
  className = "",
  inputClassName = "",
  iconSize = "w-3",
}: SearchBarProps) {
  return (
    <div className={`flex items-center gap-3 rounded-full px-3 ${className}`}>
      <img src="/busca/Lupa/Shape.png" alt="Lupa" className={iconSize} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex-1 bg-transparent outline-none ${inputClassName}`}
      />
    </div>
  );
}
