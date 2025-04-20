# QMediaPlayer

> install

``` pro
QT += multimedia multimediawidgets
```

> example

``` cpp
player = new QMediaPlayer;
audioOutput = new QAudioOutput;
player->setAudioOutput(audioOutput);
connect(player, SIGNAL(positionChanged(qint64)), this, SLOT(positionChanged(qint64)));
player->setSource(QUrl::fromLocalFile("/Users/me/Music/coolsong.mp3"));
audioOutput->setVolume(50);
player->play();

```
