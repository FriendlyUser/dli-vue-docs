(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{148:function(t,n,a){"use strict";a.r(n);var e=a(0),s=function(t){var n,a,e=((n={}).internal=a=void 0,n.contentType="markdown",n.slug="DSP/c514_c",n.content=a,n.title="c514_c.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="c514_c.png" alt="DSP" title="c514_c"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567371739075),n.type="page",n.permalink="/DSP/c514_c.html",n.assets={},n.attributes=n,n.prevPost={title:"Transformer3Windings.png",permalink:"/ElectroMag/Transformer3Windings.html"},n.nextPost={title:"phasor.png",permalink:"/ElectroMag/phasor.html"},n),s=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=e}].concat(s);["layout","transition"].forEach(function(n){var a=t.options.PageComponent;a&&(t.options[n]=a[n]),void 0===t.options[n]&&(t.options[n]=e[n])}),t.options.name="page-wrapper-"+e.slug.replace(/[^0-9a-z\-]/i,"-")},l=Object(e.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("layout-manager",[n("p",[n("img",{attrs:{src:"c514_c.png",alt:"DSP",title:"c514_c"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[border={10pt}]{standalone}\n\\usepackage{tikz,pgfplots,filecontents,amsmath}\n\\pgfplotsset{compat=1.5}\n\n\\begin{document}\n\n\\begin{tikzpicture}\n\\begin{axis}\n[%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\nheight=5cm,\nwidth=\\textwidth,\n    axis x line=middle,\n    axis y line= none,\n%    ylabel={Signal Spectrum of $x(t)$},\n     every axis x label={at={(current axis.left of origin)},anchor=south west},\n%    every axis y label={at={(current axis.above origin)},anchor= north west},\n    %every axis plot post/.style={mark options={fill=black}},\n    % every axis plot/.append style={ultra thick},\n   xlabel={$f$},\n%    ylabel={$\\boldsymbol{x[n]}$},\n    xtick={0,1,...,11},\n    ymax=150,\n    xmax=11,\n    xmin=-1,\n]%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n%\\addplot+[ycomb,black,thick] table [x={n}, y={xn}] {data.dat};\n\\addplot+[ycomb,black] plot coordinates\n{(0,1) (1,2) (2,4) (3,8) (4,16) (5,32) (6,64) (7,128) (8,0) (9,0) (10,0)};\n\\node[label={{$1$}}] at (axis cs:0.25,1) {};\n\\node[label={{$a^{1}$}}] at (axis cs:1,2) {};\n\\node[label={{$a^{2}$}}] at (axis cs:2,3) {};\n\\node[label={{$a^{3}$}}] at (axis cs:3,6) {};\n\\node[label={{$a^{4}$}}] at (axis cs:4,10) {};\n\\node[label={{$a^{5}$}}] at (axis cs:5,30) {};\n\\node[label={{$a^{6}$}}] at (axis cs:6,60) {};\n\\node[label={{$a^{7}$}}] at (axis cs:7,110) {};\n\\node[label={{$0$}}] at (axis cs:8,0) {};\n\\node[label={{$0$}}] at (axis cs:9,0) {};\n\\node[label={{$0$}}] at (axis cs:10,0) {};\n\\end{axis}\n\\end{tikzpicture}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof s&&s(l);n.default=l.exports}}]);