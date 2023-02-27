/*
  Warnings:

  - You are about to drop the `category_translation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "category_translation" DROP CONSTRAINT "category_translation_category_id_fkey";

-- DropTable
DROP TABLE "category_translation";

-- CreateTable
CREATE TABLE "category_translations" (
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

    CONSTRAINT "category_translations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "category_translations" ADD CONSTRAINT "category_translations_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
