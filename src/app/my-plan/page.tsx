"use client";

import { useContext, useState } from "react";
import Link from "next/link";

import WorkoutPlanCard from "../components/WorkoutPlan";
import { FitLogContext } from "../context/FitLogContext";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("MyPlanPage must be used inside FitLogProvider");
  }

  const {
    plan,
    saved,
    removeFromPlan,
    removeSaved,
    markAsDone,
    isDone,
  } = context;

  const [tab, setTab] = useState<Tab>("plan");

  const currentList = tab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div>
        <p className="text-xs font-bold tracking-[3px] text-[#c2f800]">
          YOUR WORKOUT LOG
        </p>

        <h1 className="mt-2 font-oswald text-5xl font-bold uppercase text-white">
          MY PLAN
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Metric label="Exercises" value={plan.length} />

        <Metric label="Minutes" value={totalMinutes} />

        <Metric label="Calories" value={totalCalories} />
      </div>

      <div className="mt-12 flex gap-2 border-b border-[#272a32]">
        <button
          type="button"
          onClick={() => setTab("plan")}
          className={`border-b-2 px-5 py-3 text-sm font-bold transition ${
            tab === "plan"
              ? "border-[#c2f800] text-[#c2f800]"
              : "border-transparent text-gray-500 hover:text-gray-300"
          }`}
        >
          Today&apos;s Plan ({plan.length})
        </button>

        <button
          type="button"
          onClick={() => setTab("saved")}
          className={`border-b-2 px-5 py-3 text-sm font-bold transition ${
            tab === "saved"
              ? "border-[#c2f800] text-[#c2f800]"
              : "border-transparent text-gray-500 hover:text-gray-300"
          }`}
        >
          Saved ({saved.length})
        </button>
      </div>

      {currentList.length === 0 ? (
        <EmptyState tab={tab} />
      ) : (
        <div className="mt-8 space-y-4">
          {currentList.map((workout) => (
            <WorkoutPlanCard
              key={workout.id}
              workout={workout}
              tab={tab}
              done={isDone(workout.id)}
              onRemove={() => {
                if (tab === "plan") {
                  removeFromPlan(workout.id);
                } else {
                  removeSaved(workout.id);
                }
              }}
              onDone={() => markAsDone(workout.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-[#272a32] bg-[#15171d] p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="mt-3 font-oswald text-4xl font-bold text-[#c2f800]">
        {value}
      </p>
    </div>
  );
}

function EmptyState({ tab }: { tab: Tab }) {
  return (
    <div className="mt-10 rounded-xl border border-dashed border-[#30343d] bg-[#111318] px-5 py-20 text-center">
      <h2 className="font-oswald text-3xl font-bold uppercase text-white">
        NOTHING HERE YET
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
        {tab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts from the library and find them here later."}
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#c2f800] px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#d4ff42]"
      >
        Go to workouts
      </Link>
    </div>
  );
}