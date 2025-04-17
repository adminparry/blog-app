import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts: {
    slug: string;
    content: string;
    title?: string;
    date?: string;
    author?: string;
    tags?: string[];
  }[] = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents) as {
      data: {
        title?: string;
        date?: string;
        author?: string;
        tags?: string[];
      };
      content: string;
    };
    
    return {
      slug,
      ...data,
      content,
      
    }
  }).sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  })

  return (
    <html>
        <body>
            
            <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid gap-8">
                {posts.map((post) => (
                <article key={post.slug} className="border rounded-lg p-6">
                    <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                        {post.title}
                    </h2>
                    </Link>
                    <div className="text-gray-600 mb-4">
                    <span>{post.date ? new Date(post.date).toLocaleDateString() : 'No date'}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author || 'Unknown author'}</span>
                    </div>
                    <div className="flex gap-2 mb-4">
                    {post.tags?.map((tag: string) => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {tag}
                        </span>
                    ))}
                    </div>
                </article>
                ))}
            </div>
            </div>
        </body>
    </html>
  )
} 