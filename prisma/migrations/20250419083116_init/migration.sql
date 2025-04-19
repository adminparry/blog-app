-- CreateTable
CREATE TABLE "Relation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pid" INTEGER,
    "deleted" BOOLEAN NOT NULL,
    "create_at" TIMESTAMP(3),
    "update_at" TIMESTAMP(3),
    "create_user" TEXT,
    "update_user" TEXT,

    CONSTRAINT "Relation_pkey" PRIMARY KEY ("id")
);
