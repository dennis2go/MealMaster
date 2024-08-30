import Link from "next/link";
import { FaStar } from "react-icons/fa";
// import { LinkButton } from "../ui/link-button";
import { SideBarLink } from "./sidebar-link";
import { signOutAction } from "@/app/actions";
import { Button } from "../ui/button";
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
          <SideBarLink
            text={link.title}
            href={link.href}
            icon={link.icon}
            fillColor={link.fillColor!}
          />
        ))}
        <form action={signOutAction}>
          <Button type="submit" variant={"outline"}>
            Sign out
          </Button>
        </form>
      </div>
    </div>
  );
}
