# qss

> use

``` cpp
#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QFile>
#include <QByteArray>
#include <QDebug>
#include <QApplication>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{

    ui->setupUi(this);
    SetUiStyle();
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::SetUiStyle(const char *filePath)
{
    /*第一步:读取出qss文件中的所有文本内容*/
    QFile file(filePath);
    QByteArray fileContent;
    bool isOk = file.open(QIODevice::ReadOnly);

    if (false == isOk)
    {
        qDebug() << "open qss file fail!";
        file.close();
        return;
    }

    fileContent = file.readAll();
    qDebug() << fileContent;
    file.close();

    /*第二步:将所有内容设置到全局的样式表中*/
    this->setStyleSheet(fileContent);
}



```
>  渐变

``` qss 
#左右渐变

background-color: qlineargradient(x1:0, y1:0, x2:1, y2:0,stop:0 greenyellow,stop:1 green);

#上下渐变
background-color: qlineargradient(x1:0, y1:0, x2:0, y2:1,stop:0 greenyellow,stop:1 green);

#45deg
background-color: qlineargradient(x1:1, y1:0, x2:1, y2:1,stop:0 greenyellow,stop:1 green);

#多个渐变点
background-color: qlineargradient(spread:pad, x1:0, y1:0, x2:1, y2:0,stop:0 greenyellow,stop:0.5 green, stop:1 yellow);

#辐射渐变
background-color: qradialgradient(spread:pad, cx:0.5, cy:0.5, radius:0.5, stop:0 greenyellow,stop:1 green);
#圆锥渐变 
background-color: qradialgradient(cx:0.5, cy:0.5, angel:0,,stop:0 greenyellow,stop:1 green);
```
