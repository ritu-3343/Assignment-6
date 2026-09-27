import { Workout } from "../types/workout";

const api = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export async function getWorkout(id: string): Promise<Workout> {
  const response = await fetch(`${api}/${id}`);

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  return response.json();
}