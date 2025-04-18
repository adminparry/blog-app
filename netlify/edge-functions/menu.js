import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()


export default async () => new Response(await prisma.menu.findMany());

export const config = { path: "/menus", method: 'GET' };
