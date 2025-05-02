
import bcrypt from "bcrypt";
import { PrismaClient } from "../src/generated/prisma";
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: '1111111111' },
    update: {},
    create: {
      number: '1111111111',
      email:"basnetsameer78@gmail.com",
      password: await bcrypt.hash('alice', 10),
      name: 'alice',
      Balance: {
        create: {
            amount: 20000,
        }
      },
     
    },
  })
  const bob = await prisma.user.upsert({
    where: { number: '2222222222' },
    update: {},
    create: {
      number: '2222222222',
      email:"basnetsameer321@gmail.com",
      password: await bcrypt.hash('bob', 10),
      name: 'bob',
      Balance: {
        create: {
            amount: 20000,
        }
      }
    },
  })
  const bob1 = await prisma.user.upsert({
    where: { number: '3333333333' },
    update: {},
    create: {
      number: '3333333333',
      email:"basnetsameer333@gmail.com",
      password: await bcrypt.hash('bob1', 10),
      name: 'bob1',
      Balance: {
        create: {
            amount: 20000,
        }
      }
    },
  })
  const bob2 = await prisma.user.upsert({
    where: { number: '4444444444' },
    update: {},
    create: {
      number: '4444444444',
      email:"basnetsameer444@gmail.com",
      password: await bcrypt.hash('bob2', 10),
      name: 'bob2',
      Balance: {
        create: {
            amount: 20000,
        }
      }
    },
  })
  console.log({ alice, bob,bob1,bob2 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


  //npx prisma db seed