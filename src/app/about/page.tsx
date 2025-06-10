import Heading from "@/app/Heading";
import Link from "@/app/Link";

const About = () => {
  return (
    <main className="space-y-4">
      <section className="space-y-3">
        <Heading>More About Me</Heading>
        <p>
          My hobbies include analytic philosophy, a&nbsp;cappella, electric
          guitar, poker, and crosswords. I also have a{" "}
          <Link href="https://boardgamegeek.com/collection/user/BallOfSalt">
            board game collection
          </Link>
          . Some technologies and tools I use and love are: Emacs, an extensible
          Lisp system, Kitty, a terminal emulator; Neovim, a text editor; Kagi,
          a search engine; and Typst, a typesetting tool. I would also like to
          use a Framework laptop, but my current laptop works just fine for now.
          When I have time, I{" "}
          <Link href="https://www.youtube.com/c/mzzzchael">make videos</Link>{" "}
          and <Link href="https://github.com/mizlan">write code</Link>.
          Ostensibly, I don&apos;t have much time.
        </p>
      </section>
      <section className="space-y-3">
        <Heading>Reach Out!</Heading>
        <p>
          I&apos;d love to talk with you about anything! Reach me at michaellan
          AT ucla DOT edu.
        </p>
      </section>
    </main>
  );
};

export default About;
