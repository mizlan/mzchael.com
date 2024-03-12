const About = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="mx-10 mb-10 flex flex-col gap-4 sm:w-[35em] lg:w-[45em] text-justify">
        <section className="flex flex-col gap-3">
          <h1 className="font-generalsans text-3xl font-black uppercase">
            More About Me
          </h1>
          <p>
            I&apos;m a second-year at UCLA majoring in computer science and
            minoring in philosophy. My research interests include functional
            programming, programming language design, formal verification, and
            compilers.
          </p>
          <p>
            I also love software engineering&#8212;I enjoy developing with
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
            <a href="https://github.com/mizlan/iswap.nvim">iswap.nvim</a>, an
            interactive refactoring tool for the Neovim text editor.
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
            My Coveted Setup
          </h2>
          <p>I have been asked by multiple people to share my setup.</p>
          <h3 className="font-generalsans text-lg font-semibold uppercase">
            Hardware
          </h3>
          <p>
            I use a 2021 MacBook Pro running Sonoma, a 4K Dell U2723QE monitor,
            a custom TKD Cycle7 (cream with gold accents) mechanical keyboard
            with Vertex V1s and GMK Olive. I use some random mouse I found
            somewhere; I am looking for mouse recommendations.
          </p>
          <h3 className="font-generalsans text-lg font-semibold uppercase">
            Software
          </h3>
          <p>
            I use Neovim tracking HEAD, with the Neovide GUI. My window manager
            is Yabai and I use skhd. My top bar is SketchyBar and I use gradient
            borders with JankyBorders. My shell of choice is zsh and I use my
            own fork of Kitty as my terminal emulator. I use Firefox ESR as my
            main browser and Skim as my PDF viewer. Here are my{" "}
            <a className="underline" href="https://github.com/mizlan/dotfiles">
              dotfiles
            </a>
            . My setup is in such a way that I can do my tasks without thinking;
            this includes usage of my custom{" "}
            <a
              className="underline"
              href="https://youtu.be/66AZCN8Hkj8?si=2FnBLjMD3Gh43gYV"
            >
              tab switcher.
            </a>
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
