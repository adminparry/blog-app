import { Context } from '@netlify/functions';

export default async function handler(req:Request, ctx: Context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: 'pong'})
    }
}
export const config = {
    path: '/ping',
}