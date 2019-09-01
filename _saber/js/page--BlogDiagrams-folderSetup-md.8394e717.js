(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{51:function(e,t,n){"use strict";n.r(t);var o=n(0),r=function(e){var t,n,o=((t={}).internal=n=void 0,t.contentType="markdown",t.slug="BlogDiagrams/folderSetup",t.content=n,t.title="folderSetup.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="folderSetup.png" alt="BlogDiagrams" title="folderSetup"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567371739079),t.type="page",t.permalink="/BlogDiagrams/folderSetup.html",t.assets={},t.attributes=t,t.prevPost={title:"smartContractsExp.png",permalink:"/ReportDiagrams/ENGR446/smartContractsExp.html"},t.nextPost={title:"weeklyPlanLOL.png",permalink:"/ReportDiagrams/ENGR446/weeklyPlanLOL.html"},t),r=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=o}].concat(r);["layout","transition"].forEach(function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=o[t])}),e.options.name="page-wrapper-"+o.slug.replace(/[^0-9a-z\-]/i,"-")},a=Object(o.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"folderSetup.png",alt:"BlogDiagrams",title:"folderSetup"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[border=10pt]{standalone}\n\\usepackage{forest}\n\n\\definecolor{fblue}{RGB}{92,144,192}\n\\definecolor{fgreen}{RGB}{34,162,70}\n\n\\newcommand\\myfolder[2][fblue]{%\n\\begin{tikzpicture}[overlay]\n\\begin{scope}[xshift=20pt]\n\\filldraw[rounded corners=1pt,fill=#1,draw=white,double=black]\n  (-23pt,10pt) -- ++(3pt,5pt) -- ++(18pt,0pt) -- ++(40:3pt) -- ++(9pt,0pt) -- ++(-40:3pt)\n  -- (20pt,15pt) -- (23pt,10pt) -- cycle;\n\\filldraw[rounded corners,draw=white,double=black,top color=#1,bottom color=#1!30]\n  (-22pt,-12pt) -- ++(44pt,0pt) -- (25pt,12pt) coordinate (topr) -- ++(-50pt,0pt) coordinate (topl) -- cycle;\n\\end{scope}  \n\\end{tikzpicture}%\n\\makebox[35pt]{\\raisebox{-3pt}{{\\ttfamily/#2}}}%\n}\n\n\\begin{document}\n\n\\begin{forest}\n  for tree={\n    font=\\sffamily,\n    minimum height=0.75cm,\n    rounded corners=4pt,\n    grow'=0,\n    inner ysep=8pt,\n    child anchor=west,\n    parent anchor=south,\n    anchor=west,\n    calign=first,\n    edge={rounded corners},\n    edge path={\n      \\noexpand\\path [draw, \\forestoption{edge}]\n      (!u.south west) +(12.5pt,0) |- (.child anchor)\\forestoption{edge label};\n    },\n    before typesetting nodes={\n      if n=1\n        {insert before={[,phantom,minimum height=18pt]}}\n        {}\n    },\n    fit=band,\n    s sep=12pt,\n    before computing xy={l=25pt},\n  }\n[\\myfolder{}\n  [\\myfolder{jhunt}]\n  [\\myfolder{dev}\n  \t[{\\myfolder[fgreen]{bchain}}]\n  \t[{\\myfolder[fgreen]{other}}]\n  ]\n  [{\\myfolder[fgreen]{games}}\n    [{\\myfolder[fgreen]{vns}}]\n    [{\\myfolder[fgreen]{other}}]\n  ]\n  [\\myfolder{music}]\n  [\\myfolder{other}]\n]\n\\end{forest}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof r&&r(a);t.default=a.exports}}]);