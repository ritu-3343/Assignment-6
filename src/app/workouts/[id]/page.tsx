import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Star,
} from "lucide-react";

import { getWorkout } from "../../lib/api";
import WorkoutPoses from "../../components/WorkoutPoses";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetails({
  params,
}: Props) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <Link
        href="/#library"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#c2f800]"
      >
        <ArrowLeft size={16} />
        Back to library
      </Link>

      <div className="grid overflow-hidden rounded-2xl border border-[#272a32] bg-[#15171d] lg:grid-cols-2">
        <div className="relative min-h-112.5 lg:min-h-162.5">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-7 md:p-10">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full border border-[#3a3e47] px-3 py-1 text-[10px] font-bold uppercase text-[#c2f800]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h1 className="mt-5 font-oswald text-4xl font-bold uppercase text-white md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-gray-400">
            {workout.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#292c34] bg-[#292c34] sm:grid-cols-3">
            <Spec label="Equipment" value={workout.equipment} />
            <Spec label="Difficulty" value={workout.difficulty} />
            <Spec label="Sets" value={`${workout.sets}`} />
            <Spec label="Reps" value={workout.reps} />
            <Spec label="Duration" value={`${workout.duration} min`} />
            <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
            <Star size={17} />
            Rating {workout.rating}
          </div>

          <div className="mt-10">
            <h2 className="font-oswald text-2xl font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 text-sm leading-6 text-gray-400"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c2f800] text-xs font-bold text-black">
                    {index + 1}
                  </span>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <WorkoutPoses workout={workout} />
        </div>
      </div>
    </section>
  );
}

function Spec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#15171d] p-4">
      <p className="text-[9px] font-bold uppercase tracking-wider text-gray-600">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-300">
        {value}
      </p>
    </div>
  );
}