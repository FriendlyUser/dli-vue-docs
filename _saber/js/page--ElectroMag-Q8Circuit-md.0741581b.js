(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{198:function(t,e,a){"use strict";a.r(e);var n=a(0),i=function(t){var e,a,n=((e={}).internal=a=void 0,e.contentType="markdown",e.slug="ElectroMag/Q8Circuit",e.content=a,e.title="Q8Circuit.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="Q8Circuit.png" alt="ElectroMag" title="Q8Circuit"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567390847101),e.type="page",e.permalink="/ElectroMag/Q8Circuit.html",e.assets={},e.attributes=e,e.prevPost={title:"lbp.png",permalink:"/DVP/lbp.html"},e.nextPost={title:"lattice-sampling.png",permalink:"/DVP/lattice-sampling.html"},e),i=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=n}].concat(i);["layout","transition"].forEach(function(e){var a=t.options.PageComponent;a&&(t.options[e]=a[e]),void 0===t.options[e]&&(t.options[e]=n[e])}),t.options.name="page-wrapper-"+n.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"Q8Circuit.png",alt:"ElectroMag",title:"Q8Circuit"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage[american]{circuitikz}\n\\usepackage{graphicx}\n\\usepackage{mathrsfs} \n\\usepackage{latexsym,amssymb,amsmath}\n\\newcommand{\\equal}{=}\n\\begin{document}\n\t\\begin{circuitikz}\n\t\t\\draw (6,0) to [V,i^>=$\\phi_T$, l^= $\\mathscr{F}$,v_>=$NI$, color=blue] (0,0)\n\t\t(0,0) -- (0,4)\n\t\t(0,4) -- (1,4)\n\t\t(1,4) -- (1,2)\n\t\t(1,4) -- (1,6)\n\t\t(1,6) to [R,i>=$\\phi_1$, l^= $\\mathscr{R}_{2}$,v_>=$\\mathscr{F}_2$, color=purple] (3,6)\n\t\t(3,6) to [R, l^= $\\mathscr{R}_{3}$,v_>=$\\mathscr{F}_3$, color=purple] (5,6)\n\t\t(5,6) -- (5,4)\n\t\t(1,2) to [R,i>=$\\phi_1$, l^= $\\mathscr{R}_{1}$,v_>=$\\mathscr{F}_1$, color=red] (4,2)\n\t\t(4,2) -- (5,2)\n\t\t(5,2) -- (5,4)\n\t\t(5,4) -- (6,4)\n\t\t(6,4) -- (6,0) \n\t\t;\\end{circuitikz}\n\t\\label{fig:q1fig}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof i&&i(r);e.default=r.exports}}]);