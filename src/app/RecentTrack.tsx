'use client'

import Image from 'next/image'
import { z } from 'zod'
import { Balancer } from 'react-wrap-balancer'
import useSWR from 'swr'

const RecentTrackResponse = z.object({
  album: z.string(),
  albumImageUrl: z.string().url(),
  artist: z.string(),
  device: z.string(),
  isPlaying: z.boolean(),
  songUrl: z.string().url(),
  title: z.string(),
})

const postProcess = (data: z.infer<typeof RecentTrackResponse>) => {
  /*
   * remove brackets from song title, in part to help keep titles
   * at a manageable length
   */
  const title = data.title.replaceAll(/\(.*?\)/g, '').replaceAll(/\[.*?\]/g, '').trim()
  return {
    ...data,
    title
  }
}

const query = async () => {
  const resp = await fetch('https://recenttrack.vercel.app/api/handler')
  const json = await resp.json()
  const data = RecentTrackResponse.parse(json)
  return postProcess(data)
}

const RecentTrack = () => {
  const { data } = useSWR('track', query, {
    keepPreviousData: true,
  })

  if (!data) return (null)

  return (
    <div className="flex space-x-2 text-rosePearl-700">
      <div className="flex flex-col justify-center">
        {data.device === 'Michael\'s AirPods Pro' ?
          <Image
            src="/airpods.svg"
            alt="airpods"
            width={24.126}
            height={15.5485}
          />
          :
          <Image
            src="/waveform.svg"
            alt="waveform"
            width={16.1982}
            height={18.3604}
          />}
      </div>

      <Balancer>
        {data.isPlaying ? "Michael is currently listening to " : "Michael most recently listened to "}
        <a className="underline underline-offset-2 text-wanBlue-600" href={data.songUrl}>{data.title}</a>
        {' '}
        by
        {' '}
        {data.artist}
      </Balancer>
    </div>
  )
}

export default RecentTrack
