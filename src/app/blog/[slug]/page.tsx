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
      <header className="mb-4 mt-14 sm:w-[35em] lg:w-[45em]">
        <h1 className="font-generalsans text-4xl font-bold uppercase">
          {parsedMeta.title}
        </h1>
        <time
          className="text-md mt-1.5 block opacity-80"
          dateTime={parsedMeta.date}
        >
          {parsedMeta.date}
        </time>
      </header>
      <section className="mx-10 text-justify sm:w-[35em] lg:w-[45em]">
        <Component />
      </section>
    </article>
  );
};

export default Post;
