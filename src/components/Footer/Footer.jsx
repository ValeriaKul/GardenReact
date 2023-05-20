import React from "react";
import s from "./footer.module.css";

export default function Footer() {
  const relocateToInstagram = () => {
    window.open('https://www.instagram.com/', '_blank');
  };
  const relocateToWhatsApp = () => {
    window.open('ttps://chat.whatsapp.com/Etq8tfn30LV6rRw9ifa61K', '_blank');
  };

  const address = "Linkstraße 2, 8 OG, 10785, Berlin, Deutschland";
  const phone = "+49 999 999 99 99";

  return (
    <div className={s.footer}>
      <div className={s.contact_address}>
        <p className={s.contact_p}>Contact</p>
        <p className={s.contact_p}>Address</p>
        {/* <p className={s.pnone_number}>{phone}</p> */}
        <a className={s.pnone_number} href="tel:+49 999 999 99 99">{phone}</a>
        <a
          className={s.link}
          href="https://www.google.com/search?q=telranDE&bshm=lbsc/1"
        >
          {address}
        </a>
        <div className={s.icons}>
          <img
            src="/images/footer_img/instagram.png"
            alt="instagram"
            onClick={relocateToInstagram}
          />
          <img
            src="/images/footer_img/whatsApp.png"
            alt="whatsApp"
            onClick={relocateToWhatsApp}
          />
          <p className={s.icon_name}>Instagram</p>
          <p className={s.icon_name}>WhatsApp</p>
        </div>
        <div className={s.working_hours}>
          <p className={s.wh_p1}>Working Hours:</p>
          <p className={s.wh_p2}>24 hours a day</p>
        </div>
      </div>
      <div className={s.map}>
        <iframe
          title="tel_ran"
          frameBorder="0"
          width="100%"
          height="450px"
          src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010785%20Berlin+(tel_ran)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}
