import BlogPreview from '@/components/blogPreview';
import blogs, { Blog } from '../blogData';

export default function BlogPage() {
  return (
    <main>
      <h1 className="page-title">Theodore's Blog</h1>

      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </div>

      <footer className="footer">
        © 2025 Theodore&apos;s Website | All Rights Reserved
      </footer>
    </main>
  );
}
