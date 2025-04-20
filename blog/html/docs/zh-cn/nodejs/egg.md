# egg

> initialization

``` bash
mkdir egg-example

cd egg-example

npm init
npm i egg

npm i egg-bin


```

> controller

``` js
const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		this.ctx.body = 'hello world';
	}
}

module.exports = HomeController
```

> service


