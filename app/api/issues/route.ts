import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const result = await request.json();
  const validation = issueSchema.safeParse(result);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }
  const newIssue = await prisma.issue.create({
    data: { title: result.title, description: result.description }
  });
  return NextResponse.json(newIssue, { status: 201 });
}