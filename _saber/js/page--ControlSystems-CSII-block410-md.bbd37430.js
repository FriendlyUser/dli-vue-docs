(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{120:function(t,e,n){"use strict";n.r(e);var o=n(0),s=function(t){var e,n,o=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="ControlSystems/CSII/block410",e.content=n,e.title="block410.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="block410.png" alt="ControlSystems/CSII" title="block410"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567371739079),e.type="page",e.permalink="/ControlSystems/CSII/block410.html",e.assets={},e.attributes=e,e.prevPost={title:"SeqDiagramReport.png",permalink:"/EngineeringSoftwareDesign/SeqDiagramReport.html"},e.nextPost={title:"SeqGoodExample.png",permalink:"/EngineeringSoftwareDesign/SeqGoodExample.html"},e),s=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=o}].concat(s);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=o[e])}),t.options.name="page-wrapper-"+o.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"block410.png",alt:"ControlSystems/CSII",title:"block410"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[%\n% border=1pt\nborder={-25pt 0pt 0pt 0pt} % left bottom right top\n]{standalone}\n\\usepackage{tikz}\n\\usepackage{amsmath}\n\\usetikzlibrary{positioning}\n\\usetikzlibrary{shapes,arrows,calc} \n\\usetikzlibrary{decorations.text}\n\\usetikzlibrary{decorations.pathreplacing}\n\\tikzset{add/.style n args={4}{\n\t\tminimum width=6mm,\n\t\tpath picture={\n\t\t\t\\draw[black] \n\t\t\t(path picture bounding box.south east) -- (path picture bounding box.north west)\n\t\t\t(path picture bounding box.south west) -- (path picture bounding box.north east);\n\t\t\t\\node at ($(path picture bounding box.south)+(0,0.13)$)     {\\tiny #1};\n\t\t\t\\node at ($(path picture bounding box.west)+(0.13,0)$)      {\\tiny #2};\n\t\t\t\\node at ($(path picture bounding box.north)+(0,-0.13)$)        {\\tiny #3};\n\t\t\t\\node at ($(path picture bounding box.east)+(-0.13,0)$)     {\\tiny #4};\n\t\t}\n\t}\n}\n\\begin{document}\n\t\n%\\begin{figure}\n%\\centering\n\t%\\tikzstyle{block} = [draw, fill=blue!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{block} = [draw, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{controller} = [draw, fill=red!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{sum} = [draw, fill=blue!20, circle, node distance=1cm]\n\t\\tikzstyle{input} = [coordinate]\n\t\\tikzstyle{output} = [coordinate]\n\t\\tikzstyle{sampleSP} = [coordinate]\n\t\\tikzstyle{sampleEP} = [coordinate]\n\t\\tikzstyle{otherPoint} = [coordinate]\n\t\\tikzset{\n\t\tposition label/.style={\n\t\t\tbelow = 3pt,\n\t\t\ttext height = 1.5ex,\n\t\t\ttext depth = 1ex\n\t\t},\n\t\tbrace/.style={\n\t\t\tdecoration={brace, mirror},\n\t\t\tdecorate\n\t\t}\n\t}\n\t\\begin{tikzpicture}[auto, >=latex']\n\t% Nodes\n\t\\node [input] (input) {};\n\t%\\node [sum, right = 1cm of input] (sum) {};\n\t\\node[draw,circle,add={--}{+}{}{},right of= input](sum){}; \n\t\\node [sampleSP, right = 1cm of sum] (sumSP) {};\n\t\\node [sampleEP, right = 1cm of sumSP] (sumEP) {};\n\t\\node [sampleEP, above = 1cm of sumEP] (sumEPTOP) {};\n\t\\node [block, right = 1cm of sumEP,text width=1.75cm,align=center] (systemK) {Digital PI Controller};\n\t\\node [block, right = 1cm of systemK] (systemZOH) {$\\cfrac{1-e^{-s}}{s}$};\n\t\\node [block, right = 1cm of systemZOH] (system) {$\\cfrac{10}{(s+1)(s+5)}$};\n\t\\node [otherPoint,right = 1cm of system] (branchPoint) {};\n\t\\node [otherPoint,below = 1 cm of system] (belowsystem) {}; %{$\\frac{1}{Ts+1}$};\n\t%\\node [block, right = 1cm of system] (system2) {$\\frac{1}{Ts+1}$};\n\t\\node [output, right = 1cm of branchPoint] (output) {};\n\t\\node [input, below = 2cm of system] (m) {};\n\n\t% Arrows\n\t\\draw [draw,->] (input) -- node {$R$} (sum);\n\t% Arrows for first sampler\n\t\\draw [-] (sum) -- node {$E(s)$} (sumSP);\n\t\\draw [-,thick] (sumEPTOP) -- node {$\\delta_\\tau$} (sumSP);\n\t\\draw [->] (sumEP) -- node {$E^\\ast(s)$} (systemK);\n\t\\draw [->] (systemK) -- node {} (systemZOH);\n\t\\draw [->] (systemZOH) -- node {} (system);\n\t%\\draw [->] (sumEP) -- node {$M^\\ast(s)$} (systemH);\n\t% \\draw [->] (system) --  (system2);\n\t\\draw [-] (system) --  (branchPoint);\n\t\\draw [->] (branchPoint) -- node (y) {$C(s)$}(output);\n\n\t\\draw [-] (y) |- (m) {} ;\n\t\\draw [->] (m) -| (sum); %{$-$}  node [near end] {} (sum);\n\t%\\node [below = 0.005 cm of system] (PointHeader) {\\scriptsize{$G(s)$}};\n\t\\draw[thick,dotted]     ($(systemZOH.north west)+(-0.25,0.15)$) rectangle ($(system.south east)+(0.25,-0.15)$);\n\t\\draw [brace,decoration={raise=2ex}] (systemZOH.south west) -- node [position label,yshift=-2ex] {$G(s)$} (system.south east);\n\t\\end{tikzpicture}\n%\\end{figure}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof s&&s(i);e.default=i.exports}}]);