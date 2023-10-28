-- DropForeignKey
ALTER TABLE "Realeases" DROP CONSTRAINT "Realeases_usersId_fkey";

-- AddForeignKey
ALTER TABLE "Realeases" ADD CONSTRAINT "Realeases_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
