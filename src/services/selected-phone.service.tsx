import { useState } from "react";
import { ColoriPhonePro } from "../enums";

export function SelectedPhone() {
  const [selectPro, setSelectPro] = useState(true);
  const [colorPro, setColorPro] = useState(ColoriPhonePro.gray);

  const handleColorPro = (color: ColoriPhonePro) => {
    setColorPro(color);
  }

  const handleSelect = () => {
    setSelectPro(!selectPro);
  };

  const getButtonClasses = (isSelectedPro: boolean) => {
    return isSelectedPro
      ? "text-blue-500 border-4 border-blue-500 cursor-default px-5 py-3 font-semibold text-xl text-center rounded-lg"
      : "inline-flex items-center justify-center text-black hover:text-white cursor-pointer hover:bg-blue-500 px-5 py-3 font-semibold text-xl text-center rounded-lg";
  };

  return { selectPro,colorPro, handleSelect, getButtonClasses,handleColorPro };
}
