"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, Check, X } from "lucide-react";

import { Workout } from "../types/workout";

interface Props {
  workout: Workout;
  tab: "plan" | "saved";
  done: boolean;
  onRemove: () => void;
  onDone: () => void;
}

const WorkoutPlan = ({ workout, tab, done, onRemove, onDone }: Props) => (
  <div
    className={`flex flex-col gap-5 rounded-xl border border-[#272a32] bg-[#15171d] p-4 md:flex-row md:items-center ${
      done ? "opacity-50" : ""
    }`}
  >
    <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg md:w-36">
      <Image
        src={workout.image}
        alt={workout.name}
        fill
        className="object-cover"
      />
    </div>

    <div className="flex-1">
      <h3
        className={`font-oswald text-xl font-bold uppercase text-white ${
          done ? "line-through" : ""
        }`}
      >
        {workout.name}
      </h3>

      <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Clock3 size={14} />
          {workout.duration} min
        </span>

        <span className="flex items-center gap-1">
          <Flame size={14} />
          {workout.caloriesBurned} kcal
        </span>

        <span className="flex items-center gap-1">
          <Star size={14} />
          {workout.rating}
        </span>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      <Link
        href={`/workouts/${workout.id}`}
        className="rounded-md border border-[#343842] px-4 py-2 text-xs font-bold text-gray-300 hover:border-[#c2f800] hover:text-[#c2f800]"
      >
        View Details
      </Link>

      {tab === "plan" && !done && (
        <button
          onClick={onDone}
          className="flex items-center gap-1 rounded-md bg-[#c2f800] px-4 py-2 text-xs font-bold text-black"
        >
          <Check size={14} />
          Mark as Done
        </button>
      )}

      <button
        onClick={onRemove}
        className="flex items-center justify-center rounded-md border border-[#343842] p-2 text-gray-500 hover:border-red-500 hover:text-red-400"
      >
        <X size={16} />
      </button>
    </div>
  </div>
);

export default WorkoutPlan;