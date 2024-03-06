import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
    const createIssueSchema = z.object({
        title: z.string().min(1).max(255),
        description: z.string().min(1),
    })
    const result = await request.json();
    const validation = createIssueSchema.safeParse(result);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    const newIssue = await prisma.issue.create({
        data: { title: result.title, description: result.description }
    });
    return NextResponse.json(newIssue, { status: 201 });
}