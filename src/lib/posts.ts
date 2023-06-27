import fs from 'fs'
import path from 'path'
import { z } from 'zod'

const postsDirectory = path.join(process.cwd(), 'src', 'posts')

const PostMetadataSchema = z.object({
  slug: z.string(),
  link: z.string(),
  title: z.string(),
  date: z.string(),
  description: z.string(),
})

type PostMetadata = z.infer<typeof PostMetadataSchema>


export const getAllPostsSlug = () => {
  return (
    fs
      .readdirSync(postsDirectory)
      .map((filename) => filename.replace(/\.mdx$/, ''))
  )
}

export const getPostMetadataBySlug = async (slug: string): Promise<PostMetadata> => {
  const { meta } = await import(`../posts/${slug}.mdx`)
  const parsedMeta = PostMetadataSchema.parse(meta)

  return {
    slug,
    title: parsedMeta.title,
    date: parsedMeta.date,
    description: parsedMeta.description,
    link: `/blog/${slug}`,
  }
}

export const getAllPostMetadatas = async () => {
  const slugs = getAllPostsSlug()
  const metadatas = await Promise.all(slugs.map((slug) => getPostMetadataBySlug(slug)))
  metadatas.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return metadatas
}
