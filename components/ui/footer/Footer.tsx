import Link from "next/link";
import { useTranslations } from "next-intl";

import "./footer.css";

export default function Footer() {
  const t = useTranslations("HomePage");
  const currentYear = new Date().getFullYear();
  const social = [
    { href: "https://www.facebook.com/phuthuybachtang/", icon: "facebook" },
    { href: "https://www.instagram.com/phuthuybachtang/", icon: "instagram" },
    { href: "https://www.linkedin.com/in/viethoangdev/", icon: "linkedin" },
    { href: "https://t.me/plousdolby", icon: "telegram" },
    { href: "https://x.com/tinhlinh_xanh", icon: "twitter" },
    { href: "https://discord.gg/ScVz295b", icon: "discord-alt" },
    { href: "https://www.figma.com/@hoangbru", icon: "figma" },
    {
      href: "https://open.spotify.com/user/31bv5pxmueupktotevqtnngczgvy",
      icon: "spotify",
    },
    {
      href: "https://youtu.be/dQw4w9WgXcQ?si=_pGg1TiZQXcpyo78",
      icon: "youtube",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__external">
          {social.map(({ href, icon }) => (
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              key={href}
              href={href}
              className="footer__external_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bx bxl-${icon}`}></i>
            </a>
          ))}
        </div>
        <p className="footer__copy">
          <Link href="/#overview">
            &copy; {currentYear} {t("footer.copyright", { author: "holefam" })}
          </Link>
        </p>
      </div>
    </footer>
  );
}
