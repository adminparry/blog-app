-- AlterTable
ALTER TABLE "BlogMenu" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "deleted" SET DEFAULT false;
