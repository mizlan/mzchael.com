import { getAllPostMetadatas } from "@/lib/posts"

const Posts = async () => {
  const postMetadatas = await getAllPostMetadatas()
  return (
    <div className="px-40">
      {
        postMetadatas.map(({ slug, title, date }) => (
          <div key={slug}>
            <p>{title}</p>
            <p>{date}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Posts
