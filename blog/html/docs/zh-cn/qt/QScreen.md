# QScreen

> 屏幕截图 


``` cpp

QScreen *qScreen = QApplication::primaryScreen();
    QRect screenRect =  qScreen->availableVirtualGeometry();
    int width = screenRect.width();
    int height =  screenRect.height();

    QPixmap pix = qScreen->grabWindow(0, 0, 0, width, height);
    QImage image = pix.toImage().convertToFormat(QImage::Format_RGBA8888);
    image.save("/Users/mac/qtdir/test.jpg");
```
