(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{187:function(t,e,n){"use strict";n.r(e);var a=n(0),r=function(t){var e,n,a=((n={}).internal=e=void 0,n.contentType="markdown",n.slug="ElectroMag/PrimarySide",n.content=e,n.title="PrimarySide.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="PrimarySide.png" alt="ElectroMag" title="PrimarySide"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567396211541),n.type="page",n.permalink="/ElectroMag/PrimarySide.html",n.assets={},n.attributes=n,n.prevPost={title:"crossover.png",permalink:"/ArtificialIntelligence/crossover.html"},n.nextPost={title:e,permalink:"/about.html"},n),r=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(r);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=a[e])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(a.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"PrimarySide.png",alt:"ElectroMag",title:"PrimarySide"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage[american]{circuitikz}\n\\usetikzlibrary{calc,arrows}\n\\usepackage{graphicx}\n\\usepackage{mathrsfs} \n\\usepackage{latexsym,amssymb,amsmath}\n\\newcommand{\\equal}{=}\n\\begin{document}\n\t\\begin{circuitikz}\n\t\t\\draw (0,6) to [open,l=$v_1$,o-o] (0,0) \n\t\t(0,6) to  [R,i>=$i_1$, l^= $R_{1}$, color=red] (2,6) \n\t\t(2,6) to  [L,i>=$i_1$,l^= $L_{l1}$, color=blue] (4,6) \n\t\t(4,6) -- (6,6)\n\t\t(6,6) to [short,i=$i^\\prime_e$,*-*] (6,4)\n\t\t(6,4) -- (5,4)\n\t\t(6,4) -- (7,4)\n\t\t(5,4) to [R,i^>=$i^\\prime_c$, l_= $R^{\\prime}_c\\equal 124K \\Omega$, color=red] (5,0)\n\t\t(7,4) to [L,i^<=$i^\\prime_m$, l^= $L^{\\prime}_m \\equal 5.4 H$, color=blue] (7,0)\n\t\t(6,6) to [short,i=$i^\\prime_2 \\equal i_2 / k$] (10,6)\n\t\t(0,0) -- (10,0)\n\t\t(11,6) node [yscale =2.857,transformer core](T){}  % reminded by @PaulGessler, thanks.\n\t\t(T.A1) node[above] {$N_1$}\n\t\t(T.A2) node[below] {primary}\n\t\t(T.B1) node[above] {$N_2$} \n\t\t(T.B2) node[below] {secondary}\n\t\t(T.base) node{K}\n\n\t\t(T.B1) -- (12,6)\n\t\t(14,6) to [L,i^<=$i_2$, l_= $L_{l2}$, color=blue] (12,6)\n\t\t(14,6) to [R, l^= $R_{2}$, color=red] (16,6)\n\t\t(16,6) to [generic, l_=${Load}$](16,0)\n\t\t(T.B2) -- (16,0)\n%\t    (4,0) -- (0,0) \n%\t     (4,4) to [R,i^>=$\\phi_2$, l^= $\\mathscr{R}_{2}$,v_>=$\\mathscr{F}_2$, color=blue] (4,0)\n%\t\t(4,4) to [R,l^= $\\mathscr{R}_{3}$,v_>=$\\mathscr{F}_3$, color=red] (8,4)\n%\t\t(8,4) to [R,i^>=$\\phi_3$, l^= $\\mathscr{R}_{g}$,v_>=$\\mathscr{F}_g$, color=cyan] (8,0)\n%\t\t(8,0) to [R, l^= $\\mathscr{R}_{4}$,v_>=$\\mathscr{F}_4$, color=green] (4,0);\n%\t\t\\draw[thin, <-, >=triangle 45] (6,2) node{$\\phi_3$}   ++(-90:1) arc (-90:100:1);\n%\t\t\\draw[thin, <-, >=triangle 45] (2,2) node{$\\phi_2$}   ++(-90:1) arc (-90:100:1);\n%\t\t\\node (phi) at (4.25,0.5) {$\\phi_2$};\n%\t\t\\draw[-stealth]  (4.25,2.5) to [bend left=90] (phi);  \n;\n\\coordinate (V1up) at (0.5,6);\n\\coordinate (V1mid1) at (0.5,3.25);\n\\coordinate (V1mid2) at (0.5,2.75);\n\\coordinate (V1down) at (0.5,0);\n\\node (e) at (2.5,3) {$e_{11}$};\n\\node (eend) at (9.5,3) {$e_{1}$};\n\\node (e2) at (12,3) {$e_{2}$};\n\\node (e3) at (14,3) {$e_{22}$};\n\\draw[->,black,very thick] (e) -- ($(e)!.85!(2.5,6)$); % 1 cm before end terminal\n\\draw[->,black,very thick] (e) -- ($(e)!.85!(2.5,0)$); % 1 cm before start terminal\n\\draw[->,black,very thick] (eend) -- ($(eend)!.85!(9.5,6)$); % 1 cm before end terminal\n\\draw[->,black,very thick] (eend) -- ($(eend)!.85!(9.5,0)$); % 1 cm before start terminal\n\\draw[->,black,very thick] (e2) -- ($(e2)!.85!(12,6)$); % 1 cm before end terminal\n\\draw[->,black,very thick] (e2) -- ($(e2)!.85!(12,0)$); % 1 cm before start terminal\n\\draw[->,black,very thick] (e3) -- ($(e3)!.85!(14,6)$); % 1 cm before end terminal\n\\draw[->,black,very thick] (e3) -- ($(e3)!.85!(14,0)$); % 1 cm before start terminal\n\\draw[->,black,very thick] (V1mid2) -- ($(V1mid2)!.85!(V1down)$); % 1 cm before end terminal\n\\draw[->,black,very thick] (V1mid1) -- ($(V1mid1)!.85!(V1up)$); % 1 cm before start terminal\n\t\\end{circuitikz}\n\t\\label{fig:q1fig}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof r&&r(i);e.default=i.exports}}]);