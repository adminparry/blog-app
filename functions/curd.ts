import { Config, Context } from "@netlify/functions";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: Request, context: Context) => {

    const { table } = context.params;
    const method = req.method;
    const urlUtils = new URL(req.url);

    const id = urlUtils.searchParams.get("id");

    let ret: Promise<any> = Promise.resolve({});

    switch (method) {
        case "POST":
            // create a new record in the table
            const data = await req.json().catch(() => new Error("body is Empty"));
            if (data instanceof Array) {
                 // @ts-ignore-check
                ret = prisma[table].createMany({
                    data: data,
                    skipDuplicates: true
                })
            }else {
                // @ts-ignore-check
                ret = prisma[table].create({
                    data: data
                })
            }
           
            
            break;
        case "GET":
            // read a record from the table
           
            const limit = Number(urlUtils.searchParams.get("pageSize"));
            if(limit > 0) {
                const page = Number(urlUtils.searchParams.get("pageNo"));
                // @ts-ignore-check
                ret = prisma[table].findMany({
                    skip: (page - 1) * limit,
                    take: limit
                }).then(async (res: any) => {
                    return {
                        data: res,
                        // @ts-ignore-check
                        total: await prisma[table].count()
                    }
                });
            }else{
                if (id) {
                    // @ts-ignore-check
                    ret = prisma[table].findUnique({ where: { id: Number(id) } });
                } else {
                    // @ts-ignore-check
                    ret = prisma[table].findMany();
                }
            }

            break;
        case "PUT":
            // update a record in the table
            const put_data = await req.json().catch(()=> new Error("body is empty"));

            // @ts-ignore-check
            ret = prisma[table].update({ where: { id: Number(id) }, data: put_data });
            // const updateUsers = await prisma[table].updateMany({
            //     where: {
            //       email: {
            //         contains: 'prisma.io',
            //       },
            //     },
            //     data: {
            //       role: 'ADMIN',
            //     },
            //   })
            break;
        case "DELETE":
            // delete a record from the table
            // @ts-ignore-check
            ret = prisma[table].delete({ where: { id: Number(id) } });
            break;
        default:
            break;
    }

    try {
        return new Response(JSON.stringify(await ret), { headers: { "Content-Type": "application/json" } });
    } catch (err: any) {
        console.log('error', err);
        return new Response(err.message, { status: 500 });
    }
};

export const config: Config = {
    path: "/tables/:table"
};
