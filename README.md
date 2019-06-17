# react-native-example-project

> React-native示例项目。已经集成了开发完整APP所需的多项组件库，可以在此基础上继续开发。

> Android测试有效。

---

项目中很多代码中存在初始项目名，修改成本较大。
要考虑如何用cmdtool来创建。

---

## 使用组件库

+ 基础 [react-native](https://github.com/facebook/react-native)
+ TS语法检查 [tslint](https://github.com/palantir/tslint)
+ 状态管理 [redux](https://github.com/reduxjs/redux)
+ React/Redux连接 [react-redux](https://github.com/reduxjs/react-redux)
+ React持久化 [react-persist](https://github.com/rt2zz/redux-persist)
+ 导航 [react-navigation](https://github.com/react-navigation/react-navigation)
+ UI组件 [react-native-elements](https://github.com/react-native-training/react-native-elements)

## 使用说明

命令(android)：
``` bash
# Debug运行
npm run start
# Release构建
npm run build
# Release测试安装
npm run install
# tslint检测
npm run lint
# tslint检测和自动修正
npm run lint-fix
```

确认可以测试安装成功后，可以到`android/app/build/outputs/apk/release/`下，获取release版apk文件。

### 虚拟机调试

使用[Genymotion](https://www.genymotion.com/)。创建一个Android API为`9.0- API 28`的设备并启动。

## 构建步骤

