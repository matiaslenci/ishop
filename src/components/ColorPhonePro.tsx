import { ColoriPhonePro } from "../enums";
import { SelectedPhone } from "../services/selected-phone.service";

export function ColorPhonePro() {
  const { colorPro, handleColorPro } = SelectedPhone();

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <img
        src="/img/compare_iphone15_pro_max_black_titanium.jpg"
        alt=""
        className="w-80"
      />
      <div className="[&>div]:rounded-full [&>div]:cursor-pointer [&>div]:shadow-lg [&>div]:size-10 flex flex-row gap-7">
        <div
          className="bg-[#837F7D]"
          onClick={() => handleColorPro(ColoriPhonePro.gray)}
        ></div>
        <div
          className="bg-[#2F4452]"
          onClick={() => handleColorPro(ColoriPhonePro.blue)}
        ></div>
        <div
          className="bg-[#DDDDDD]"
          onClick={() => handleColorPro(ColoriPhonePro.white)}
        ></div>
        <div
          className="bg-[#1B1B1B]"
          onClick={() => handleColorPro(ColoriPhonePro.black)}
        ></div>
      </div>

    </div>
  );
}
