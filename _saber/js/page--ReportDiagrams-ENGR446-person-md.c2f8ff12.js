(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{62:function(t,e,n){"use strict";n.r(e);var o=n(0),i=function(t){var e,n,o=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="ReportDiagrams/ENGR446/person",e.content=n,e.title="person.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="person.png" alt="ReportDiagrams/ENGR446" title="person"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567371739075),e.type="page",e.permalink="/ReportDiagrams/ENGR446/person.html",e.assets={},e.attributes=e,e.prevPost={title:"latex_user_sw_levels.png",permalink:"/BlogDiagrams/latex_user_sw_levels.html"},e.nextPost={title:"ipfs-dapp.png",permalink:"/BlogDiagrams/ipfs-dapp.html"},e),i=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=o}].concat(i);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=o[e])}),t.options.name="page-wrapper-"+o.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"person.png",alt:"ReportDiagrams/ENGR446",title:"person"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz]{standalone}\n\\usetikzlibrary{positioning,fit}\n\\begin{document}\n\n\\tikzset{\n  pobl/.style={\n    inner sep=0pt, outer sep=0pt, fill=#1,\n  },\n  pobl gron/.style n args={2}{\n    pobl=#1, rounded corners=#2,\n  },\n  pics/person/.style n args={3}{\n    code={\n      \\node (-corff) [pobl=#1, minimum width=.25*#2, minimum height=.375*#2, rotate=#3, pic actions] {};\n      \\node (-pen) [minimum width=.3*#2, circle, pobl=#1, outer sep=.01*#2, anchor=south, rotate=#3, pic actions] at (-corff.north) {};\n      \\node (-coes dde) [pobl gron={#1}{1pt}, anchor=north west, minimum width=.12125*#2, minimum height=.25*#2, rotate=#3, pic actions] at (-corff.south west) {};\n      \\node [pobl=#1, anchor=north, minimum width=.12125*#2, minimum height=.15*#2, rotate=#3, pic actions] at (-coes dde.north) {};\n      \\node (-coes chwith) [pobl gron={#1}{1pt}, anchor=north east, minimum width=.12125*#2, minimum height=.25*#2, rotate=#3, pic actions] at (-corff.south east) {};\n      \\node [pobl=#1, anchor=north, minimum width=.12125*#2, minimum height=.15*#2, rotate=#3, pic actions] at (-coes chwith.north) {};\n      \\node (-braich dde) [pobl gron={#1}{.75pt}, minimum width=.075*#2, minimum height=.325*#2, outer sep=.0064*#2, anchor=north west, rotate=#3, pic actions] at (-corff.north east)  {};\n      \\node [pobl=#1, minimum width=.05*#2, minimum height=.2*#2, outer sep=.0064*#2, anchor=north west, rotate=#3, pic actions] at (-corff.north east) {};\n      \\node (-braich chwith) [pobl gron={#1}{.75pt}, minimum width=.075*#2, minimum height=.325*#2, outer sep=.0064*#2, anchor=north east, rotate=#3, pic actions] at (-corff.north west) {};\n      \\node [pobl=#1, minimum width=.0375*#2, minimum height=.2*#2, outer sep=.0064*#2, anchor=north east, rotate=#3, pic actions] at (-corff.north west) {};\n      \\node (-fit person) [fit={(-pen.north) (-braich dde.east) (-coes chwith.south) (-braich chwith.west)}] {};\n     % \\node (-pwy) [below=25pt of -fit person, every pin] {\\tikzpictext};\n     % This draws the arrow\n     %\\draw [every pin edge] (-fit person) -- (-pwy);\n    },\n  },\n}\n\n\\begin{tikzpicture}\n%  [\n%    every pin edge/.append style={latex-, shorten <=-2.5pt},\n%  ]\n\n   \\draw pic (person) [pic text={}] {person={blue}{25pt}{0}};\n\\end{tikzpicture}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof i&&i(r);e.default=r.exports}}]);