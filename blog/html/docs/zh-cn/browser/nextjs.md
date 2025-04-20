# nextjs

react ssr方案

https://www.nextjs.cn/

> create-next-app

``` bash
npx create-next-app@latest
npx create-next-app@latest --typescript

npm install

npm run dev
```

> 手动创建

``` bash

npm install next react react-dom
npm install typescript @types/react @types/node --save-dev

```


> page约定路由

page文件夹下定义为什么名字路由访问就为什么名字 文件名作为默认路由

about.js

``` js
const About = () => <div>about us</div>

export default About
```

> 动态路由

pages/posts/[id].js

可以通过 posts/1、posts/2 等类似的路径进行访问

Note: You can use names other than slug, such as: [...param]

``` js

import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
  <div>
   	<Link href="/post/abc">
		<a>Go to pages/post/[pid].js</a>
	</Link>
	<p>Post: {pid}</p>
  </div>
  )
}

export default Post

```

> scss 

``` bash
npm install sass --save-dev
```

> getStaticProps

获取默认的props 在getStaticProps方法中是无法进行c端操作的

``` tsx
const Home = (props) => {
	return (
		<div>hello {props.a}</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { a: 23, b: 34 }
  }

}
export default Home
```


> Head

装载head内容
``` tsx
import Head from 'next/head'

export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
  </div>
```

> getInitialProps

> Link

路由跳转

``` jsx
import Link from 'next/link'

export default () =>
  <div>
    Click{' '}
    <Link href="/about">
      <a>here</a>
    </Link>{' '}
    to read more
  </div>

```
> 自定义错误页面

``` jsx
#pages/500.jsx
#pages/404.jsx

```

> 自定义document
> 自定义app

> 禁止输出x-powered-by

``` js
module.exports = {
  poweredByHeader: false,
}
```
> 自定义输出目录

``` js
module.exports = {
  distDir: 'build',
}
```

> 不使用约定路由

``` js
module.exports = {
  useFileSystemPublicRoutes: false,
}
```

> i18n static

https://github.com/myWsq/nextjs-static-i18n


> brew

/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"