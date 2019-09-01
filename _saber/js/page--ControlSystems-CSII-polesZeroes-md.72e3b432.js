(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{128:function(e,n,a){"use strict";a.r(n);var t=a(0),o=function(e){var n,a,t=((n={}).internal=a=void 0,n.contentType="markdown",n.slug="ControlSystems/CSII/polesZeroes",n.content=a,n.title="polesZeroes.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="polesZeroes.png" alt="ControlSystems/CSII" title="polesZeroes"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567371739079),n.type="page",n.permalink="/ControlSystems/CSII/polesZeroes.html",n.assets={},n.attributes=n,n.prevPost={title:"GitWorkFlow.png",permalink:"/EngineeringSoftwareDesign/GitWorkFlow.html"},n.nextPost={title:"Matching.png",permalink:"/EngineeringSoftwareDesign/Matching.html"},n),o=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=t}].concat(o);["layout","transition"].forEach(function(n){var a=e.options.PageComponent;a&&(e.options[n]=a[n]),void 0===e.options[n]&&(e.options[n]=t[n])}),e.options.name="page-wrapper-"+t.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(t.a)({},function(){var e=this.$createElement,n=this._self._c||e;return n("layout-manager",[n("p",[n("img",{attrs:{src:"polesZeroes.png",alt:"ControlSystems/CSII",title:"polesZeroes"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{tikz}\n\\usetikzlibrary{shapes.misc}\n\\begin{document}\n\\begin{tikzpicture}[scale=2.5, every node/.style={scale=0.6}]\n\n% Axes:\n\\draw [-latex] (-0.815,0) -- (1.25,0) node [above left]  {$\\Re$};\n\\draw [-latex] (0,-0.15) -- (0,0.6) node [below right] {$\\Im$};\n\n% Poles and ticks\n\\node[cross out,draw=black] at (0.8187,0) {};\n\\node[] at (0.8187,-0.1) {$\\tiny{0.8187}$};\n\\node[cross out,draw=black] at (0.3679,0) {};\n\\node[] at (0.3679,-0.1) {$\\tiny{0.3679}$};\n\\node[cross out,draw=black] at (1,0) {};\n\\node[] at (1,-0.1) {$\\tiny{1}$};\n% Zeroes and ticks\n\\node[solid, circle,draw=black] at (-0.6714,0) {};\n\\node[] at (-0.6714,-0.1) {$\\tiny{-0.6714}$};\n\n%% Draw connection arrows\n\\draw[] (0,0) node[pos=0.8, above left] {}(36:0.6958) node[solid,thick, cross out,draw=black] {};\n\\node[] at (36:0.6958+0.14) {$\\tiny{z=0.6958e^{j36^\\circ}}$};\n\\draw[dashed]  (36:0.6958) -- (-0.6714,0) node[] {};\n\\draw[dashed]  (36:0.6958) -- (0.3679,0) node[] {};\n\\draw[dashed]  (36:0.6958) -- (0.8187,0) node[] {};\n\\draw[dashed]  (36:0.6958) -- (1,0) node[] {};\n\n%% Draw angles for zeroes\n\\draw (-0.3,0.025)node[] {$\\scriptstyle 18.3316^o$};\n\\draw[red, -stealth] (-0.1,0) arc (0:45:0.25);\n%% Draw angles for poles\n\\draw (0.2,0.025)node[] {$\\scriptstyle 122.028^o$};\n\\draw[red, -stealth] (0.05,0) arc (180:45:0.225);\n\n\\draw (0.6,0.025)node[] {$\\scriptstyle 64.5096^o$};\n\\draw[red, -stealth] (0.45,0) arc (180:115.4904:0.325);\n\n\\draw (1.1,0.2)node[] {$\\scriptstyle 136.9069^o$};\n\\draw[red, -stealth] (1.15,0) arc (0:136.9069:0.15);\n%\\draw[red, -stealth] (0,2) arc (90:145:2);\n%\\draw[dashed] (0,0) -- node[pos=0.8, above right] {$\\omega_z$}(125:3.5) node[solid, fill=white, circle,draw=black] {};\n%\\draw[dashed] (0,0) -- node[pos=0.8, above right] {$\\omega_z$}(125:3.5) node[solid, cross out,draw=black] {};\n%\\draw[dashed] (0,0) -- (125:3.5) node[solid, cross out,draw=black] {};\n%\\draw[black, -stealth] (1.75,0) node[pos=0.1,above right] {$\\theta=120^o$} arc (0:125:1.75);\n%\n%%\\draw[dashed]  (-5,0) node[below left] {$-\\xi_p\\omega_p$} --  (-5,-3) node[solid, cross out,draw=black] {};\n%%\\draw[dashed]  (-2,0) node[below left] {$-\\xi_z\\omega_z$} --  (-2,-3) node[solid, fill=white, circle,draw=black] {};\n%%\\draw[dashed]  (-2,0) node[below left] {$-\\xi$} -- (-2,2.85);\n%%\\draw[dashed]  (0,2.85) node[below left] {$\\omega_n$} -- (-2,2.85);\n%\\draw[dashed]  (-2,0) node[below left] {$-2$} -- (-2,2.867);\n%\\draw[dashed]  (0,2.867) node[below left] {$j2\\sqrt{(3)}$} -- (-2,2.867);\n%\\draw[dashed]  (125:3.5) -- (-4,0) node[solid, cross out,draw=black] {};\n%\\draw (-4,0) node [below left] {-4};\n%\\draw[black, -stealth] (-2,2)  arc (0:-180:0.3);\n%\\draw (-3,2.25)node[] {$\\theta=30^o$};\n\\end{tikzpicture}\n\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof o&&o(r);n.default=r.exports}}]);