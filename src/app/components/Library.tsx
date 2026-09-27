"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import WorkoutCard from "./WorkoutCard";
import { Workout } from "../types/workout";

interface Props {
  workouts: Workout[];
}

type Sortby = "duration" | "calories" | "rating";

const Library = ({ workouts }: Props) => {
  const [sortBy, setSortBy] = useState<Sortby>("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    return b.rating - a.rating;
  });

  return (
    <section id="library" className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold tracking-[3px] text-[#c2f800]">
            TRAIN SMART
          </p>
          <h2 className="mt-2 font-oswald text-4xl font-bold uppercase text-white">
            THE LIBRARY
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as Sortby)}
            className="appearance-none rounded-md border border-[#30343d] bg-[#15171d] py-3 pl-4 pr-10 text-sm text-gray-300 outline-none focus:border-[#c2f800]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Library;