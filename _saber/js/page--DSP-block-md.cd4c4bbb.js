(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{158:function(t,n,e){"use strict";e.r(n);var a=e(0),o=function(t){var n,e,a=((n={}).internal=e=void 0,n.contentType="markdown",n.slug="DSP/block",n.content=e,n.title="block.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="block.png" alt="DSP" title="block"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567390847097),n.type="page",n.permalink="/DSP/block.html",n.assets={},n.attributes=n,n.prevPost={title:"tikzElecMag.png",permalink:"/ElectroMag/tikzElecMag.html"},n.nextPost={title:"transformer.png",permalink:"/ElectroMag/transformer.html"},n),o=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(o);["layout","transition"].forEach(function(n){var e=t.options.PageComponent;e&&(t.options[n]=e[n]),void 0===t.options[n]&&(t.options[n]=a[n])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(a.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("layout-manager",[n("p",[n("img",{attrs:{src:"block.png",alt:"DSP",title:"block"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{pst-sigsys}\t%Not used in the creation of this document\n\\usepackage{tikz}\n\\usetikzlibrary{arrows,automata}\n\\usetikzlibrary{automata,positioning,arrows.meta}\n\\usetikzlibrary{circuits}\n\\begin{document}\n\n\\tikzset{%\n\tblock/.style    = {draw, thick, rectangle, minimum height = 3em,\n\t\tminimum width = 3em},\n\tmult/.style    = {draw, circle, node distance = 2cm}, % Multipler\n\tsum/.style      = {draw, circle, node distance = 2cm}, % Adder\n\tinput/.style    = {coordinate}, % Input\n\toutput/.style   = {coordinate} % Output\n\tlabel/.style   = {draw=none} % Text label\n\t\n}\n\\newcommand{\\suma}{\\Large$+$}\n\\newcommand{\\mult}{\\Large$\\times$}\n\\newcommand{\\inte}{$\\displaystyle \\int$}\n\\newcommand{\\derv}{\\Huge$\\frac{d}{dt}$}\n\n\\begin{tikzpicture}[auto, node distance=2cm,thick]\n\\matrix[column sep = .75cm, row sep = .75cm]\n{   & & & & & & &\\\\\n\t\\node [coordinate](a1){}; & \\node [block](A2){$\\{b_k\\}=\\{1,1,1,1\\}$}; & \t\n\t\\node [coordinate](a3){}; & & & & &\\\\\n\t\\node (x){$x[n]$}; & & \\node [sum](add1){\\suma}; &  &\\node [coordinate](b5){}; & \\node [block](B6){$\\{b_k\\}=\\{1,-1\\}$}; & \\node [coordinate](b7){};& \\node [coordinate](b8){}; \\\\\n\t\\node [coordinate](c1){}; & \\node [block](C2){$\\{b_k\\}=\\{1,1,1,1\\}$}; & \\node [coordinate](c3){}; & & & & &\\\\\n\t& & & & & & &\\\\\n};\n\\draw [-] (x) to (a1);\n\\draw [->] (a1) to (A2);\n\\draw [-] (A2) to (a3);\n\\draw [->] (a3) to (add1);\n\\draw [-] (x) to (c1);\n\\draw [->] (c1) to (C2);\n\\draw [-] (C2) to (c3);\n\\draw [->] (c3) to (add1);\n\\draw [->] (add1) to (B6);\n\\draw [->] (B6) to (b7);\n\n%draw S text labels\n\\node[label,shift={(0,0.75)}] at (A2) {System $S_1$};\n\\node[label,shift={(0,-0.75)}] at (C2) {System $S_2$};\n\\node[label,shift={(0,-0.75)}] at (B6) {System $S_3$};\n\\node[label,shift={(-0.25,0.25)}] at (a3) {$y_1[n]$};\n\\node[label,shift={(-0.25,-0.25)}] at (c3) {$y_2[n]$};\n\\node[label,shift={(-0.25,0.25)}] at (b5) {$w[n]$};\n\\node[label,shift={(-0.25,0)}] at (b8) {$y[n]$};\n\\end{tikzpicture}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof o&&o(i);n.default=i.exports}}]);