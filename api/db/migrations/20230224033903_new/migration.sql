/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Menus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "Menus";

-- CreateTable
CREATE TABLE "categories" (
    "id" BIGSERIAL NOT NULL,
    "parent_id" BIGINT,
    "position" BIGINT,
    "is_searchable" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),
    "type" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menus" (
    "id" BIGSERIAL NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),
    "position" INTEGER,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
