import { NextResponse } from "next/server";
import prisma from "@/libs/db";

// GET Endpoint example:
//      api/stores?categoryId=1
//      api/stores?sortByRating=desc
//      api/stores?categoryId=1&sortByRating=desc

export async function GET(req: Request) {
    const url = new URL(req.url);
    const categoryId = url.searchParams.get("categoryId");
    const sortByRating = url.searchParams.get("sortByRating");

    try {
        const filters: any = {};
        if (categoryId) {
            filters.categoryId = Number(categoryId);
        }

        const orderBy: any = {};
        if (sortByRating && sortByRating === "desc") {
            orderBy.rating = "desc";
        }

        const stores = await prisma.store.findMany({
            where: filters,
            orderBy: orderBy.rating ? orderBy : undefined,
        });

        const transformedStores = stores.map((store) => ({
            id: store.id,
            name: store.name,
            description: store.description,
            categoryId: store.categoryId,
            rating: store.rating,
            priority: store.priority,
            is_premium: store.is_premium,
            location: {
                coordinates: {
                    latitude: store.latitude,
                    longitude: store.longitude,
                },
                address: store.address,
                address_reference: store.address_reference,
                country: store.country,
            },
            contact: {
                email: store.email,
                phone: store.phone,
            },
            images: {
                banner: store.banner,
                logo: store.logo,
            },
            
            // userId: store.userId,
        }));

        return NextResponse.json(transformedStores, { status: 200 });
    } catch (error) {
        console.error("Error fetching Stores:", error);
        return NextResponse.json(
            { error: "Failed to fetch Stores" },
            { status: 500 }
        );
    }
}

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
