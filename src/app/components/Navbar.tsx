"use client";

import { useContext } from "react";
import { Bookmark, ClipboardList, Dumbbell } from "lucide-react";
import Link from "next/link";
import { FitLogContext } from "../context/FitLogContext";

const Navbar = () => {
  const context = useContext(FitLogContext);

  if (!context) throw new Error("Navbar must be used inside FitLogProvider");

  const { plan, saved } = context;

  return (
    <header className="border-b border-[#22252d] bg-[#0c0d10]">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5">
        
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell size={25} strokeWidth={2.5} className="text-[#c2f800]" />
          <span className="font-oswald text-xl font-bold tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#library"
            className="text-sm font-semibold text-gray-300 transition hover:text-[#c2f800]"
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className="text-sm font-semibold text-gray-300 transition hover:text-[#c2f800]"
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#c2f800] px-3 py-2 text-xs font-bold text-black"
          >
            <ClipboardList size={14} />
            Plan
            <span>{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-[#3a3e47] px-3 py-2 text-xs font-bold text-gray-300"
          >
            <Bookmark size={14} />
            Saved
            <span>{saved.length}</span>
          </Link>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;