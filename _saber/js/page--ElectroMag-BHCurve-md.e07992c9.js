(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{180:function(e,t,n){"use strict";n.r(t);var a=n(0),i=function(e){var t,n,a=((t={}).internal=n=void 0,t.contentType="markdown",t.slug="ElectroMag/BHCurve",t.content=n,t.title="BHCurve.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="BHCurve.png" alt="ElectroMag" title="BHCurve"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567396211541),t.type="page",t.permalink="/ElectroMag/BHCurve.html",t.assets={},t.attributes=t,t.prevPost={title:"Q4Circuit.png",permalink:"/ElectroMag/Q4Circuit.html"},t.nextPost={title:"Q5Circuit.png",permalink:"/ElectroMag/Q5Circuit.html"},t),i=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=a}].concat(i);["layout","transition"].forEach(function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=a[t])}),e.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},l=Object(a.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"BHCurve.png",alt:"ElectroMag",title:"BHCurve"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{pgfplots}\n\\usepgfplotslibrary{fillbetween}\n\n\\begin{document}\n    \\begin{tikzpicture}\n        \\begin{axis}[very thick,\n                     samples = 100,\n                     xlabel = H,\n                     ylabel = B,\n                     xmin = -7,\n                     xmax = 7,\n                     ymin = -4,\n                     ymax = 4,\n                     axis x line = middle,\n                     axis y line = middle,\n                     ticks = none]\n            \\addplot[dashed] plot (\\x, 2.5);\n            \\addplot[dashed] plot (\\x,-2.5);\n            \\addplot[red, name path=A] plot (\\x, {5/(1 + exp(-1.7*\\x+1.5))-2.5});\n            \\addplot[red, name path=B] plot (\\x, {5/(1 + exp(-1.7*\\x-1.5))-2.5});\n            \\addplot[red!20] fill between[of=A and B];\n        \\end{axis}\n    \\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof i&&i(l);t.default=l.exports}}]);