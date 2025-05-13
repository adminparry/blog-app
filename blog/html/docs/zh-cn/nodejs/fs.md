# File system

> createReadStream & createWriteStream

``` js
const readS = createReadStream("t.txt");

const writeS = createWriteStream("t1.txt", {flags:"r+"});
writeS.write("666")
readS.pipe(writeS)
```

> writeFileSync & readFileSync

