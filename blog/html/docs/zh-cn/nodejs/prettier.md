# prettier

代码格式化

> ps

``` js
import * as prettier from "prettier";

await prettier.format("foo ( );", { semi: false, parser: "babel" });
// -> 'foo()\n'
```

> .prettierignore

> .prettierrc

``` bash
{
    "printWidth": 100,
    "singleQuote": true,
    "semi": true,
    "tabWidth": 4,
    "trailingComma": "none",
    "useTabs": false,
    "bracketSpacing": true,
    "proseWrap": "preserve",
    "htmlWhitespaceSensitivity": "ignore"
}

```
