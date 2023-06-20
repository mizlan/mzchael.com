import waveform from 'public/waveform.svg'
import airpods from 'public/airpods.svg'
import Image from 'next/image'
import { z } from 'zod'
import { Balancer } from 'react-wrap-balancer'

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
  const title = data.title.replaceAll(/\(.*?\)/g, '').trim()
  return {
    ...data,
    title
  }
}

const query = async () => {
  console.log('[debug] re-fetching recent track')
  const resp = await fetch('https://recenttrack.vercel.app/api/handler', { cache: 'no-store' })
  const json = await resp.json()
  const data = RecentTrackResponse.parse(json)
  return postProcess(data)
}

const RecentTrack = async () => {
  const data = await query();

  return (
    <div className="flex space-x-2 text-rosePearl-700">
      <div className="flex flex-col justify-center">
        {data.device === 'Michael\'s AirPods Pro' ?
          <Image
            src={airpods}
            alt="airpods"
          />
          :
          <Image
            src={waveform}
            alt="waveform"
          />}
      </div>

      <Balancer>
        {data.isPlaying ? "Michael is currently listening to " : "Michael most recently listened to "}
        <a className="text-wanBlue-600 visited:text-lavenderHaze-400" href={data.songUrl}>{data.title}</a>
        {' '}
        by
        {' '}
        {data.artist}
      </Balancer>
    </div>
  )
}

export default RecentTrack
