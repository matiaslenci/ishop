import { useEffect, useState } from "react";
import { ColoriPhone } from "../enums";
import { ColorOption } from "./ColorOption";

export function ColorPhone() {
  const [color, setColor] = useState(ColoriPhone.black);
  const handleColor = (color: ColoriPhone) => {
    setColor(color);
  };

  // Función para obtener la ruta de la imagen basada en el color seleccionado
  const getImagePath = () => {
    switch (color) {
      case ColoriPhone.black:
        return "/img/iphone15_black.jpg";
      case ColoriPhone.blue:
        return "/img/iphone15_blue.jpg";
      case ColoriPhone.yellow:
        return "/img/iphone15_yellow.jpg";
      case ColoriPhone.pink:
        return "/img/iphone15_pink.jpg";
      case ColoriPhone.green:
        return "/img/iphone15_green.jpg";
      default:
        return "/img/iphone15_pink.jpg";
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <img src={getImagePath()} alt={'iphone 15 color ' + color} className="w-60 md:w-80" />
      <div className="[&>div>span]:rounded-full [&>div>span]:cursor-pointer [&>div>span]:shadow-lg [&>div>span]:size-10 md:[&>div>span]:size-12 flex flex-row gap-5">
        <ColorOption
          color="bg-[#35393B]"
          name="Negro"
          colorPhone={ColoriPhone.black}
          onClick={() => handleColor(ColoriPhone.black)}
          selectedColor={color}
        />
        <ColorOption
          color="bg-[#E3C8CA]"
          name="Rosa"
          colorPhone={ColoriPhone.pink}
          onClick={() => handleColor(ColoriPhone.pink)}
          selectedColor={color}
        />
        <ColorOption
          color="bg-[#E6E0C1]"
          name="Amarillo"
          colorPhone={ColoriPhone.yellow}
          onClick={() => handleColor(ColoriPhone.yellow)}
          selectedColor={color}
        />

        <ColorOption
          color="bg-[#CED5D9]"
          name="Azul"
          colorPhone={ColoriPhone.blue}
          onClick={() => handleColor(ColoriPhone.blue)}
          selectedColor={color}
        />
        <ColorOption
          color="bg-[#CAD4C5]"
          name="Verde"
          colorPhone={ColoriPhone.green}
          onClick={() => handleColor(ColoriPhone.green)}
          selectedColor={color}
        />
      </div>
    </div>
  );
}
