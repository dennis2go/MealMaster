import Link from "next/link";
import { FC, useState } from "react";
import { IconType } from "react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export interface EatingPlanInputProps {}

export const EatingPlanInput: FC<EatingPlanInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [mealName, setMealName] = useState<string | null>("");

  // Saves the changed text in the Database after 3500ms of no new input
  async function onInputChange(value: string) {
    setTimeout(async () => {
      // await setBacklog(value)
    }, 3500);
  }

  async function onFavoriteChange(value: boolean) {
    if (value == true) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  return (
    <div className="flex flex-row items-center gap-2 ">
      <div
        className={`transition-all w-[6px] h-[6px] rounded-lg ${isFocused ? "bg-blue-400" : "bg-foreground/80"}`}
      ></div>
      <Input
        type="text"
        value={mealName!}
        onChange={(e) => onInputChange(e.target.value)}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        style={{
          outline: "none",
          boxShadow: "none",
        }}
        className="bg-transparent text-foreground flex border-none h-10 text-sm"
        placeholder="insert Meal"
      />
      {isFavorite ? (
        <FaStar
          className="w-4 h-4 cursor-pointer fill-amber-400"
          onClick={() => onFavoriteChange(false)}
        />
      ) : (
        <FaRegStar
          className="w-4 h-4 cursor-pointer hover:fill-amber-400/60 transition-colors"
          onClick={() => onFavoriteChange(true)}
        />
      )}
    </div>
  );
};
