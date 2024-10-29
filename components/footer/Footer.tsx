import Link from "next/link";

import "./footer.css";

export default function Footer() {
  const social = [
    { href: "https://www.facebook.com/tinhlinhxanh/", icon: "facebook" },
    { href: "https://www.instagram.com/tinhlinhxanh/", icon: "instagram" },
    { href: "https://www.linkedin.com/in/viethoangdev/", icon: "linkedin" },
    { href: "https://t.me/plousdolby", icon: "telegram" },
    { href: "https://x.com/tinhlinh_xanh", icon: "twitter" },
    { href: "https://discord.gg/T5tzGZ6Uhg", icon: "discord-alt" },
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
          &copy; 2024 Made & design by{" "}
          <span>
            <Link href="/#overview">holefam</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
