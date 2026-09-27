import Link from "next/link";
import Image from "next/image";

import heroImage from "../assets/banner.png";

const Hero = () => (
  <section className="mx-auto max-w-7xl px-5 pt-10">
    <div className="flex min-h-120 items-center justify-between gap-10 overflow-hidden rounded-2xl border border-[#22252d] bg-[#15171d] px-7 py-10 md:px-12">
      
      <div className="max-w-2xl">
        <p className="mb-5 text-xs font-bold tracking-[3px] text-[#c2f800]">
          WORKOUT LIBRARY
        </p>

        <h1 className="font-oswald text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 md:text-base">
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          lock it into today&apos;s plan, and watch the week&apos;s
          work add up.
        </p>

        <Link
          href="#library"
          className="mt-8 inline-flex items-center rounded-md bg-[#c2f800] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#d4ff42]"
        >
          Browse Workouts
        </Link>
      </div>

      <div className="relative hidden h-83.5 w-83.5 shrink-0 overflow-hidden rounded-xl lg:block">
        <Image
          src={heroImage}
          alt="Workout"
          fill
          priority
          className="object-cover"
        />
      </div>

    </div>
  </section>
);

export default Hero;
