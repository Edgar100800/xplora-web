import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const data = await request.json();

    const userFoundEmail = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });
    if (userFoundEmail) {
        return NextResponse.json({ error: "Email already exists" },{ status: 400 });
    }

    const userFoundUserName = await prisma.user.findUnique({
        where: {
            username: data.username,
        },
    });
    if (userFoundUserName) {
        return NextResponse.json({ error: "User already exists" },{ status: 400 });
    }

    data.password = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.user.create({
        data,
    });
    return NextResponse.json(newUser, { status: 201 });
}
