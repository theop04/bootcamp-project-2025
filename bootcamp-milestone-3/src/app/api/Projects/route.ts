
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import projectSchema from "@/database/blogSchema"


export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const projects = await projectSchema.find();
    return NextResponse.json(projects);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Failed to fetch projects.", { status: 500 });
  }
}
