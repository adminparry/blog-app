import type { Config } from "@netlify/edge-functions"
export default () => new Response('name');

export const config:Config = { path: "/name" };
