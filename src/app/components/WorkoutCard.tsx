import Link from "next/link";
import Image from "next/image";
import { Clock3, Flame, Star, Dumbbell } from "lucide-react";

import { Workout } from "../types/workout";

interface Props {
  workout: Workout;
}

const WorkoutCard = ({ workout }: Props) => (
  <Link
    href={`/workouts/${workout.id}`}
    className="group overflow-hidden rounded-xl border border-[#272a32] bg-[#15171d] transition hover:-translate-y-1 hover:border-[#c2f800]"
  >
    <div className="relative h-52 overflow-hidden">
      <Image
        src={workout.image}
        alt={workout.name}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0c0d10]/70 to-transparent" />
    </div>

    <div className="p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        {workout.muscleGroups.map((muscle) => (
          <span
            key={muscle}
            className="rounded-full border border-[#363a44] px-2.5 py-1 text-[10px] font-bold uppercase text-[#c2f800]"
          >
            {muscle}
          </span>
        ))}
      </div>

      <h3 className="font-oswald text-xl font-bold uppercase text-white">
        {workout.name}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
        <Dumbbell size={14} />
        {workout.equipment}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#272a32] pt-4 text-xs text-gray-400">
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
  </Link>
);

export default WorkoutCard;