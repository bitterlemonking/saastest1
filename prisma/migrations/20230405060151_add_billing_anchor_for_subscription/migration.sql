/*
  Warnings:

  - You are about to drop the column `nextPaymentDate` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `billingAnchor` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "nextPaymentDate",
ADD COLUMN     "billingAnchor" INTEGER NOT NULL;
