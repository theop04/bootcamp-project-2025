import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  const resolvedParams = await context.params;
  const slug = resolvedParams.slug;

  try {
    const json = await req.json();
    const username = json.user;
    const text = json.comment;

    // Basic validation
    if (!username?.trim() || !text?.trim()) {
      return NextResponse.json(
        { error: "Both user and comment fields are required." },
        { status: 400 }
      );
    }

    const commentData = {
      user: username.trim(),
      comment: text.trim(),
      time: new Date(),
    };

    // Update blog document with new comment
    const updated = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: commentData } },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "No blog found with that slug." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        added: commentData,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Comment POST error:", err);

    return NextResponse.json(
      { error: "Something went wrong while saving the comment." },
      { status: 500 }
    );
  }
}
