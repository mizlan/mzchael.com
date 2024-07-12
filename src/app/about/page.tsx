import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="mx-10 mb-10 flex flex-col gap-4 text-justify sm:w-[35em] lg:w-[45em]">
        <section className="flex flex-col gap-3">
          <h1 className="font-generalsans text-3xl font-black uppercase">
            More About Me
          </h1>
          <p>
            I&apos;m a third-year at UCLA majoring in computer science and
            minoring in philosophy. My research interests include functional
            programming, programming language design, formal verification, and
            compilers.
          </p>
          <p>
            I also love software engineering and enjoy developing with
            technologies such as modern TypeScript (React), modern C++, OCaml,
            Haskell, and Clojure.
          </p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-generalsans text-xl font-semibold uppercase">
            Open Source
          </h2>
          <p>
            I am a big advocate of open-source software and the free software
            philosophy. To that end, I am an avid contributor to open-source
            projects I use (see my GitHub for contribution activity), and I am
            also an open-source maintainer, with my most notable open-source
            project being{" "}
            <a
              href="https://github.com/mizlan/iswap.nvim"
              className="underline hover:bg-rosePearl-400/50 dark:hover:bg-rosePearl-900/30"
            >
              iswap.nvim
            </a>
            , an interactive refactoring tool for the Neovim text editor.
          </p>
          <p>
            In my second year at UCLA, I was also the maintainer of the UCLA ACM
            TeachLA Editor, an open-source, full-stack kid-friendly text editor
            used by ACM TeachLA to teach kids how to program!
          </p>
          <p>Yeah. I&apos;m just really into text editors, it seems :)</p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-generalsans text-xl font-semibold uppercase">
            My Setup
          </h2>
          <p>
            I use a 2021 MacBook Pro, a 4K Dell monitor, a Cycle7 with Vertex
            V1s and GMK Olive, and a Logitech GPX. I use Neovim tracking HEAD,
            with the Neovide GUI. My window manager is Yabai and I use skhd,
            SketchyBar, and JankyBorders. My shell of choice is zsh and I use my
            own fork of Kitty as my terminal emulator. I use Firefox as my main
            browser and Skim as my PDF viewer. Here are my{" "}
            <Link
              className="underline hover:bg-rosePearl-400/50 dark:hover:bg-rosePearl-900/30"
              href="https://github.com/mizlan/dotfiles"
            >
              dotfiles
            </Link>
            . My setup is in such a way that I can do my tasks without thinking;
            this includes usage of my custom{" "}
            <Link
              className="underline hover:bg-rosePearl-400/50 dark:hover:bg-rosePearl-900/30"
              href="https://youtu.be/66AZCN8Hkj8?si=2FnBLjMD3Gh43gYV"
            >
              tab switcher.
            </Link>
          </p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-generalsans text-xl font-semibold uppercase">
            Reach Out!
          </h2>
          <p>
            I&apos;d love to talk with you about anything! Reach me at
            michaellan AT ucla DOT edu. It might take a few days for me to
            respond.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
