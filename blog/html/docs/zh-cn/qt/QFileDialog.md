# QFileDialog

> 获取选择文件路径

``` cpp

QString srcDirPath = QFileDialog::getExistingDirectory(this, tr("choose directory"), QDir::homePath(),  QFileDialog::ShowDirsOnly | QFileDialog::DontResolveSymlinks);

    if(srcDirPath.isEmpty()){
        return;
    }else{
        qDebug() << "srcDirPath" << srcDirPath;
        srcDirPath += "/";

    }
```
