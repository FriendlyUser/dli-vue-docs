(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{172:function(t,e,n){"use strict";n.r(e);var i=n(0),a=function(t){var e,n,i=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="EngineeringSoftwareDesign/Matching",e.content=n,e.title="Matching.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="Matching.png" alt="EngineeringSoftwareDesign" title="Matching"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567371739079),e.type="page",e.permalink="/EngineeringSoftwareDesign/Matching.html",e.assets={},e.attributes=e,e.prevPost={title:"polesZeroes.png",permalink:"/ControlSystems/CSII/polesZeroes.html"},e.nextPost={title:"pf.png",permalink:"/ControlSystems/CSII/pf.html"},e),a=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=i}].concat(a);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=i[e])}),t.options.name="page-wrapper-"+i.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(i.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"Matching.png",alt:"EngineeringSoftwareDesign",title:"Matching"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{article}\n\\usepackage{tikz}\n\\usepackage{xparse}\n\\usetikzlibrary{tikzmark,decorations.pathreplacing,calc,decorations.markings}\n\n\\definecolor{colori}{RGB}{166,35,41}\n\\definecolor{colorii}{RGB}{248,219,162}\n\n\\NewDocumentCommand\\MyArrow{O{0pt}mmmO{out=150,in=210}}\n{%\n\\begin{tikzpicture}[overlay, remember picture]\n  \\draw [->,thick,line width=4pt,#4]\n    ( $ ({pic cs:#3}|-{pic cs:#2}) + (-#1,1.3ex) $ ) to[#5]  \n    ( $ (pic cs:#3) + (-#1,0) $ );\n\\end{tikzpicture}%\n}\n\n\\begin{document}\n\n\\MyArrow[0.8em]{start1}{end1}{colorii,line width=3pt}[out=90,in=-90]\n\\MyArrow[1.8em]{start2}{end1}{colori}[out=120,in=250]\n\\MyArrow[0.4em]{start3}{end3}{colori}[out=240,in=-30]\n\\begin{itemize}\n\\item\\tikzmark{end1}Processing \n\\item\\tikzmark{start1}Embedding in paraffin blocks\n\\item Microtomy\n\\item\\tikzmark{start2}Staining\n\\item Microscopy \n\\item Testing \\tikzmark{start3} \\hfill Math \\tikzmark{end3}\n\\item\n\\end{itemize}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(r);e.default=r.exports}}]);