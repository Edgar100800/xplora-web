-- AlterTable
ALTER TABLE "stores" ADD COLUMN     "address" TEXT,
ADD COLUMN     "address_reference" TEXT,
ADD COLUMN     "banner" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "is_premium" BOOLEAN,
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "priority" INTEGER;

-- CreateTable
CREATE TABLE "store_gallery_images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "store_gallery_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_gallery_images" ADD CONSTRAINT "store_gallery_images_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
