import Hero from "./components/Hero";
import Library from "./components/Library";
import { getWorkouts } from "./lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />
      <Library workouts={workouts} />
    </>
  );
}
