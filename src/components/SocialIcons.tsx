"use client";

import type { SocialLink } from "../lib/content";
import { socialIcon } from "../lib/icons";

export default function SocialIcons({
  links,
  ownerName,
  size = "w-6 h-6",
  hover = "hover:opacity-70",
}: {
  links: SocialLink[];
  ownerName: string;
  size?: string;
  hover?: string;
}) {
  return (
    <>
      {links.map((social) => {
        const Icon = socialIcon(social.icon, social.name);
        return (
          <a
            key={social.id}
            href={social.url}
            aria-label={`${ownerName} on ${social.name}`}
            target={social.newTab ? "_blank" : undefined}
            rel={social.newTab ? "noopener noreferrer" : undefined}
            className={`${hover} transition-opacity`}
          >
            <Icon className={`${size} text-[#d3e97a]`} aria-hidden="true" />
          </a>
        );
      })}
    </>
  );
}
