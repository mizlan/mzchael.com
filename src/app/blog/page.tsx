import { getAllPostMetadatas } from "@/lib/posts"
import Link from 'next/link'

const Posts = async () => {
  const postMetadatas = await getAllPostMetadatas()
  return (
    <main className="flex flex-col gap-5 px-10 sm:px-[15vw] lg:px-[30vw] mb-10">
      {
        postMetadatas.map(({ slug, link, description, title, date }) => (
          <div key={slug}>
            <Link className="text-xl font-bold" href={link}>{title}</Link>
            <p>{description}</p>
            <p>{date}</p>
          </div>
        ))
      }
    </main>
  )
}

export default Posts
