(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{143:function(t,n,e){"use strict";e.r(n);var a=e(0),i=function(t){var n,e,a=((n={}).internal=e=void 0,n.contentType="markdown",n.slug="DSP/a5_4c",n.content=e,n.title="a5_4c.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="a5_4c.png" alt="DSP" title="a5_4c"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567371739075),n.type="page",n.permalink="/DSP/a5_4c.html",n.assets={},n.attributes=n,n.prevPost={title:"tikzElecMag.png",permalink:"/ElectroMag/tikzElecMag.html"},n.nextPost={title:"transformer.png",permalink:"/ElectroMag/transformer.html"},n),i=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(i);["layout","transition"].forEach(function(n){var e=t.options.PageComponent;e&&(t.options[n]=e[n]),void 0===t.options[n]&&(t.options[n]=a[n])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(a.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("layout-manager",[n("p",[n("img",{attrs:{src:"a5_4c.png",alt:"DSP",title:"a5_4c"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[border={10pt}]{standalone}\n\\usepackage{tikz,pgfplots,filecontents,amsmath}\n\\pgfplotsset{compat=1.5}\n\n\\begin{filecontents}{data.dat}\n n   hn \n 0   2  \n 1   -3  \n 2   2.0  \n% 3   0.0 \n %4   0.0 \n% 5   0.0\n\\end{filecontents}\n\n\n\\begin{document}\n\n\\begin{tikzpicture}\n\\begin{axis}\n[%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n    axis x line=middle,\n    axis y line=middle,\n    every axis x label={at={(current axis.right of origin)},anchor=north west},\n    every axis y label={at={(current axis.above origin)},anchor= north west},\n    every axis plot post/.style={mark options={fill=black}},\n    xlabel={$n$},\n    ylabel={$\\boldsymbol{h[n]}$},\n    xtick={-1,0,2,4},\n    ymin=-3,\n    ymax=3,\n]%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n\\addplot+[ycomb,black,thick] table [x={n}, y={hn}] {data.dat};\n\\end{axis}\n\\end{tikzpicture}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof i&&i(o);n.default=o.exports}}]);