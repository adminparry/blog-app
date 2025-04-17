import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map(fileName => ({
    slug: fileName.replace(/\.md$/, '')
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fullPath = path.join(postsDirectory, `${params.slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return (
        <html>
            <body>
                
                <article className="max-w-4xl mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                    <div className="text-gray-600 mb-8">
                    <span>{new Date(data.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{data.author}</span>
                    </div>
                    <div className="prose prose-lg max-w-none">
                    <MDXRemote source={content} />
                    </div>
                </article>
            </body>
        </html>
    )
  } catch (error) {
    notFound()
  }
} 