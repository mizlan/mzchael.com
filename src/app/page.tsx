import Balancer from "react-wrap-balancer";
import RecentTrack from "./RecentTrack";
import Image from "next/image";
import Heading from "@/app/Heading";
import Link from "@/app/Link";
import sig from "../../public/sig.png";

const Home = async () => {
  return (
    <main className="flex h-full flex-grow flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Heading>Michael Lan</Heading>
        <Balancer className="">
          I'm a computer science student at UCLA minoring in philosophy. When I
          have time, I{" "}
          <Link href="https://www.youtube.com/c/mzzzchael">make videos</Link>{" "}
          and <Link href="https://github.com/mizlan">write code</Link>. My
          research interests include functional programming (Haskell, OCaml),
          formal methods (Coq, Lean), compilers, concurrent programming, and
          distributed systems. I previously interned at Pure Storage, and I'm an
          incoming intern at Tesla this winter and at Jane Street this summer.
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
        <footer className="text-xs text-stone-600 dark:text-white/40">
          &copy; 2024 Michael Lan
        </footer>
      </div>
    </main>
  );
};

export default Home;
