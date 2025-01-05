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
          .
        </p>
      </section>
      <section className="space-y-3">
        <Heading>Open Source</Heading>
        <p>
          I am an avid open-source contributor and maintainer, with my most
          notable open-source project being{" "}
          <Link href="https://github.com/mizlan/iswap.nvim">iswap.nvim</Link>,
          an interactive refactoring tool for the Neovim text editor.
        </p>
        <p>
          In my second year at UCLA, I was also the maintainer of the UCLA ACM
          TeachLA Editor, an open-source text editor used by ACM TeachLA to
          teach kids how to program!
        </p>
      </section>
      <section className="space-y-3">
        <Heading>Reach Out!</Heading>
        <p>
          I&apos;d love to talk with you about anything! Reach me at michaellan
          AT ucla DOT edu. It might take a few days for me to respond.
        </p>
      </section>
    </main>
  );
};

export default About;
