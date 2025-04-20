# axios

``` bash
npm install axios
```

> axiosResponse

``` js

import Axios , { AxiosRequestConfig } from 'axios'

const client = Axios.create({});

export async function request(url: string, config?: AxiosRequestConfig){
	const response = await client.request({ url, ...config})
	const ret = response.data;

	return ret;
}

export default client
```

> 拦截器

``` js

import Axios from 'axios'

const client = Axios.create({})

client.interceptors.response.use(response => {
	return response.data;
})

export default client
```

> 请求重试

``` bash
npm install axios-retry
```

``` js
import Axios, {AxiosRequestConfig } from 'axios';

import axiosRetry from 'axios-retry';

const client = Axios.create({})

axiosRetry(client, { retries: 3 })

export default client
```

> jsonp

``` bash
npm install axios-jsonp
```

``` js

import Axios, {AxiosRequestConfig } from 'axios';

import jsonpAdapter from 'axios-jsonp';

const client = Axios.create({})

export function jsonp(url: string, config?: AxiosRequestConfig){
	return client.request(url, {...config, adapter: jsonpAdapter})
}
export default client
```

> 请求取消

``` js
import Axios from 'axios';

const CancelToken = Axios.CancelToken;
export function withCancelToken(fetcher){
	let abort;

	function send(data, config){
		const token = new CancelToken(cancel => (abort = cancel))
		return fetcher(data, {...config, cancelToken: token})
	}

	function cancel(msg="abort"){
		if(abort){
			abort(msg);
			abort = null;
		}
	}

	return [send, cancel]
}
```