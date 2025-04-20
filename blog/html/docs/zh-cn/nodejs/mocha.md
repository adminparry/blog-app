# mocha

单元测试

> install

``` bash
npm i mocha 
```

> describe

``` js
const assert = require("assert");
describe("Array", () => {
	describe("#indexOf()", () => {
		it("should return -1 when the value is not present", () => {
			assert.equal([1,2,3].indexOf(4), -1);
		})
	})
})
```

> package.json

``` json
"scripts": {
  "test": "mocha"
}
```
