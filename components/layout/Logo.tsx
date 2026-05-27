import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <h1 className="text-3xl font-extrabold tracking-tight">
        <span className="text-cyan-400">Edu</span>
        <span className="text-white">Admin</span>

        <span className="text-fuchsia-500 italic ml-1 drop-shadow-[0_0_12px_rgba(217,70,239,0.7)]">
          X
        </span>
      </h1>
    </Link>
  );
}