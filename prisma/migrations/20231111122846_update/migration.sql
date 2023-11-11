/*
  Warnings:

  - The `tipo` column on the `Realeases` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Realeases" DROP COLUMN "tipo",
ADD COLUMN     "tipo" TEXT;
