# sed


sed 可依照脚本的指令来处理、编辑文本文件。


``` bash
sed [-hnV][-e<script>][-f<script文件>][文本文件]
```

> 添加一行

``` bash
sed -e 4a\newLine testfile 
```
> 去掉所有换行符

``` bash
cat package.json | sed ":a;N;s/n//g;ta"

sed -i ":a;N;s/n//g;ta" package.json
```

> 替换字符

``` bash
$ sed -i 's/\.$/\!/g' regular_express.txt
$ cat regular_express.txt 
runoob!
google!
taobao!
facebook!
zhihu-
weibo-

```

> 行尾插入

``` bash
$ sed -i '$a # This is a test' regular_express.txt
$ cat regular_express.txt 
runoob!
google!
taobao!
facebook!
zhihu-
weibo-
# This is a test

```



