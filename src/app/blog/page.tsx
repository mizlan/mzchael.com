import { getAllPostMetadatas } from "@/lib/posts";
import Link from "next/link";

const Posts = async () => {
  const postMetadatas = await getAllPostMetadatas();
  return (
    <main className="mb-10 flex flex-col gap-5 px-10 sm:px-[15vw] lg:px-[30vw]">
      {postMetadatas.map(({ slug, link, description, title, date }) => (
        <div key={slug}>
          <Link
            className="font-generalsans text-xl font-semibold uppercase"
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
