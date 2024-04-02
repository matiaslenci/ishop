import { ButtonSelectPhone } from "../components/ButtonSelectPhone";
import { ColorPhonePro } from "../components/ColorPhonePro";
import { ColorPhone } from "../components/ColorPhone";
import { InfoiPhonePro } from "../components/InfoiPhonePro";
import { SelectedPhone } from "../services/selected-phone.service";
import { useEffect, useState } from "react";

export function Tienda() {
  const { selectPro } = SelectedPhone();
  const [selectedPhone, setSelectedComponent] = useState(<ColorPhonePro />);

  useEffect(() => {
    if (selectPro) {
      setSelectedComponent(<ColorPhonePro />);
    } else {
      setSelectedComponent(<ColorPhone />);
    }
  }, [selectPro]); // Especifica selectPro como una dependencia del efecto

  return (
    <section
      className="flex flex-col w-full gap-10 py-20 md:pb-0 md:pt-10 md:flex-row items-center md:h-screen justify-center"
      id="tienda"
    >
      <section className="flex flex-col gap-5 md:gap-0 items-center justify-center md:w-3/6">
        <ButtonSelectPhone />
        {selectedPhone}
      </section>

      <section className="flex md:flex-col flex-col-reverse items-center md:items-start gap-5 justify-end md:w-3/6 mx-auto px-5">
        <InfoiPhonePro />
        <a className="inline-flex items-center justify-center px-8 py-3 text-base md:text-xl font-medium text-center text-white bg-blue-500 rounded-lg cursor-pointer  hover:shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
          Consultanos disponibilidad y precio
        </a>
      </section>
    </section>
  );
}
