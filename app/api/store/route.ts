import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { Store } from "@prisma/client";

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    console.log(data);

    try {
        const store = await prisma.store.create({
            data: {
                name: data.name,
                description: data.description,
                rating: Number(data.rating),
                categoryId: Number(data.categoryId),
                userId: data.userId,
            },
        });
        return NextResponse.json(store, { status: 200 });
    } catch (error) {
        console.error("Error fetching Stores:", error);
        return NextResponse.json(
            { error: "Failed to fetch Stores" },
            { status: 500 }
        );
    }
}

