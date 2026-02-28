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
          I am a student at UCLA, where I am currently pursuing my
          bachelor&apos;s in computer science along with a minor in philosophy.
          Although I&apos;m not actively conducting research at present, I enjoy
          thinking about functional programming and formal methods. In the past,
          I&apos;ve contributed to mechanized Rocq proofs of{" "}
          <Link href="https://doi.org/10.1016/j.laa.2024.03.039">
            some results
          </Link>{" "}
          in quantum computing. My academic background involves coursework in
          compilers, programming language theory, and type theory. Outside of
          these academic pursuits, I also enjoy building open source developer
          tools.
        </p>
        <p>
          Moving forward, however, my career path is largely oriented toward
          industry, so to speak. I&apos;ve nonetheless always tried to focus my
          attention on using functional programming languages. Previously, I
          interned at Pure&nbsp;Storage (now known as Everpure). More recently,
          I interned at Tesla, where I wrote Haskell; and at Jane Street, where
          I wrote OCaml. After graduation I will be joining Jane&nbsp;Street
          full-time as a software engineer.
        </p>
        <p>
          My hobbies include philosophy, karaoke, poker, guitar, and crosswords.
          I also have a{" "}
          <Link href="https://boardgamegeek.com/collection/user/BallOfSalt">
            board game collection
          </Link>{" "}
          which rarely sees the light of day. This is a tragic but widespread
          and well-documented phenomenon&mdash;at least I can say none of my
          games are still in the original shrinkwrap. I&apos;d rather be a board
          game player than a board game collector. I also care a lot about the
          particular tools I use. Though I used Neovim for a number of years, I
          have since switched to Emacs. I also use and love: Kitty, a terminal
          emulator; Kagi, a search engine; and Typst, a typesetting engine. Try
          them out! On another note, I have also taken it upon myself to read
          more fiction in the coming year. These days, I occasionally{" "}
          <Link href="https://github.com/mizlan">write code</Link> and even less
          frequently{" "}
          <Link href="https://www.youtube.com/c/mzzzchael">make videos</Link>.
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
