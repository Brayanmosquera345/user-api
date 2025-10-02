// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Crear usuarios de prueba
  await prisma.users.createMany({
    data: [
      {
        name: "Brayan",
        email: "brayan@example.com",
      },
      {
        name: "Ana",
        email: "ana@example.com",
      }
    ],
  });
}

main()
  .then(() => {
    console.log("✅ Seed ejecutado correctamente");
  })
  .catch((e) => {
    console.error("❌ Error en seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
