import { ColorPhonePro } from "../ColorPhonePro";
import { ColorPhone } from "../ColorPhone";
import { InfoiPhonePro } from "../InfoiPhonePro";
import { useEffect, useState } from "react";
import { InfoiPhone } from "../InfoiPhone";

export function Tienda() {
  const [selectPro, setSelectPro] = useState(true);

  const handleSelect = (select: boolean) => {
    setSelectPro(select);
  };

  const [selectedPhone, setSelectedPhone] = useState(<ColorPhonePro />);
  const [selectedInfo, setSelectedInfo] = useState(<InfoiPhonePro />);

  useEffect(() => {
    if (selectPro) {
      setSelectedPhone(<ColorPhonePro />);
      setSelectedInfo(<InfoiPhonePro />);
    } else {
      setSelectedPhone(<ColorPhone />);
      setSelectedInfo(<InfoiPhone />);
    }
  }, [selectPro]);

  const getButtonClasses = (isSelectedPro: boolean) => {
    return isSelectedPro
      ? "text-blue-500 border-4 border-blue-500 cursor-default px-2.5 py-1.5 text-lg md:px-5  md:py-3 font-semibold  md:text-xl text-center rounded-lg"
      : "inline-flex items-center justify-center text-black hover:text-white cursor-pointer hover:bg-blue-500 px-5 py-3 font-semibold text-xl text-center rounded-lg";
  };

  return (
    <section
      className="flex flex-col w-full gap-10 py-20 md:pb-0 md:pt-10 md:flex-row items-center md:h-screen justify-center"
      id="tienda"
    >
      <h2
      className="text-start text-4xl font-semibold tracking-tight text-gray-900 md:hidden "
    >
      Tienda
    </h2>
      <section className="flex flex-col gap-5 md:gap-0 items-center justify-center md:w-3/6">
        <section className="flex flex-row gap-3">
          <button
            onClick={() => handleSelect(true)}
            className={getButtonClasses(selectPro)}
          >
            iPhone 15 Pro Max
          </button>

          <button
            onClick={() => handleSelect(false)}
            className={getButtonClasses(!selectPro)}
          >
            iPhone 15
          </button>
        </section>
        {selectedPhone}
      </section>

      <section className="flex md:flex-col flex-col-reverse items-center md:items-start gap-5 justify-end md:w-3/6 mx-auto px-5">
        {selectedInfo}
        <a className="inline-flex items-center justify-center px-8 py-3 text-base md:text-xl font-medium text-center text-white bg-blue-500 rounded-lg cursor-pointer  hover:shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
          Consultanos disponibilidad y precio
        </a>
      </section>
    </section>
  );
}
