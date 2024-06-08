import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Inserting a single record with all fields
  await prisma.order.create({
    data: {
      orderNumber: 'ORD1',
      description: 'Example  Description',
      price: 100,
      quantity: 2,
    },
  });

  // Inserting another record with only required fields
  await prisma.order.create({
    data: {
      orderNumber: 'ORD2',
      description: 'Another Example Description',
      price: 200,
    },
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
