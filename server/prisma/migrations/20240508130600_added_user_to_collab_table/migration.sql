/*
  Warnings:

  - Added the required column `collaborator_id` to the `Collaborators` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collaborators" ADD COLUMN     "collaborator_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Collaborators" ADD CONSTRAINT "Collaborators_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
