import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export const PostMetadataSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
});

const SitePostMetadataSchema = PostMetadataSchema.extend({
  slug: z.string(),
  link: z.string(),
});

type SitePostMetadata = z.infer<typeof SitePostMetadataSchema>;

export const getAllPostSlugs = () => {
  return fs
    .readdirSync(postsDirectory)
    .map((filename) => filename.replace(/\.mdx$/, ""));
};

export const getPostMetadataBySlug = async (
  slug: string,
): Promise<SitePostMetadata> => {
  const { meta } = await import(`../posts/${slug}.mdx`);
  const parsedMeta = PostMetadataSchema.parse(meta);

  return {
    slug,
    link: `/blog/${slug}`,
    title: parsedMeta.title,
    date: parsedMeta.date,
    description: parsedMeta.description,
  };
};

export const getAllPostMetadatas = async () => {
  const slugs = getAllPostSlugs();
  const metadatas = await Promise.all(
    slugs.map((slug) => getPostMetadataBySlug(slug)),
  );
  metadatas.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return metadatas;
};
