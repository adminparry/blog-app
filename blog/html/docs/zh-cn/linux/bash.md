# bash

> 头格式
``` bash
#!/bin/bash
```
> 变量

``` bash
#声明
your_name="qinjx"
#使用
echo $your_name
echo ${your_name}
#只读
myUrl="https://www.google.com"
readonly myUrl
myUrl="https://www.runoob.com"
#删除
unset variable_name
```
> 串

``` bash
str='this is a string'
str="Hello, I know you are \"$your_name\"! \n"
#连接
your_name="runoob"
# 使用双引号拼接
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1
# 使用单引号拼接
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3
#长度
string="abcd"
echo ${#string} #输出 4
#截取
string="runoob is a great site"
echo ${string:1:4} # 输出 unoo
#查找 查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
string="runoob is a great site"
echo `expr index "$string" io`  # 输出 4
```
> 集合

``` bash
#定义数组
array_name=(value0 value1 value2 value3)

#读取数组
${数组名[下标]}
#使用 @ 符号可以获取数组中的所有元素
echo ${array_name[@]}
#获取数组的长度
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}


```
> 函数

``` bash
#定义
test(){
 echo "$1"
}
#调用
test "hello world"
```
> 流程控制
``` bash

```
> 循环

> 传递参数



> set -u

执行脚本的时候，如果遇到不存在的变量，Bash 默认忽略它。

https://www.ruanyifeng.com/blog/2017/11/bash-set.html

> 遍历文件夹

``` bash
echo '#!bin/bash' > dir.sh

function read_dir(){
for file in `ls $1` #注意此处这是两个反引号，表示运行系统命令
do
 if [ -d $1"/"$file ] #注意此处之间一定要加上空格，否则会报错
 then
 read_dir $1"/"$file
 else
 echo $1"/"$file #在此处处理文件即可
 fi
done
} 
read_dir "/home/player/data"

```
