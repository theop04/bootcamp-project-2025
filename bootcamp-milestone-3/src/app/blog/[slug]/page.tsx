import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import blogs from "@/app/blogData";
import styles from "@/components/blogPreview.module.css";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main>
      <h1>{blog.title}</h1>
      <p className={styles.blogDate}>{blog.date}</p>

      <Image
        src={blog.image}
        alt={blog.imageAlt}
        width={800}
        height={400}
        className={styles.blogImage}
        style={{ width: "100%", height: "auto" }}
      />

      <div className={styles.blogContent}>{blog.content}</div>

      <Link href="/blog" className={styles.backLink}>
        ← Back to Blog 
      </Link>
    </main>
  );
}
