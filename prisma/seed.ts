import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

export default prisma;

import { data } from "./geoJSON";
const info = data.features.map((feat) => feat);

async function main() {
  for (let stuff of info) {
    await prisma.curbs.create({
      data: {
        name: stuff.properties.Name,
        description: stuff.properties.description,
        image_path: stuff.properties.gx_media_links,
        lat: stuff.geometry.coordinates[1],
        lon: stuff.geometry.coordinates[0],
      },
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

