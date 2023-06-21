import '../globals.css'

const ThisSite = () => {
  return (
    <main className="flex flex-col gap-4 px-10 sm:px-[15vw] lg:px-[30vw] mb-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold">This Site</h1>
        <p>
          This site was made with Next.js and Tailwind and is the first site
          I have written using either of those technologies. The colors were generated using
          {' '}
          <a href="https://huewind.jordantwells.com">HueWind</a>. The source code is available
          {' '}
          <a href="https://github.com/mizlan/mzchael.com/">here</a>.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-extrabold">Music Player Widget</h2>
        <p>
          The music player widget on the homepage is powered by <a href="https://github.com/mizlan/recenttrack">recenttrack</a>, a
          Vercel serverless function I wrote. It attempts
          to request the currently playing song from the Spotify API,
          through an app I have registered under my Spotify developer account.
        </p>
        <p>
          There&apos;s a problem though: because the Spotify API response has an{' '}
          <code className="bg-rosePearl-700/20 px-1 py-0.5 rounded-sm text-sm">isPlaying</code> flag, it might seem as though the endpoint
          effectively returns the <i>most recently played</i> song. This, however,
          is not the case&#8212;the endpoint returns no data after a certain time has
          passed since Spotify was last playing. To remedy this, I utilize the <a href="https://www.last.fm/api">last.fm API</a>
          {' '}
          to query my most recently logged song, which for all purposes suffices.
        </p>
      </section>
    </main>
  )
}

export default ThisSite
