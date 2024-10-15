import Balancer from "react-wrap-balancer";
import RecentTrack from "./RecentTrack";
import Image from "next/image";
import Link from "next/link";
import sig from "../../public/sig.png";

const Home = async () => {
  return (
    <main className="flex h-full flex-grow flex-col justify-between px-10 pt-4 sm:pt-[8vh] md:px-20 md:pt-[14vh] lg:px-32">
      <div className="flex flex-col gap-4">
        <h1
          className={`ml-[-0.045em] font-generalsans text-3xl md:text-6xl font-semibold md:font-black uppercase tracking-wide`}
        >
          Michael Lan
        </h1>
        <Balancer className="sm:w-[60vw]">
          I&apos;m a third-year studying computer science at UCLA, and I love
          open source, functional programming, and the Neovim ecosystem. Visit
          my{" "}
          <Link
            target="_blank"
            className="underline underline-offset-2 hover:bg-rosePearl-400/50 dark:hover:bg-rosePearl-900/30"
            href="https://www.youtube.com/c/mzzzchael"
          >
            YouTube channel
          </Link>{" "}
          where I post videos on occasion; and my{" "}
          <Link
            target="_blank"
            className="peer underline underline-offset-2 hover:bg-rosePearl-400/50 dark:hover:bg-rosePearl-900/30"
            href="https://github.com/mizlan"
          >
            GitHub profile
          </Link>{" "}
          where I have some exciting projects! Some of my other hobbies include
          analytic philosophy, a&nbsp;cappella, electric guitar, and crosswords.
          Oh, and I have a{" "}
          <Link
            className="underline underline-offset-2 hover:bg-rosePearl-400/50 dark:hover:bg-rosePearl-900/30"
            href="https://boardgamegeek.com/collection/user/BallOfSalt"
          >
            board game collection
          </Link>
          .
        </Balancer>
        <RecentTrack />
      </div>
      <div className="mb-20 mt-16 flex flex-col gap-7">
        <Image
          src={sig}
          alt="Michael's signature"
          className="sig"
          width={160}
        />
        <footer className="text-sm text-rosePearl-800/75 dark:text-rosePearl-100/60">
          &copy; 2024 Michael Lan
        </footer>
      </div>
    </main>
  );
};

export default Home;
