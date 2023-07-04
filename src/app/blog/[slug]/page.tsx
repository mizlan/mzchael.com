import { PostMetadataSchema } from '@/lib/posts'

type PostProps = {
  params: { slug: string };
};

const Post = async ({ params }: PostProps) => {
  const { meta, default: Component } = await import(
    `../../../posts/${params.slug}.mdx`
  );

  const parsedMeta = PostMetadataSchema.parse(meta)
  return (
    <article className="px-40 mb-8">
      <header className="mt-14 mb-8 text-center">
        <h1 className="text-5xl text-day-600 font-bold">{parsedMeta.title}</h1>
        <time className="block mt-1.5 text-md opacity-80" dateTime={parsedMeta.date}>
          {parsedMeta.date}
        </time>
      </header>
      <section className="prose prose-stone dark:prose-invert m-auto">
        <Component />
      </section>
    </article>
  )
}

export default Post
