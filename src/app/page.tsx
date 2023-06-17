import Balancer from 'react-wrap-balancer'
import RecentTrack from './RecentTrack'
import Image from 'next/image'
import sig from 'public/sig.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start gap-4 px-10 lg:px-32 lg:pt-[20vh]">
      <h1>Hi! I'm Michael.</h1>
      <Balancer>I'm a first-year studying computer science at UCLA, and
        I love open source, functional programming, and the Neovim ecosystem.
        Some of my hobbies include analytic philosophy, a&nbsp;cappella, electric guitar, and crosswords.
        Oh, and I have a board game <a href="https://boardgamegeek.com/collection/user/BallOfSalt">collection</a>.
      </Balancer>
      <RecentTrack />
        <Image
          src={sig}
          alt="Michael's signature"
          className="sig"
          width="160"
        />
    </main>
  )
}
