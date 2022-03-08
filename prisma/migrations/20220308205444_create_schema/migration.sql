-- CreateTable
CREATE TABLE "curbs" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR,
    "image_path" VARCHAR(255),
    "lat" DECIMAL,
    "lon" DECIMAL,

    CONSTRAINT "curbs_pkey" PRIMARY KEY ("id")
);
