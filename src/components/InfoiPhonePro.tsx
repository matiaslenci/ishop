import type { Iphone } from "../interfaces";
import { CardInfoiPhone } from "./CardInfoiPhone";

export function InfoiPhonePro() {

   const data: Iphone = {
    screen: [
      "Pantalla Super Retina X./CardInfoiPhone",
      "Tecnología ProMotion",
      "Pantalla siempre activa",
    ],
    desing: [
      "Titanio con parte posterior de vidrio mate texturizado",
      "Botón de Acción",
    ],
    processor: [
      "Chip A17 Pro",
      "CPU de 6 núcleos",
      "GPU de 6 núcleos",
      "Neural Engine de 16 núcleos",
    ],
    camera: [
      "Sistema de cámaras ProGran angular de 48 MP Ultra gran angular Teleobjetivo",
      "Fotos en superalta resolución (24 MP y 48 MP)",
    ],
    batery: ["Hasta 29 horas de reproducción de video"],
    usb: [
      "USB-C",
      "Compatible con USB 3 para transferencias hasta 20 veces más rápidas"
    ]
  };

  return (
    <div className="space-y-4">
      <CardInfoiPhone data={data.screen}>
        <span className="font-semibold text-4xl">6.7″</span>
      </CardInfoiPhone>
      <CardInfoiPhone data={data.desing}>
        <img src="/img/icon_screen.png" alt="" className="w-20 h-16" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.processor}>
        <img src="/img/icon_A17.jpg" alt="" className="size-16" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.camera}>
        <img src="/img/icon_camara_pro.jpg" alt="" className="size-16" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.batery}>
        <img src="/img/icon_battery.jpg" alt="" className="w-[75px] h-9" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.usb}>
        <img src="/img/icon_usb.png" alt="" className="ps-3 md:ps-0 w-16 h-6" />
      </CardInfoiPhone>
    </div>
  );
}
