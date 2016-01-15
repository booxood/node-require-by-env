# require-by-env

[![Build Status](https://travis-ci.org/booxood/node-require-by-env.png?branch=master)](https://travis-ci.org/booxood/node-require-by-env)
[![Build status](https://ci.appveyor.com/api/projects/status/y3u0t745hrrx15le/branch/master?svg=true)](https://ci.appveyor.com/project/booxood/node-require-by-env/branch/master)
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
  base: '.',
  filename: 'config.NODE_ENV',
});

console.log(process.env.NODE_ENV, ' env use config :', config);
```

### 参数说明

#### base

加载的路径，必填 。

#### filename

加载的文件名，用环境变量的值替换 `NODE_ENV`。

例如：配置为 `filename: 'config.NODE_ENV'`，则 `NODE_ENV=development` 时，加载文件 `config.development.json`。


#### envVar

环境变量名，默认为 `NODE_ENV`。

#### defaultVar

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
