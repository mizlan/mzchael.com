import Link from "next/link";
import { getAllPostMetadatas } from "@/lib/posts";

const Posts = async () => {
  const postMetadatas = await getAllPostMetadatas();
  return (
    <main className="space-y-4">
      {postMetadatas.map(({ slug, link, description, title, date }) => (
        <div key={slug}>
          <Link className="text-xl font-semibold" href={link}>
            {title}
          </Link>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      ))}
    </main>
  );
};

export default Posts;
