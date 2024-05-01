import { PrismaClient } from '@prisma/client';
import { users, books, intervals } from './data.seed';

const prisma = new PrismaClient();

async function main() {

    // Delete old data
    await prisma.interval.deleteMany();
    await prisma.user.deleteMany();
    await prisma.book.deleteMany();

    // Create new data
    await prisma.user.createMany({ data: users });
    await prisma.book.createMany({ data: books });
    await prisma.interval.createMany({ data: intervals });

}
main()
    .then(() => console.log('The seed command has been executed.'))
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })