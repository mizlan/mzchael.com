import Balancer from "react-wrap-balancer";
import RecentTrack from "./RecentTrack";
import Image from "next/image";
import Link from "next/link";
import sig from "../../public/sig.png";

const Home = async () => {
  return (
    <main className="flex h-full flex-grow flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h1 className={`text-xl font-semibold`}>Michael Lan</h1>
        <Balancer className="">
          I&apos;m a third-year studying computer science at UCLA and minoring
          in philosophy. I love software engineering, especially with functional
          programming in C++20, OCaml, and Haskell. When I have time, I{" "}
          <Link
            target="_blank"
            className="underline underline-offset-2 hover:bg-white/10"
            href="https://www.youtube.com/c/mzzzchael"
          >
            make videos
          </Link>{" "}
          and{" "}
          <Link
            target="_blank"
            className="peer underline underline-offset-2 hover:bg-white/10"
            href="https://github.com/mizlan"
          >
            write code
          </Link>
          . My research interests include functional programming, formal
          verification, programming language design, compilers, concurrent
          programming, and distributed systems. I previously interned at Pure
          Storage, where I worked on FlashBlade data mobility in C++. I'm an
          incoming intern at Tesla this winter where I'll be writing Haskell,
          and Jane Street this summer where I'll be writing OCaml.
        </Balancer>
        <RecentTrack />
      </div>
      <div className="mb-10 mt-16 space-y-3">
        <Image
          src={sig}
          alt="Michael's signature"
          className="sig"
          width={120}
        />
        <footer className="text-xs text-white/40">
          &copy; 2024 Michael Lan
        </footer>
      </div>
    </main>
  );
};

export default Home;
