import type { Config } from "@netlify/edge-functions"
import { name } from '../constant'
export default () => new Response('name');

export const config:Config = { path: "/name" };
