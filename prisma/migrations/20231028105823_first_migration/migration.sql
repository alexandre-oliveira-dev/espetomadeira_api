-- CreateTable
CREATE TABLE "Codes" (
    "code" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Codes_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Realeases" (
    "id" TEXT NOT NULL,
    "data" TEXT,
    "codigo" TEXT,
    "descricao" TEXT,
    "formpgm" TEXT,
    "tipo" TEXT,
    "valor" DOUBLE PRECISION,
    "pago_banco" INTEGER,
    "valor_detalhes" TEXT,
    "usersId" TEXT,

    CONSTRAINT "Realeases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "usuario" TEXT,
    "senha" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Realeases" ADD CONSTRAINT "Realeases_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
