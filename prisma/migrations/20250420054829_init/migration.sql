-- CreateTable
CREATE TABLE "BlogMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pid" INTEGER,
    "deleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "create_user" TEXT,
    "update_user" TEXT,

    CONSTRAINT "BlogMenu_pkey" PRIMARY KEY ("id")
);
