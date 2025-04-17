import Link from 'next/link'

export default function Home() {
  return (
    <html>
        <body>
            
            <main className="min-h-screen">
            <nav className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                    My Blog
                    </Link>
                    <div className="space-x-4">
                    <Link href="/blog" className="hover:text-blue-600">
                        Blog
                    </Link>
                    <Link href="/admin" className="hover:text-blue-600">
                        Admin
                    </Link>
                    </div>
                </div>
                </div>
            </nav>
            
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
                <p className="text-xl text-gray-600 mb-8">
                A modern blog built with Next.js and Netlify CMS
                </p>
                <div className="space-x-4">
                <Link
                    href="/blog"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    View Posts
                </Link>
                <Link
                    href="/admin"
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Go to Admin
                </Link>
                </div>
            </div>
            </main>
        </body>
    </html>
  )
} 