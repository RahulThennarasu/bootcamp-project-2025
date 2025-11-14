import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();

  const { slug } = params;

  try {
    // Parse the request body
    const body = await req.json();
    const { user, comment } = body;

    // Validate the input
    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    // Create the comment object with current timestamp
    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    // Find the blog and push the new comment to its comments array
    const blog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true } // Return the updated document
    );

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}