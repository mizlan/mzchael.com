"use client";

import { z } from "zod";
import { Balancer } from "react-wrap-balancer";
import useSWR from "swr";

const RecentTrackResponse = z.object({
  album: z.string(),
  albumImageUrl: z.string().url(),
  artist: z.string(),
  device: z.string(),
  isPlaying: z.boolean(),
  songUrl: z.string().url(),
  title: z.string(),
});

const postProcess = (data: z.infer<typeof RecentTrackResponse>) => {
  /*
   * remove brackets from song title, in part to help keep titles
   * at a manageable length
   */
  const title = data.title
    .replaceAll(/\(.*?\)/g, "")
    .replaceAll(/\[.*?\]/g, "")
    .trim();
  return {
    ...data,
    title,
  };
};

const query = async () => {
  const resp = await fetch("https://recenttrack.vercel.app/api/handler");
  const json = await resp.json();
  const data = RecentTrackResponse.parse(json);
  return postProcess(data);
};

const RecentTrack = () => {
  const { data } = useSWR("track", query, {
    keepPreviousData: true,
  });

  // const matches = useMediaQuery("(min-width: 768px)");
  //
  if (!data) return null;

  return (
    <Balancer className="font-inter text-sm text-indigo-500 dark:text-white/50">
      {data.isPlaying
        ? "Michael is currently listening to "
        : "Michael most recently listened to "}
      <a
        className="text-indigo-700 dark:text-white/70 underline underline-offset-2"
        href={data.songUrl}
      >
        {data.title}
      </a>{" "}
      by {data.artist}
    </Balancer>
  );
};

export default RecentTrack;
