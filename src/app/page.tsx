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
          I study computer science and philosophy at UCLA, where my research
          under{" "}
          <Link href="https://web.cs.ucla.edu/~palsberg/">Jens Palsberg</Link>{" "}
          involves formal verification, quantum computing, and equational
          reasoning. My broader research interests include functional
          programming, formal methods, type systems, databases, and distributed
          systems.
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
