# passport

Passport 是Express兼容的Node.js身份验证中间件。

Passport 的唯一目的是验证请求，它通过一组称为策略的可扩展插件来实现。Passport 不安装路由或假定任何特定的数据库模式，这最大限度地提高了灵活性并允许开发人员做出应用程序级决策。API 很简单：您向 Passport 提供身份验证请求，Passport 提供挂钩来控制身份验证成功或失败时发生的情况。

> install 

``` bash
npmm  i passport
```

> jwt

``` bash
npm i passport-jwt
```

``` js
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
```
