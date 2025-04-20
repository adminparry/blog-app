# startViewTransition

> ps

``` html
<style>

::view-transition-old(root) {
    animation: none;
}

@keyframes clip {
    from {
        clip-path: circle(0%);
    }

    to {
        clip-path: circle(100%);
    }
}

::view-transition-new(root) {
    mix-blend-mode: normal;
    animation: clip reverse 1s ease-in;
}

</style>

<script>
document.startViewTransition().ready.then(() => {
document.documentElement.animate({clipPath: ""},{});
})
</script>
```
