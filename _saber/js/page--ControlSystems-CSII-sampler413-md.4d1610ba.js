(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{132:function(t,n,e){"use strict";e.r(n);var s=e(0),o=function(t){var n,e,s=((n={}).internal=e=void 0,n.contentType="markdown",n.slug="ControlSystems/CSII/sampler413",n.content=e,n.title="sampler413.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="sampler413.png" alt="ControlSystems/CSII" title="sampler413"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567371739083),n.type="page",n.permalink="/ControlSystems/CSII/sampler413.html",n.assets={},n.attributes=n,n.prevPost={title:"FlowChart.png",permalink:"/EngineeringSoftwareDesign/FlowChart.html"},n.nextPost={title:"GanttScheduling.png",permalink:"/EngineeringSoftwareDesign/GanttScheduling.html"},n),o=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=s}].concat(o);["layout","transition"].forEach(function(n){var e=t.options.PageComponent;e&&(t.options[n]=e[n]),void 0===t.options[n]&&(t.options[n]=s[n])}),t.options.name="page-wrapper-"+s.slug.replace(/[^0-9a-z\-]/i,"-")},a=Object(s.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("layout-manager",[n("p",[n("img",{attrs:{src:"sampler413.png",alt:"ControlSystems/CSII",title:"sampler413"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[%\n% border=1pt\nborder={-25pt 0pt 0pt 0pt} % left bottom right top\n]{standalone}\n\\usepackage{tikz}\n\\usepackage{amsmath}\n\\usetikzlibrary{positioning}\n\\usetikzlibrary{shapes,arrows,calc} \n\\usetikzlibrary{decorations.text}\n\\tikzset{add/.style n args={4}{\n\t\tminimum width=6mm,\n\t\tpath picture={\n\t\t\t\\draw[black] \n\t\t\t(path picture bounding box.south east) -- (path picture bounding box.north west)\n\t\t\t(path picture bounding box.south west) -- (path picture bounding box.north east);\n\t\t\t\\node at ($(path picture bounding box.south)+(0,0.13)$)     {\\tiny #1};\n\t\t\t\\node at ($(path picture bounding box.west)+(0.13,0)$)      {\\tiny #2};\n\t\t\t\\node at ($(path picture bounding box.north)+(0,-0.13)$)        {\\tiny #3};\n\t\t\t\\node at ($(path picture bounding box.east)+(-0.13,0)$)     {\\tiny #4};\n\t\t}\n\t}\n}\n\\begin{document}\n\t\n%\\begin{figure}\n%\\centering\n\t\\tikzstyle{block} = [draw, fill=blue!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{controller} = [draw, fill=red!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{sum} = [draw, fill=blue!20, circle, node distance=1cm]\n\t\\tikzstyle{input} = [coordinate]\n\t\\tikzstyle{output} = [coordinate]\n\t\\tikzstyle{sampleSP} = [coordinate]\n\t\\tikzstyle{sampleEP} = [coordinate]\n\t\\tikzstyle{otherPoint} = [coordinate]\n\t\\begin{tikzpicture}[auto, >=latex']\n\t% Nodes\n\t\\node [input] (input) {};\n\t%\\node [sum, right = 1cm of input] (sum) {};\n\t\\node[draw,circle,add={--}{+}{}{},right of= input](sum){}; \n\t\\node [sampleSP, right = 1cm of sum] (sumSP) {};\n\t\\node [sampleEP, right = 1cm of sumSP] (sumEP) {};\n\t\\node [sampleEP, above = 1cm of sumEP] (sumEPTOP) {};\n\t\\node [block, right = 1cm of sumEP] (systemK) {$K$};\n\t\\node [block, right = 1cm of systemK] (systemZOH) {$\\cfrac{1-e^{-s}}{s}$};\n\t\\node [controller, right = 1cm of systemZOH] (system) {$\\cfrac{1}{s(s+1)}$};\n\t\\node [otherPoint,right = 1cm of system] (branchPoint) {};\n\t\\node [otherPoint,below = 1 cm of system] (belowsystem) {}; %{$\\frac{1}{Ts+1}$};\n\t%\\node [block, right = 1cm of system] (system2) {$\\frac{1}{Ts+1}$};\n\t\\node [output, right = 1cm of branchPoint] (output) {};\n\t\\node [input, below = 0.5cm of system] (m) {};\n\n\t% Arrows\n\t\\draw [draw,->] (input) -- node {$R$} (sum);\n\t% Arrows for first sampler\n\t\\draw [-] (sum) -- node {$E(s)$} (sumSP);\n\t\\draw [-,thick] (sumEPTOP) -- node {$\\delta_\\tau$} (sumSP);\n\t\\draw [->] (sumEP) -- node {$E^\\ast(s)$} (systemK);\n\t\\draw [->] (systemK) -- node {} (systemZOH);\n\t\\draw [->] (systemZOH) -- node {} (system);\n\t%\\draw [->] (sumEP) -- node {$M^\\ast(s)$} (systemH);\n\t% \\draw [->] (system) --  (system2);\n\t\\draw [-] (system) --  (branchPoint);\n\t\\draw [->] (branchPoint) -- node (y) {$C(s)$}(output);\n\n\t\\draw [-] (y) |- (m) {} ;\n\t\\draw [->] (m) -| (sum); %{$-$}  node [near end] {} (sum);\n\t\\end{tikzpicture}\n%\\end{figure}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof o&&o(a);n.default=a.exports}}]);