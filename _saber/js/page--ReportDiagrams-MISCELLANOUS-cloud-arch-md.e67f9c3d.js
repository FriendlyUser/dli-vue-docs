(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{67:function(t,n,s){"use strict";s.r(n);var a=s(0),e=function(t){var n,s,a=((n={}).internal=s=void 0,n.contentType="markdown",n.slug="ReportDiagrams/MISCELLANOUS/cloud-arch",n.content=s,n.title="cloud-arch.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="cloud-arch.png" alt="ReportDiagrams/MISCELLANOUS" title="cloud-arch"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567398206561),n.type="page",n.permalink="/ReportDiagrams/MISCELLANOUS/cloud-arch.html",n.assets={},n.attributes=n,n.prevPost={title:"folderSetup.png",permalink:"/BlogDiagrams/folderSetup.html"},n.nextPost={title:"discordDiagram.png",permalink:"/BlogDiagrams/discordDiagram.html"},n),e=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(e);["layout","transition"].forEach(function(n){var s=t.options.PageComponent;s&&(t.options[n]=s[n]),void 0===t.options[n]&&(t.options[n]=a[n])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},p=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("layout-manager",[s("p",[s("img",{attrs:{src:"cloud-arch.png",alt:"ReportDiagrams/MISCELLANOUS",title:"cloud-arch"}})]),t._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[s("code",{pre:!0,attrs:{class:"language-tex"}},[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tikz,11pt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("standalone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tikz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usetikzlibrary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shapes.geometric,shapes.symbols,fit,positioning,shadows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usetikzlibrary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arrows, arrows.meta, backgrounds, calc, shapes.misc, positioning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\tikzset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    purpleBox/.style n args="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text centered, fill=purpleVue, minimum width = #1, minimum height= #2, text=white,\n        text width = #3,\n        rounded corners\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    redBox/.style n args="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text centered, fill=redVue, minimum width = #1, minimum height= #2, text=white,\n        text width = #3,\n        rounded corners\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    orangeBox/.style n args="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fill=orangeVue, minimum width = #1, minimum height= #2, text=white,\n        text centered,\n        rounded corners\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    greenCircle/.style n args="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fill=greenVue, minimum width = #1, minimum height= #2, text=white,\n        text centered,\n        circle\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    lineCustom/.style="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        very thick, \n        color=gray,\n        dotted,\n        shorten <=2pt,\n        shorten >=2pt\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    arrowCustom/.style="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        >=triangle 60,\n        ->,\n        very thick, \n        color=gray,\n        dotted\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    database/.style="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cylinder,\n      cylinder uses custom fill,\n      cylinder body fill=greenVue,\n      cylinder end fill=greenVue,\n      shape border rotate=90,\n      aspect=0.25,\n      draw\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\definecolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("purpleVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0.6,0.5,0.9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\definecolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("orangeVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0.975,0.7,0.2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\definecolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("greenVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0.15,0.65,0.4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\definecolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("redVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0.95,0.45,0.55"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\definecolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("blueBox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0.3,0.65,0.85"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Hardcoded positioning")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tikzpicture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rectangle, draw, minimum width= 10cm, minimum height=10cm, label="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("anchor=north, inner sep=0pt, yshift=-0.6em, text=black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("north:Online banking software"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n(online) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right= 2cm of online, draw, rectangle, minimum width= 10cm, minimum height=10cm,label="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("anchor=north, inner sep=0pt, yshift=-0.6em, text=black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("north:Bank   teller software"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n(soft) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shadow xshift=1ex, shadow yshift=-1.5ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xshift=0em, yshift=-4em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" online.north) (upa)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("User Profile App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("draw, left=5cm of upa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n(label) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Customer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shadow xshift=1ex, shadow yshift=-1.5ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xshift=5em, yshift=-7.5em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" upa.center) (us)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("User Surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yshift=-7.5em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" us.center) (db)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rounded corners, draw, fill=blueBox,\nminimum width=2.2cm,minimum height=5cm, text width=2cm, align=center,\ndouble=black, "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%% here")]),t._v("\ndouble distance =1pt, dashed, below left = -4em and 5 em of us"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" (as)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Auth subsystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yshift=-7.5em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" us.center) (db)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shadow xshift=1ex, shadow yshift=-1.5ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xshift=-3em, yshift=-4em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" soft.north) (a1)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shadow xshift=1ex, shadow yshift=-1.5ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xshift=10em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a1.center) (a2)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shadow xshift=1ex, shadow yshift=-1.5ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yshift=-8em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a1.center) (ps1)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Promotion Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shadow xshift=1ex, shadow yshift=-1.5ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yshift=-8em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a2.center) (ps2)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Promotion Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yshift=-7.5em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ps2.center) (bp)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Branch Promotions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nat ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yshift=-7.5em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ps1.center) (cust)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Customers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("draw, above=1cm of soft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n(bt) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Bank Teller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("->"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" (upa) edge (us) (upa) edge (as) (us) edge (db);\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("->"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" (a1) edge (a2) (ps1) edge (cust) (a1) edge (ps1) (a2) edge (ps2) (ps2) edge (bp);\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tikzpicture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])])},[],!1,null,null,null);"function"==typeof e&&e(p);n.default=p.exports}}]);