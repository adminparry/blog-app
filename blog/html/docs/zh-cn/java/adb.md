# adb

android 调试桥

> pm

``` bash
# 查看包名
pm list package
# 模糊查询
pm list package pinduoduo

```
> am

``` bash
# 启动
am start com.example.main/.MainActivity
# 停止
am force-stop com.example.main
```
> 查找主类

``` bash
# 通过logcat 查找当前有运行记录的apk
logcat | grep cmp
# 通过dumpsys 查找
dumpsys activity | grep com.xx
```

> 安装apk

``` bash
adb install xx.apkpath
```

> 卸载apk

``` bash
adb uninstall xx.package.name
```

> 录屏截屏

``` bash

screencap dcard/fb0.png

screenrecord --size 1280*720 --bit-rate 6000000 --time-limit 30 /sdcard/demo.mp4
# 默认只能最长录制时间为3分钟180s 
# 如果想录制的时间大于3分钟 需要多次执行录制命令 例如 echo "screenrecord 1.mp4 \nscreenrecord 2.mp4 \nscreenrecord 3.mp4" >> bat.sh
```

