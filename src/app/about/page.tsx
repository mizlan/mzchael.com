const About = () => {
  return (
    <main className="space-y-4">
      <section className="space-y-3">
        <h1 className="font-sans text-xl font-semibold">More About Me</h1>
        <p>
          My hobbies include analytic philosophy, a cappella, electric guitar,
          and crosswords. I also have a{" "}
          <a
            href="https://boardgamegeek.com/collection/user/BallOfSalt"
            className="underline underline-offset-2 hover:bg-white/10"
          >
            board game collection
          </a>
          .
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-sans text-xl font-semibold">Open Source</h2>
        <p>
          I am a big advocate of open-source software and the free software
          philosophy. I am an avid open-source contributor and maintainer, with
          my most notable open-source project being{" "}
          <a
            href="https://github.com/mizlan/iswap.nvim"
            className="underline underline-offset-2 hover:bg-white/10"
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
      <section className="space-y-3">
        <h2 className="font-sans text-xl font-semibold">
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
