"use client";

import { Balancer } from "react-wrap-balancer";
import useSWR from "swr";
import { z } from "zod";

/*
 * Some fields are optional because they in general might not exist,
 * e.g. when we are playing a local file
 */
const RecentTrackResponse = z.object({
  album: z.string(),
  albumImageUrl: z.httpUrl().optional(),
  artist: z.string(),
  device: z.string(),
  isPlaying: z.boolean(),
  songUrl: z.httpUrl().optional(),
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
  const resp = await fetch("/api/track");
  const json = await resp.json();
  const data = RecentTrackResponse.parse(json);
  return postProcess(data);
};

const RecentTrack = () => {
  const { data } = useSWR("track", query, {
    keepPreviousData: true,
    refreshInterval: 15000,
  });

  if (!data) return null;

  return (
    <Balancer className="font-light text-sm text-slate-600/80 dark:text-white/50">
      {data.isPlaying
        ? "Michael is currently listening to "
        : "Michael most recently listened to "}
      {data.songUrl === undefined ? (
        <span className="text-slate-800/90 dark:text-white/70">
          {data.title}
        </span>
      ) : (
        <a
          className="text-slate-700/90 underline underline-offset-2 dark:text-white/70"
          href={data.songUrl}
        >
          {data.title}
        </a>
      )}{" "}
      by {data.artist}
    </Balancer>
  );
};

export default RecentTrack;
