(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(t,n,e){"use strict";e.r(n);var s=e(0),o=function(t){var n,e,s=((n={}).internal=e=void 0,n.contentType="markdown",n.slug="ControlSystems/CSII/460A3SamplerTesting",n.content=e,n.title="460A3SamplerTesting.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="460A3SamplerTesting.png" alt="ControlSystems/CSII" title="460A3SamplerTesting"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567390847093),n.type="page",n.permalink="/ControlSystems/CSII/460A3SamplerTesting.html",n.assets={},n.attributes=n,n.prevPost={title:"bytefieldTest.png",permalink:"/EngineeringSoftwareDesign/bytefieldTest.html"},n.nextPost={title:"commandPrompt.png",permalink:"/EngineeringSoftwareDesign/commandPrompt.html"},n),o=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=s}].concat(o);["layout","transition"].forEach(function(n){var e=t.options.PageComponent;e&&(t.options[n]=e[n]),void 0===t.options[n]&&(t.options[n]=s[n])}),t.options.name="page-wrapper-"+s.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(s.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("layout-manager",[n("p",[n("img",{attrs:{src:"460A3SamplerTesting.png",alt:"ControlSystems/CSII",title:"460A3SamplerTesting"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{tikz}\n\\usetikzlibrary{positioning}\n\\usetikzlibrary{shapes,arrows,calc} \n\\usetikzlibrary{decorations.text}\n\\tikzset{add/.style n args={4}{\n\t\tminimum width=6mm,\n\t\tpath picture={\n\t\t\t\\draw[black] \n\t\t\t(path picture bounding box.south east) -- (path picture bounding box.north west)\n\t\t\t(path picture bounding box.south west) -- (path picture bounding box.north east);\n\t\t\t\\node at ($(path picture bounding box.south)+(0,0.13)$)     {\\tiny #1};\n\t\t\t\\node at ($(path picture bounding box.west)+(0.13,0)$)      {\\tiny #2};\n\t\t\t\\node at ($(path picture bounding box.north)+(0,-0.13)$)        {\\tiny #3};\n\t\t\t\\node at ($(path picture bounding box.east)+(-0.13,0)$)     {\\tiny #4};\n\t\t}\n\t}\n}\n\\begin{document}\n\t\n%\\begin{figure}\n%\\centering\n\t\\tikzstyle{block} = [draw, fill=blue!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{controller} = [draw, fill=red!20, rectangle, minimum height=3em, minimum width=4em]\n\t\\tikzstyle{sum} = [draw, fill=blue!20, circle, node distance=1cm]\n\t\\tikzstyle{input} = [coordinate]\n\t\\tikzstyle{output} = [coordinate]\n\t\\tikzstyle{sampleSP} = [coordinate]\n\t\\tikzstyle{sampleEP} = [coordinate]\n\t\\tikzstyle{otherPoint} = [coordinate]\n\t\\begin{tikzpicture}[auto, >=latex']\n\t% Nodes\n\t\\node [input] (input) {};\n\t%\\node [sum, right = 1cm of input] (sum) {};\n\t\\node[draw,circle,add={--}{+}{}{},right of= input](sum){}; \n\t\\node [sampleSP, right = 1cm of sum] (sumSP) {};\n\t\\node [sampleEP, right = 1cm of sumSP] (sumEP) {};\n\t\\node [sampleEP, above = 1cm of sumEP] (sumEPTOP) {};\n\t\\node [controller, right = 2cm of sumEP] (system) {$G(s)$};\n\t\\node [otherPoint,right = 1cm of system] (branchPoint) {};\n\t\\node [otherPoint,below = 1 cm of system] (belowsystem) {}; %{$\\frac{1}{Ts+1}$};\n\t%\\node [block, right = 1cm of system] (system2) {$\\frac{1}{Ts+1}$};\n\t\\node [output, right = 2cm of branchPoint] (output) {};\n\t%\\node [input, below = 0.5cm of system] (m) {};\n\t\\node [block, right = 0.75 of belowsystem] (systemH) {$H_1(s)$};\n\t\n\t% Second Sampler Point\n\t\\node [sampleSP, left = 1cm of systemH] (sysHSP2) {};\n\t\\node [sampleEP, left = 1cm of sysHSP2] (sysHEP2) {};\n\t\\node [sampleEP, above = 1cm of sysHEP2] (sumEPTOP2) {};\n\t\n\t% Second block \n\t\\node [block, left = 1.5cm of sysHEP2] (systemH2) {$H_2(s)$};\n\t% Arrows\n\t\\draw [draw,->] (input) -- node {$R$} (sum);\n\t% Arrows for first sampler\n\t\\draw [-] (sum) -- node {$E(s)$} (sumSP);\n\t\\draw [-,thick] (sumEPTOP) -- node {$\\delta_\\tau$} (sumSP);\n\t\\draw [->] (sumEP) -- node {$E^\\ast(s)$} (system);\n\t%Arrows for second sampler (bottom)\n\t\\draw [-]  (sysHSP2)-- node {$M(s)$} (systemH);  \n\t\\draw [-,thick] (sysHSP2) -- node {$\\delta_\\tau$} (sumEPTOP2);\n\t%\\draw [->] (sumEP) -- node {$M^\\ast(s)$} (systemH);\n\t% \\draw [->] (system) --  (system2);\n\t\\draw [-] (system) --  (branchPoint);\n\t\\draw [->] (branchPoint) -- node (y) {$C(s)$}(output);\n\t\\draw [-] (y) |- (systemH) {};\n\t%\\draw [-] (y) |- (m) {} ;\n\t\\draw [<-] (systemH2) -- node {$M^\\ast(s)$} (sysHEP2);\n\t\\draw [->] (systemH2) -| (sum); %{$-$}  node [near end] {} (sum);\n\t%\\draw [->] (m) -| node[pos=0.99] {} node [near end] {} (sum); %{$-$}  node [near end] {} (sum);\n\t\\end{tikzpicture}\n%\\end{figure}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof o&&o(i);n.default=i.exports}}]);