import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface EatingPlanRowProps {
  weekDay: string;
}

export const EatingPlanRow: FC<EatingPlanRowProps> = (props) => {
  return (
    <>
      <Card>
        <CardHeader className="py-2 ">
          <div className="flex flex-row justify-start items-center gap-4">
            <p className="text-base bg  min-w-32">{props.weekDay}</p>
            <p className="text-sm text-foreground/60">{"01.09"}</p>
          </div>
        </CardHeader>
        <div className="w-full h-[1px] bg-foreground/60"></div>
        <CardDescription className=""></CardDescription>
      </Card>
    </>
  );
};
