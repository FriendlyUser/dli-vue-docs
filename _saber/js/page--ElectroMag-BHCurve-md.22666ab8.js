(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{206:function(t,n,s){"use strict";s.r(n);var a=s(0),e=function(t){var n,s,a=((n={}).internal=s=void 0,n.contentType="markdown",n.slug="ElectroMag/BHCurve",n.content=s,n.title="BHCurve.png",n.date="2020-04-19 02:26:07",n.layout="plain",n.markdownHeadings=[{text:"Keywords",slug:"keywords",level:3}],n.excerpt='<p>axis  begin document  fillbetween  pgfplots samples stalone thick tikzpicture  usepgfplotslibrary very xlabel ylabel\n<img src="BHCurve.png" alt="ElectroMag" title="BHCurve"></p>\n',n.createdAt=new Date(1587263167e3),n.updatedAt=new Date(1587263247486),n.type="page",n.permalink="/ElectroMag/BHCurve.html",n.assets={},n.attributes=n,n.prevPost={title:"3DCylinder.png",permalink:"/ElectroMag/3DCylinder.html"},n.nextPost={title:"DEHG.png",permalink:"/ElectroMag/DEHG.html"},n),e=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(e);["layout","transition"].forEach(function(n){var s=t.options.PageComponent;s&&(t.options[n]=s[n]),void 0===t.options[n]&&(t.options[n]=a[n])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},p=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("layout-manager",[s("h3",{attrs:{id:"keywords"}},[t._v("Keywords")]),t._v(" "),s("p",[t._v("axis  begin document  fillbetween  pgfplots samples stalone thick tikzpicture  usepgfplotslibrary very xlabel ylabel\n"),s("img",{attrs:{src:"BHCurve.png",alt:"ElectroMag",title:"BHCurve"}})]),t._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[s("code",{pre:!0,attrs:{class:"language-tex"}},[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("standalone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pgfplots")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepgfplotslibrary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fillbetween"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tikzpicture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("axis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("very thick,\n                     samples = 100,\n                     xlabel = H,\n                     ylabel = B,\n                     xmin = -7,\n                     xmax = 7,\n                     ymin = -4,\n                     ymax = 4,\n                     axis x line = middle,\n                     axis y line = middle,\n                     ticks = none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\addplot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dashed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" plot ("),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\x")]),t._v(", 2.5);\n            "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\addplot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dashed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" plot ("),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\x")]),t._v(",-2.5);\n            "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\addplot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("red, name path=A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" plot ("),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\x")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("5/(1 + exp(-1.7*"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\x")]),t._v("+1.5))-2.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(");\n            "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\addplot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("red, name path=B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" plot ("),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\x")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("5/(1 + exp(-1.7*"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\x")]),t._v("-1.5))-2.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(");\n            "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\addplot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("red!20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fill between"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("of=A and B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(";\n        "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("axis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tikzpicture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])])},[],!1,null,null,null);"function"==typeof e&&e(p);n.default=p.exports}}]);