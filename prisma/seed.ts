import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedSuperAdmin = async () =>
  await prisma.admin.upsert({
    where: { email: process.env.SUPER_ADMIN_EMAIL },
    update: {},
    create: {
      email: process.env.SUPER_ADMIN_EMAIL,
      password: process.env.SUPER_ADMIN_PASSWORD,
      first_name: process.env.SUPER_ADMIN_FIRSTNAME,
      last_name: process.env.SUPER_ADMIN_LASTNAME,
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
