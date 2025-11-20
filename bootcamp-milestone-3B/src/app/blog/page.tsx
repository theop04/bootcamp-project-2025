import BlogPreview from '@/components/blogPreview';
import Blog from '@/database/blogSchema';
import connectDB from '@/database/db'


async function getBlogs() {
  await connectDB()
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail()
    return blogs
  } catch (err) {
    console.error(err)
    return []
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <main>
      <h1 className="page-title">Theodore's Blog</h1>

      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            date={new Date(blog.date).toDateString()}
            image={blog.image}
            imageAlt={blog.image_alt}
            slug={blog.slug}
            content={null}
          />
        ))}
      </div>

      <footer className="footer">
        © 2025 Theodore&apos;s Website | All Rights Reserved
      </footer>
    </main>
  );
}
