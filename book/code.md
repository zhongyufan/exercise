# Code

### BEM

```css
.block /* 组件 */
.block__element /* 元素 */
.block--modifier /* 修饰符 */



javascript中获取dom元素高度和宽度的方法如下：

网页可见区域宽： document.body.clientWidth
网页可见区域高： document.body.clientHeight
网页可见区域宽： document.body.offsetWidth (包括边线的宽)
网页可见区域高： document.body.offsetHeight (包括边线的高)
网页正文全文宽： document.body.scrollWidth
网页正文全文高： document.body.scrollHeight
网页被卷去的高： document.body.scrollTop
网页被卷去的左： document.body.scrollLeft

对应的dom元素的宽高有以下几个常用的：

元素的实际高度：document.getElementById("div").offsetHeight
元素的实际宽度：document.getElementById("div").offsetWidth
元素的实际距离左边界的距离：document.getElementById("div").offsetLeft
元素的实际距离上边界的距离：document.getElementById("div").offsetTop
```

## socket

服务器使用了nginx

因此需要开启websocket 的代理，而且默认使用的是http1.0，需要调整成使用http1.1的协议

https://www.nginx.com/blog/websocket-nginx/

socket.io + pm2 如果要开启集群模式 则需要进行另外的配置

https://segmentfault.com/a/1190000009622158

```javascript
// https://socket.io/docs/v3/using-multiple-nodes/index.html
// 官方推荐去掉轮询方式
const client = io(host, {
  transports: [ 'websocket','polling' ]
})
```



loading  z-index：2000

Mac 操作

```shell
# 查看指定端口进程
lsof -i :80
# 根据PID杀进程
kill -9 777
```





