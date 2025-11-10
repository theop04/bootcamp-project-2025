import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/blogPreview.module.css";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";

async function getBlogBySlug(slug: string) {
  await connectDB();
  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return blog;
  } catch {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return notFound();

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

      <Link href="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>
    </main>
  );
}
