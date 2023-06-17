import { Balancer } from 'react-wrap-balancer'
import '../globals.css'

const ThisSite = () => {
  return (
    <main className="flex flex-col gap-4 px-10 lg:px-[30vw]">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold">This Site</h1>
        <Balancer>
          This site was made with Next.js and Tailwind. It also uses React Query
          and React Wrap Balancer for certain niceties. The colors were generated using
          {' '}
          <a href="https://huewind.jordantwells.com">HueWind</a>.
        </Balancer>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-extrabold">Music Player Widget</h2>
        <Balancer>
          The music player widget on the homepage is powered by recenttrack, a
          Vercel serverless function I wrote. It attempts
          to request the currently playing song from the Spotify API,
          through an app I registered under my Spotify developer account.
        </Balancer>
        <Balancer>
          There's a problem though: because the Spotify API response has an{' '}
          <code>isPlaying</code> flag, it might seem as though the endpoint
          effectively returns the <i>most recently played</i> song. This, however,
          is not the case&#8212;the endpoint returns no data after a certain time has
          passed since Spotify was last playing. To remedy this, I utilize the last.fm
          API to query my most recently logged song, which for all purposes suffices.
        </Balancer>
      </section>
    </main>
  )
}

export default ThisSite
