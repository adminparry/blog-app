import pkg from '../../package.json';

export default () => new Response(pkg.name);

export const config = { path: "/name" };
