(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{125:function(t,e,n){"use strict";n.r(e);var s=n(0),o=function(t){var e,n,s=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="ControlSystems/CSII/B4-8",e.content=n,e.title="B4-8.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="B4-8.png" alt="ControlSystems/CSII" title="B4-8"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567390847093),e.type="page",e.permalink="/ControlSystems/CSII/B4-8.html",e.assets={},e.attributes=e,e.prevPost={title:"bytefieldCENG356A2.png",permalink:"/EngineeringSoftwareDesign/bytefieldCENG356A2.html"},e.nextPost={title:"bytefieldTest.png",permalink:"/EngineeringSoftwareDesign/bytefieldTest.html"},e),o=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=s}].concat(o);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=s[e])}),t.options.name="page-wrapper-"+s.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(s.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"B4-8.png",alt:"ControlSystems/CSII",title:"B4-8"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[%\n% border=1pt\nborder={-25pt 0pt 0pt 0pt} % left bottom right top\n]{standalone}\n\\usepackage{amsmath}\n\\usepackage{tikz}\n\\usetikzlibrary{positioning}\n\\usetikzlibrary{shapes,arrows,calc} \n\\usetikzlibrary{decorations.text}\n\\tikzset{add/.style n args={4}{\n\t\tminimum width=6mm,\n\t\tpath picture={\n\t\t\t\\draw[black] \n\t\t\t(path picture bounding box.south east) -- (path picture bounding box.north west)\n\t\t\t(path picture bounding box.south west) -- (path picture bounding box.north east);\n\t\t\t\\node at ($(path picture bounding box.south)+(0,0.13)$)     {\\tiny #1};\n\t\t\t\\node at ($(path picture bounding box.west)+(0.13,0)$)      {\\tiny #2};\n\t\t\t\\node at ($(path picture bounding box.north)+(0,-0.13)$)        {\\tiny #3};\n\t\t\t\\node at ($(path picture bounding box.east)+(-0.13,0)$)     {\\tiny #4};\n\t\t}\n\t}\n}\n\\begin{document}\n\t\n\t%\\begin{figure}\n\t%\\centering\n\t\\tikzstyle{block} = [draw, fill=blue!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{controller} = [draw, fill=red!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{sum} = [draw, fill=blue!20, circle, node distance=1cm]\n\t\\tikzstyle{input} = [coordinate]\n\t\\tikzstyle{output} = [coordinate]\n\t\\tikzstyle{sampleSP} = [coordinate]\n\t\\tikzstyle{sampleEP} = [coordinate]\n\t\\tikzstyle{otherPoint} = [coordinate]\n\t\\begin{tikzpicture}[auto, >=latex']\n\t% Nodes\n\t\\node [input] (input) {};\n\t%\\node [sum, right = 1cm of input] (sum) {};\n\t\\node[draw,circle,add={--}{+}{}{},right of= input](sum){}; \n\t%\\node [sampleSP, right = 1cm of sum] (sumSP) {};\n\t%\\node [sampleEP, right = 1cm of sumSP] (sumEP) {};\n\t%\\node [sampleEP, above = 1cm of sumEP] (sumEPTOP) {};\n\t\\node [block, right = 0.5cm of sum] (system) {$\\cfrac{K(z+1)}{(z-1)(z-0.6065)}$}; % node[label=below:$b_1$,draw]{};\n\t%\\node [below = 0.005 cm of system] (PointHeader) {\\scriptsize{$G(s)$}};\n\t\\node [otherPoint,right = 0.5cm of system] (branchPoint) {};\n\t\\node [otherPoint,below = 0.5 cm of system] (belowsystem) {}; %{$\\frac{1}{Ts+1}$};\n\t%\\node [block, right = 1cm of system] (system2) {$\\frac{1}{Ts+1}$};\n\t\\node [output, right = 1cm of branchPoint] (output) {};\n\t\\node [input, below = 0.5cm of system] (m) {};\n\t%\\node [otherPoint, right = 1.25 of belowsystem] (systemRightDownP) {$H_1(s)$};\n\t\n\t% Second Sampler Point\n\t%\\node [sampleSP, below = 0.5cm of systemRightDownP] (sysHSP2) {};\n\t%\\node [sampleEP, left = 1cm of sysHSP2] (sysHEP2) {};\n\t%\\node [sampleEP, above = 1cm of sysHEP2] (sumEPTOP2) {};\n\t\n\t% Second block \n\t%\\node [block, left = 0.75cm of sysHEP2] (systemH2) {$\\cfrac{1-e^{-Ts}}{s}$};\n\t% Arrows\n\t\\draw [draw,->] (input) -- node {$R(z)$} (sum);\n\t% Arrows for first sampler\n\t%\t\\draw [-] (sum) -- node {$E(s)$} (sumSP);\n\t%\t\\draw [-,thick] (sumEPTOP) -- node {$\\delta_\\tau$} (sumSP);\n\t\n\t%\\draw [->] (sum) -- node {$E(s)$} (system);\n\t\\draw [->] (sum) -- node {} (system);\n\t%Arrows for second sampler (bottom)\n\t%\t\\draw [-]  (sysHSP2)-- node {$M(s)$} (systemH);  \n\t%\\draw [-,thick] (sysHSP2) -- node {$\\delta_\\tau$} (sumEPTOP2);\n\t%\\draw [->] (sumEP) -- node {$M^\\ast(s)$} (systemH);\n\t% \\draw [->] (system) --  (system2);\n\t\\draw [-] (system) --  (branchPoint);\n\t\\draw [->] (branchPoint) -- node (y) {$C(z)$}(output);\n\t%\\draw [-] (y) |- (sysHSP2) {};\n\t\\draw [-] (y) |- (m) {} ;\n\t%\\draw [<-] (systemH2) -- node {$M^\\ast(s)$} (sysHEP2);\n\t%\\draw [->] (sysHEP2) -- (systemH2);\n\t%\\draw [->] (systemH2) -| node [near end] {$B(s)$} (sum) ; %{$-$}  node [near end] {} (sum);\n\t%\\node [otherPoint, below = 1.25cm of sum] (Text) {$B(s)$};\n\t\\draw [->] (m) -| node[pos=0.99] {} node [near end] {} (sum); %{$-$}  node [near end] {} (sum);\n\t\\end{tikzpicture}\n\t%\\end{figure}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof o&&o(i);e.default=i.exports}}]);