# require-by-env

[![Build Status](https://travis-ci.org/booxood/node-require-by-env.png?branch=master)](https://travis-ci.org/booxood/node-require-by-env)
[![Coverage Status](https://coveralls.io/repos/booxood/node-require-by-env/badge.svg)](https://coveralls.io/r/booxood/node-require-by-env)

根据环境变量加载对应的文件。
例如：测试时 `NODE_ENV=test`， 加载 `config.test.json`，
开发时 `NODE_ENV=development`，加载 `config.development.json`。

## 安装

```
npm install require-by-env
```

## 用法

```javascript
var loader = require('require-by-env');
var config = loader({
  base: './config',
  filename: 'cfg.ENV',
});

console.log(process.env.NODE_ENV, ' env use config :', config);
```

### 参数说明

#### base

加载的路径，默认为 `.` 。

#### filename

加载的文件名，用环境变量的值替换 `ENV`。

#### env

环境变量名

#### merge

是否与默认文件的值合并并覆盖，默认为 `true`。

#### defaultFilename

设置默认值的文件名，默认为 `default`。


## License
The MIT License (MIT)

Copyright (c) 2015 Liucw

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
