// vue-next


// npm install lerna -g

// lerna init



## 项目结构
- reactivity 响应式系统
- runtime-core 与平台无关的运行时核心(可以创建针对特定平台的运行时-自定义渲染器)
- runtime-dom 针对浏览器的运行时 ，包括DOM API,属性，事件处理等
- runtime-test 用于测试
- serve-renderer 用于服务端渲染
- compiler-core 与平台无关的编译器核心
- compiler-dom 针对浏览器的编译模块
- compiler-ssr 针对服务端渲染的编译模块
- template-explorer 用于调试编译器输出的开发工具
- shared 多个包之间共享的内容
- vue 完整版本 包括运行时和编译器


