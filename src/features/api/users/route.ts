// pages/api/users.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { id, email } = await req.json();

  // Simple validation
  if (!email || !id) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        clerkUserId: id,
        emailAddress: email,
        isPro: false,
        accumulatedWords: 0
      }
    });

    return NextResponse.json({
      message: "User added successfully",
      user: newUser
    }, { status: 201 });
  } catch (error) {
    console.error("Failed to add user:", error);
    return NextResponse.json({ 
      error: "Failed to add user", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

// GET Method: Retrieve user properties (isPro, accumulatedWords) based on user id
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const clerkUserId = searchParams.get('clerkUserId');

  if (!clerkUserId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkUserId },
      select: {
        isPro: true,
        accumulatedWords: true
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Failed to retrieve user:", error);
    return NextResponse.json({ 
      error: "Failed to retrieve user", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { id, isPro, accumulatedWords } = await req.json(); // Fields to update

  // Simple validation
  if (!id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  console.log("accumulated words", accumulatedWords);

  try {
    await prisma.user.update({
      where: { clerkUserId: id },
      data: { isPro: isPro, accumulatedWords: accumulatedWords },
    });

    return NextResponse.json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Failed to update user:", error);
    return NextResponse.json({ 
      error: "Failed to update user", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}
