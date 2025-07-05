# antd

> DatePicker

修改moment 时区

``` bash
npm i moment-timezone
```

# init

``` js
import moment from 'moment-timezone';
moment.tz.setDefault("Africa/Abidjan")
```

## antdesignpro

https://procomponents.ant.design/

> install

``` bash

npm i @ant-design/pro-components --save
```

> form

``` js
import React from 'react';
import { ProForm, ProFormText } from '@ant-design/pro-components';

export default () => {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormText name="name" label="姓名" />
    </ProForm>
  );
};
```
