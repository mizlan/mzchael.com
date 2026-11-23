import Image from "next/image";
import Heading from "@/app/Heading";
import Link from "@/app/Link";
import sig from "../../public/sig.png";
import RecentTrack from "./RecentTrack";

const Home = async () => {
  return (
    <main className="flex h-full grow flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Heading className="text-xl">Michael Lan</Heading>
        <p className="text-md">
          I am a software engineer at Jane Street. I graduated summa cum laude
          from UCLA, with a bachelor&apos;s in computer science and a minor in
          philosophy. I enjoy thinking about functional programming and formal
          methods, and my academic background involves coursework in compilers,
          programming language theory, and type theory.
        </p>
        <p>
          I&apos;d love to talk with you about anything! Reach me at michaellan
          AT ucla DOT edu.
        </p>
        <RecentTrack />
      </div>
      <div className="mt-16 mb-10 space-y-3">
        <Image
          src={sig}
          alt="Michael's signature"
          className="sig"
          width={120}
        />
        <footer className="text-xs text-slate-400 dark:text-white/40">
          &copy; 2026 Michael Lan
        </footer>
      </div>
    </main>
  );
};

export default Home;
