import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedSuperAdmin = async () =>
  await prisma.admin.upsert({
    where: { email: process.env.SUPER_ADMIN_EMAIL as string },
    update: {},
    create: {
      email: process.env.SUPER_ADMIN_EMAIL as string,
      password: process.env.SUPER_ADMIN_PASSWORD as string,
      first_name: process.env.SUPER_ADMIN_FIRSTNAME as string,
      last_name: process.env.SUPER_ADMIN_LASTNAME as string,
      is_super_admin: true,
    },
  });

// array for all the seed functions
const seedFunctionsArr = [seedSuperAdmin];

// loop through the seed functions array and call each function of them
Promise.all(seedFunctionsArr.map((seedFunc) => seedFunc()))
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
