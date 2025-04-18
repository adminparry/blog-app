import * as pkg from '../../constant';

export default () => new Response(pkg.name);

export const config = { path: "/name" };
