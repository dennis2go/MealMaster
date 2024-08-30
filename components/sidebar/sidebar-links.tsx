import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { LinkButton } from "../ui/link-button";
import { SideBarLink } from "./sidebar-link";
const links = [
  { title: "Favoriten", href: "favorites", icon: FaStar, fillColor: "#fbbf24" },
  { title: "Favoriten", href: "favorites", icon: FaStar, fillColor: "#fbbf24" },
  { title: "Favoriten", href: "favorites", icon: FaStar, fillColor: "#fbbf24" },
];

export default function SidebarLinks() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <p> MealMaster</p>
      <div className="flex flex-col gap-6">
        {links.map((link, idx) => (
          <div key={idx} className="flex flex-row items-center gap-2">
            <SideBarLink
              text={link.title}
              href={link.href}
              icon={link.icon}
              fillColor={link.fillColor!}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
