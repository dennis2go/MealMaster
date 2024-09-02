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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EatingPlanInput } from "./eating-plan-input";

export interface EatingPlanRowProps {
  weekDay: string;
}

export const EatingPlanRow: FC<EatingPlanRowProps> = (props) => {
  return (
    <>
      <Card className="border-b-0 rounded-none ring-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" py-2 pr-6 -my-2">
              <CardHeader className="py-2 px-0 ">
                <div className="flex flex-row justify-start items-center pl-5 ">
                  <p className="text-base bg  min-w-28 text-left">
                    {props.weekDay}
                  </p>
                  <p className="text-sm text-foreground/60">{"01.09"}</p>
                </div>
              </CardHeader>
            </AccordionTrigger>
            {/* <div className="w-full h-[1px] bg-foreground/60"></div> */}
            <CardDescription className="px-6 ">
              <AccordionContent className="flex flex-col -mb-4">
                <EatingPlanInput />
                <EatingPlanInput />
                <EatingPlanInput />
              </AccordionContent>
            </CardDescription>
          </AccordionItem>
        </Accordion>
      </Card>
    </>
  );
};
