(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{149:function(t,e,n){"use strict";n.r(e);var o=n(0),a=function(t){var e,n,o=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="EngineeringSoftwareDesign/document",e.content=n,e.title="document.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="document.png" alt="EngineeringSoftwareDesign" title="document"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567390847093),e.type="page",e.permalink="/EngineeringSoftwareDesign/document.html",e.assets={},e.attributes=e,e.prevPost={title:"timeline.png",permalink:"/ControlSystems/CSI/timeline.html"},e.nextPost={title:"polesZeroes.png",permalink:"/ControlSystems/CSI/polesZeroes.html"},e),a=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=o}].concat(a);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=o[e])}),t.options.name="page-wrapper-"+o.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"document.png",alt:"EngineeringSoftwareDesign",title:"document"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[12pt,a4paper]{standalone}\n\\usepackage[utf8]{inputenc}\n\\usepackage[T1]{fontenc}\n\\usepackage{tikz}\n\\begin{document}\n\t\n\t\\begin{tikzpicture}\n\t\\draw (0,0) -- (13,0);\n\t\\foreach \\x in {0,2,4,6,8,12,13}\n\t\\draw (\\x cm,3pt) -- (\\x cm,-3pt);\n\t\\draw (0,0) node[below=3pt] (a) {$(i)$} node[above=3pt] {};\n\t\\draw (2,0) node[below=3pt] (b) {} node[above=3pt] {$(ii)$};\n\t\\draw (4,0)  node[below=3pt]  {$(iii)$} node[above=3pt] (c) {};\n\t\\draw (6,0) node[below=3pt](d) {} node[above=3pt] {$(iv)$};\n\t\\draw (8,0) node[below=3pt](e) {$(v)$} node[above=3pt] {};\n\t\\draw (12,0) node[above=3pt] (f) {$(vi)$} node[below=3pt] {};\n\t\\draw[latex-latex]\n\t(e.north) -- (f.north);\n\t\\draw[latex-latex,blue]\n\t(e.north) to[bend left] (f.north);\n\t\\draw[latex-latex,red]\n\t(e.north) to[out=60,in=150] (f.north);\n\t\\end{tikzpicture}\\qquad\n%\t\\begin{tikzpicture}\n%\t\\draw (0,0) -- (13,0);\n%\t\\foreach \\x in {0,2,4,6,8,12,13}\n%\t\\draw (\\x cm,3pt) -- (\\x cm,-3pt);\n%\t\\draw (0,0) node[below=3pt] (a) {$(i)$} node[above=3pt] {};\n%\t\\draw (2,0) node[below=3pt] (b) {} node[above=3pt] {$(ii)$};\n%\t\\draw (4,0)  node[below=3pt]  {$(iii)$} node[above=3pt] (c) {};\n%\t\\draw (6,0) node[below=3pt](d) {} node[above=3pt] {$(iv)$};\n%\t\\draw (8,0) node[below=3pt](e) {$(v)$} node[above=3pt] {};\n%\t\\draw (12,0) node[above=3pt] (f) {$(vi)$} node[below=3pt] {};\n%\t\\draw[latex-latex]\n%\t(e.north|-f.north) -- (f.north);\n%\t\\draw[latex-latex,blue]\n%\t(e.north|-f.north) to[bend left] (f.north);\n%\t\\draw[latex-latex,red]\n%\t(e.north|-f.north) to[out=60,in=120] (f.north);\n%\t\\end{tikzpicture}\n\t\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(r);e.default=r.exports}}]);