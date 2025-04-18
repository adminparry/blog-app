-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pid" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL,
    "create_time" TIMESTAMP(3) NOT NULL,
    "update_time" TIMESTAMP(3) NOT NULL,
    "create_user" TEXT NOT NULL,
    "update_user" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
