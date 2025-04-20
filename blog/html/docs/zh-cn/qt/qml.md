# QML

https://doc.qt.io/qt-6/qtqml-index.html

> Rectangle

> Row

> RowLayout

> ColumnLayout

> Column

> DropArea

> Loader


``` qmml
Loader{
        id: loader
        source: "J8navbar.qml"

    }
```
> Image

> Text

> TextField

> HoverHandler

> MouseArea

> Connections


> MediaPlayer

> VideoOutput

> 实时查看

``` h
#pragma once

#include <QQmlApplicationEngine>

class QFileSystemWatcher;
class QTimer;

class QmlLiveLoader : public QQmlApplicationEngine
{
    Q_OBJECT
public:
    explicit QmlLiveLoader(QObject *parent = nullptr);

    void hotLoad(const QUrl &url);
    Q_INVOKABLE void watch(const QString &mainQml);
    Q_INVOKABLE void clearCache() { clearComponentCache(); }

private slots:
    void onFileSystemChanged();
    void onReloadRequested();

private:
    static void messageHandler(QtMsgType type, const QMessageLogContext &context, const QString &msg);
    static QObject *m_console;

    void watchFileSystemRecursively(const QString &dir);
    void unwatchAll();

    QFileSystemWatcher *m_watcher;
    QTimer *m_timer;
    QObject *m_window;

    QString m_mainQml;
    QString m_dir;
};

```

``` cpp
#include "qmlliveloader.h"
#include <QFileInfo>
#include <QTimer>
#include <QFileSystemWatcher>
#include <QQmlContext>
#include <QDir>

QObject *QmlLiveLoader::m_console = nullptr;

QmlLiveLoader::QmlLiveLoader(QObject *parent)
    : QQmlApplicationEngine(parent)
    , m_watcher(nullptr)
    , m_timer(nullptr)
    , m_window(nullptr)
{
}

void QmlLiveLoader::watch(const QString &mainQml)
{
    if (mainQml == m_mainQml) return;

    m_mainQml = mainQml;
    m_dir = m_mainQml.left(m_mainQml.lastIndexOf('/'));

    unwatchAll();
    watchFileSystemRecursively(m_dir);
}

void QmlLiveLoader::hotLoad(const QUrl &url)
{
    m_watcher = new QFileSystemWatcher(this);
    m_timer = new QTimer(this);

    m_timer->setInterval(500);
    m_timer->setSingleShot(true);

    connect(m_watcher, &QFileSystemWatcher::directoryChanged, this
        , &QmlLiveLoader::onFileSystemChanged);
    connect(m_watcher, &QFileSystemWatcher::fileChanged, this
        , &QmlLiveLoader::onFileSystemChanged);
    connect(m_timer, &QTimer::timeout
        , this, &QmlLiveLoader::onReloadRequested);

    rootContext()->setContextProperty("$QmlLiveLoader", this);
    load(url);

    m_window = rootObjects().first();

    m_console = rootObjects().first()->findChild<QObject*>("_console");
    qInstallMessageHandler(QmlLiveLoader::messageHandler);
}

void QmlLiveLoader::onFileSystemChanged()
{
    if (!m_timer) return;
    if (!m_timer->isActive()) m_timer->start();
}

void QmlLiveLoader::onReloadRequested()
{
    unwatchAll();
    watchFileSystemRecursively(m_dir);

    if (m_window->property("_reloadOnChanges").toBool()) {
        QMetaObject::invokeMethod(m_window, "_reload");
    }
}

void QmlLiveLoader::messageHandler(QtMsgType type, const QMessageLogContext &context, const QString &msg)
{
    Q_UNUSED(context);
    if (!m_console)
        return;

    QString str = msg;
    if (type == QtWarningMsg || type == QtCriticalMsg || type == QtFatalMsg) {
        str = "<font color='red'>" + str + "</font>";
    }
    QMetaObject::invokeMethod(m_console, "append", Q_ARG(QString, str));
}

void QmlLiveLoader::watchFileSystemRecursively(const QString &dir)
{
    QDir d(dir);
    QStringList files = d.entryList(QStringList() << "*.qml", QDir::Files);
    QStringList dirs = d.entryList(QDir::Dirs | QDir::NoDotAndDotDot);

    m_watcher->addPath(dir);
    for (QString &file: files) {
        m_watcher->addPath(dir + '/' + file);
    }

    for (QString &subdir: dirs) {
        watchFileSystemRecursively(dir + '/' + subdir);
    }
}

void QmlLiveLoader::unwatchAll()
{
    QStringList dirs = m_watcher->directories();
    QStringList files = m_watcher->files();
    QStringList fails;

    for (QString &dir: dirs) {
        if (!m_watcher->removePath(dir)) {
            fails << dir;
        }
    }
    for (QString &file: files) {
        if (!m_watcher->removePath(file)) {
            fails << file;
        }
    }

    if (!fails.empty()) {
        qWarning() << tr("The following directories or files "
                 "cannot be removed from file system watcher:");
        for (QString &fail: fails) {
            qWarning() << "\t" << fail;
        }
    }
}

```
> main

