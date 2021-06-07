(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{624:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[s._v("介绍")]),a("p",[s._v("命名路由 "),a("br"),s._v("\n路由重定向 "),a("br"),s._v("\n路由高亮class类"),a("br")])]),s._v(" "),a("h1",{attrs:{id:"一-命名路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-命名路由"}},[s._v("#")]),s._v(" 一.命名路由")]),s._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("name")]),s._v(" 属性为路由规则定义名称的方式，叫做"),a("strong",[s._v("命名路由")]),s._v("。\n注意：命名路由的 name 值不能重复，必须保证唯一性")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'about'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//命名路由")]),s._v("\n path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/about/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" about"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"使用命名路由实现编程式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用命名路由实现编程式导航"}},[s._v("#")]),s._v(" 使用"),a("strong",[s._v("命名路由")]),s._v("实现"),a("strong",[s._v("编程式导航")])]),s._v(" "),a("p",[s._v("调用 "),a("code",[s._v("push 函数")]),s._v("期间指定一个配置对象，"),a("code",[s._v("name")]),s._v("是要跳转到的路由规则、"),a("code",[s._v("params")]),s._v(" 是携带的路由参数")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注意")]),s._v("：如果使用"),a("code",[s._v("path")]),s._v("实现路由跳转，传递参数需要使用"),a("code",[s._v("query")])]),s._v(" "),a("h1",{attrs:{id:"二-路由重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-路由重定向"}},[s._v("#")]),s._v(" 二.路由重定向")]),s._v(" "),a("h2",{attrs:{id:"概念-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("p",[s._v("路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。")]),s._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),a("p",[s._v("通过路由规则的 "),a("code",[s._v("redirect")]),s._v("属性，指定一个新的路由地址，可以很方便地设置路由的重定向")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      redirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mine'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重定向")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h1",{attrs:{id:"路由高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由高亮"}},[s._v("#")]),s._v(" 路由高亮")]),s._v(" "),a("p",[s._v("可以通过如下的两种方式，将激活的路由链接进行高亮显示：")]),s._v(" "),a("h2",{attrs:{id:"使用默认的高亮-class-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用默认的高亮-class-类"}},[s._v("#")]),s._v(" 使用默认的高亮 class 类")]),s._v(" "),a("p",[s._v("被激活的路由链接，默认会应用一个叫做"),a("code",[s._v("router-link-active")]),s._v("的类名。开发者可以使用此类名选择器，为激活的路由链接设置高亮的样式\n在全局样式文件中添加如下样式：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210416211246789.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"自定义路由高亮的-class-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义路由高亮的-class-类"}},[s._v("#")]),s._v(" 自定义路由高亮的 class 类")]),s._v(" "),a("p",[s._v("在创建"),a("strong",[s._v("路由的实例对象")]),s._v("时，开发者可以基于"),a("code",[s._v("linkActiveClass")]),s._v("属性，自定义路由链接被激活时所应用的类名\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210416211321132.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMTU3NjEy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),s._v(" "),a("strong",[s._v("注意")]),s._v("：自己添加对应名称的样式哦")])])}),[],!1,null,null,null);t.default=r.exports}}]);