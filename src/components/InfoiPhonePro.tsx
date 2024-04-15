import { infoPhoneProES,infoPhoneProEN } from "@/data";
import type { Iphone } from "../interfaces";
import { CardInfoiPhone } from "./CardInfoiPhone";
import { getLangFromUrlReact, useTranslations } from "./i18n/utils";

export function InfoiPhonePro() {
  const lang: any = getLangFromUrlReact(window.location.href);

  let data!:Iphone

  if (lang === 'es') {
    data = infoPhoneProES
  }else{
    data = infoPhoneProEN
  }
  

  return (
    <div className="space-y-4">
      <CardInfoiPhone data={data.screen}>
        <span className="font-semibold text-4xl">6.7″</span>
      </CardInfoiPhone>
      <CardInfoiPhone data={data.desing}>
        <img
          src="/img/icon_screen.png"
          alt="icon screen"
          className="w-20 h-16"
        />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.processor}>
        <img
          src="/img/icon_A17.jpg"
          alt="icon processor A17 PRO"
          className="size-16"
        />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.camera}>
        <img
          src="/img/icon_camara_pro.jpg"
          alt="icon camera with 3 glasses"
          className="size-16"
        />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.batery}>
        <img
          src="/img/icon_battery.jpg"
          alt="icon batery"
          className="w-[75px] h-9"
        />
      </CardInfoiPhone>
      <CardInfoiPhone data={data.usb}>
        <img
          src="/img/icon_usb.png"
          alt="icon usb-c"
          className="ps-3 md:ps-0 w-16 h-6"
        />
      </CardInfoiPhone>
    </div>
  );
}
