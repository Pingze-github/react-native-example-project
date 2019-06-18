# react-native-example-project

> React-native示例项目。已经集成了开发完整APP所需的多项组件库，可以在此基础上继续开发。

> Android测试有效。

---

项目中很多代码中存在初始项目名，修改成本较大。
要考虑如何用cmdtool来创建。

---

## 1. 使用组件库

+ 基础 [react-native](https://github.com/facebook/react-native)
+ TS语法检查 [tslint](https://github.com/palantir/tslint)
+ 状态管理 [redux](https://github.com/reduxjs/redux)
+ React/Redux连接 [react-redux](https://github.com/reduxjs/react-redux)
+ React持久化 [react-persist](https://github.com/rt2zz/redux-persist)
+ 导航 [react-navigation](https://github.com/react-navigation/react-navigation)
+ UI组件 [react-native-elements](https://github.com/react-native-training/react-native-elements)

## 2. 使用说明

命令(android)：
``` bash
# Debug运行
npm run start
# Release构建
npm run build
# Release测试安装
npm run install-test
# tslint检测
npm run lint
# tslint检测和自动修正
npm run lint-fix
```

确认可以测试安装成功后，可以到`android/app/build/outputs/apk/release/`下，获取release版apk文件。

### 2.1. 虚拟机调试

使用[Genymotion](https://www.genymotion.com/)。创建一个Android API为`9.0- API 28`的设备并启动。

## 3. 项目结构

源码目录：
```
| app
|---| compenents/
|---|---| ItemList.tsx
|---|---| Item.tsx
|---| containers/
|---|---| App.tsx
|---| store/
|---|---| models.tsx
|---|---| reducers.tsx
|---|---| actions.tsx
|---|---| index.tsx
|---| navigation.tsx
|---| index.tsx
```

其中：
+ `/index.tsx` 是入口文件。导出一个注册了Redux的Component
+ `/navigation.tsx` 是导航配置文件。整合所有Containers并导出唯一有导航的Container
+ `/compenents/` 目录放置组件，导出Component
+ `/containers/` 目录放置页面Container，导出Component，其中使用了组件
+ `/store/` 目录放置Redux相关
+ `/store/models.tsx` 定义数据类型接口
+ `/store/actions.tsx` 定义actions和actions调用函数
+ `/store/reducers/` 目录放置reducers
+ `/store/index.tsx` 文件创建和导出store

## 4. 构建步骤

假设项目名为todoapp，是一个TODO类型引用。

### 使用react-native创建项目，指定TypeScript
```
react-native init todoapp --template typescript
```

### 安装配置各种组件库

**redux/react-redux/react-persist**：
``` bash
npm i -S redux
npm i -S react-redux
npm i -S react-persist
```

**react-navigation**:
``` bash
npm i -S react-navigation
npm i -S react-native-gesture-handler
react-native link react-native-gesture-handler
```

修改`android/app/src/main/java/com/projname/MainActivity.java`。详见[官方指南](https://reactnavigation.org/docs/en/getting-started.html)。

**react-native-elements**:
```
npm i -S react-native-elements
npm i -S react-native-vector-icons
react-native link react-native-vector-icons
```

**tslint**:
```
npm i -S tslint
tslint --init
```

在生成的tslint.json文件中，配置`"rulesDirectory": ["./app/"]`，并根据自己标准配置rules。

### 调整代码结构

在默认状况下，应用程序的入口文件是`index.js`，引用主逻辑文件`App.tsx`。

增加`app`目录，作为源码目录。`index.js`中的App的引用改为`app/index.tsx`。

`app/index.tsx`应该导出一个`React.Component`类。且根据Redux和Redux-persist要求，应返回如下JSX对象：

``` tsx
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
```

`<App />`则作为一个Container（Redux的概念，状态树的容器），从`app/containers/App.tsx`导出。其中使用的组件在`app/components/*.tsx`中定义。

`Redux.Store`的创建则在`app/store/`中进行。
