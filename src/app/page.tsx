import Balancer from "react-wrap-balancer";
import RecentTrack from "./RecentTrack";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <main className="flex h-full flex-grow flex-col justify-between px-10 pt-0 md:px-20 md:pt-[14vh] lg:px-32">
      <div className="flex flex-col gap-4">
        <h1
          className={`ml-[-0.045em] font-generalsans text-6xl font-black uppercase tracking-wide`}
        >
          Michael Lan
        </h1>
        <Balancer className="sm:w-[60vw]">
          I&apos;m a second-year studying computer science at UCLA, and I love
          open source, functional programming, and the Neovim ecosystem. Visit
          my{" "}
          <Link
            target="_blank"
            className="underline underline-offset-2"
            href="https://github.com/mizlan"
          >
            YouTube channel
          </Link>{" "}
          where I post videos on occasion; and my{" "}
          <Link
            target="_blank"
            className="peer underline underline-offset-2"
            href="https://github.com/mizlan"
          >
            GitHub profile
          </Link>{" "}
          where I have some exciting projects! Some of my other hobbies include
          analytic philosophy, a&nbsp;cappella, electric guitar, and crosswords.
          Oh, and I have a{" "}
          <a
            className="underline underline-offset-2"
            href="https://boardgamegeek.com/collection/user/BallOfSalt"
          >
            board game collection
          </a>
          .
        </Balancer>
        <RecentTrack />
      </div>
      <div className="mb-20 mt-16 flex flex-col gap-7">
        <Image
          src="/sig.png"
          alt="Michael's signature"
          className="sig"
          width={160}
          height={91.88}
        />
        <footer className="text-sm text-rosePearl-800/90 dark:text-rosePearl-100/30">
          &copy; 2024 Michael Lan
        </footer>
      </div>
    </main>
  );
};

export default Home;
