import { ColoriPhonePro } from "../enums";
import { SelectedPhone } from "../services/selected-phone.service";
import { ColorOption } from "./ColorOption";

export function ColorPhonePro() {
  const { colorPro, handleColorPro } = SelectedPhone();

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <img
        src="/img/compare_iphone15_pro_max_black_titanium.jpg"
        alt=""
        className="w-80"
      />
      <div className="[&>div>span]:rounded-full [&>div>span]:cursor-pointer [&>div>span]:shadow-lg [&>div>span]:size-10 flex flex-row gap-7">
        <ColorOption
          color="#837F7D"
          name="Gris"
          colorPhone={ColoriPhonePro.gray}
          onClick={() => handleColorPro(ColoriPhonePro.gray)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="#2F4452"
          name="Azul"
          colorPhone={ColoriPhonePro.blue}
          onClick={() => handleColorPro(ColoriPhonePro.blue)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="#DDDDDD"
          name="Blanco"
          colorPhone={ColoriPhonePro.white}
          onClick={() => handleColorPro(ColoriPhonePro.white)}
          selectedColor={colorPro}
        />
        <ColorOption
          color="#1B1B1B"
          name="Negro"
          colorPhone={ColoriPhonePro.black}
          onClick={() => handleColorPro(ColoriPhonePro.black)}
          selectedColor={colorPro}
        />
      </div>
    </div>
  );
}
