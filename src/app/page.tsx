import Image from "next/image";
import Heading from "@/app/Heading";
import sig from "../../public/sig.png";
import RecentTrack from "./RecentTrack";

const Home = async () => {
  return (
    <main className="flex h-full grow flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Heading>Michael Lan</Heading>
        <p className="">
          I study computer science and philosophy at UCLA with interests in
          programming language theory and functional programming. Previously,
          I've interned at Pure&nbsp;Storage and Tesla. After graduation I will
          be joining Jane&nbsp;Street as a software engineer.
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
