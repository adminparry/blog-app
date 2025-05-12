import { Context } from '@netlify/functions';

export default async function handler(req:Request, ctx: Context) {
    return new Response('pong', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    })
}
export const config = {
    path: '/ping',
}