import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
export interface EatingPlanRowProps {
  text: string;
  href: string;
  icon: IconType | string;
  fillColor: string;
}

export const EatingPlanRow: FC<EatingPlanRowProps> = (props) => {
  return <div className="flex "></div>;
};
