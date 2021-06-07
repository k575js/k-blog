(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{517:function(v,s,_){"use strict";_.r(s);var t=_(3),a=Object(t.a)({},(function(){var v=this,s=v.$createElement,_=v._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"},[v._v("介绍")]),_("p",[v._v("vh vw相对长度单位"),_("br"),v._v("\ntip"),_("br"),v._v("\ncss预编译器"),_("br"),v._v("\n屏幕端 适配"),_("br")])]),v._v(" "),_("h2",{attrs:{id:"vh-vw相对长度单位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vh-vw相对长度单位"}},[v._v("#")]),v._v(" vh vw相对长度单位")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("vw vh  （viewpoint width          viewpoint height）")])]),v._v(" "),_("li",[_("p",[v._v("vw相对于屏幕的宽度 规定不管你屏幕是100px 或者200px")])]),v._v(" "),_("li",[_("p",[v._v("vh如上")])]),v._v(" "),_("li",[_("p",[v._v("例：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("100vw = 320px\n 1vw  = 3.2px\n")])])])])]),v._v(" "),_("h2",{attrs:{id:"tip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tip"}},[v._v("#")]),v._v(" tip:")]),v._v(" "),_("p",[v._v("ui给我们移动端 设计稿")]),v._v(" "),_("p",[v._v("可以按照设计稿 做 "),_("strong",[v._v("移动端屏幕适配")])]),v._v(" "),_("p",[v._v("里面的大部分元素（盒子 文字 图片 字体图标）都需要跟屏幕宽度变化而变化\n屏幕越大 元素越大")]),v._v(" "),_("ul",[_("li",[v._v("屏幕适配 代码怎么敲 写什么样的宽高 才会实现效果\n（无非就是长度单位的选择） 先排除px\n"),_("ul",[_("li",[v._v("相对长度单位 % em （相对父元素或者自己） 不常用")]),v._v(" "),_("li",[v._v("相对长度单位vw vh rem")]),v._v(" "),_("li",[v._v("公式 :")]),v._v(" "),_("li",[v._v("手机屏宽 / 设置稿宽 = 手机div宽 / 设计稿div宽\n"),_("ul",[_("li",[_("strong",[v._v("设计稿宽度")]),v._v("     已知    量取")]),v._v(" "),_("li",[_("strong",[v._v("手机屏宽")]),v._v("         已知    100vw")]),v._v(" "),_("li",[_("strong",[v._v("设计稿div宽")]),v._v("   已知     量取")]),v._v(" "),_("li",[v._v("手机中div宽   未知     计算")])])]),v._v(" "),_("li",[v._v("字体 设置屏幕适配公式如上 （设计稿宽度和设计稿字体宽度测量）")])])])]),v._v(" "),_("p",[v._v("代码演示")]),v._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("/* 使用rem + 媒体查询 进行响应式布局 */")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("/* 设计稿宽度750 */")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 手机宽 / 设计稿宽 =  手机div宽 / 设计稿div宽")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 手机div宽 = 手机宽 / 设计稿宽 * 设计稿div宽")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 手机div宽 =  10rem / 750  * x")]),v._v("\n@ratio "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("10")]),v._v("rem "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("750")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br")])]),_("h2",{attrs:{id:"css预编译器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css预编译器"}},[v._v("#")]),v._v(" css预编译器")]),v._v(" "),_("ul",[_("li",[v._v("常用的css预处理器 "),_("code",[v._v("less")]),v._v(" "),_("code",[v._v("sass")]),v._v(" "),_("code",[v._v("stylus")]),v._v(" "),_("ul",[_("li",[v._v("这三种语法特别相似 只要掌握了一种 另外两种相差不多")]),v._v(" "),_("li",[v._v("作用 ： 提高开发效率   更加灵活 高效；")]),v._v(" "),_("li",[v._v("css预处理器的 "),_("strong",[v._v("执行过程")]),v._v("：\n"),_("ul",[_("li",[v._v("新建less文件")]),v._v(" "),_("li",[v._v("按照less语法规范 编写 合理样式代码")]),v._v(" "),_("li",[v._v("借助工具 将less文件 编译成 css文件")]),v._v(" "),_("li",[v._v("网页还是像以前一样 加载css文件")])])]),v._v(" "),_("li",[v._v("常用语法\n"),_("ul",[_("li",[v._v("变量")]),v._v(" "),_("li",[v._v("嵌套")]),v._v(" "),_("li",[v._v("混合 mixin 函数\n"),_("ul",[_("li",[v._v("不带参数  直接整坨代码塞进去")]),v._v(" "),_("li",[v._v("带参数     灵活根据需求改变参数 （@参数）  【参数前使用@】")])])]),v._v(" "),_("li",[v._v("导入\n"),_("ul",[_("li",[v._v("在大型框架时才会使用")])])])])])])])]),v._v(" "),_("h2",{attrs:{id:"屏幕端-适配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#屏幕端-适配"}},[v._v("#")]),v._v(" 屏幕端 适配：")]),v._v(" "),_("ol",[_("li",[v._v("拿到设计稿   （假设750px）")]),v._v(" "),_("li",[v._v("自己把浏览器设定在  屏幕下 (350px)")]),v._v(" "),_("li",[v._v("里面的元素 大小 字体 按照设计稿一样 都写px (先按设计稿改)")]),v._v(" "),_("li",[v._v("最后 再去通过vw less技术  来挨个替换项目里面的px\n"),_("ol",[_("li",[v._v("使用公式")]),v._v(" "),_("li",[v._v("手机宽 / 设计稿宽 ==   手机div宽 / 设计稿div宽")]),v._v(" "),_("li",[v._v("@ratio ：手机宽 * 设计稿div宽  / 设计稿宽")]),v._v(" "),_("li",[v._v("即 @ratio ：手机宽  / 设计稿宽  *  设计稿div宽")]),v._v(" "),_("li",[v._v("即 @ratio ：100vw *稿宽")]),v._v(" "),_("li",[v._v("元素 样式 :量取的稿div宽 * @radio")]),v._v(" "),_("li",[v._v("css文件名改为less")]),v._v(" "),_("li",[v._v("背景图的/符号 使用~“/”  变成字符")]),v._v(" "),_("li",[v._v("px改成 乘上计算好的倍数   *@ratio")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);