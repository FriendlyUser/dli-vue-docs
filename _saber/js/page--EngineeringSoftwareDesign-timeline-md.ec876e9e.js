(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{141:function(e,t,n){"use strict";n.r(t);var i=n(0),a=function(e){var t,n,i=((t={}).internal=n=void 0,t.contentType="markdown",t.slug="EngineeringSoftwareDesign/timeline",t.content=n,t.title="timeline.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="timeline.png" alt="EngineeringSoftwareDesign" title="timeline"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567390847093),t.type="page",t.permalink="/EngineeringSoftwareDesign/timeline.html",t.assets={},t.attributes=t,t.prevPost={title:"ex1.png",permalink:"/ControlSystems/CSI/ex1.html"},t.nextPost={title:"conSys.png",permalink:"/ControlSystems/CSI/conSys.html"},t),a=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=i}].concat(a);["layout","transition"].forEach(function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=i[t])}),e.options.name="page-wrapper-"+i.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(i.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"timeline.png",alt:"EngineeringSoftwareDesign",title:"timeline"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[6pt]{standalone}\n\\usepackage{tikz}\n\\usetikzlibrary{snakes}\n\\usepackage{fullpage}\n\n\\begin{document}\n\n\n%\n%\\begin{figure}\n%\\caption{Time Line}\n%\\centering\n%\\resizebox{\\linewidth}{!}{% Resize table to fit within\n\n\\begin{tikzpicture}[]\n%draw horizontal line\n\\draw (0,0) -- (41/1.7,0);\n%draw vertical lines\n\\foreach \\x in {0, 8, 15, 22, 29, 36, 41}{\n   \\draw (\\x/1.7,3pt) -- (\\x/1.7,-3pt);\n}\n%draw nodes\n\\draw (0,0) node[text width = 85pt,align=center,below=3pt] {\\textbf{Submit Project Proposal}} node[above=3pt] {Nov 17 2017};\n\\draw (8/1.7,0) node[below=3pt] {Find Game Engine} node[above=3pt] {Nov 20 2017};\n\\draw (15/1.7,0) node[text width = 100pt,align=center,below=3pt] {Create Server-Client Architecture} node[above=3pt] {Nov 25 2017};\n\\draw (22/1.7,0) node[text width = 100pt,align=center,below=3pt] {Implement Game Logic} node[above=3pt] {Nov 29 2017};\n\\draw (29/1.7,0) node[text width = 100pt,align=center,below=3pt] {Add Music and Effects} node[above=3pt] {Dec 1 2017};\n\\draw (36/1.7,0) node[text width = 100pt,align=center,below=3pt] {\\textbf{In Class Demo}} node[above=3pt] {Dec 2 2017};\n\\draw (41/1.7,0) node[below=3pt] {\\textbf{Finish Report}} node[above=3pt] {Dec 12 2017};\n\\end{tikzpicture}\n%}\n%\\label{fig:time_line}\n%\\end{figure}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(o);t.default=o.exports}}]);