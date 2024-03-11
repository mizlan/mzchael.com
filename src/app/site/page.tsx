const Site = () => {
  return (
    <main className="mb-10 flex flex-col gap-4 px-10 sm:px-[15vw] lg:px-[30vw]">
      <section className="flex flex-col gap-3">
        <h1 className="font-generalsans text-3xl font-black uppercase">
          This Site
        </h1>
        <p>
          This site was made with Next.js and Tailwind! The colors were
          generated using{" "}
          <a className="underline" href="https://huewind.jordantwells.com">
            HueWind
          </a>
          . The source code is available{" "}
          <a
            className="underline"
            href="https://github.com/mizlan/mzchael.com/"
          >
            here
          </a>
          .
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="font-generalsans text-xl font-semibold uppercase">
          Music Player Widget
        </h2>
        <p>
          The music player widget on the homepage is powered by{" "}
          <a className="underline" href="https://github.com/mizlan/recenttrack">
            recenttrack
          </a>
          , a Vercel serverless function I wrote. It attempts to request the
          currently playing song from the Spotify API, through an app I have
          registered under my Spotify developer account.
        </p>
        <p>
          There&apos;s a problem though: because the Spotify API response has an{" "}
          <code
            className={`rounded-sm bg-rosePearl-700/20 px-1 py-0.5 font-jetbrainsmono text-sm`}
          >
            isPlaying
          </code>{" "}
          flag, it might seem as though the endpoint effectively returns the{" "}
          <i>most recently played</i> song. But this is not the case&#8212;the
          endpoint returns no data after a certain time has passed since Spotify
          was last playing. To remedy this, I utilize the{" "}
          <a className="underline" href="https://www.last.fm/api">
            last.fm API
          </a>{" "}
          to query my most recently logged song, which has the quirk that it
          only logs a song{" "}
          <a className="underline" href="https://www.last.fm/api/scrobbling">
            after at least half of the song has been played
          </a>
          . But that's good enough.
        </p>
      </section>
    </main>
  );
};

export default Site;
