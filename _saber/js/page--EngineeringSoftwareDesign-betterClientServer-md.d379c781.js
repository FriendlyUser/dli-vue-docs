(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(e){var t,n,r=((t={}).internal=n=void 0,t.contentType="markdown",t.slug="EngineeringSoftwareDesign/betterClientServer",t.content=n,t.title="betterClientServer.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="betterClientServer.png" alt="EngineeringSoftwareDesign" title="betterClientServer"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567371739075),t.type="page",t.permalink="/EngineeringSoftwareDesign/betterClientServer.html",t.assets={},t.attributes=t,t.prevPost={title:"B4-8.png",permalink:"/ControlSystems/CSII/B4-8.html"},t.nextPost={title:"460A3SamplerTesting.png",permalink:"/ControlSystems/CSII/460A3SamplerTesting.html"},t),o=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=r}].concat(o);["layout","transition"].forEach(function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=r[t])}),e.options.name="page-wrapper-"+r.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(r.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"betterClientServer.png",alt:"EngineeringSoftwareDesign",title:"betterClientServer"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[border=3mm]{standalone}\n\\usepackage{tikz}\n\\usetikzlibrary{positioning,matrix,shapes.arrows}\n\n\\tikzset{\n\tmodulematrix/.style={draw=blue!50!red,rounded corners,matrix of nodes,row sep=1cm,column sep=1cm,nodes={draw=green!70,align=center,font=\\sffamily},inner ysep=0.5cm},\n\tmodule/.style={rounded corners, align=center, font=\\sffamily, thick},\n\tsimple module/.style={module, top color=blue!10, bottom color=blue!35, draw=blue!75, text width=40mm, minimum height=15mm},\n\tmodule down arrow/.style={module arrow, shape border rotate=-90},\n\tmodule right arrow/.style={module arrow},\n\tmodule arrow/.style={single arrow, single arrow head extend=2.5mm, draw=gray!75, inner color=gray!20, outer color=gray!35, thick, shape border uses incircle, anchor=tail,minimum height=0.7cm},\n}\n\\begin{document}\n\t\\begin{tikzpicture}\n\t\\node [simple module] (mA) {Module A};\n\t\\matrix[modulematrix,below=of mA,label={[anchor=south]below:Module B}] (mB) {Description 1 & Description 2 \\\\};\n\t\\matrix[modulematrix,right=of mB,nodes={text width=5cm,align=center},label={[anchor=north]above:Module C}] (mC) {Description 3 \\\\ Description 4 \\\\};\n\t\\matrix[modulematrix,below=of mC,label={[anchor=south]below:Module D}] (mD) {Description 5 & Description 6 \\\\};\n\t\\node [simple module,below=of mD] (mE) {Module E};\n\t\n\t\\foreach \\n in {mA,mC-1-1,mC,mD}\n\t\\node[module down arrow,below=1mm of \\n] {};\n\t\n\t\\foreach \\n in {mB-1-1,mB,mD-1-1}\n\t\\node[module right arrow,right=1mm of \\n] {};\n\t\\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof o&&o(i);t.default=i.exports}}]);