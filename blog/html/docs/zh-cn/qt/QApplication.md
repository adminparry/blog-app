# QApplication

> Move to the center of the screen

``` cpp
this->move(QApplication::desktop()->screen()->rect().center() -
               this->rect().center());
```
