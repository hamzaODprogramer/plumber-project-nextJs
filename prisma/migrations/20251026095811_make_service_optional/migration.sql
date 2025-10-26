-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "message_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message_username" TEXT NOT NULL,
    "message_subject" TEXT NOT NULL DEFAULT '',
    "message_email" TEXT NOT NULL,
    "message_description" TEXT NOT NULL,
    "servicesService_id" INTEGER,
    CONSTRAINT "Message_servicesService_id_fkey" FOREIGN KEY ("servicesService_id") REFERENCES "Services" ("service_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("message_description", "message_email", "message_id", "message_subject", "message_username", "servicesService_id") SELECT "message_description", "message_email", "message_id", "message_subject", "message_username", "servicesService_id" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
