import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { DATABASE_URL } from './config'


const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate())


export default prisma;