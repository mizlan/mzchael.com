import "../globals.css";

const Site = () => {
  return (
    <main className="flex flex-col gap-4 px-10 sm:px-[15vw] lg:px-[30vw] mb-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-black font-generalsans uppercase">
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
        <h2 className="text-xl font-black font-generalsans uppercase">
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
            className={`font-jetbrainsmono bg-rosePearl-700/20 px-1 py-0.5 rounded-sm text-sm`}
          >
            isPlaying
          </code>{" "}
          flag, it might seem as though the endpoint effectively returns the{" "}
          <i>most recently played</i> song. This, however, is not the
          case&#8212;the endpoint returns no data after a certain time has
          passed since Spotify was last playing. To remedy this, I utilize the{" "}
          <a className="underline" href="https://www.last.fm/api">
            last.fm API
          </a>{" "}
          to query my most recently logged song, which for all purposes
          suffices.
        </p>
      </section>
    </main>
  );
};

export default Site;
