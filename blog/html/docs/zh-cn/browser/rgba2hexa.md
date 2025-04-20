# rgba&hexa


> reg

``` js
const reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i;
const reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i;
const reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
```

> rgba2hexa

``` js
function rgba2hexa(color) {
    const [r, g, b, a] = color.split(',').map(item => item.replace(/[rgba\)\(]/g, ''));
    const rgb = [r, g, b].map(item => {
        const hex = parseInt(item).toString(16);
        if (hex.length == 1) {
            return "0" + hex;
        }
        return hex;
    });
    let alpha = a < 1 ? (parseInt(a * 255)).toString(16) : '';
    if (alpha.length == 1) {
        alpha = "0" + alpha;
    }
    rgb.push(alpha);
    return '#' + rgb.join('');
}
```

> hexa2rgba

``` js

```
