'server-only'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAllPosts, getPostBySlug } from '@/lib/blogApi'
import { CMS_NAME } from '@/types/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import PostPage from '@/components/pages/PostPage'

export default async function PostPageSSR({ params }: Params) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return <PostPage content={content} />
}

type Params = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
