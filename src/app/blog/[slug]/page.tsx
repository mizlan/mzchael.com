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
    <article className="mb-8 flex flex-col items-center">
      <header className="mt-14 mb-4 text-center">
        <h1 className="font-generalsans uppercase text-4xl font-bold">
          {parsedMeta.title}
        </h1>
        <time
          className="block mt-1.5 text-md opacity-80"
          dateTime={parsedMeta.date}
        >
          {parsedMeta.date}
        </time>
      </header>
      <section className="mx-10 sm:w-[35em] lg:w-[45em]">
        <Component />
      </section>
    </article>
  );
};

export default Post;
