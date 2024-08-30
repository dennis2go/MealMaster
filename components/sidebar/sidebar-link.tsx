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
      className="flex flex-row items-center gap-5 rounded-lg bg-yellow-300 px-10 py-4 group active:bg-slate-600"
    >
      {props.icon && (
        <props.icon
          style={{ fill: props.fillColor }}
          className="text-2xl group-hover:rotate-[75deg] transition-all duration-500"
        />
      )}
      <p> {props.text}</p>
    </Link>
  );
};
