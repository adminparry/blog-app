# helmet

https://www.npmjs.com/package/helmet

``` js
import express from "express";
import helmet from "helmet";

const app = express();

// Use Helmet!
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000);
```
