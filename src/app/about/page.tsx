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
          . My broader research interests include functional programming, formal
          methods, type systems, databases, and distributed systems. I use
          Emacs, Kitty, Neovim, Kagi, and Typst. When I have time, I{" "}
          <Link href="https://www.youtube.com/c/mzzzchael">make videos</Link>{" "}
          and <Link href="https://github.com/mizlan">write code</Link>.
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
