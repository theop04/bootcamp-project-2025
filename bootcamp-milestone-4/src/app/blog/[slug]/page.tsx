"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/components/blogPreview.module.css";
//import Blog from "@/database/blogSchema";
//import connectDB from "@/database/db";
import Comment from "@/components/Comment";
import { IComment } from "@/database/blogSchema";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// async function getBlogBySlug(slug: string) {
//   await connectDB();
//   try {
//     const blog = await Blog.findOne({ slug }).orFail();
//     return blog;
//   } catch {
//     return null;
//   }
// }

// export default async function BlogPost(props: { params: { slug: string } }) {
//   const { slug } = props.params;
//   const blog = await getBlogBySlug(slug);

export default function BlogPost() {
  const params = useParams(); 
  const slug = params.slug as string;

  const [blog, setBlog] = useState<any>(null); // Added to hold blog data once fetched from API
  const [loading, setLoading] = useState(true); // Added to track loading state
  const [commentForm, setCommentForm] = useState({ user: "", comment: "" }); // Added to hold comment input fields
  const [submitting, setSubmitting] = useState(false); // Added to track comment submission state
  const [error, setError] = useState(""); // Added to display failures
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blog/${slug}`); // Added to fetch blog from API instead of DB
        if (!response.ok) throw new Error("Blog not found");
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  const handleSubmitComment = async (e: React.FormEvent) => { // Added comment submission handler
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`/api/blog/${slug}/comment`, { // Uses option B endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentForm),
      });

      if (!response.ok) throw new Error("Failed to add comment");

      const data = await response.json();

      setBlog((prev: any) => ({ // Updates comments in UI without reload
        ...prev,
        comments: [...prev.comments, data.added],
      }));

      setCommentForm({ user: "", comment: "" }); // Clears form
      setSuccess("Comment added!");
      setTimeout(() => setSuccess(""), 2000);
    } catch {
      setError("Failed to add comment");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) { // Added loading state handling
    return <main>Loading...</main>;
  }

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

        <form onSubmit={handleSubmitComment} style={{ marginBottom: "1rem" }}> {/* Added comment form */}
          <input
            type="text"
            placeholder="Your name"
            value={commentForm.user}
            onChange={(e) => setCommentForm({ ...commentForm, user: e.target.value })}
            disabled={submitting}
          />
          <textarea
            placeholder="Your comment"
            value={commentForm.comment}
            onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
            disabled={submitting}
          />
          <button type="submit" disabled={submitting} className="submit-button">
            {submitting ? "Posting..." : "Post Comment"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>

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
