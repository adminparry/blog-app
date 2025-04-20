# android

> download

``` bash


wget http://dl.google.com/android/android-sdk_r24.0.2-linux.tgz -P /tmp
tar xzf /tmp/android-sdk*.tgz -C /opt
echo "export ANDROID_HOME=/opt/android-sdk-linux" >> ~/.bashrc
echo "export PATH=\$PATH:\$ANDROID_HOME/platform-tools" >> ~/.bashrc
echo "export PATH=\$PATH:\$ANDROID_HOME/tools" >> ~/.bashrc

source ~/.bashrc

android -h
#

wget https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip -P /tmp/

echo "export COMMANDLINE=\$PATH:/opt/commandlinetools" >> ~/.bashrc 

echo "export PATH=\$PATH:\$COMMANDLINE/bin" >> ~/.bashrc 

source ~/.bashrc

yes | sdkmanager --licenses --sdk_root=/opt/android-sdk-linux
```
## 布局方式

> LinearLayout（线性布局）

> FrameLayout（框架布局）

> TableLayout（表格布局）

> RelativeLayout（相对布局）

> AbsoluteLayout（绝对布局）

> GridLayout（网格布局） 

> ConstraintLayout（约束布局）

## activity生命周期

> 

> 

> 

> 

> 

## manifest

> 持久化

> INTENT

> drawable

> 问题

IOException: https://dl.google.com/android/repository/addons_list-4.xml

java.net.ConnectException: Connection timed out: connect


