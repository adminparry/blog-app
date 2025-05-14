# find

``` bash
find pathName -name xxx.x -print
```


> 从根目录开始查找所有扩展名为.log的文本文件，并找出包含”ERROR”的行

``` bash
find / -type f -name "*.log" | xargs grep "ERROR"
```

> 从当前目录开始查找所有扩展名为.in的文本文件，并找出包含”thermcontact”的行

``` bash
find . -name “*.in” | xargs grep "thermcontact"
```

> 从当前目录查找扩展名为.swo的文件 并删除

``` bash
find . -name "*.swo" -exec rm -rf {} \;
```
