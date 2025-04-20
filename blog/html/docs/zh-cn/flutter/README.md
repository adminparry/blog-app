# flutter

https://flutterchina.club/

> 国内镜像

``` bash
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```


> download
``` bash

wget https://flutter.dev/docs/development/tools/sdk/releases -P /tmp

unzip ~/Downloads/flutter_macos_v0.5.1-beta.zip -d /opt/flutter

export "PATH=/opt/flutter/bin:\$PATH" >> ~/.bashrc

source ~/.bashrc

flutter doctor
```
> homebrew

``` bash

brew install flutter --cask
sudo gem install cocoapods --pre
flutter doctor
```
> create project
``` bash
flutter create learn_flutter
cd learn_flutter
flutter run
```

> android
``` bash
flutter doctor --android-licenses
```
> 桌面平台

``` bash
flutter create --platforms=windows,linux,macos .
flutter run -d macos
flutter build macos
```
