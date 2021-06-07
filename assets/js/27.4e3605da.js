(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{535:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("介绍")]),a("p",[t._v("基本的 Git 工作流程"),a("br"),t._v("\n安装并配置 Git"),a("br"),t._v("\n配置用户信息（先配置）"),a("br"),t._v("\n检查配置信息（后检查）"),a("br"),t._v("\nGit 的全局配置文件"),a("br"),t._v("\n获取帮助信息"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"基本的-git-工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本的-git-工作流程"}},[t._v("#")]),t._v(" 基本的 Git 工作流程")]),t._v(" "),a("p",[t._v("基本的 Git 工作流程如下：")]),t._v(" "),a("p",[t._v("① 在工作区中修改文件")]),t._v(" "),a("p",[t._v("② 将你想要下次提交的更改进行暂存")]),t._v(" "),a("p",[t._v("③ 提交更新，找到暂存区的文件，将快照永久性存储到 Git 仓库")]),t._v(" "),a("h2",{attrs:{id:"安装并配置-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-git"}},[t._v("#")]),t._v(" 安装并配置 Git")]),t._v(" "),a("p",[t._v("在 Windows 中下载并安装 Git")]),t._v(" "),a("p",[t._v("在开始使用 Git 管理项目的版本之前，需要将它安装到计算机上。可以使用浏览器访问如下的网址，根据自己")]),t._v(" "),a("p",[t._v("的操作系统，选择下载对应的 Git 安装包：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/downloads"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210310195658608.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMTU3NjEy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"配置用户信息-先配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置用户信息-先配置"}},[t._v("#")]),t._v(" 配置用户信息（先配置）")]),t._v(" "),a("p",[t._v("安装完 Git 之后，要做的第一件事就是设置自己的用户名和邮件地址。因为通过 Git 对项目进行版本管理的时候，Git 需要使用这些基本信息，来记录是谁对项目进行了操作：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户名字"')]),t._v("\ngit config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户邮箱"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("注意：如果使用了 --global 选项，那么该命令只需要运行一次，即可永久生效。")]),t._v(" "),a("h2",{attrs:{id:"检查配置信息-后检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查配置信息-后检查"}},[t._v("#")]),t._v(" 检查配置信息（后检查）")]),t._v(" "),a("p",[t._v("除了使用记事本查看全局的配置信息之外，还可以运行如下的终端命令，快速的查看 Git 的全局配置信息：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# 查看所有的配置项\ngit config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("list \ngit config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global\n# 查看指定的全局配置项\ngit config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\ngit config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"git-的全局配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-的全局配置文件"}},[t._v("#")]),t._v(" Git 的全局配置文件")]),t._v(" "),a("p",[t._v("通过 git config --global user.name 和 git config --global user.email 配置的用户名和邮箱地址，会被写入到 C:/Users/用户名文件夹"),a("code",[t._v("/.gitconfig")]),t._v(" 文件中。这个文件是 Git 的"),a("strong",[t._v("全局配置文件，配置一次即可永久生效")]),t._v("。")]),t._v(" "),a("p",[t._v("可以使用记事本打开此文件，从而查看自己曾经对 Git 做了哪些全局性的配置。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021031020003180.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMTU3NjEy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"获取帮助信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助信息"}},[t._v("#")]),t._v(" 获取帮助信息")]),t._v(" "),a("p",[t._v("可以使用 "),a("code",[t._v("git help <verb>")]),t._v(" 命令，无需联网即可在浏览器中打开帮助手册，例如：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# 打开 git config 命令的帮助手册\ngit help "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("命令名可以变化"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("如果不想查看完整的手册，那么可以用 "),a("code",[t._v("git <verb> -h")]),t._v(" 选项获得更简明的“help”输出：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# 想要获取 git config 命令的快速参考\ngit "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("命令名可以变化"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);