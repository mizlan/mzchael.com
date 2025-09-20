import Heading from "@/app/Heading";
import Link from "@/app/Link";
import Image from "next/image";
import sig from "../../public/sig.png";
import RecentTrack from "./RecentTrack";

const Home = async () => {
  return (
    <main className="flex h-full grow flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Heading>Michael Lan</Heading>
        <p className="">
          I study computer science and philosophy at UCLA. I do research under{" "}
          <Link href="https://web.cs.ucla.edu/~palsberg/">
            Jens&nbsp;Palsberg
          </Link>{" "}
          involving formal verification and quantum computing. After graduation,
          I plan on joining Jane Street as a software engineer, having interned
          there this past summer. Previously, I've interned at Pure Storage and
          Tesla.
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
          &copy; 2025 Michael Lan
        </footer>
      </div>
    </main>
  );
};

export default Home;
