# crc32

应用于校验，为了保证数据的正确性，采用的一种检错手段。
循环冗余校验（Cyclic Redundancy Check， CRC）是一种根据网络数据包或计算机文件等数据产生简短固定位数校验码的一种信道编码技术，主要用来检测或校验数据传输或者保存后可能出现的错误。 它是利用除法及余数的原理来作错误侦测的。 CRC校验计算速度快，检错能力强，易于用编码器等硬件电路实现。

模2除法：也叫模2运算，就是结果除以2后取余数。模2除法每一位除的结果不影响其它位，即不向上一位借位，所以实际上就是异或。在CRC计算中有应用到模2除法。
多项式与二进制：二进制可表示成多项式的形式，比如二进制1101表示为： x^3+x^2+x^0。

CRC校验本质上是选取一个合适的除数，也就是生成多项式，要进行校验的数据是被除数，然后做模2除法，得到的余数就是CRC校验值
发送端的处理

在原始数据bit串后补充32位bit0，得到新的bit串；
新的bit串以生成多项式为除数进行模2除法，得到的余数为CRC32校验码；
将校验码替换原来的32位bit0，结果作为发送数据发送出去

接收端的处理
接收端对收到的数据以同一个生成多项式进行模2除法，校验余数是否为0，为0则认为数据传输无差错（检测并非百分百准确）。

> javascript

