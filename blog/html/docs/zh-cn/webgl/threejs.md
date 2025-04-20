# threejs

> download

``` bash

npm install threejs

```

> scene

``` js
import * as  THREE  from 'three';

const scene = new THREE.Scene();

```

>  geometry

``` js
import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(100, 100, 100);

```

> material

```  js
const material =  new THREE.MmashBasicMaterial({color: 0xff0000})
```
> mesh

``` js
const mesh = new THREE.Mesh(geometry, material);

```
> camera
``` js
const camera = new THREE.PerspectiveCamera();

camera.position.set(200,200,200);

camera.lookAt(0,0,0);

camera.lookAt(mesh.position)
```
> renderer

``` js
const renderer =  new  THREE.WebGLRenderer();

renderer.setSize(width, height);

render.render(scene, camera);

document.body.appendChild(renderer.domElement);

```
