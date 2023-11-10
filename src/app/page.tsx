import Balancer from 'react-wrap-balancer'
import RecentTrack from './RecentTrack'
import Image from 'next/image'
import sig from 'public/sig.png'

const Home = async () => {
  return (
    <main className="flex flex-col justify-between px-10 md:px-20 lg:px-32 pt-0 md:pt-[14vh] h-full flex-grow">
      <div className="flex flex-col gap-4">
        <h1 className={`font-generalsans uppercase tracking-wide text-6xl font-black ml-[-0.045em]`}>Michael Lan</h1>
        <Balancer className="sm:w-[60vw]">
          I&apos;m a second-year studying computer science at UCLA, and
          I love open source, functional programming, and the Neovim ecosystem.
          Some of my hobbies include analytic philosophy, a&nbsp;cappella, electric guitar, and crosswords.
          Oh, and I have a <a className="underline underline-offset-2 visited:text-lavenderHaze-600 dark:visited:text-lavenderHaze-400" href="https://boardgamegeek.com/collection/user/BallOfSalt">board game collection</a>.
        </Balancer>
        <RecentTrack />
      </div>
      <div className="flex flex-col gap-7 mb-20 mt-16">
        <Image
          src={sig}
          alt="Michael's signature"
          className="sig"
          width="160"
        />
        <footer className="text-sm text-rosePearl-800/90 dark:text-rosePearl-100/30">&copy; 2023 Michael Lan</footer>
      </div>
    </main>
  )
}

export default Home
