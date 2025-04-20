# gradle

> download

``` bash

wget https://services.gradle.org/distributions/gradle-7.2-bin.zip -P /tmp

unzip -d /opt/gradle /tmp/gradle-*.zip

echo "export PATH=\$PATH:/opt/gradle/gradle-7.2/bin" >> ~/.bashrc

source ~/.bashrc

gradle -version
```

> 常用命令

``` bash

gradle clean

gradle dependedcies

gradle assembleRelease

```

> 手动构建流程

``` bash
mkdir build

aapt2 compile -o build/res.zip --dir ./app/src/main/res

aapt2 link build/res.zip -I $ANDROID_HOME/platforms/android-25/android.jar --java build --manifest ./app/src/main/AndroidManifest.xml -o build/app-debug.ap_

javac -d build -cp $ANDROID_HOME/platforms/android-25/android.jar com/*/.java

d8 --output build/ --lib $ANDROID_HOME/platforms/android-25/android.jar build/com/example/application/*.class

zip -j build/app-debug.ap_ build/classes.dex

apksign -ks ~/.android/debug.keystore build/app-debug.apk

```

``` gradle
//以下两个task是预编译工作，暂不关心
> Task :app:preBuild UP-TO-DATE
> Task :app:preReleaseBuild UP-TO-DATE

//aidl编译
> Task :app:compileReleaseAidl NO-SOURCE

//生成BuildConfig文件
> Task :app:generateReleaseBuildConfig

//编译Renderscrip,暂不关心（感兴趣的可以去探究Renderscrip）
> Task :app:compileReleaseRenderscript NO-SOURCE
//*
> Task :app:javaPreCompileRelease

//生成资源文件并合并
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease
> Task :app:processReleaseManifest
> Task :app:prepareLintJar UP-TO-DATE
> Task :app:checkReleaseDuplicateClasses
> Task :app:desugarReleaseFileDependencies
> Task :app:mergeReleaseResources

//产生build/intermediates/compile_and_runtime_not_namespaced_r_class_jar/release/R.jar文件
> Task :app:processReleaseResources

//javac将java编译成Class文件
> Task :app:compileReleaseJavaWithJavac

//将资源文件编译并生成resource.arsc文件，并放入.ap_文件中(./app/build/intermediates/processed_res/release/out/resources-release.ap_)
> Task :app:compileReleaseSources

> Task :app:lintVitalRelease

//dex工具将.class文件编程传.dex文件
> Task :app:dexBuilderRelease

//合并非res/的资源文件及assets文件
> Task :app:mergeExtDexRelease
> Task :app:mergeReleaseShaders
> Task :app:compileReleaseShaders NO-SOURCE
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:processReleaseJavaRes NO-SOURCE
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:mergeReleaseJniLibFolders
> Task :app:mergeReleaseNativeLibs
> Task :app:stripReleaseDebugSymbols NO-SOURCE
> Task :app:mergeReleaseJavaResource

//合并.dex文件
> Task :app:mergeDexRelease

//将.dex文件、.ap_打包进以及非res资源文件打包进.apk文件中并签名
> Task :app:packageRelease

////使用zipalign对apk进行体积优化
> Task :app:assembleRelease

```