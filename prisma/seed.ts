import { Category } from '@/app/lib/definitions';
import { PrismaClient, User,Store } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function resetSequences() {
  // const tableNames = ['Category', 'User', 'Store'];
  const tableNames = ['categories'];
  for (const tableName of tableNames) {
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "${tableName}_id_seq" RESTART WITH 1`);
  }
}

async function main() {
  // Paths to JSON files
  const dataDir = path.join(__dirname, 'data');
  const usersPath = path.join(dataDir, 'users.json');
  const categoriesPath = path.join(dataDir, 'categories.json');
  const storesPath = path.join(dataDir, 'stores.json');
  const producstPath = path.join(dataDir, 'products.json');
  const eventsPath = path.join(dataDir, 'events.json');

  // Read data from JSON files
  const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  const categoriesData = JSON.parse(fs.readFileSync(categoriesPath, 'utf-8'));
  const storesData = JSON.parse(fs.readFileSync(storesPath, 'utf-8'));
  const productsData = JSON.parse(fs.readFileSync(producstPath, 'utf-8'));
  const eventsData = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'));

  // Clear all data
  await prisma.event.deleteMany();
  await prisma.product.deleteMany();
  await prisma.store.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Reset ID sequences
  await resetSequences();

  // Create Categories
  const categories: Record<string, Category> = {};
  for (const categoryData of categoriesData) {
    const category = await prisma.category.create({
      data: categoryData,
    });
    categories[category.name] = category;
  }

  // Create Users
  const users: Record<string, User> = {};
  for (const userData of usersData) {
    const user = await prisma.user.create({
      data: userData,
    });
    users[user.username] = user;
  }

  // Create Stores
  const stores: Record<string, Store> = {};
  for (const storeData of storesData) {
    const { categoryName, userName, ...storeInfo } = storeData;
    const category = categories[categoryName];
    const user = users[userName];
    const store = await prisma.store.create({
      data: {
        ...storeInfo,
        categoryId: category.id,
        userId: user.id,
      },
    });
    stores[store.name] = store;
  }

  // Create Products
  for (const productData of productsData) {
    const { storeName, ...productInfo } = productData;
    const storename = stores[storeName];
    await prisma.product.create({
      data: {
        ...productInfo,
        storeId: storename.id,
      },
    });
  }

  // Create Evemts
  for (const eventData of eventsData) {
    const { storeName, ...eventInfo } = eventData;
    const storename = stores[storeName];
    await prisma.event.create({
      data: {
        ...eventInfo,
        storeId: storename.id,
      },
    });
  }

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
