# mongoose

文档类型数据录

> install

``` bash
npm i mongoose
```

> connection

``` js
const mongoose = require("mongoose");

await mongoose.connect('mongodb://localhost/my_database');
```

> define

``` js
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

```
