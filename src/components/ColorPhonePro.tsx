import { ColoriPhonePro } from "../enums";
import { SelectedPhone } from "../services/selected-phone.service";
import { ColorOption } from "./ColorOption";

export function ColorPhonePro() {
  const { colorPro, handleColorPro } = SelectedPhone();

  // Función para obtener la ruta de la imagen basada en el color seleccionado
  const getImagePath = () => {
    switch (colorPro) {
      case ColoriPhonePro.gray:
        return "/img/iphone15_pro_max_gray_titanium.jpg";
      case ColoriPhonePro.blue:
        return "/img/iphone15_pro_max_blue_titanium.jpg";
      case ColoriPhonePro.white:
        return "/img/iphone15_pro_max_white_titanium.jpg";
      case ColoriPhonePro.black:
        return "/img/iphone15_pro_max_black_titanium.jpg";
      default:
        return "/img/iphone15_pro_max_black_titanium.jpg"; 
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <img src={getImagePath()} alt="" className="w-80" />
      <div className="[&>div>span]:rounded-full [&>div>span]:cursor-pointer [&>div>span]:shadow-lg [&>div>span]:size-10 md:[&>div>span]:size-12 flex flex-row gap-0 md:gap-5">
        <ColorOption
          color="bg-[#837F7D]"
          name="Titanio natural"
          colorPhone={ColoriPhonePro.gray}
          onClick={() => handleColorPro(ColoriPhonePro.gray)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="bg-[#2F4452]"
          name="Titanio azul"
          colorPhone={ColoriPhonePro.blue}
          onClick={() => handleColorPro(ColoriPhonePro.blue)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="bg-[#DDDDDD]"
          name="Titanio blanco"
          colorPhone={ColoriPhonePro.white}
          onClick={() => handleColorPro(ColoriPhonePro.white)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="bg-[#1B1B1B]"
          name="Titanio negro"
          colorPhone={ColoriPhonePro.black}
          onClick={() => handleColorPro(ColoriPhonePro.black)}
          selectedColor={colorPro}
        />
      </div>
    </div>
  );
}
