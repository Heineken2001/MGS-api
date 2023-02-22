-- CreateTable
CREATE TABLE "tags" (
    "id" BIGSERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tag_group" TEXT DEFAULT 'default',

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);
