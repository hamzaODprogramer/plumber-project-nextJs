/*
  Warnings:

  - You are about to drop the `notificaiton` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `consact_value` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `message_desciption` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `notification_id` on the `Message` table. All the data in the column will be lost.
  - Added the required column `contact_value` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message_description` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "notificaiton";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Notification" (
    "notification_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "notification_title" TEXT NOT NULL,
    "notification_description" TEXT NOT NULL,
    "message_id" INTEGER NOT NULL,
    CONSTRAINT "Notification_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Message" ("message_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "contact_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contact_name" TEXT NOT NULL,
    "contact_value" TEXT NOT NULL
);
INSERT INTO "new_Contact" ("contact_id", "contact_name") SELECT "contact_id", "contact_name" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
CREATE TABLE "new_Message" (
    "message_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message_username" TEXT NOT NULL,
    "message_subject" TEXT NOT NULL DEFAULT '',
    "message_email" TEXT NOT NULL,
    "message_description" TEXT NOT NULL,
    "servicesService_id" INTEGER NOT NULL,
    CONSTRAINT "Message_servicesService_id_fkey" FOREIGN KEY ("servicesService_id") REFERENCES "Services" ("service_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("message_email", "message_id", "message_subject", "message_username", "servicesService_id") SELECT "message_email", "message_id", "message_subject", "message_username", "servicesService_id" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Notification_message_id_key" ON "Notification"("message_id");
