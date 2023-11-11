/*
  Warnings:

  - The `tipo` column on the `Realeases` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ReleaseType" AS ENUM ('entrada', 'saida');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('pix', 'boleto', 'credtCard', 'debitCard', 'money');

-- AlterTable
ALTER TABLE "Realeases" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "ReleaseType";
