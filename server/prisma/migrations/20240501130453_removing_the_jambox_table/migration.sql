/*
  Warnings:

  - You are about to drop the column `musician_id` on the `Albums` table. All the data in the column will be lost.
  - You are about to drop the column `approved_id` on the `Coin_Requests` table. All the data in the column will be lost.
  - You are about to drop the column `musician_id` on the `Coin_Requests` table. All the data in the column will be lost.
  - You are about to drop the column `musician_id` on the `Playlists` table. All the data in the column will be lost.
  - You are about to drop the column `musician_id` on the `Tracks` table. All the data in the column will be lost.
  - You are about to drop the `JamBoxes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Albums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Coin_Requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Playlists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Tracks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Albums" DROP CONSTRAINT "Albums_musician_id_fkey";

-- DropForeignKey
ALTER TABLE "Coin_Requests" DROP CONSTRAINT "Coin_Requests_approved_id_fkey";

-- DropForeignKey
ALTER TABLE "Coin_Requests" DROP CONSTRAINT "Coin_Requests_musician_id_fkey";

-- DropForeignKey
ALTER TABLE "JamBoxes" DROP CONSTRAINT "JamBoxes_musician_id_fkey";

-- DropForeignKey
ALTER TABLE "Playlists" DROP CONSTRAINT "Playlists_musician_id_fkey";

-- DropForeignKey
ALTER TABLE "Tracks" DROP CONSTRAINT "Tracks_musician_id_fkey";

-- AlterTable
ALTER TABLE "Albums" DROP COLUMN "musician_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Coin_Requests" DROP COLUMN "approved_id",
DROP COLUMN "musician_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Playlists" DROP COLUMN "musician_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tracks" DROP COLUMN "musician_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "JamBoxes";

-- AddForeignKey
ALTER TABLE "Coin_Requests" ADD CONSTRAINT "Coin_Requests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Albums" ADD CONSTRAINT "Albums_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlists" ADD CONSTRAINT "Playlists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
