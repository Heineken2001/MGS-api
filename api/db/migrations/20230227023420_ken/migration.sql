/*
  Warnings:

  - You are about to drop the `Category_translations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category_translations" DROP CONSTRAINT "Category_translations_category_id_fkey";

-- DropTable
DROP TABLE "Category_translations";

-- CreateTable
CREATE TABLE "category_translation" (
    "id" BIGSERIAL NOT NULL,
    "category_id" BIGINT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "title" TEXT,
    "short_description" TEXT,
    "long_description" TEXT,
    "featured_image" TEXT,
    "formdata" JSONB,
    "jsonschema" JSONB,
    "uischema" JSONB,

    CONSTRAINT "category_translation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "category_translation" ADD CONSTRAINT "category_translation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
