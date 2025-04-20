# less

> loop

``` less
.loopStyle(@counter) when (@counter > 0) {
  .p-@{counter} {
    padding: (.0625rem * @counter);
  }

  .p-t-@{counter} {
    padding-top: (.0625rem * @counter);
  }

  .p-r-@{counter} {
    padding-right: (.0625rem * @counter);
  }

  .p-b-@{counter} {
    padding-bottom: (.0625rem * @counter);
  }

  .p-l-@{counter} {
    padding-left: (.0625rem * @counter);
  }

  .m-@{counter} {
    margin: (.0625rem * @counter);
  }

  .m-t-@{counter} {
    margin-top: (.0625rem * @counter);
  }

  .m-r-@{counter} {
    margin-right: (.0625rem * @counter);
  }

  .m-b-@{counter} {
    margin-bottom: (.0625rem * @counter);
  }

  .m-l-@{counter} {
    margin-left: (.0625rem * @counter);
  }

  .fz-@{counter} {
    font-size: (.0625rem * @counter);
  }

  .width@{counter} {
    width: 1% * @counter;
  }

  .loopStyle((@counter - 1));
}

.loopStyle(100);

```

> like tailwind

``` less
.gap(@prefix, @counter) {
    .@{prefix}px-\[@{counter}px\] {
        padding: 0 @counter*1px;
    }
}

.box(@prefix, @counter) {
    .@{prefix}w-@{counter} {
        width: @counter*1px;
    }

    .@{prefix}h-@{counter} {
        height: @counter*1px;
    }
}

.fontsize(@prefix, @counter) {
    .@{prefix}text-\[@{counter}px\] {
        font-size: @counter*1px;
    }
}

.Method(@prefix, @loop) {
    .loopStyle(@counter) when (@counter > 0) {
        .gap(@prefix, @counter);

        .fontsize(@prefix, @counter);

        .loopStyle((@counter - 2));
    }

    .loopStyle(@loop);
}


.Method(~'', 100);
@media (min-width: 640px) {
    .Method(sm\:, 100);
}

@media (min-width: 768px) {
    .Method(md\:, 100);
}


```
