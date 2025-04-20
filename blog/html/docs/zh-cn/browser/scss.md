# scss

https://www.sass.hk/


> each 循环

``` scss
$pixelArr: 5, 15;
$position: top, right, bottom, left;
@each $item in $pixelArr {
  $index: index($pixelArr, $item); /**可得到循环的索引*/
  .margin-#{$item} {
    margin: $item + px;
    border-width: $index + px;
  }
  @each $p in $position{
    .margin-#{$p}-#{$item}{
      margin-#{$p}: $item + px;
    }
  }
}
```
> for 循环

``` scss

$attr: block, inline-block, inline, hidden;
@each $var in $attr {
    .#{$var} {  
        display: $var !important;
    }
}

@media screen and  (min-width:640px) {
    @for $var from 0 through 200 {
        @if $var  % 2  == 0 {
            
            .md\:w-#{$var}px {
                width: $var + px;
            }   
        }
    }
    @each $var in $attr {
        .md\:#{$var} {
              @if $var == hidden {  
                display: none; 
              }
              @else {display: $var}; 
              background-color: red; 
              min-height: 100vh; 
        }
    }
}
```
> 占位符%

当占位符选择器单独使用时（未通过 @extend 调用），不会编译到 CSS 文件中。

``` scss
%common {
  .color{
    color: yellow;
  }
}
.header {
  @extend %common;
  .bg {
    background-color: red;
  }
}
.headerH5 {
  @extend %common;
  .bg {
    background-color: green;
  }
}


// you will use 
// .header .bg 
// .header .color
// .headerH5 .bg
// .headerH5 .color

```
