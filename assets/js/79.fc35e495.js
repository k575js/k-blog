(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{584:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("介绍")]),t("p",[s._v("npm 包与模块关系  "),t("br"),s._v("\n下载使用包  "),t("br"),s._v("\ninit命令 "),t("br"),s._v("\npackage.json文件"),t("br"),s._v("\nnode_modules文件夹 "),t("br"),s._v("\n全局安装包和本地安装包 "),t("br"),s._v("\n开发依赖和生产依赖"),t("br")])]),s._v(" "),t("h1",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" npm")]),s._v(" "),t("h2",{attrs:{id:"了解npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#了解npm"}},[s._v("#")]),s._v(" 了解npm")]),s._v(" "),t("ul",[t("li",[s._v("npm 全称"),t("code",[s._v("Node Package Manager")]),s._v("(node 包管理器)，它的诞生是为了解决 Node 中第三方包共享的问题。")]),s._v(" "),t("li",[s._v("npm 不需要单独安装。在安装Node的时候，会连带一起安装npm。")]),s._v(" "),t("li",[t("code",[s._v("npm -v")]),s._v("检查安装的情况。")]),s._v(" "),t("li",[s._v("官网"),t("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("当我们谈到npm时，我们在说两个东西：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("命令行工具")]),s._v("。这个工具在安装node时，已经自动安装过了。")]),s._v(" "),t("li",[t("strong",[s._v("npm网站")]),s._v('。这是一个第三方模块的"不花钱的超市"，我们可以自由地下载，上传模块。')])]),s._v(" "),t("h2",{attrs:{id:"包-package-与模块关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包-package-与模块关系"}},[s._v("#")]),s._v(" 包（package）与模块关系")]),s._v(" "),t("p",[s._v("npm网站收集了前端的各种工具.")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("之前学习过：\n\n  jQuery"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bootStrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" flexible"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arttemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" layui"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" echarts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n\n你是如何下载的？\n\n对应官网下载\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("有没有一个想法：在一个地方下载所有的库")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("strong",[s._v("npm网站")]),s._v('上去下载我们的需要的代码时，它们是以"'),t("strong",[s._v("包")]),s._v('"这种结构放在'),t("strong",[s._v("npm网站")]),s._v("上的。先来了解下包和模块的关系。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021032420225735.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMTU3NjEy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),t("ul",[t("li",[s._v("nodejs中一个模块就是一个单独的js文件")]),s._v(" "),t("li",[s._v("包是多个模块的集合。一个模块的功能比较单一，所以一个包一般会包含多个模块。")]),s._v(" "),t("li",[s._v("npm 管理的单位是包。类似于网站和网页的区别：一个网站一般会包含多个网页。")])]),s._v(" "),t("h2",{attrs:{id:"npm下载使用包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm下载使用包"}},[s._v("#")]),s._v(" npm下载使用包")]),s._v(" "),t("p",[s._v("分成三步：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("初始化项目")]),s._v("。"),t("code",[s._v("npm init")]),s._v("如果之前已经初始化，则可以省略。")]),s._v(" "),t("li",[t("strong",[s._v("安装包")]),s._v("。 "),t("code",[s._v("npm install")]),s._v("包名。")]),s._v(" "),t("li",[t("strong",[s._v("引入模块")]),s._v("，使用。")])]),s._v(" "),t("p",[t("strong",[s._v("保持联网的状态~~")])]),s._v(" "),t("h3",{attrs:{id:"第一步-初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-初始化项目"}},[s._v("#")]),s._v(" 第一步：初始化项目")]),s._v(" "),t("p",[s._v("这里提到的项目并不是某个具体的功能，只是要"),t("strong",[s._v("创建一个空文件夹")]),s._v("即可（注意，不要起中文名字哈）。")]),s._v(" "),t("p",[s._v("进入到项目所在的根目录下，"),t("strong",[s._v("启动小黑窗")]),s._v("（按下shift键，点击右键，在弹出的菜单中选择 “在此处打开命令行”）")]),s._v(" "),t("p",[s._v("输入如下命令：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// --与yes之间没有空格， -- 与init之间有空格")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者是 npm init -y")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("init")]),s._v("命令用来在根目录下生成一个"),t("code",[s._v("package.json")]),s._v("文件，这个文件中记录了我们当前项目的基本信息，它是一切工作的开始。")]),s._v(" "),t("h3",{attrs:{id:"第二步-安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-安装包"}},[s._v("#")]),s._v(" 第二步：安装包")]),s._v(" "),t("p",[t("strong",[s._v("npm 这个超市上有好的代码，我们想下载来用 ------  安装包")])]),s._v(" "),t("p",[s._v("生成了"),t("code",[s._v("package.json")]),s._v("文件之后，我们就可以来安装第三方包了。在npm官网中，有上百万个包，供我们使用（你需要在npm网上注册帐号，登陆上去，才可以看到如下的数据，如果只是下载安装包，则并不需要注册）。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210324202655104.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMTU3NjEy,size_16,color_FFFFFF,t_70",alt:"![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324202613386.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMTU3NjEy,size_16,color_FFFFFF,t_"}}),s._v("\n根据我们遇到的实际问题，我们来引入相应的包来解决它们。例如，我们在开发一个项目，其中涉及一些对日期时间的处理可以安装"),t("code",[s._v("dayjs")]),s._v("包。")]),s._v(" "),t("p",[s._v("安装day.js包")]),s._v(" "),t("p",[s._v("day.js是一个专门用来处理日期时间的一个包")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://dayjs.fenxianglu.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dayjs.fenxianglu.cn/"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install dayjs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"第三包-使用包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三包-使用包"}},[s._v("#")]),s._v(" 第三包：使用包")]),s._v(" "),t("p",[s._v("当我们已经下载好一个包之后，就可以像使用核心模块一样去使用它。")]),s._v(" "),t("p",[s._v("格式是："),t("code",[s._v("const 常量名 = require('包名')")]),s._v("这个格式与引入核心模块的格式是一样的(不需要像自定义模块那样加"),t("code",[s._v("./")]),s._v(")。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从npm下载 别人写的好代码，在本地引入，并使用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" dayjs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dayjs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dayjs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("startOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'month'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'day'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'year'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YYYY-MM-DD HH:mm:ss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dayjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"npm-init-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-init-命令"}},[s._v("#")]),s._v(" "),t("code",[s._v("npm init")]),s._v(" 命令")]),s._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用:")]),s._v(" "),t("p",[s._v("在某个目录下开启小黑窗，输入如下命令：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("# init 初始化\nnpm init \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("它会启动一个"),t("em",[s._v("交互式的程序")]),s._v("，让你填入一些关于本项目的信息，最后生成一个"),t("code",[s._v("package.json")]),s._v("文件。")])]),s._v(" "),t("p",[s._v("如果你希望"),t("strong",[s._v("直接采用默认信息")]),s._v("，可以使用:")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者是 npm init -y")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明：")]),s._v(" "),t("ul",[t("li",[s._v("这个命令只需要运行一次，它的目的仅仅是生成一个"),t("code",[s._v("package.json")]),s._v("文件。")]),s._v(" "),t("li",[s._v("如果项目根目录下已经有了"),t("code",[s._v("package.json")]),s._v("文件，就不需要再去运行这个命令了。")]),s._v(" "),t("li",[s._v("这个"),t("code",[s._v("package.json")]),s._v("文件"),t("strong",[s._v("后期是可以手动修改")]),s._v("的。")])]),s._v(" "),t("h2",{attrs:{id:"package-json文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json文件"}},[s._v("#")]),s._v(" package.json文件")]),s._v(" "),t("p",[s._v("它一般是由"),t("code",[s._v("npm init")]),s._v("命令创建出来的，它的整体内容是一个json字符串，"),t("strong",[s._v("用来对当前项目进行整体描述")]),s._v('。其中最外层可以看作是一个js的对象（每一个属性名都加了""，这就是一个典型的json标记）。这个文件中有非常多的内容，我们目前学习如下几个：')]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("name")]),s._v("： 表示这个项目的名字。如是它是一个第三方包的话，它就决定了我们在require()时应该要写什么内容。")]),s._v(" "),t("li",[t("strong",[s._v("version")]),s._v("：版本号")]),s._v(" "),t("li",[t("strong",[s._v("keywords")]),s._v("：关键字")]),s._v(" "),t("li",[t("strong",[s._v("author")]),s._v(": 作者")]),s._v(" "),t("li",[t("strong",[s._v("descrption")]),s._v(": 描述")])]),s._v(" "),t("p",[s._v("其它可参考")]),s._v(" "),t("p",[s._v("1."),t("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/packagejson.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://javascript.ruanyifeng.com/nodejs/packagejson.html"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("2."),t("a",{attrs:{href:"http://caibaojian.com/npm/files/package.json.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://caibaojian.com/npm/files/package.json.html"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"node-modules文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-modules文件夹"}},[s._v("#")]),s._v(" node_modules文件夹")]),s._v(" "),t("p",[t("strong",[s._v("作用")])]),s._v(" "),t("p",[s._v("在使用"),t("code",[s._v("npm install")]),s._v("命令时，会从npm网站下载对应的包到这个文件夹中，这个文件夹中"),t("strong",[s._v("保存着我们从npm中下载来的第三方包")]),s._v("。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210324204530500.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("执行逻辑")])]),s._v(" "),t("p",[s._v("当键入"),t("code",[s._v("npm install XXX")]),s._v("之后（这里假设这个XXX包是存在的，也没有出现任何的网络错误）：")]),s._v(" "),t("ol",[t("li",[s._v("如果有"),t("code",[s._v("package.json")]),s._v("\n(1) "),t("strong",[s._v("修改package.json文件")]),s._v("。根据开发依赖和生产依赖的不同，决定把这句记录"),t("strong",[s._v("添加")]),s._v("在"),t("code",[s._v("devDependencie")]),s._v("s或者是"),t("code",[s._v("dependencies")]),s._v("列表中。\n(2) "),t("strong",[s._v("修改node_modules文件夹")]),s._v(" "),t("ol",[t("li",[s._v("如果有"),t("code",[s._v("node_modules")]),s._v("文件夹，则直接在下面新建名为XXX的文件夹，并从npm中下来这个包。如果这个包还有其它的依赖，则也会下载下来。")]),s._v(" "),t("li",[s._v("如果没有"),t("code",[s._v("node_modules")]),s._v("，则先"),t("strong",[s._v("创建这个文件夹")]),s._v("，再去下载相应的包")])])]),s._v(" "),t("li",[s._v("如果"),t("strong",[s._v("没有")]),t("code",[s._v("package.json")]),s._v("。会给一个警告信息。")])]),s._v(" "),t("p",[t("strong",[s._v("说明：")])]),s._v(" "),t("ul",[t("li",[s._v("建议先用"),t("code",[s._v("npm init")]),s._v("命令"),t("strong",[s._v("创建")]),t("code",[s._v("package.json")]),s._v("之后，再去"),t("code",[s._v("npm install 包")])]),s._v(" "),t("li",[s._v("在分享代码时，我们一般"),t("strong",[s._v("不需要")]),s._v("把"),t("code",[s._v("node_modules")]),s._v("也给别人（就像你不需要把jquery.js给别人，因为他们可以自己去下载）。对方拿到我们的代码之后，先运行"),t("code",[s._v("npm install")]),s._v("(后面不接任何的包名)，自己去安装这些个依赖包。")])]),s._v(" "),t("h2",{attrs:{id:"全局安装包和本地安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装包和本地安装包"}},[s._v("#")]),s._v(" 全局安装包和本地安装包")]),s._v(" "),t("h3",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("我们通过"),t("code",[s._v("npm install")]),s._v("命令来安装包，简单说就是把包从npm的官网（或者是指定的"),t("strong",[s._v("镜像")]),s._v("源）下载到我们自己的电脑中。那具体这个包下载到哪里了，还是有一点讲究的。")]),s._v(" "),t("h3",{attrs:{id:"分成两类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分成两类"}},[s._v("#")]),s._v(" 分成两类：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("全局安装")]),s._v(": 包被安装到了系统目录（一般在"),t("code",[s._v("系统盘")]),s._v("的"),t("code",[s._v("node_modules")]),s._v("中）。\n"),t("ul",[t("li",[s._v("命令："),t("code",[s._v("npm install -g 包名")]),s._v("或者 "),t("code",[s._v("npm install 包名 -g")])]),s._v(" "),t("li",[s._v("辅助提示：")])])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("      npm root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看全局包的安装目录")]),s._v("\n      npm list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查看全局安装过的包")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("局部安装")]),s._v("（或者叫本地安装)，包安装在当前项目的根目录下（与"),t("code",[s._v("package.json")]),s._v("同级）的"),t("code",[s._v("node_modules")]),s._v("中。\n"),t("ul",[t("li",[s._v("命令："),t("code",[s._v("npm install 包名")])])])])]),s._v(" "),t("h3",{attrs:{id:"全局包与本地包的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局包与本地包的区别"}},[s._v("#")]),s._v(" 全局包与本地包的区别")]),s._v(" "),t("ul",[t("li",[s._v("全局安装的包一般可提供直接执行的命令。我们通过对一些工具类的包采用这种方式安装，如：\ngulp, nodemon, live-server,nrm等。")]),s._v(" "),t("li",[s._v("本地安装的包是与具体的项目有关的， 我们需要在开发过程中使用这些具体的功能。")])]),s._v(" "),t("h3",{attrs:{id:"一个经验法则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个经验法则"}},[s._v("#")]),s._v(" 一个经验法则：")]),s._v(" "),t("ul",[t("li",[s._v("要用到该包的命令"),t("code",[s._v("执行任务")]),s._v("的就需要全局安装。")]),s._v(" "),t("li",[s._v("要通过"),t("code",[s._v("require引入")]),s._v("使用的就需要本地安装。")])]),s._v(" "),t("h2",{attrs:{id:"开发依赖和生产依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发依赖和生产依赖"}},[s._v("#")]),s._v(" 开发依赖和生产依赖")]),s._v(" "),t("h3",{attrs:{id:"简介-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("在本地安装包时，表示我们这个项目要用到这个包，换句话说，我们这个项目要想成功运行，要依赖于这些个包。")]),s._v(" "),t("p",[s._v("但在，具体在项目进行的"),t("strong",[s._v("哪一阶段")]),s._v("依赖于这些包呢？也有具体的差异。")]),s._v(" "),t("h3",{attrs:{id:"理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[s._v("#")]),s._v(" 理解")]),s._v(" "),t("p",[s._v("举个生活中建房子的场景：")]),s._v(" "),t("p",[s._v("在建房子时，我们依赖：")]),s._v(" "),t("ul",[t("li",[s._v("辅助工具：尺子，水平仪，脚手架")]),s._v(" "),t("li",[s._v("原材料：钢筋，水泥")])]),s._v(" "),t("p",[s._v("在住房子时，我们依赖：")]),s._v(" "),t("ul",[t("li",[s._v("原材料：钢筋，水泥")])]),s._v(" "),t("p",[s._v("在房子进入到了使用阶段时，我们就不再需要尺子，水平仪，脚手架等这些个辅助工具了。我们买一所房子时，也不应该支付巨型脚手架的费用。  在开发前端项目的过程中也存在类似的问题：我们的开发过程和使用过程是分开的，开发项目时需要用到的包可能在使用项目时就不需要用到了。")]),s._v(" "),t("p",[s._v("假设有这么两个包：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("gulp-htmlmin")]),s._v("。这个工具是用来把html代码进行压缩的（去掉空格，换行等），我们需要在"),t("strong",[s._v("开发时使用它")]),s._v('，而项目一旦上线，我们就不再需要它了。，因此将它归类为"'),t("strong",[s._v("开发依赖")]),s._v('"。')]),s._v(" "),t("li",[s._v('jquery。在开发时参与源码编写，在发布上线的生产环境中也是需要它的。不仅在开发环境编写代码时要依赖它、线上环境也要依赖它，因此将它归类为"'),t("strong",[s._v("生产依赖")]),s._v('"。')])]),s._v(" "),t("p",[t("strong",[s._v("这个差异就表现在，我们在打包项目时，就不需要打包“开发依赖”的包，这样减少成本。")])]),s._v(" "),t("p",[s._v("---webpack")]),s._v(" "),t("h3",{attrs:{id:"操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[s._v("#")]),s._v(" 操作")]),s._v(" "),t("p",[s._v("这两种依赖关系，在具体操作的过程中，有如下区别")]),s._v(" "),t("ol",[t("li",[s._v("保存到"),t("strong",[s._v("开发依赖("),t("code",[s._v("devDependencies")]),s._v(")")])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install 包名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者 npm install 包名 -D")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("通过这种方式安装的包出会现在"),t("code",[s._v("package.json")]),s._v("文件中的"),t("code",[s._v("devDependencies")]),s._v("字段中。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("保存到"),t("strong",[s._v("生产依赖")]),s._v("("),t("code",[s._v("dependencies")]),s._v("):")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install 包名\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者 npm install 包名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者 npm install 包名 -S")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[s._v("#")]),s._v(" 技巧")]),s._v(" "),t("ul",[t("li",[s._v("加了"),t("code",[s._v("-D")]),s._v(" :  "),t("strong",[s._v("开发依赖")]),s._v("，这就表示这个工具包"),t("strong",[s._v("只在开发项目时候要用")]),s._v("，项目开发完成就不需要")]),s._v(" "),t("li",[s._v("不加"),t("code",[s._v("-D")]),s._v("： "),t("strong",[s._v("生产依赖")]),s._v("，这就表示这个工具包在项目做完了之后也要用。")])]),s._v(" "),t("p",[t("strong",[s._v("什么包加上-D,什么包不要加？------- 看文档")])])])}),[],!1,null,null,null);a.default=e.exports}}]);