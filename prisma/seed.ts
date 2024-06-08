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
      date: new Date(),
      customerName: 'John Doe',
      customerPhone: '+1234567890',
      customerNotes: 'This is a note',
      isSelfPickup: true,
      deliveryAddress: '',
    },
  });

  // Inserting another record with only required fields
  await prisma.order.create({
    data: {
      orderNumber: 'ORD2',
      description: 'Another Example Description',
      price: 200,
      quantity: 1,
      date: new Date(),
      customerName: 'Jane Doe',
      customerPhone: '+9876543210',
      isSelfPickup: false,
      deliveryAddress: '456 Elm St',
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
