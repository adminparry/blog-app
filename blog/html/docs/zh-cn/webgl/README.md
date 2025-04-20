# webgl

> GLSL

着色器是GLSL实现

> 顶点与着色器

``` javascript
const canvas = document.querySelector("#glcanvas");
// 初始化WebGL上下文
const gl = canvas.getContext("webgl");
// 创建一个新的着色器
const shader = gl.createShader()
// 将源代码发送到着色器
gl.shaderSource()
// 进行编译
gl.compileShader()
// 编译状态
gl.getShaderParameter(shader, gl.COMPILE_STATUS)

// 创建着色器程序
const shaderProgram = gl.createProgram();
// 创建状态
gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)
```
> 矩阵
平移 旋转 缩放


``` javascript
var x = 50;
var y = 100;
var z = 0;
// 平移矩阵基于单位矩阵
var translationMatrix = [
    1,    0,    0,   0,
    0,    1,    0,   0,
    0,    0,    1,   0,
    x,    y,    z,   1
];

```

``` javascript
// 缩放矩阵基于笛卡尔坐标系
var w = 1.5; // width  (x)
var h = 0.7; // height (y)
var d = 1;   // depth  (z)

var scaleMatrix = [
    w,    0,    0,   0,
    0,    h,    0,   0,
    0,    0,    d,   0,
    0,    0,    0,   1
];

```
``` javascript
// 旋转矩阵借助三角函数来完成旋转
var sin = Math.sin;
var cos = Math.cos;

// NOTE: There is no perspective in these transformations, so a rotation
//       at this point will only appear to only shrink the div

var a = Math.PI * 0.3; // 转角

// 绕Z轴旋转
var rotateZMatrix = [
  cos(a), -sin(a),    0,    0,
  sin(a),  cos(a),    0,    0,
       0,       0,    1,    0,
       0,       0,    0,    1
];
```
> 相机

> 纹理

``` javascript
function initTextures() {
  cubeTexture = gl.createTexture();
  cubeImage = new Image();
  cubeImage.onload = function() { handleTextureLoaded(cubeImage, cubeTexture); }
  cubeImage.src = "cubetexture.png";
}

function handleTextureLoaded(image, texture) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.bindTexture(gl.TEXTURE_2D, null);
}
```
> 光源

调整纹理的色值来实现光源效果

> 贝塞尔曲线

> 旋转与四元数

> 对象和世界矩阵

> webgl兼容性检查

``` javascript

if (WEBGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    animate();
} else {
    var warning = WEBGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}
```