(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{127:function(e,t,o){"use strict";o.r(t);var a=o(0),n=function(e){var t,o,a=((t={}).internal=o=void 0,t.contentType="markdown",t.slug="ControlSystems/CSI/polesZeroes",t.content=o,t.title="polesZeroes.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="polesZeroes.png" alt="ControlSystems/CSI" title="polesZeroes"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567396211537),t.type="page",t.permalink="/ControlSystems/CSI/polesZeroes.html",t.assets={},t.attributes=t,t.prevPost={title:"document.png",permalink:"/EngineeringSoftwareDesign/document.html"},t.nextPost={title:"fileDirectory.png",permalink:"/EngineeringSoftwareDesign/fileDirectory.html"},t),n=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=a}].concat(n);["layout","transition"].forEach(function(t){var o=e.options.PageComponent;o&&(e.options[t]=o[t]),void 0===e.options[t]&&(e.options[t]=a[t])}),e.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},s=Object(a.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"polesZeroes.png",alt:"ControlSystems/CSI",title:"polesZeroes"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{tikz}\n\\usetikzlibrary{shapes.misc}\n\\begin{document}\n\\begin{tikzpicture}\n\n% Axes:\n\\draw [-latex] (-5,0) -- (2.5,0) node [above left]  {$\\sigma$};\n\\draw [-latex] (0,-1) -- (0,4) node [below right] {$j\\omega_d$};\n\\node[cross out,draw=black] at (0,0) {};\n%\\draw[dashed] (0,0) -- node[pos=0.8, above right] {$\\omega_p$}(145:6) node[solid, cross out,draw=black] {};\n%\\draw[red, -stealth] (0,2) arc (90:145:2);\n\n%\\draw[dashed] (0,0) -- node[pos=0.8, above right] {$\\omega_z$}(125:3.5) node[solid, fill=white, circle,draw=black] {};\n%\\draw[dashed] (0,0) -- node[pos=0.8, above right] {$\\omega_z$}(125:3.5) node[solid, cross out,draw=black] {};\n\\draw[dashed] (0,0) -- (125:3.5) node[solid, cross out,draw=black] {};\n\\draw[black, -stealth] (1.75,0) node[pos=0.1,above right] {$\\theta=120^o$} arc (0:125:1.75);\n\n%\\draw[dashed]  (-5,0) node[below left] {$-\\xi_p\\omega_p$} --  (-5,-3) node[solid, cross out,draw=black] {};\n%\\draw[dashed]  (-2,0) node[below left] {$-\\xi_z\\omega_z$} --  (-2,-3) node[solid, fill=white, circle,draw=black] {};\n%\\draw[dashed]  (-2,0) node[below left] {$-\\xi$} -- (-2,2.85);\n%\\draw[dashed]  (0,2.85) node[below left] {$\\omega_n$} -- (-2,2.85);\n\\draw[dashed]  (-2,0) node[below left] {$-2$} -- (-2,2.867);\n\\draw[dashed]  (0,2.867) node[below left] {$j2\\sqrt{(3)}$} -- (-2,2.867);\n\\draw[dashed]  (125:3.5) -- (-4,0) node[solid, cross out,draw=black] {};\n\\draw (-4,0) node [below left] {-4};\n\\draw[black, -stealth] (-2,2)  arc (0:-180:0.3);\n\\draw (-3,2.25)node[] {$\\theta=30^o$};\n\\end{tikzpicture}\n\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof n&&n(s);t.default=s.exports}}]);