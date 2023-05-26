-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "description" TEXT,
    "stock" INTEGER NOT NULL,
    "stars" DECIMAL(1,1) NOT NULL,
    "image" TEXT NOT NULL,
    "characteristics" JSONB NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
