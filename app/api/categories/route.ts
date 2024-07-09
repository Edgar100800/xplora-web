import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            orderBy: {
                popularity: "desc",
            },
        });

        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json(
            { error: "Failed to fetch categories" },
            { status: 500 }
        );
    }
}
    