## 只使用 ts-loader

| only ts-loader | es5                | es6               | esnext            |
| -------------- | ------------------ | ----------------- | ----------------- |
| webpack4       | :white_check_mark: | :x: runtime error | :x: build error   |
| webpack5       | :white_check_mark: | :x: runtime error | :x: runtime error |

## 使用 ts-loader 和 babel-loader

| ts-loader + babel-loader | es5                | es6                | esnext             |
| ------------------------ | ------------------ | ------------------ | ------------------ |
| webpack4                 | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| webpack5                 | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## 使用 ts-loader 和 babel-loader 和 .browserslistrc

| ts-loader + babel-loader + .browserslistrc | es5                | es6               | esnext            |
| ------------------------------------------ | ------------------ | ----------------- | ----------------- |
| webpack4                                   | :white_check_mark: | :x: runtime error | :x: runtime error |
| webpack5                                   | :white_check_mark: | :x: runtime error | :x: runtime error |

## 总结

ts-loader 是只关心 tsconfig.json 中 target 属性值是 es5/es6/esnext 的，因为只要不是 es5，最终就会使用`let`变量来引用`class`。从而导致运行时报错。
es5 是使用的 var 变量来引用 class 的，所以不会报错。

babel-loader 在没有.browserslistrc 配置文件时，会自动把代码转化为 es5 代码，所以都没有问题。

但是如果有.browserslistrc 配置文件，且使用最新浏览器，就会导致和只使用 ts-loader 一样的效果。

我本来的想法是期望 webpack 转化的最终代码都只使用 var 变量来引用即可，但现在看来因该不可能了。

后来又搜索到如下文章，可以作为参考：

- [Design:type metadata for cyclic dependencies throw at runtime #27519](https://github.com/microsoft/TypeScript/issues/27519)
- [Support for classes](https://github.com/inversify/InversifyJS/blob/master/wiki/classes_as_id.md#known-limitation-classes-as-identifiers-and-circular-dependencies)
