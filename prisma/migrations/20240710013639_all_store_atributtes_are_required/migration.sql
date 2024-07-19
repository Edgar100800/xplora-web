/*
  Warnings:

  - Made the column `address` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address_reference` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `banner` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_premium` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `logo` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `stores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `priority` on table `stores` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "stores" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "address_reference" SET NOT NULL,
ALTER COLUMN "banner" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "is_premium" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "logo" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "priority" SET NOT NULL;
