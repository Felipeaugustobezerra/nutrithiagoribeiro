import Link from "next/link";

import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaInstagram,

    href: "https://www.instagram.com/thiagom.ribeiro/",

    label: "Instagram",
  },
];

export function FooterSocials() {
  return (
    <div
      className="
        mt-10
        flex
        justify-center
        gap-4
      "
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition-all
              hover:scale-105
              hover:border-[#72F5C8]/30
            "
          >
            <Icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
}
