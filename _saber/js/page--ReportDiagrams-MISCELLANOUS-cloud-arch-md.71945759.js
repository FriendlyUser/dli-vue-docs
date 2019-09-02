(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{67:function(e,t,n){"use strict";n.r(t);var i=n(0),a=function(e){var t,n,i=((t={}).internal=n=void 0,t.contentType="markdown",t.slug="ReportDiagrams/MISCELLANOUS/cloud-arch",t.content=n,t.title="cloud-arch.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="cloud-arch.png" alt="ReportDiagrams/MISCELLANOUS" title="cloud-arch"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567396211541),t.type="page",t.permalink="/ReportDiagrams/MISCELLANOUS/cloud-arch.html",t.assets={},t.attributes=t,t.prevPost={title:"folderSetup.png",permalink:"/BlogDiagrams/folderSetup.html"},t.nextPost={title:"discordDiagram.png",permalink:"/BlogDiagrams/discordDiagram.html"},t),a=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=i}].concat(a);["layout","transition"].forEach(function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=i[t])}),e.options.name="page-wrapper-"+i.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(i.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"cloud-arch.png",alt:"ReportDiagrams/MISCELLANOUS",title:"cloud-arch"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz,11pt]{standalone}\n\\usepackage{tikz}\n\\usetikzlibrary{shapes.geometric,shapes.symbols,fit,positioning,shadows}\n\\usetikzlibrary{arrows, arrows.meta, backgrounds, calc, shapes.misc, positioning}\n\\begin{document}\n\\tikzset{\n    purpleBox/.style n args={3}{\n        text centered, fill=purpleVue, minimum width = #1, minimum height= #2, text=white,\n        text width = #3,\n        rounded corners\n    },\n    redBox/.style n args={3}{\n        text centered, fill=redVue, minimum width = #1, minimum height= #2, text=white,\n        text width = #3,\n        rounded corners\n    },\n    orangeBox/.style n args={3}{\n        fill=orangeVue, minimum width = #1, minimum height= #2, text=white,\n        text centered,\n        rounded corners\n    },\n    greenCircle/.style n args={3}{\n        fill=greenVue, minimum width = #1, minimum height= #2, text=white,\n        text centered,\n        circle\n    },\n    lineCustom/.style={\n        very thick, \n        color=gray,\n        dotted,\n        shorten <=2pt,\n        shorten >=2pt\n    },\n    arrowCustom/.style={\n        >=triangle 60,\n        ->,\n        very thick, \n        color=gray,\n        dotted\n    },\n    database/.style={\n      cylinder,\n      cylinder uses custom fill,\n      cylinder body fill=greenVue,\n      cylinder end fill=greenVue,\n      shape border rotate=90,\n      aspect=0.25,\n      draw\n    }\n}\n\\definecolor{purpleVue}{rgb}{0.6,0.5,0.9}\n\n\\definecolor{orangeVue}{rgb}{0.975,0.7,0.2}\n\n\\definecolor{greenVue}{rgb}{0.15,0.65,0.4}\n\\definecolor{redVue}{rgb}{0.95,0.45,0.55}\n\\definecolor{blueBox}{rgb}{0.3,0.65,0.85}\n% Hardcoded positioning\n\\begin{tikzpicture}\n\\node[rectangle, draw, minimum width= 10cm, minimum height=10cm, label={[anchor=north, inner sep=0pt, yshift=-0.6em, text=black]north:Online banking software}]\n(online) {};\n\\node[right= 2cm of online, draw, rectangle, minimum width= 10cm, minimum height=10cm,label={[anchor=north, inner sep=0pt, yshift=-0.6em, text=black]north:Bank   teller software}]\n(soft) {};\n\n\\node[rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow={shadow xshift=1ex, shadow yshift=-1.5ex},minimum height=1.5cm]\nat ([xshift=0em, yshift=-4em] online.north) (upa){User Profile App};\n\n\n\\node[draw, left=5cm of upa]\n(label) {Customer};\n\\node[rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow={shadow xshift=1ex, shadow yshift=-1.5ex},minimum height=1.5cm]\nat ([xshift=5em, yshift=-7.5em] upa.center) (us){User Surface};\n\n\\node[database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm]\nat ([yshift=-7.5em] us.center) (db){Database};\n\n\\node[rounded corners, draw, fill=blueBox,\nminimum width=2.2cm,minimum height=5cm, text width=2cm, align=center,\ndouble=black, %% here\ndouble distance =1pt, dashed, below left = -4em and 5 em of us] (as){Auth subsystem};\n\n\\node[database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm]\nat ([yshift=-7.5em] us.center) (db){Database};\n\n\\node[rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow={shadow xshift=1ex, shadow yshift=-1.5ex},minimum height=1.5cm]\nat ([xshift=-3em, yshift=-4em] soft.north) (a1){App};\n\n\\node[rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow={shadow xshift=1ex, shadow yshift=-1.5ex},minimum height=1.5cm]\nat ([xshift=10em] a1.center) (a2){App};\n\n\\node[rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow={shadow xshift=1ex, shadow yshift=-1.5ex},minimum height=1.5cm]\nat ([yshift=-8em] a1.center) (ps1){Promotion Service};\n\n\\node[rectangle, draw,thin, fill=blueBox, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,copy shadow={shadow xshift=1ex, shadow yshift=-1.5ex},minimum height=1.5cm]\nat ([yshift=-8em] a2.center) (ps2){Promotion Service};\n\n\\node[database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm]\nat ([yshift=-7.5em] ps2.center) (bp){Branch Promotions};\n\n\\node[database, draw,thin, text width=2cm, align=center,\ntext=white,minimum width=2.2cm,minimum height=1.5cm]\nat ([yshift=-7.5em] ps1.center) (cust){Customers};\n\n\\node[draw, above=1cm of soft]\n(bt) {Bank Teller};\n\n\\draw [->] (upa) edge (us) (upa) edge (as) (us) edge (db);\n\n\\draw [->] (a1) edge (a2) (ps1) edge (cust) (a1) edge (ps1) (a2) edge (ps2) (ps2) edge (bp);\n\\end{tikzpicture}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(r);t.default=r.exports}}]);