import Link from "next/link";
import { Dumbbell } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-[#22252d] bg-[#0c0d10]">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row">
      
      <Link href="/" className="flex items-center gap-2">
        <Dumbbell size={22} className="text-[#c2f800]" />
        <span className="font-oswald font-bold tracking-wider text-white">
          FITLOG
        </span>
      </Link>

      <p className="text-center text-xs text-gray-600">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>

    </div>
  </footer>
);

export default Footer;