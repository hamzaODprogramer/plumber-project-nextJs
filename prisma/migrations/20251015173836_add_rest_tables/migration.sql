-- CreateTable
CREATE TABLE "Account" (
    "account_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "account_username" TEXT NOT NULL,
    "account_password" TEXT NOT NULL,
    "account_email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Services" (
    "service_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "service_name" TEXT NOT NULL,
    "service_icon" TEXT NOT NULL,
    "service_description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "contact_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contact_name" TEXT NOT NULL,
    "consact_value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Message" (
    "message_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message_username" TEXT NOT NULL,
    "message_subject" TEXT NOT NULL,
    "message_email" TEXT NOT NULL,
    "message_desciption" TEXT NOT NULL,
    "servicesService_id" INTEGER NOT NULL,
    "notification_id" INTEGER NOT NULL,
    CONSTRAINT "Message_servicesService_id_fkey" FOREIGN KEY ("servicesService_id") REFERENCES "Services" ("service_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "notificaiton" ("notification_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "notificaiton" (
    "notification_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "notificaiton_title" TEXT NOT NULL,
    "notificaiton_description" TEXT NOT NULL
);
