-- CreateTable
CREATE TABLE "Categories" (
    "id" BIGSERIAL NOT NULL,
    "parent_id" BIGINT,
    "position" BIGINT,
    "is_searchable" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),
    "type" TEXT,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menus" (
    "id" BIGSERIAL NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),
    "position" INTEGER,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);
