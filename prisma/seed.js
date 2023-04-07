// prisma/seed.ts
const { PrismaClient } = require('@prisma/client')

// initialize Prisma Client
const prisma = new PrismaClient();

const productsFake = [
    { id: 1, name: "Arroz", price: 1.99, quantity: '1Kg' },
    { id: 2, name: "Pasta", price: 2.39, quantity: '1Kg' },
    { id: 3, name: "Harina Pan", price: 0.99, quantity: '1Kg' },
    { id: 4, name: "Harina de Trigo", price: 1.99, quantity: '1Kg' },
    { id: 5, name: "Azucar", price: 1.75, quantity: '1Kg' },
    { id: 6, name: "Cafe", price: 4.99, quantity: '1Kg' },
    { id: 7, name: "Carne Molida", price: 3.99, quantity: '100g' },
    { id: 8, name: "Huevos", price: 0.5, quantity: '1' },
];

async function main() {
  // create two dummy articles
  for( const product of productsFake ) {
    await prisma.product.upsert({
        where: { id:product.id },
        update: {},
        create: {
          ...product,
          active: false,
        },
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });