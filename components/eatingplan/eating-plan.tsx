"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { Input } from "../ui/input";
import { getWeekDates, weekDays } from "@/utils/utils";

import { EatingPlanHeader } from "./eating-plan-header";
import { EatingPlanRow } from "./eating-plan-row";
export interface EatingPlanProps {}

export const EatingPlan: FC<EatingPlanProps> = (props) => {
  return (
    <div className="flex flex-col">
      <EatingPlanHeader />
      {weekDays.map((weekDay, idx) => (
        <EatingPlanRow weekDay={weekDay} key={idx}></EatingPlanRow>
      ))}
    </div>
  );
};
