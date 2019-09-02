(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{207:function(t,n,a){"use strict";a.r(n);var e=a(0),r=function(t){var n,a,e=((n={}).internal=a=void 0,n.contentType="markdown",n.slug="ElectroMag/Transformer3Windings",n.content=a,n.title="Transformer3Windings.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="Transformer3Windings.png" alt="ElectroMag" title="Transformer3Windings"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567396211541),n.type="page",n.permalink="/ElectroMag/Transformer3Windings.html",n.assets={},n.attributes=n,n.prevPost={title:"lattice-sampling.png",permalink:"/DVP/lattice-sampling.html"},n.nextPost={title:"latex-diagram.png",permalink:"/DVP/latex-diagram.html"},n),r=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=e}].concat(r);["layout","transition"].forEach(function(n){var a=t.options.PageComponent;a&&(t.options[n]=a[n]),void 0===t.options[n]&&(t.options[n]=e[n])}),t.options.name="page-wrapper-"+e.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(e.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("layout-manager",[n("p",[n("img",{attrs:{src:"Transformer3Windings.png",alt:"ElectroMag",title:"Transformer3Windings"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v('\\documentclass[tikz,border=3mm]{standalone}\n\n\\usetikzlibrary{quotes,arrows.meta}\n\n\\begin{document}\n\n\\tikzset{\n    terminal_a/.pic = {%\n        \\coordinate (-in) at (-3mm,0);\n        \\coordinate (-out) at (-3mm,-4.5mm);\n\n        \\path[fill] (-in) circle (2pt);\n        \\draw[thick] (-in)--(0,0)--++(0:1cm) arc[start angle=90, delta angle=-180, radius=.75mm]; \n        \\draw[thick] (0,-1.5mm) arc[start angle=90, delta angle=180, radius=.75mm]--++(0:1cm) arc[start angle=90, delta angle=-180, radius=.75mm]; \n        \\fill (-out) circle (2pt);\n        \\draw[thick] (-out) -- ++(0:3mm);\n        },\n    terminal_b/.pic = {%\n        \\coordinate (-in) at (-3mm,0);\n        \\coordinate (-out) at (-3mm,-7.5mm);\n\n        \\path[fill] (-in) circle (2pt);\n        \\draw[thick] (-in)--(0,0)--++(0:1cm) arc[start angle=90, delta angle=-180, radius=.75mm]; \n        \\draw[thick] (0,-1.5mm) arc[start angle=90, delta angle=180, radius=.75mm]--++(0:1cm) arc[start angle=90, delta angle=-180, radius=.75mm]; \n        \\draw[thick] (0,-4.5mm) arc[start angle=90, delta angle=180, radius=.75mm]--++(0:1cm) arc[start angle=90, delta angle=-180, radius=.75mm]; \n        \\fill (-out) circle (2pt);\n        \\draw[thick] (-out) -- ++(0:3mm);\n        },\n    field/.pic = {\n        \\draw[thick,-Stealth] (0,0) -- (90:7mm) node[above] {\\tikzpictext};\n        }\n}\n\n\\begin{tikzpicture}\n\\draw (0,0) rectangle (7,5);\n\\draw (1,1) rectangle (3,4);\n\\draw (4,1) rectangle (6,4);\n\n\\foreach \\i/\\j in {0/A,3/B,6/C}{\n    \\pic (upper-\\j) at (\\i,3.8) {terminal_a};\n    \\pic (lower-\\j) at (\\i,2) {terminal_b};\n    \\pic["$\\Psi_\\j$"] at ([xshift=5mm]\\i,2.2) {field};\n    }\n\n\\node[left] at (upper-A-in) {A};\n\\draw[red] (upper-A-out) to [bend right] (lower-A-in);\n\n\\end{tikzpicture}\n\\end{document}')])])])])},[],!1,null,null,null);"function"==typeof r&&r(i);n.default=i.exports}}]);