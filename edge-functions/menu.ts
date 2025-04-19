import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async () => new Response(JSON.stringify(await prisma.menu.findMany()));

export const config = { path: "/menus", method: 'GET' };
