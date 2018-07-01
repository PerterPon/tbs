## TBS

基于`TypeScript`的脚手架工具，一键轻松创建`TypeScript`项目。

## 使用方式

```
npm install node-tbs -g
mkdir ts-demo
cd ts-demo
tbs init
```

## 启动

```
make dev
```

## 目录结构

```
- etc // 配置文件目录，build的时候会把etc里面的所有文件都复制到build/etc目录下
- src // 业务代码目录，把你的所有代码都放在这里吧
- tests // 单元测试文件目录，以 test-*.ts 规则命名的文件都会被mocha执行
- build // TS文件编译输出目录
- test_output // 测试文件编译输出目录
```

## 默认tsconfig.json

默认规则较为严格，建议以更严格的编码方式来约束自己的行为，让代码更具和维护性和可读性。

```
{
    "compilerOptions": {
        "target": "es2017",
        "outDir": "./build",
        "allowJs": false,
        "module": "commonjs",
        "strict": true, /* Enable all strict type-checking options. */
        "noImplicitAny": true, /* Raise error on expressions and declarations with an implied 'any' type. */
        "lib": [
            "es2017",
            "es2016",
            "es2015.promise"
        ],
        "baseUrl": "./"
    },
    "include": [
        "./**/*",
    ],
    "exclude": [
        "node_modules",
        "build",
        "test_output"
    ]
}
```

## 单元测试

一个有良心的项目少不了单元测试，tbs支持`mocha`和`instanbul`做单元测试和行覆盖率

把你的测试文件放在：`tests`目录下，并且以`test-*.ts`的规则命名

+ 启动单元测试：`make test`

+ 启动行覆盖测试：`make test-cov`

## 其他命令

+ `make build-ts`，仅仅将TS文件编译到`./build`目录下。
+ `make build-test`，仅仅将TS文件编译到`./test_output`目录下。

## 注意

如果要修改输出目录，修改`MakeFile`文件的`BUILD_FOLDER`变量路径即可，测试输出文件同上。