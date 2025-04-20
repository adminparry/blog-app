# 路由

> PageRouteBuilder

``` dart
Route _createRoute(){
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => const Page2(),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(0.0, 1.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Widget ret;
    ret = Scaffold(
      appBar: AppBar(),
      body: Center(
        child: ElevatedButton(
        onPressed: (){
          Navigator.of(context).push(_createRoute());
        },
        child: const Text("ok"),
        ),
      ),
    );
    return ret;
  }
}


class Page2 extends StatelessWidget {
  const Page2({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Widget ret;

    ret = Scaffold(
      appBar: AppBar(),
        body: const Center(
          child: Text(
            "hello"
          ),
        ),
    );
    return ret;
  }

}
```


