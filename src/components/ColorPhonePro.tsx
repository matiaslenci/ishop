import { useState } from "react";
import { ColoriPhonePro } from "../enums";
import { ColorOption } from "./ColorOption";
import { getLangFromUrlReact, useTranslations } from "./i18n/utils";

const lang:any = getLangFromUrlReact(window.location.href);

const t = useTranslations(lang);

export function ColorPhonePro() {
  const [colorPro, setColorPro] = useState(ColoriPhonePro.gray);
  const handleColorPro = (color: ColoriPhonePro) => {
    setColorPro(color);
  };

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
      <img src={getImagePath()} alt={'iphone 15 color ' + colorPro} className="w-60 md:w-80" />
      <div className="[&>div>span]:rounded-full [&>div>span]:cursor-pointer [&>div>span]:shadow-lg [&>div>span]:size-10 md:[&>div>span]:size-12 flex flex-row">
        <ColorOption
          color="bg-[#837F7D]"
          name={t("colorpro.natural")}
          colorPhone={ColoriPhonePro.gray}
          onClick={() => handleColorPro(ColoriPhonePro.gray)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="bg-[#2F4452]"
          name={t("colorpro.blue")}
          colorPhone={ColoriPhonePro.blue}
          onClick={() => handleColorPro(ColoriPhonePro.blue)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="bg-[#DDDDDD]"
          name={t("colorpro.white")}
          colorPhone={ColoriPhonePro.white}
          onClick={() => handleColorPro(ColoriPhonePro.white)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="bg-[#1B1B1B]"
          name={t("colorpro.black")}
          colorPhone={ColoriPhonePro.black}
          onClick={() => handleColorPro(ColoriPhonePro.black)}
          selectedColor={colorPro}
        />
      </div>
    </div>
  );
}