``` js

/**
 * A javascript implementation of the CRC32 checksum that uses
 * the CRC32-C polynomial, the same polynomial used by iSCSI
 *
 * also known as CRC32 Castagnoli
 * based on: https://github.com/ashi009/node-fast-crc32c/blob/master/impls/js_crc32c.js
 */
const crc32C = buffer => {
  let crc = 0 ^ -1
  for (let i = 0; i < buffer.length; i++) {
    crc = T[(crc ^ buffer[i]) & 0xff] ^ (crc >>> 8)
  }

  return (crc ^ -1) >>> 0
}

module.exports = crc32C

// prettier-ignore
var T = new Int32Array([
  0x00000000, 0xf26b8303, 0xe13b70f7, 0x1350f3f4,
  0xc79a971f, 0x35f1141c, 0x26a1e7e8, 0xd4ca64eb,
  0x8ad958cf, 0x78b2dbcc, 0x6be22838, 0x9989ab3b,
  0x4d43cfd0, 0xbf284cd3, 0xac78bf27, 0x5e133c24,
  0x105ec76f, 0xe235446c, 0xf165b798, 0x030e349b,
  0xd7c45070, 0x25afd373, 0x36ff2087, 0xc494a384,
  0x9a879fa0, 0x68ec1ca3, 0x7bbcef57, 0x89d76c54,
  0x5d1d08bf, 0xaf768bbc, 0xbc267848, 0x4e4dfb4b,
  0x20bd8ede, 0xd2d60ddd, 0xc186fe29, 0x33ed7d2a,
  0xe72719c1, 0x154c9ac2, 0x061c6936, 0xf477ea35,
  0xaa64d611, 0x580f5512, 0x4b5fa6e6, 0xb93425e5,
  0x6dfe410e, 0x9f95c20d, 0x8cc531f9, 0x7eaeb2fa,
  0x30e349b1, 0xc288cab2, 0xd1d83946, 0x23b3ba45,
  0xf779deae, 0x05125dad, 0x1642ae59, 0xe4292d5a,
  0xba3a117e, 0x4851927d, 0x5b016189, 0xa96ae28a,
  0x7da08661, 0x8fcb0562, 0x9c9bf696, 0x6ef07595,
  0x417b1dbc, 0xb3109ebf, 0xa0406d4b, 0x522bee48,
  0x86e18aa3, 0x748a09a0, 0x67dafa54, 0x95b17957,
  0xcba24573, 0x39c9c670, 0x2a993584, 0xd8f2b687,
  0x0c38d26c, 0xfe53516f, 0xed03a29b, 0x1f682198,
  0x5125dad3, 0xa34e59d0, 0xb01eaa24, 0x42752927,
  0x96bf4dcc, 0x64d4cecf, 0x77843d3b, 0x85efbe38,
  0xdbfc821c, 0x2997011f, 0x3ac7f2eb, 0xc8ac71e8,
  0x1c661503, 0xee0d9600, 0xfd5d65f4, 0x0f36e6f7,
  0x61c69362, 0x93ad1061, 0x80fde395, 0x72966096,
  0xa65c047d, 0x5437877e, 0x4767748a, 0xb50cf789,
  0xeb1fcbad, 0x197448ae, 0x0a24bb5a, 0xf84f3859,
  0x2c855cb2, 0xdeeedfb1, 0xcdbe2c45, 0x3fd5af46,
  0x7198540d, 0x83f3d70e, 0x90a324fa, 0x62c8a7f9,
  0xb602c312, 0x44694011, 0x5739b3e5, 0xa55230e6,
  0xfb410cc2, 0x092a8fc1, 0x1a7a7c35, 0xe811ff36,
  0x3cdb9bdd, 0xceb018de, 0xdde0eb2a, 0x2f8b6829,
  0x82f63b78, 0x709db87b, 0x63cd4b8f, 0x91a6c88c,
  0x456cac67, 0xb7072f64, 0xa457dc90, 0x563c5f93,
  0x082f63b7, 0xfa44e0b4, 0xe9141340, 0x1b7f9043,
  0xcfb5f4a8, 0x3dde77ab, 0x2e8e845f, 0xdce5075c,
  0x92a8fc17, 0x60c37f14, 0x73938ce0, 0x81f80fe3,
  0x55326b08, 0xa759e80b, 0xb4091bff, 0x466298fc,
  0x1871a4d8, 0xea1a27db, 0xf94ad42f, 0x0b21572c,
  0xdfeb33c7, 0x2d80b0c4, 0x3ed04330, 0xccbbc033,
  0xa24bb5a6, 0x502036a5, 0x4370c551, 0xb11b4652,
  0x65d122b9, 0x97baa1ba, 0x84ea524e, 0x7681d14d,
  0x2892ed69, 0xdaf96e6a, 0xc9a99d9e, 0x3bc21e9d,
  0xef087a76, 0x1d63f975, 0x0e330a81, 0xfc588982,
  0xb21572c9, 0x407ef1ca, 0x532e023e, 0xa145813d,
  0x758fe5d6, 0x87e466d5, 0x94b49521, 0x66df1622,
  0x38cc2a06, 0xcaa7a905, 0xd9f75af1, 0x2b9cd9f2,
  0xff56bd19, 0x0d3d3e1a, 0x1e6dcdee, 0xec064eed,
  0xc38d26c4, 0x31e6a5c7, 0x22b65633, 0xd0ddd530,
  0x0417b1db, 0xf67c32d8, 0xe52cc12c, 0x1747422f,
  0x49547e0b, 0xbb3ffd08, 0xa86f0efc, 0x5a048dff,
  0x8ecee914, 0x7ca56a17, 0x6ff599e3, 0x9d9e1ae0,
  0xd3d3e1ab, 0x21b862a8, 0x32e8915c, 0xc083125f,
  0x144976b4, 0xe622f5b7, 0xf5720643, 0x07198540,
  0x590ab964, 0xab613a67, 0xb831c993, 0x4a5a4a90,
  0x9e902e7b, 0x6cfbad78, 0x7fab5e8c, 0x8dc0dd8f,
  0xe330a81a, 0x115b2b19, 0x020bd8ed, 0xf0605bee,
  0x24aa3f05, 0xd6c1bc06, 0xc5914ff2, 0x37faccf1,
  0x69e9f0d5, 0x9b8273d6, 0x88d28022, 0x7ab90321,
  0xae7367ca, 0x5c18e4c9, 0x4f48173d, 0xbd23943e,
  0xf36e6f75, 0x0105ec76, 0x12551f82, 0xe03e9c81,
  0x34f4f86a, 0xc69f7b69, 0xd5cf889d, 0x27a40b9e,
  0x79b737ba, 0x8bdcb4b9, 0x988c474d, 0x6ae7c44e,
  0xbe2da0a5, 0x4c4623a6, 0x5f16d052, 0xad7d5351
]);

```
