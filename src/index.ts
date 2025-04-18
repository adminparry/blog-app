import { PrismaClient } from '../generated/prisma'
import type { Config } from "@netlify/edge-functions"

const prisma = new PrismaClient()

async function main() {
  // Create a new post
  const post = await prisma.post.create({
    data: {
      title: 'Hello World',
      content: 'This is my first post!',
      published: true,
    },
  })
  console.log('Created post:', post)

  // Get all posts
  const posts = await prisma.post.findMany()
  console.log('All posts:', posts)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 