import Image from "next/image";
import Link from "next/link";
import styles from "@/components/blogPreview.module.css";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";
import Comment from "@/components/Comment";
import { IComment } from "@/database/blogSchema";

async function getBlogBySlug(slug: string) {
  await connectDB();
  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return blog;
  } catch {
    return null;
  }
}

export default async function BlogPost(props: { params: { slug: string } }) {
  const { slug } = props.params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return (
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Blog not found</h1>
        <p>We couldn't find a blog post with that URL.</p>
        <Link href="/blog">
          <span style={{ color: "blue", textDecoration: "underline" }}>
            ← Back to Blog
          </span>
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p className={styles.blogDate}>{new Date(blog.date).toDateString()}</p>

      <Image
        src={blog.image}
        alt={blog.image_alt}
        width={800}
        height={400}
        className={styles.blogImage}
        style={{ width: "100%", height: "auto" }}
      />

      <div
        className={styles.blogContent}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <section style={{ marginTop: "2rem" }}>
        <h2>Comments</h2>

        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((c: IComment, i: number) => <Comment key={i} comment={c} />)
        ) : (
          <p style={{ opacity: 0.7 }}>Be the first to comment!</p>
        )}
      </section>

      <Link href="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>
    </main>
  );
}
