

mkdir src/pages
echo 'export default function Home(){return (<div>Home</div>)}' > src/pages/Home.tsx
echo 'export default function Dashboard(){return (<div>Dashboard</div>)}' > src/pages/Dashboard.tsx
echo 'export default function About(){return (<div>About</div>)}' > src/pages/About.tsx

touch routing.config.tsx


echo "import { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom'

const lazyLoad = (moduleName) => {

    const Module = lazy(() => import(\`./pages/\${moduleName}\`));

    return <Module />;
}


const routes = [
    {
        path: '/',
        element: lazyLoad('Home'),
        exact: true,
        name: 'Home'
    },
    {
        path: '/about',
        element: lazyLoad('About'),
        exact: true,
        name: 'About'
    },
    {
        path: '/dashboard',
        element: lazyLoad('Dashboard'),
        exact: true,
    }
]

const router =  createHashRouter(routes)

export default function RouterComponent() {
    

    return <RouterProvider router={router} />
}" > src/routing.config.tsx