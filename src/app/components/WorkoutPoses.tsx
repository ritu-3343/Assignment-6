"use client";

import { useContext } from "react";
import { Check, Bookmark, BookmarkCheck } from "lucide-react";

import { Workout } from "../types/workout";
import { FitLogContext } from "../context/FitLogContext";

interface Props {
  workout: Workout;
}

const WorkoutPoses = ({ workout }: Props) => {
  const context = useContext(FitLogContext);

  if (!context) throw new Error("WorkoutPoses must be used inside FitLogProvider");

  const { addToPlan, saveWorkout, isInPlan, isSaved } = context;

  const alreadyPlanned = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={alreadyPlanned}
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#c2f800] px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#d4ff42] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Check size={17} />
        {alreadyPlanned ? "Already in plan" : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        disabled={alreadySaved}
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#3a3e47] px-5 py-3 text-sm font-bold uppercase text-gray-300 transition hover:border-[#c2f800] hover:text-[#c2f800] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {alreadySaved ? <BookmarkCheck size={17} /> : <Bookmark size={17} />}
        {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutPoses;