(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{165:function(t,e,n){"use strict";n.r(e);var a=n(0),i=function(t){var e,n,a=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="DVP/lattice-sampling",e.content=n,e.title="lattice-sampling.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="lattice-sampling.png" alt="DVP" title="lattice-sampling"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567390847097),e.type="page",e.permalink="/DVP/lattice-sampling.html",e.assets={},e.attributes=e,e.prevPost={title:"Q8Circuit.png",permalink:"/ElectroMag/Q8Circuit.html"},e.nextPost={title:"Transformer3Windings.png",permalink:"/ElectroMag/Transformer3Windings.html"},e),i=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(i);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=a[e])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},l=Object(a.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"lattice-sampling.png",alt:"DVP",title:"lattice-sampling"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{tikz}\n\\usetikzlibrary{positioning, calc}\n\\begin{document}\n\\begin{tikzpicture}[align=center,node distance=0.5cm]\n\\tikzset{\ndarkstyle/.style={circle,draw,fill=gray!40,minimum size=20},\nfilled/.style={circle,draw,fill=gray!60, minimum size=5},\nwhite/.style={circle,draw, minimum size=5,,xshift=-0.5cm},\n}\n% number of vertices\n\\def \\n {5}\n\\def \\xshift{2cm}\n\\foreach \\x in {0,...,\\n}\n{   \\foreach \\y in {0,...,\\n}\n    {   \\pgfmathtruncatemacro{\\nodelabel}{\\x+\\y*6+1}\n        %\\pgfmathtruncatemacro{\\row}{Mod(\\x,2)}\n        \\pgfmathparse{Mod(\\y,2)==0?1:0}\n        \\ifnum\\pgfmathresult>0\n            \\node[filled] (\\nodelabel) at (0.75*\\x,-0.75*\\y) {};\n        \\else\n            \\node[white] (\\nodelabel) at (0.75*\\x,-0.75*\\y) {};\n        \\fi\n    }\n}\n% \\draw[latex-latex] (19.west) -- ++ (25.west) node[midway]{label};\n \\draw [latex-latex] ($(19.west) + (-0.25cm, 0)$) -- ($(31.west) + (-0.25cm, 0)$) node[midway, fill=white]{$2\\Delta_y$};\n  \\draw [latex-latex] ($(31.south) + (0cm, -0.25cm)$) -- ($(32.south) + (0cm, -0.25cm)$) node[midway, below, yshift=-0.1cm, fill=white]{$\\Delta_x$};\n  % Add nodes for ts\n  % \\draw[latex-latex] ($(7.south) + (-0.25cm, -0.25cm)$) -- ($(1.south) + (-0.25cm, -0.25cm)$) node[midway, below, yshift=-0.1cm, fill=white]{$\\Delta_x$};\n  \n  \\node[filled, left = of 1, xshift =-0.25cm] (aa) {};\n  \\node[white, left = of 7, xshift =-0.15cm] (ab) {};\n\\draw [latex-latex] ($(ab) + (0cm, 0cm)$) -- ($(aa) + (0cm, 0cm)$) node[below, yshift=-0.2cm]{$\\frac{\\Delta_t}{2}$};\n\\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof i&&i(l);e.default=l.exports}}]);