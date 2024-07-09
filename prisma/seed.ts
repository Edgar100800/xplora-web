import { Category } from '@/app/lib/definitions';
import { PrismaClient, User } from '@prisma/client';
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
  const dataDir = path.join(__dirname, 'data');
  const usersPath = path.join(dataDir, 'users.json');
  const categoriesPath = path.join(dataDir, 'categories.json');
  const storesPath = path.join(dataDir, 'stores.json');

  const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  const categoriesData = JSON.parse(fs.readFileSync(categoriesPath, 'utf-8'));
  const storesData = JSON.parse(fs.readFileSync(storesPath, 'utf-8'));

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
  for (const storeData of storesData) {
    const { categoryName, userName, ...storeInfo } = storeData;
    const category = categories[categoryName];
    const user = users[userName];
    await prisma.store.create({
      data: {
        ...storeInfo,
        categoryId: category.id,
        userId: user.id,
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
