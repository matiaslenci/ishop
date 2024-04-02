import { ColoriPhone, ColoriPhonePro } from "../enums";

interface ColorOptionProps {
  color: string;
  onClick: () => void;
  name: string;
  colorPhone: ColoriPhonePro | ColoriPhone;
  selectedColor: string;
}

export function ColorOption({
  color,
  onClick,
  name,
  colorPhone,
  selectedColor,
}: ColorOptionProps) {
  const isColorSelected =
    selectedColor == colorPhone
      ? "visible text-sm font-medium"
      : "invisible text-sm font-medium";

  const ring = selectedColor == colorPhone ? " ring-4 ring-blue-500" : "";

  return (
    <div className="flex flex-col items-center gap-y-3">
      <span className={color + ring} onClick={onClick}></span>
      <p className={isColorSelected}>{name}</p>
    </div>
  );
}
