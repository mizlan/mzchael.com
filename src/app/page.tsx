import Heading from "@/app/Heading";
import Link from "@/app/Link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import sig from "../../public/sig.png";
import RecentTrack from "./RecentTrack";

const Home = async () => {
  return (
    <main className="flex h-full grow flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Heading>Michael Lan</Heading>
        <Balancer className="">
          I&apos;m a computer science student at UCLA minoring in philosophy.
          When I have time, I{" "}
          <Link href="https://www.youtube.com/c/mzzzchael">make videos</Link>{" "}
          and <Link href="https://github.com/mizlan">write code</Link>. My
          research interests include functional programming, formal methods,
          compilers, and distributed systems. I have previously interned at Pure
          Storage and Tesla, and I will be interning at Jane Street this summer.
        </Balancer>
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
          &copy; 2025 Michael Lan
        </footer>
      </div>
    </main>
  );
};

export default Home;
