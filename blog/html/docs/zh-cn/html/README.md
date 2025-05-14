# html

> 基本结构

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- 字符集 -->
    <meta charset="UTF-8">
    <!-- https://www.runoob.com/css/css-rwd-viewport.html -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 标题 -->
    <title>Document</title>
    <!-- 外联css样式 -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
</body>
<!-- 外联JavaScript -->
<script src="javascript.js"></script>
</html>
```

> 常用标签

div 盒子

span 行内元素

p 段落

a 超链接

img 图片

ul 无序列表

ol 有序列表

li 列表项

h1-h6 标题

hr 水平线

br 换行
> iframe 内嵌框架

> border 为1的表格
``` html
<style>
    .table {
        border-collapse: collapse;
        border: 1px solid gray;
    }
    
</style>
<table class="table" border="1" cellspacing="0" cellpadding="10">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
    </table>
```
tr 表格行

td 表格单元格

th 表格表头

> form 表单

``` html
<form action="demo_post_enctype.html" method="post" enctype="multipart/form-data">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="提交">
</form>
```
input 输入框

button 按钮

video 视频

audio 音频