``` cpp
#include <QGuiApplication>
#include <QQuickStyle>
#include "qmlliveloader.h"

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);

    QGuiApplication app(argc, argv);

    QQuickStyle::setStyle("Fusion");

    QmlLiveLoader loader;
    const QUrl url(QStringLiteral("qrc:/main.qml"));
    QObject::connect(&loader, &QQmlApplicationEngine::objectCreated,
                     &app, [url](QObject *obj, const QUrl &objUrl) {
        if (!obj && url == objUrl)
            QCoreApplication::exit(-1);
    }, Qt::QueuedConnection);
    loader.hotLoad(url);

    return app.exec();
}

```
> main.qml

``` qml
import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12

ApplicationWindow {
    id: _window
    visible: true
    flags: Qt.Window | Qt.WindowSystemMenuHint
       | Qt.WindowTitleHint | Qt.WindowMinimizeButtonHint
       | Qt.WindowMaximizeButtonHint | Qt.WindowCloseButtonHint
       | Qt.WindowStaysOnTopHint
    width: 600
    height: 450
    title: qsTr("Qml Live Loader")

    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 5

        RowLayout {
            Layout.fillWidth: true

            TextField {
                id: _mainQmlInput
                Layout.fillWidth: true
                placeholderText: qsTr("Main qml file path")
                selectByMouse: true
                selectedTextColor: "white"
            }
            Button {
                text: qsTr("Load")
                onClicked: _start()
            }
        }

        ScrollView {
            id: _scrollView
            Layout.fillWidth: true
            Layout.fillHeight: true

            TextArea {
                objectName: "_console"
                id: _console
                background: Rectangle {
                    radius: 2
                    border.color: focus ? "#41adff" : "#ababab"
                }
                textFormat: "RichText"
                wrapMode: "Wrap"
                selectByMouse: true
                selectedTextColor: "white"
                readOnly: true
                onTextChanged: _scrollView.scrollToButtom()

                MouseArea {
                    anchors.fill: parent
                    acceptedButtons: Qt.RightButton
                    onClicked: _menu.popup()

                    Menu {
                        id: _menu
                        MenuItem {
                            text: qsTr("Clear All")
                            onTriggered: _console.text = ""
                        }
                        MenuItem {
                            text: _reloadOnChanges ? qsTr("Reload manually")
                                                   : qsTr("Reload automatically")
                            onTriggered: _reloadOnChanges = !_reloadOnChanges
                        }
                        MenuItem {
                            text: _rememberSize ? qsTr("Do not remember size")
                                                : qsTr("Remember size")
                            onTriggered: _rememberSize = !_rememberSize
                        }
                    }
                }
            }
            function scrollToButtom() {
                ScrollBar.vertical.position = 1 - ScrollBar.vertical.size;
            }
        }
    }

    DropArea {
        anchors.fill: parent
        onDropped: {
            if (drop.hasUrls) {
                _mainQmlInput.text = drop.urls[0].replace("file://", "");
                _start();
            }
        }
    }

    Loader {
        id: _loader
        asynchronous: true
    }

    property bool _reloadOnChanges: true
    property bool _rememberSize: false
    property point _geo: Qt.point(0, 0)
    property point _size: Qt.point(100, 100)

    function _printLoadingMessage(msg) {
        var str = `${(new Date()).toTimeString().split(' ')[0]}: ${msg}`;
        console.log(`<b style='color: blue;'>${str}</b>`);
    }

    function _start() {
        $QmlLiveLoader.watch(_mainQmlInput.text);

        _console.text = "";
        _printLoadingMessage("Starting ...");

        _loader.source = "";
        $QmlLiveLoader.clearCache();
        _loader.setSource(`file://${_mainQmlInput.text}`, {"flags": flags});
    }

    function _reload() {
        _printLoadingMessage("Reloading ...");

        var	s = _loader.source;
        if (_loader.status == Loader.Ready) {
            _geo.x = _loader.item.x;
            _geo.y = _loader.item.y;
            _size.x = _loader.item.width;
            _size.y = _loader.item.height;
        }

        _loader.source = "";
        $QmlLiveLoader.clearCache();
        if (_rememberSize)
            _loader.setSource(s, {"flags": flags, "x": _geo.x, "y": _geo.y, "width": _size.x, "height": _size.y});
        else
            _loader.setSource(s, {"flags": flags, "x": _geo.x, "y": _geo.y});
    }
}

```
