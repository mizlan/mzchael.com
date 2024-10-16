const About = () => {
  return (
    <main className="space-y-4">
      <section className="space-y-3">
        <h1 className="font-sans text-xl font-semibold">
          More About Me
        </h1>
        <p>
          My hobbies include analytic philosophy, a cappella, electric guitar,
          and crosswords. I also have a{" "}
          <a
            href="https://boardgamegeek.com/collection/user/BallOfSalt"
            className="underline hover:bg-white/10 dark:hover:bg-white/10"
          >
            board game collection
          </a>.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="font-sans text-xl font-semibold">
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
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="font-generalsans text-xl font-semibold uppercase">
          Reach Out!
        </h2>
        <p>
          I&apos;d love to talk with you about anything! Reach me at michaellan
          AT ucla DOT edu. It might take a few days for me to respond.
        </p>
      </section>
    </main>
  );
};

export default About;
