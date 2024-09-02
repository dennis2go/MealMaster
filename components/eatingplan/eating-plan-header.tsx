"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { Input } from "../ui/input";
import { getWeekDates } from "@/utils/utils";
import { WeekdaysType } from "@/utils/types";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
export interface EatingPlanHeaderProps {}

export const EatingPlanHeader: FC<EatingPlanHeaderProps> = (props) => {
  const [tableName, setTableName] = useState<string | null>("My Eatingplan");
  const [weekDates, setWeekDates] = useState<WeekdaysType | null>(null);
  const [showWhichWeek, setShowWhichWeek] = useState<number>(0);

  function getNextWeek(whichWeek: number) {
    if (whichWeek == 0) {
      setShowWhichWeek(1);
      setWeekDates(getWeekDates(1));
    }
    if (whichWeek == 1) {
      setShowWhichWeek(0);
      setWeekDates(getWeekDates(0));
    }
  }

  function getLastWeek(whichWeek: number) {
    if (whichWeek == 0) {
      setShowWhichWeek(-1);
      setWeekDates(getWeekDates(-1));
    }
    if (whichWeek == 1) {
      setShowWhichWeek(0);
      setWeekDates(getWeekDates(0));
    }
  }

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
    <>
      <div className="flex flex-row justify-between w-full h-12 bg-amber-300/80 rounded-t-lg px-4 items-center">
        <div className=" flex flex-row gap-8">
          <div className="flex flex-row gap-2 items-center ">
            {showWhichWeek != -1 ? (
              <>
                {showWhichWeek == 0 ? (
                  <button
                    onClick={() => getLastWeek(0)}
                    className="hover:-translate-x-1 transition-all  h-8 w-8 flex items-center justify-start"
                  >
                    <MdKeyboardDoubleArrowLeft className="w-6 h-6  hover:fill-slate-700 " />
                  </button>
                ) : (
                  <button
                    onClick={() => getNextWeek(1)}
                    className="hover:-translate-x-1 transition-all  h-8 w-8 flex items-center justify-end"
                  >
                    <MdKeyboardDoubleArrowLeft className="w-6 h-6  hover:fill-slate-700 " />
                  </button>
                )}
              </>
            ) : (
              <div className="bg-transparent h-8 w-8 "></div>
            )}

            <p className="text-nowrap flex items-center text-sm">
              {weekDates?.monday} - {weekDates?.sunday}
            </p>
          </div>
          <Input
            type="text"
            value={tableName!}
            onChange={(e) => onInputChange(e.target.value)}
            style={{
              outline: "none",
              boxShadow: "none",
            }}
            className="bg-transparent text-foreground flex border-none text-base h-12"
          />
        </div>
        {showWhichWeek != 1 && (
          <>
            {showWhichWeek == 0 ? (
              <button
                onClick={() => getNextWeek(0)}
                className="hover:translate-x-1 transition-all  h-8 w-8 flex items-center justify-end"
              >
                <MdKeyboardDoubleArrowRight className="w-6 h-6  hover:fill-slate-700 " />
              </button>
            ) : (
              <button
                onClick={() => getLastWeek(1)}
                className="hover:translate-x-1 transition-all  h-8 w-8 flex items-center justify-start"
              >
                <MdKeyboardDoubleArrowRight className="w-6 h-6  hover:fill-slate-700" />
              </button>
            )}
          </>
        )}
      </div>
      <div className="flex flex-col gap-6"></div>
    </>
  );
};
