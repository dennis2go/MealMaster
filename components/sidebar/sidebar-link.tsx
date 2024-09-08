import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
export interface SideBarLinkProps {
  text: string;
  href: string;
  icon: IconType | string;
  fillColor: string;
}

export const SideBarLink: FC<SideBarLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      className="flex flex-row min-w-32 md:min-w-48 items-center gap-2 md:gap-4 rounded-lg bg-amber-300/80 px-4 md:px-8 py-[10px] md:py-3 group active:bg-slate-600"
    >
      {props.icon && (
        <props.icon
          style={{ fill: props.fillColor }}
          className="text-sm md:text-xl group-hover:rotate-[75deg] transition-all duration-500"
        />
      )}
      <p className="text-xs md:text-sm"> {props.text}</p>
    </Link>
  );
};
