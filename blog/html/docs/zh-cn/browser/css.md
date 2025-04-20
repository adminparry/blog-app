# css

> 垂直居中

###### 利用平移

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
}

.child {
    width: 200px;
    height: 200px;
    background-color: red;
}

.center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
```

###### 利用绝对定位

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
}

.child {
    width: 200px;
    height: 200px;
    background-color: red;
}

.center {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}
```

###### 利用table-cell

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
    display: table-cell;
}

.child {
    width: 200px;
    height: 200px;
    background-color: red;
}

.center {
    vertical-align: middle;
}
```

###### 利用flex

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
    display: flex;
}

.child {
    width: 200px;
    height: 200px;
    background-color: red;
}

.center {
    align-self: center;
}
```

###### 利用伪类

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
    font-size: 0;
}

.parent::before {
    content: '';
    display: inline-block;
    height: 100%;
}

.child {
    width: 200px;
    height: 200px;
    font-size: 16px;
    background-color: red;
}

.center {
    vertical-align: middle;
}
```

> 水平居中

###### 利用flex

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
    font-size: 0;
    display: flex;
    justify-content: center;
}

.child {
    width: 200px;
    height: 200px;
    font-size: 16px;
    background-color: red;
}
```

###### 利用绝对定位

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
    font-size: 0;
    position: relative;
}

.child {
    width: 200px;
    height: 200px;
    font-size: 16px;
    background-color: red;
}

.center {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}
```

###### 利用text-align

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
    font-size: 0;
    text-align: center;
}

.child {
    width: 200px;
    height: 200px;
    font-size: 16px;
    background-color: red;
    display: inline-block;
}
```

###### 利用translate

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
}

.child {
    width: 200px;
    height: 200px;
    font-size: 16px;
    background-color: red;
}

.center {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
```

###### 利用margin

```css
.parent {
    width: 500px;
    height: 600px;
    background-color: pink;
}

.child {
    width: 200px;
    height: 200px;
    font-size: 16px;
    background-color: red;
}

.center {
    margin-left: auto;
    margin-right: auto;
}
```

###### 利用grid

```css
.v-h {

    display: grid;
    place-items: center;

}
```

> 左侧固定右侧自适应

> 浮动

>  

>  

>  

> clamp

clamp() 函数接收三个用逗号分隔的表达式作为参数，按最小值、首选值、最大值的顺序排列。

> hsl

hsl() 函数使用色相、饱和度、亮度来定义颜色。

HSL 即色相、饱和度、亮度（英语：Hue, Saturation, Lightness）。

色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。
亮度（L），取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。
HSL 是一种将 RGB 色彩模型中的点在圆柱坐标系中的表示法。这两种表示法试图做到比基于笛卡尔坐标系的几何结构 RGB 更加直观。

支持版本：CSS3

> 渐变

线性渐变

径向渐变

圆锥渐变

> css 字体与字体图标

目前最主要的几种网络字体(web font)格式包括WOFF，SVG，EOT，OTF/TTF。

WOFF
WOFF是Web Open Font Format几个词的首字母简写。这种字体格式专门用于网上，由Mozilla联合其它几大组织共同开发。WOFF字体通常比其它字体加载的要快些，因为使用了OpenType (OTF)和TrueType (TTF)字体里的存储结构和压缩算法。这种字体格式还可以加入元信息和授权信息。这种字体格式有君临天下的趋势，因为所有的现代浏览器都开始支持这种字体格式。

SVG / SVGZ
Scalable Vector Graphics (Font). SVG是一种用矢量图格式改进的字体格式，体积上比矢量图更小，适合在手机设备上使用。

EOT
Embedded Open Type。这是微软创造的字体格式。这种格式只在IE6-IE8里使用。

OTF / TTF
OpenType Font 和 TrueType Font。部分的因为这种格式容易被复制(非法的)，这才催生了WOFF字体格式。然而，OpenType有很多独特的地方，受到很多设计者的喜爱。


查看详情可以看到字体图标文件的font-family名称

```css
@font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
        url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

> css 夜色

```css
html {
    filter: invert(1) hue-rotate(180deg);
}
```

> 底部footer

```css
.parent {
display: flex;
flex-direction: column;
 min-height: 100vh;
}
.content {
  flex: 1;
}
.footer {

}
```

> background去除padding等部分背景颜色

``` css
background-clip: content-box;
```
## css选择器

> 包含某个字符选择

``` css
//<div class="size-small size-large">test</div>
.div[class*='small']{
background:red;
}
```


> 伪类的hover

``` css
div:hover::before {
	display: block;
}
```

> :where()

:where() CSS 伪类函数接受选择器列表作为它的参数，将会选择所有能被该选择器列表中任何一条规则选中的元素

``` css
/* Selects any paragraph inside a header, main
   or footer element that is being hovered */
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* The above is equivalent to the following */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}

```

> :has()

CSS 函数式伪类 :has() 表示一个元素，如果作为参数传递的任何相对选择器在锚定到该元素时，至少匹配一个元素。这个伪类通过把可容错相对选择器列表作为参数，提供了一种针对引用元素选择父元素或者先前的兄弟元素的方法。

``` css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) { margin-bottom: 0; }

```

> :not()

:not() CSS 伪类用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）。

``` css
p:not(.irrelevant) {
    font-weight: bold;
}

p > strong,
p > b.important {
    color: crimson;
}

p > :not(strong, b.important) {
    color: darkmagenta;
}

```


