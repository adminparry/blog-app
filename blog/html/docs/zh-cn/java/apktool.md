# apk包的解压 修改 重新压缩

> 安装apktool 
``` bash
apt install apktool
```

> 解压apk包

``` bash
apktool d apkname.apk -p foldername
```
> 压缩apk包

``` bash
apktool b foldername -o new.apk
```
> 签名
``` bash
keytool -genkey -alias android.keystore -keyalg RSA -validity 2000 -keystore android.keystore

jarsinger -verbose -keystore keystore filepath -signedjar 签名后生成的apk路径 待签名的apk路径 别名
```
