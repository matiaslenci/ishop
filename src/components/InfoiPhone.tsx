import { infoPhoneEN, infoPhoneES } from "@/data";
import type { Iphone } from "../interfaces";
import { CardInfoiPhone } from "./CardInfoiPhone";
import { getLangFromUrlReact, useTranslations } from "./i18n/utils";

const lang: any = getLangFromUrlReact(window.location.href);

const t = useTranslations(lang);


export function InfoiPhone() {
  const lang: any = getLangFromUrlReact(window.location.href);

  let data!:Iphone

  if (lang === 'es') {
    data = infoPhoneES
  }else{
    data = infoPhoneEN
  }
  

  
  return (
    <div className="space-y-4">
      <CardInfoiPhone data={data.screen}>
        <span className="font-semibold text-4xl">6.1″</span>
      </CardInfoiPhone>
      <CardInfoiPhone data={data.desing}>
        <img src="/img/icon_screen.png" alt="icon screen" className="w-20 h-16" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.processor}>
        <img src="/img/icon_A16.jpg" alt="icon processor A16" className="size-16" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.camera}>
        <img src="/img/icon_camara.jpg" alt="icon camera 2 glasses" className="size-16" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.batery}>
        <img src="/img/icon_battery.jpg" alt="icon batery" className="w-[75px] h-9" />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.usb}>
        <img src="/img/icon_usb.png" alt="icon usb-c" className="ps-3 md:ps-0 w-16 h-6" />
      </CardInfoiPhone>
    </div>
  );
}
