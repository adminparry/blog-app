# gerrit

gerrit 环境搭建


``` bash
wget https://gerrit-releases.storage.googleapis.com/gerrit-3.5.0.1.war -P /tmp

export GERRIT_SITE=~/gerrit_testsite

java -jar gerrit-3.5.0.1.war init --batch  --dev -d $GERRIT_SITE

```


> 更新监听URL

``` bash
 git config --file $GERRIT_SITE/etc/gerrit.config httpd.listenUrl 'http://localhost:8080'
```

> 重启gerrit服务

``` bash
$GERRIT_SITE/bin/gerrit.sh restart
```

> 命令创建新仓库

``` bash
ssh -p 29418 username@127.0.0.1 gerrit create-project hello.git
```