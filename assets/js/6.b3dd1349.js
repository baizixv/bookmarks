(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(t,s,a){t.exports=a.p+"assets/img/eventLoop.94af51a8.jpg"},359:function(t,s,a){t.exports=a.p+"assets/img/queue.904da9af.png"},380:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"作业：1-1，js异步编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作业：1-1，js异步编程"}},[t._v("#")]),t._v(" 作业：1-1，JS异步编程")]),t._v(" "),n("h2",{attrs:{id:"_1-如何理解js异步编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何理解js异步编程"}},[t._v("#")]),t._v(" 1. 如何理解JS异步编程?")]),t._v(" "),n("h4",{attrs:{id:"_1-1-什么是异步编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是异步编程"}},[t._v("#")]),t._v(" 1.1 什么是异步编程?")]),t._v(" "),n("p",[t._v("javascript语言的一大特点就是"),n("strong",[t._v("单线程")]),t._v("，在某个特定的时刻只有特定的代码能够被执行，并阻塞其它的代码，也就是说，同一个时间只能做一件事。比如:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 依次自上而下输出1,2,3")]),t._v("\n")])])]),n("p",[t._v("但是当某一步骤响应时间比较长，则会出现程序“假死”的情况，很大程度上降低了执行速度，效率低，响应时间长. 比如:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" start "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出1,2后, 程序将阻塞在while循环, 等待相当长的时间后,才会输出3")]),t._v("\n")])])]),n("p",[t._v("将所要执行的函数放到任务队列中，不占用主线程，只有等主线程执行完毕之后，才通知请求执行任务，从而将任务从任务队列进入到主线程中执行。这样一个机制就是"),n("code",[t._v("异步编程")]),t._v("。")]),t._v(" "),n("h4",{attrs:{id:"_1-2-怎么做到异步编程？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-怎么做到异步编程？"}},[t._v("#")]),t._v(" 1.2 怎么做到异步编程？")]),t._v(" "),n("p",[t._v("通过回调函数的形式。将之后要执行的函数放到任务队列。")]),t._v(" "),n("p",[t._v("直到nodejs的出现，开始将回调模式的异步编程机制发挥的淋漓尽致，这种机制开始在前端变得非常流行。")]),t._v(" "),n("p",[t._v("但是慢慢也体现出了回调函数在错误处理和嵌套上的副作用。")]),t._v(" "),n("p",[t._v("因而, 异步解决方案一直在发展中, 大致历程为: callback => 事件发布\\订阅模式=> Promise => Generator => async/await => rx => .....。")]),t._v(" "),n("p",[t._v("发展的特点是, 将异步编程的代码表达尽量地贴合自然语言的线性思维。")]),t._v(" "),n("h2",{attrs:{id:"_2-如何理解eventloop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何理解eventloop"}},[t._v("#")]),t._v(" 2. 如何理解EventLoop?")]),t._v(" "),n("p",[t._v("EventLoop，顾名思义为：事件循环，是指浏览器一种解决JS单线程运行时的一种机制。")]),t._v(" "),n("p",[t._v("javascript上， 所有同步任务都在主线程上执行，也可以理解为存在一个“"),n("strong",[t._v("执行栈")]),t._v("”。")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("主线程外，还有一个“"),n("strong",[t._v("任务队列")]),t._v("”，任务队列的作用，就在等待异步任务的结果，只要异步任务有了运行结果，通过回调函数的形式将所要执行的函数放到任务队列中，不占用主线程。")])]),t._v(" "),n("li",[n("p",[t._v("一旦"),n("strong",[t._v("执行栈")]),t._v("中所有同步任务执行完毕，就从 "),n("strong",[t._v("任务队列")]),t._v(" 中读取“任务”加入到“执行栈”中。")])]),t._v(" "),n("li",[n("p",[t._v("主线程不断的在循环上面的步骤。")])])]),t._v(" "),n("p",[t._v("线程从任务队列中读取事件，这个过程是不断循环的，所以整个运行机制被称为event loop,如图所示:\n"),n("img",{attrs:{src:a(358),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"_3-如何理解消息队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何理解消息队列"}},[t._v("#")]),t._v(" 3. 如何理解消息队列?")]),t._v(" "),n("p",[t._v("消息队列，一般我们会简称它为MQ（Message Queue），就是很直白的简写.")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("消息")])]),t._v("（Message）是指在应用之间传送的数据，消息可以非常简单，比如只包含文本字符串，也可以更复杂，可能包含嵌入对象。")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("队列")])]),t._v(" 是一种先进先出的数据结构, 栈、堆、消息队列是一种数据结构，队列，特点为先进先出，存放执行的任务\n"),n("img",{attrs:{src:a(359),alt:""}})]),t._v(" "),n("p",[n("strong",[t._v("消息队列可以简单理解为")]),t._v(": 把要传输的数据放在队列中，例如：生产者将数据放入消息队列中，然后消费者从队列中依次取队列中的消息")]),t._v(" "),n("h2",{attrs:{id:"_4-如何理解宏任务和微任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何理解宏任务和微任务"}},[t._v("#")]),t._v(" 4. 如何理解宏任务和微任务?")]),t._v(" "),n("p",[t._v("任务分为：宏任务和微任务\n宏任务：消息队列中的每个任务都是宏任务，\n微任务：每个宏任务对应都有一个微任务队列.")]),t._v(" "),n("p",[t._v("普通任务队列和延迟队列中的任务，都属于"),n("strong",[t._v("宏任务")]),t._v("。")]),t._v(" "),n("p",[t._v("对于每个宏任务而言，其内部都有一个微任务队列。那为什么要引入微任务？微任务在什么时候执行呢？")]),t._v(" "),n("p",[t._v("其实引入微任务的初衷是为了解决异步回调的问题。想一想，对于异步回调的处理，有多少种方式？总结起来有两点:")]),t._v(" "),n("ol",[n("li",[t._v("将异步回调进行宏任务队列的入队操作。")]),t._v(" "),n("li",[t._v("将异步回调放到当前宏任务的末尾。")])]),t._v(" "),n("p",[t._v("如果采用第一种方式，那么执行回调的时机应该是在前面所有的宏任务完成之后，倘若现在的任务队列非常长，那么回调迟迟得不到执行，造成应用卡顿。")]),t._v(" "),n("p",[t._v("为了规避这样的问题，V8 引入了第二种方式，这就是"),n("strong",[t._v("微任务")]),t._v("的解决方式。在每一个宏任务中定义一个微任务队列。")]),t._v(" "),n("p",[t._v("执行栈在完成同步任务之后，会去执行任务队列中的宏任务，当该宏任务执行完成，会检查其中的微任务队列")]),t._v(" "),n("p",[t._v("如果为空则直接执行下一个宏任务，如果不为空，则会按照先进先出的规则全部执行完对应的微任务，执行完成才去执行下一个宏任务。如此循环，直至任务结束。")]),t._v(" "),n("p",[t._v("因此, 微任务主要解决任务优先级的问题和单个任务执行过长的问题。")]),t._v(" "),n("p",[t._v("常见的微任务有MutationObserver、Promise.then(或.reject) 以及以 Promise 为基础开发的其他技术(比如fetch API), 还包括 V8 的垃圾回收过程。")])])}),[],!1,null,null,null);s.default=e.exports}}]);