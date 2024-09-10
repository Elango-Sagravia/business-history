import { NextResponse } from "next/server";
import { getDocuments } from "outstatic/server";

async function getData() {
  const blogs = getDocuments("blogs", ["slug", "latest"]);

  return blogs;
}
export async function GET() {
  try {
    const blogs = await getData();
    const blog = blogs.find((blog) => blog.latest);
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
