import "../globals.css";

const About = () => {
  return (
    <div className="flex flex-col items-center ">
      <main className="flex flex-col gap-4 mx-10 sm:w-[35em] mb-10">
        <section className="flex flex-col gap-3">
          <h1 className="text-3xl font-black font-generalsans uppercase">
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
          <h2 className="text-xl font-black font-generalsans uppercase">
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
            I also maintain the UCLA ACM TeachLA Editor, an open-source,
            full-stack kid-friendly text editor used by ACM TeachLA to teach
            kids how to program!
          </p>
          <p>Yeah. I&apos;m just really into text editors, it seems :)</p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-black font-generalsans uppercase">
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
