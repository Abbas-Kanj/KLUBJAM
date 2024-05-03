/*
  Warnings:

  - You are about to drop the `Users_Follows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users_Follows" DROP CONSTRAINT "Users_Follows_follower_id_fkey";

-- DropForeignKey
ALTER TABLE "Users_Follows" DROP CONSTRAINT "Users_Follows_following_id_fkey";

-- DropTable
DROP TABLE "Users_Follows";

-- CreateTable
CREATE TABLE "Follows" (
    "id" SERIAL NOT NULL,
    "follower_id" INTEGER NOT NULL,
    "following_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Follows_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
