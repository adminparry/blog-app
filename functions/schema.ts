import { Context } from '@netlify/functions';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req:Request, context:Context) => {
    const tables:[{tablename:string}] = await prisma.$queryRaw`SELECT tablename FROM "pg_tables"`;
    return new Response(JSON.stringify(tables.filter(item => item.tablename.indexOf('_') == -1)), {
        headers: {
            "content-type": "application/json"
        }
    })

};

export const config = { path: "/schema" };