![这里写图片描述](https://img-blog.csdn.net/20180612002242162?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTM0MjU4NQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

复杂组件可以制作UML图

### Proxy : Defineproperty 对比

Defineproperty缺点

1. 无法监听数组变化
2. 只能劫持对象属性（一层）

Proxy 

1. 直接监听对象
2. 直接监听数组
3. 处理过后返回一个新对象

### 节流和防抖

防抖 - 防止抖动 重在清零🆑 

节流 - 控制流量 重在加锁🔒 类似红绿灯🚥

```javascript
function debounce(fn,delay){
  let timer;
  return (...args)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fn(...args)
    },delay)
  }
}

function throttle(fn,delay){
  let timer;
  return (...args)=>{
    if(timer) {return}
    timer = setTimeout(()=>{
      fn(...args)
      timer = null
    },delay)
  }
}


function throttle(fn, delay) {
  let time = "";
  return function (...args) {
    let now = +new Date();
    if (now - time > delay) {
      fn.apply(this, ...args);
    }
    time = now;
  };
}
```

### ES-Module : commonjs 区别

es模块是值引用，编译时输出，是同步加载

com模块是值拷贝，运行时加载



```javascript
function isNew(Con,...args){
  let obj = Object.create(Con.prototype);
  let result = Con.apply(obj,args);
  return typeof obj === 'object' ? result : obj;
}
```

### Webpack原理

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3. 确定入口：根据配置中的 entry 找出所有的入口文件；
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

### Babel 原理

**parsing、transforming、generating**

1. ES6 代码输入
2. babylon 进行解析得到 AST
3. plugin 用 babel-traverse 对 AST 树进行遍历转译,得到新的 AST 树
4. 用 babel-generator 通过 AST 树生成 ES5 代码



### 权限控制

1. 动态路由
2. 指令



### 计划安排

1. 复盘
2. 补足基础
3. 参与开源项目
4. 接私活
5. 写博客
6. 听公开课





### Vue官网的api

```javascript
Vue.observable( object ) // 可以使用这个api制作一个共享状态，而不使用vuex 更加轻量

// 还是使用 props + $emit 去控制比较好

extends // 可以用来继承别个组件 mixins 混入 或许可以做一个公用的代码片段

Functional // 无状态组件 没有生命周期 超级好用

model // 可以定制 prop 和 event

// 深入了解下 slot 作用于插槽

vm.$set // 更新值 
vm.$delete // 搭配使用

$off // 可以移除事件监听器

vm.$forceUpdate() // 重新渲染本身

v-model.number // 输入字符串转为有效数字

v-pre // 跳过这个元素和它的子元素的编译过程

v-cloak // 计算完成后再展示 需要搭配 [v-cloak]{display:none} 一起使用

v-once // 只渲染一次

<component :is="xxx"> // 动态组件
  
// 可以直接引入动画库  添加动画库的类名
  
document.body.offsetHeight // 可以触发回流
transitionend // 监听动画结束

devServer:{
	before(app) {
		app.get('/api/courses', (req, res) => {
			res.json([{ name: 'web全栈', price: 8999 }, { name: 'web高级', price:8999 }])
		})
	},
  proxy:"http://localhost:3000"
}

$router 可以进行路由跳转监听

inheritAtrrs:false // 设置为false避免v-bind:$attrs设置到根元素上

$on // 可以直接去执行$emit事件

// 组件构建函数 1.Vue.extend() 2.render

data(){
  return {
    $$test: '' // vue 不代理
  }
}

Object.freeze // 冻结
```

 

### Webpack

```javascript
// vue.config.js
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/cart/' : '/'
}
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
// or
data () {
	return {
		publicPath: process.env.BASE_URL
	}
}
<img :src="`${publicPath}my-image.png`">
```



```scss
#app >>> .el
// sass  无法解析 >>> 可以使用 /deep/ ::v-deep

<style module>.red{color:#fff;}</style>
js 中 通过 this.$style.red
```





### 阿里

p6	有一个方向独当一面

p7 	架构





### 开课吧

```javascript
$children  // 不保证元素顺序
```



程序员修炼之道 从小工到专家

学习 > 跳槽

每个月一本书 / 一个框架源码

seajs

编译原理 compiler 、 dependence injection

算法、数据结构、网络协议、操作系统、编译原理

算法 （第四版）



### 设计模式

```javascript
// 构造器模式
利用函数实现单独的作用域
new 可以将 this 指向这个函数
创建对象的集中方式
使用 xxx.prototype.methods = ()=>{} 能够让所有通过xxx构造出来的对象访问到 实现共享 
var test = Object.create(xxx); // test继承了xxx的与原型
// 模块化模式 
约等于 立即执行函数 IIFE
// 暴露模块模式
统一 return 出来
// 单例模式
全局对象就是最直接的单例模式
// 观察者模式 （https://www.w3cschool.cn/zobyhd/62xh7ozt.html） 继续品读
数组存放需要观察的对象，增加各种操作方法
// 发布/订阅模式 实现观察者模式 
// 中介者模式
中心的观察者+控制者
// 原型模式
Object.create
// 命令模式
方法调用封装到一个对象里，操控这个对象
// 外观模式
暴露简单的接口，内在稳健处理
// 工厂模式
class 类
// Mixin模式
  
```

 

### Mac快捷键

Mac 自带屏幕截图 `Command` + `Shift` + `5`

全屏幕  Cmd+Shift+3

区域 Cmd+Shift+4

快速显示或隐藏程序坞 `Command` + `Option` + `D`

最小化窗口 `Command` + `M`

隐藏当前窗口 `Command` + `H`



能够造出轮子 来衡量学习结果



### TypeScript

```typescript
类型
泛型
```



### 算法

1. 递归





从一般性前提推出个别性结论  >>> 递归

从个别性前提推出一般性结论  >>> 归纳



组合数  5种情况 选择3种 

斐波那契数列 即 有两层递归  分别是 n-1 层 和 n-2 层

帕斯卡三角形 每个数都是上方与它相邻两数之和 可以用组合数计算

二分法 利用了指数💥 用js实现下二分查找

机器学习是为了通过给定的输入得到和目标尽可能将接近的输出，使用训练数据对参数进行调整的过程。

也就是求 y = ax + b ab为参数 参数取得越准预测准确性就越高

机器学习 对参数的调整是机器自动调整

所以人在这之中最重要的事情是建模

计算机根据训练数据来调整参数，从而得到分类模型

什么是向量？ 机器学习中的向量可以看成是数的有序排序

学习是指 基于训练数据，对损失函数使用最速下降法/梯度下降法等方法进行参数调整的过程



以上说的是单个 组合起来构成多层结构就成了神经网络

神经网络可以进行微分运算的连续值

构建神经网络模型时层数、节点数、节点上的函数需要程序员动手调整

误差反向传播法可以避免指数爆炸



深度学习是在神经网络的基础上 增加层数



强化学习是在无监督的条件下进行学习 没有标准答案，通过系统反馈，学习时自动调整





2020年12月6日 读完程序员的数学1的第二版

逻辑判断、薇恩图帮助理解、化简为繁，分解问题解决法

通过归纳法 把大问题分解成n个小问题进行解决

排列组合能够让人认清问题的本质，可以选择缩小问题的规模再进行抽象化

上面解决问题都是同类同规模的问题

递归是分解问题的一种方法，用于解决同类不同规模的问题

二分法就是利用了指数爆炸 代码中也要避免指数爆炸

还有一些不可解问题，无法用程序去实现 

尽管计算机可以解决无穷的数据 但是无法解决不可数的无穷数据

大问题分解，小问题抽象化 反馈到整体上，因为不擅长 所以人类想尽办法 先是用数字表示 然后用计算机计算无穷





navigator 可以获取到浏览器的信息





### vscode

「Shift + F12」可以查看函数调用



### 简历

了解=>熟悉=>熟练=>精通





Vue3 对比 Vue2 到底提升了什么

增加静态标记，动态绑定的时候只需要修改标记的

增加静态提升，把一次性的值冻结，不再监听

服务端渲染，

增加静态节点，把不需要再次渲染的节点也冻结了





使用 Promise.all 来接收所有的promise