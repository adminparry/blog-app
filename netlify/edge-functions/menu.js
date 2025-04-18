import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()


const menus = await prisma.menu.findMany()
export default () => new Response(menus);

export const config = { path: "/menus", method: 'GET' };
