import { getAllPostMetadatas } from "@/lib/posts"

const Posts = async () => {
  const postMetadatas = await getAllPostMetadatas()
  return (
    <div className="px-40">
      {postMetadatas.map(({ title, date }) => (
        <div>
          <p>{title}</p>
          <p>{date}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
