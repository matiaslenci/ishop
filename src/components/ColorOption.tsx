import { ColorPhone, ColoriPhonePro } from "../enums";

interface ColorOptionProps {
  color: string;
  onClick: () => void;
  name: string;
  colorPhone: ColoriPhonePro | ColorPhone;
  selectedColor: ColoriPhonePro | ColorPhone;
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

  return (
    <div className="flex flex-col items-center gap-y-3">
      <span className={color} onClick={onClick}></span>
      <p className={isColorSelected}>{name}</p>
    </div>
  );
}
