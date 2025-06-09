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
          I&apos;m a computer science student at UCLA minoring in philosophy and
          currently a software engineering intern at Jane Street. I&apos;m also
          an undergraduate researcher investigating quantum computing,
          equational reasoning, and formal verification under{" "}
          <Link href="https://web.cs.ucla.edu/~palsberg/">Jens Palsberg</Link>.
          My research interests include functional programming, formal methods,
          type systems, compilers, databases, and distributed systems. When I
          have time, I{" "}
          <Link href="https://www.youtube.com/c/mzzzchael">make videos</Link>{" "}
          and <Link href="https://github.com/mizlan">write code</Link>.
          Ostensibly, I don&apos;t have much time. Previously, I&apos;ve
          interned at Pure Storage and Tesla and created a number of open-source
          projects and instructional videos for the Neovim text editor. I
          currently, however, use Emacs.
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
