import { getAllPostMetadatas } from "@/lib/posts";
import Link from "next/link";

const Posts = async () => {
  const postMetadatas = await getAllPostMetadatas();
  return (
    <main className="space-y-4">
      {postMetadatas.map(({ slug, link, description, title, date }) => (
        <div key={slug}>
          <Link
            className="font-sans text-xl font-semibold"
            href={link}
          >
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
