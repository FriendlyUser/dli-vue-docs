(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{104:function(t,n,e){"use strict";e.r(n);var a=e(0),s=function(t){var n,e,a=((n={}).internal=e=void 0,n.contentType="markdown",n.slug="ControlSystems/CSI/Q5Diagram620",n.content=e,n.title="Q5Diagram620.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="Q5Diagram620.png" alt="ControlSystems/CSI" title="Q5Diagram620"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567390847093),n.type="page",n.permalink="/ControlSystems/CSI/Q5Diagram620.html",n.assets={},n.attributes=n,n.prevPost={title:"omega_flip.png",permalink:"/PCC/omega_flip.html"},n.nextPost={title:"q4Torus.png",permalink:"/PCC/q4Torus.html"},n),s=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(s);["layout","transition"].forEach(function(n){var e=t.options.PageComponent;e&&(t.options[n]=e[n]),void 0===t.options[n]&&(t.options[n]=a[n])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(a.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("layout-manager",[n("p",[n("img",{attrs:{src:"Q5Diagram620.png",alt:"ControlSystems/CSI",title:"Q5Diagram620"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{amsmath}  % For math\n\\usepackage{amssymb}  % For more math\n\n\\usepackage{blox}\n\\usepackage{tikz}\n\\begin{document}\n\\begin{tikzpicture}\n\\bXInput{A}\n\\bXComp{B}{A}\n%\\bXLink[$R(s)$]{A}{B}\n\\bXLink{A}{B}\n\\bXBloc[2]{C}{$G_c(s)$}{B}\n%\\bXLink[$V_1$]{B}{C}\n\\bXLink{B}{C}\n\\bXBloc[2]{D}{$\\cfrac{820}{s(s+10)(s+20)}$}{C}\n\\bXLink{C}{D}\n\\bXOutput[4]{E}{D}\n%\\bXLink[$C(s)$]{D}{E}\n\\bXLink{D}{E}\n\\bXReturn{D-E}{B}{}\n%\\node (Gc) at (3.25,-0.95) {$G_c(s)$};\n%\\node (Gs) at (5.375,-0.95) {$G(s)$};\n\\end{tikzpicture}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof s&&s(o);n.default=o.exports}}]);