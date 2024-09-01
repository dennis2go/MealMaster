"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { Input } from "../ui/input";
import { getWeekDates } from "@/utils/utils";
import { WeekdaysType } from "@/utils/types";
export interface EatingPlanProps {}

export const EatingPlan: FC<EatingPlanProps> = (props) => {
  const [tableName, setTableName] = useState<string | null>("My Eatingplan");
  const [weekDates, setWeekDates] = useState<WeekdaysType | null>(null);

  useEffect(() => {
    const fetchTableName = async () => {
      setWeekDates(getWeekDates());
      // const result = await getAllTeamBacklogs(187)
      // setTableName(result)
    };
    fetchTableName();
  }, []);
  // Saves the changed text in the Database after 3500ms of no new input
  async function onInputChange(value: string) {
    setTimeout(async () => {
      // await setBacklog(value)
    }, 3500);
  }
  return (
    <div className="flex flex-col w-full h-80">
      <div className="flex flex-row justify-between w-full h-12 bg-amber-300/80 rounded-t-lg px-6 items-center">
        <div className=" flex flex-row gap-8">
          <p className="text-nowrap flex items-center text-sm">
            {/* 24.9 - 30.9.2024 */}
            {weekDates?.monday} - {weekDates?.sunday}
          </p>
          <Input
            type="text"
            value={tableName!}
            onChange={(e) => onInputChange(e.target.value)}
            style={{
              outline: "none",
              boxShadow: "none",
            }}
            className="bg-transparent text-foreground flex border-none text-base h-12"
            placeholder="in work"
          />
        </div>
        <div>⏩️</div>
      </div>
      <div className="flex flex-col gap-6">{}</div>
    </div>
  );
};
