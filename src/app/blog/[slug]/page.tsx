import { PostMetadataSchema } from "@/lib/posts";

type PostProps = {
  params: { slug: string };
};

const Post = async ({ params }: PostProps) => {
  const { meta, default: Component } = await import(
    `../../../posts/${params.slug}.mdx`
  );

  const parsedMeta = PostMetadataSchema.parse(meta);
  return (
    <article className="">
      <header className="">
        <h1 className="font-sans text-xl font-semibold">
          {parsedMeta.title}
        </h1>
        <time
          className="text-md mt-1.5 block opacity-80"
          dateTime={parsedMeta.date}
        >
          {parsedMeta.date}
        </time>
      </header>
      <section className="">
        <Component />
      </section>
    </article>
  );
};

export default Post;
