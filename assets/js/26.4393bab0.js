(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{526:function(t,v,_){"use strict";_.r(v);var i=_(3),s=Object(i.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"},[t._v("介绍")]),_("p",[t._v("Git基础概念 "),_("br"),t._v("\nSVN 的差异比较 "),_("br"),t._v("\nGit 的记录快照  "),_("br"),t._v("\nGit 中的三个区域"),_("br")])]),t._v(" "),_("h2",{attrs:{id:"git基础概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git基础概念"}},[t._v("#")]),t._v(" Git基础概念")]),t._v(" "),_("p",[_("strong",[t._v("简介:")]),t._v(" "),_("strong",[t._v("Git")]),t._v(" 是一个开源的"),_("strong",[t._v("分布式版本控制系统")]),t._v("，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。\n"),_("strong",[t._v("特点")]),t._v("：项目越大越复杂，协同开发者越多，越能体现出 Git 的高性能和高可用性！\n"),_("strong",[t._v("Git 的特性")]),t._v("\nGit 之所以快速和高效，主要依赖于它的如下两个特性：")]),t._v(" "),_("p",[t._v("① 直接记录快照，而非差异比较")]),t._v(" "),_("p",[t._v("② 近乎所有操作都是本地执行")]),t._v(" "),_("h2",{attrs:{id:"svn-的差异比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#svn-的差异比较"}},[t._v("#")]),t._v(" "),_("strong",[t._v("SVN 的差异比较")])]),t._v(" "),_("p",[t._v("传统的版本控制系统（例如 SVN）是基于差异的版本控制，它们存储的是一组基本文件和每个文件随时间逐步累积的差异")]),t._v(" "),_("p",[t._v("好处：节省磁盘空间")]),t._v(" "),_("p",[t._v("缺点：耗时、效率低\n在每次切换版本的时候，都需要在基本文件的基础上，应用每个差异，从而生成目标版本对应的文件")]),t._v(" "),_("h2",{attrs:{id:"git-的记录快照"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-的记录快照"}},[t._v("#")]),t._v(" Git 的记录快照")]),t._v(" "),_("p",[t._v("Git 快照是在原有文件版本的基础上重新生成一份新的文件，类似于备份。为了效率，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。")]),t._v(" "),_("p",[t._v("缺点：占用磁盘空间较大")]),t._v(" "),_("p",[t._v("优点： 版本切换时非常快，因为每个版本都是完整的文件快照，切换版本时直接恢复目标版本的快照即可。")]),t._v(" "),_("p",[t._v("特点：  空间换时间")]),t._v(" "),_("p",[_("strong",[t._v("近乎所有操作都是本地执行")])]),t._v(" "),_("p",[t._v("在 Git 中的绝大多数操作都只需要访问本地文件和资源，一般不需要来自网络上其它计算机的信息")]),t._v(" "),_("p",[t._v("特性：")]),t._v(" "),_("p",[t._v("① 断网后依旧可以在本地对项目进行版本管理")]),t._v(" "),_("p",[t._v("② "),_("strong",[t._v("联网后，把本地修改的记录同步到云端服务器即可")])]),t._v(" "),_("h2",{attrs:{id:"git-中的三个区域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-中的三个区域"}},[t._v("#")]),t._v(" Git 中的三个区域")]),t._v(" "),_("p",[t._v("使用 Git 管理的项目，拥有三个区域，分别是工作区、暂存区、Git 仓库")]),t._v(" "),_("p",[_("strong",[t._v("Git 中的三种状态")])]),t._v(" "),_("ul",[_("li",[t._v("已修改 "),_("strong",[t._v("modified")]),t._v(" "),_("ul",[_("li",[t._v("表示修改了文件，但还没将修改的结果放到暂存区")])])]),t._v(" "),_("li",[t._v("已暂存 "),_("strong",[t._v("staged")]),t._v(" "),_("ul",[_("li",[t._v("表示对已修改文件的当前版本做了标记，使之包含在下次提交的列表中")])])]),t._v(" "),_("li",[t._v("已提交 "),_("strong",[t._v("committed")]),t._v(" "),_("ul",[_("li",[t._v("表示文件已经安全地保存在本地的 Git 仓库中")])])])]),t._v(" "),_("p",[t._v("注意：")]),t._v(" "),_("ul",[_("li",[t._v("工作区的文件被修改了，但还没有放到暂存区，就是已修改状态。")]),t._v(" "),_("li",[t._v("如果文件已修改并放入暂存区，就属于已暂存状态。")]),t._v(" "),_("li",[t._v("如果 Git 仓库中保存着特定版本的文件，就属于已提交状态。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);