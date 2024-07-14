'server-only'

import HomePage from '@/components/pages/HomePage'
import { getAllPosts } from '@/lib/blogApi'

export default function HomePageSSR() {
  const allPosts = getAllPosts()

  return <HomePage posts={allPosts} />
}
