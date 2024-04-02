import { ColorPhone, ColoriPhonePro } from "../enums";

import { SelectedPhone } from "../services/selected-phone.service";

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
  selectedColor
}: ColorOptionProps) {
  const isColorSelected = selectedColor  == colorPhone ? "visible text-sm" : "invisible text-sm";

  return (
    <div className="flex flex-col items-center gap-y-3">
      <span className={`bg-[${color}]`} onClick={onClick}></span>
      <p className={isColorSelected}>{name}</p>
    </div>
  );
}
