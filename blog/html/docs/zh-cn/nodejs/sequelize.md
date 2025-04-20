# sequelize

nodejs orm

https://www.sequelize.com.cn/

> install
``` bash
npm i sequelize
npm i pg pg-hstore # PostgreSQL
npm i mysql2 # MySQL
npm i mariadb # MariaDB
npm i sqlite3 # SQLite
npm i tedious # Microsoft SQL Server
npm i ibm_db # DB2
```

> conncetion

``` js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

//OR
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```
> define table

``` js
const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull 默认为 true
      }
    }
  );
```
> insert

``` js
const user =  await User.create({username:'alice', isAdmin: false},,{fields:['username']});

console.log(user.username)
```

> select
``` js
const users = await User.findAll();

console.log(users.every(user => user instanceof User));

Model.findAll({ attributes: ['foo','bar'] })

Model.findAll({
  attributes: [
    'foo',
    [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'],
    'bar'
  ]
});

Model.findAll({
  attributes: {
    include: [
      [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']
    ]
  }
});

Model.findAll({
  attributes: { exclude: ['baz'] }
});

const { Op } = require("sequelize");
Post.findAll({
  where: {
    authorId: {
      [Op.eq]: 2
    }
  }
});

Post.findAll({
  where: {
    authorId: 12,
    status: 'active'
  }
});

const { Op } = require("sequelize");
Post.findAll({
  where: {
    [Op.or]: [
      { authorId: 12 },
      { authorId: 13 }
    ]
  }
});

//https://www.sequelize.com.cn/core-concepts/model-querying-basics

```
> 验证
``` js
sequelize.define('foo', {
  bar: {
    type: DataTypes.STRING,
    validate: {
      is: /^[a-z]+$/i,          // 匹配这个 RegExp
      is: ["^[a-z]+$",'i'],     // 与上面相同,但是以字符串构造 RegExp
      not: /^[a-z]+$/i,         // 不匹配 RegExp
      not: ["^[a-z]+$",'i'],    // 与上面相同,但是以字符串构造 RegExp
      isEmail: true,            // 检查 email 格式 (foo@bar.com)
      isUrl: true,              // 检查 url 格式 (http://foo.com)
      isIP: true,               // 检查 IPv4 (129.89.23.1) 或 IPv6 格式
      isIPv4: true,             // 检查 IPv4 格式 (129.89.23.1)
      isIPv6: true,             // 检查 IPv6 格式
      isAlpha: true,            // 只允许字母
      isAlphanumeric: true,     // 将仅允许使用字母数字,因此 '_abc' 将失败
      isNumeric: true,          // 只允许数字
      isInt: true,              // 检查有效的整数
      isFloat: true,            // 检查有效的浮点数
      isDecimal: true,          // 检查任何数字
      isLowercase: true,        // 检查小写
      isUppercase: true,        // 检查大写
      notNull: true,            // 不允许为空
      isNull: true,             // 只允许为空
      notEmpty: true,           // 不允许空字符串
      equals: 'specific value', // 仅允许 'specific value'
      contains: 'foo',          // 强制特定子字符串
      notIn: [['foo', 'bar']],  // 检查值不是这些之一
      isIn: [['foo', 'bar']],   // 检查值是其中之一
      notContains: 'bar',       // 不允许特定的子字符串
      len: [2,10],              // 仅允许长度在2到10之间的值
      isUUID: 4,                // 只允许 uuid
      isDate: true,             // 只允许日期字符串
      isAfter: "2011-11-05",    // 仅允许特定日期之后的日期字符串
      isBefore: "2011-11-05",   // 仅允许特定日期之前的日期字符串
      max: 23,                  // 仅允许值 <= 23
      min: 23,                  // 仅允许值 >= 23
      isCreditCard: true,       // 检查有效的信用卡号

      // 自定义验证器的示例:
      isEven(value) {
        if (parseInt(value) % 2 !== 0) {
          throw new Error('Only even values are allowed!');
        }
      }
      isGreaterThanOtherField(value) {
        if (parseInt(value) <= parseInt(this.otherField)) {
          throw new Error('Bar must be greater than otherField.');
        }
      }
    }
  }
});
```
> 同步
``` js
async function asyncH() {
  await sequelize.sync({ force: false });
}
```
> 关联关系

## one to one
``` js
const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const Foo = db.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull 默认为 true
    }
  });
  const Bar = db.define("Sex", {
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Foo.hasOne(Bar);
  Bar.belongsTo(Foo);

};

```
## one to many
``` js
const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const Team = db.define("Team", {
    group: {
      type: DataTypes.STRING
    }
  });
  const Player = db.define("Player", {
    role: {
      type: DataTypes.STRING
    }
  });

  Team.hasMany(Player);
  Player.belongsTo(Team);
};

```
## many to many
``` js
const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const Movie = db.define("Movie", { name: DataTypes.STRING });
  const Actor = db.define("Actor", { name: DataTypes.STRING });
  Movie.belongsToMany(Actor, { through: "ActorMovies" });
  Actor.belongsToMany(Movie, { through: "ActorMovies" });
};

```

> transaction

> 乐观锁

> hooks


