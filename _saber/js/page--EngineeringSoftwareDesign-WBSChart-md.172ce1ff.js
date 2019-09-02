(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{171:function(t,n,a){"use strict";a.r(n);var s=a(0),e=function(t){var n,a,s=((n={}).internal=a=void 0,n.contentType="markdown",n.slug="EngineeringSoftwareDesign/WBSChart",n.content=a,n.title="WBSChart.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="WBSChart.png" alt="EngineeringSoftwareDesign" title="WBSChart"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567398206553),n.type="page",n.permalink="/EngineeringSoftwareDesign/WBSChart.html",n.assets={},n.attributes=n,n.prevPost={title:"block410.png",permalink:"/ControlSystems/CSII/block410.html"},n.nextPost={title:"StraightLinebasicBlock.png",permalink:"/ControlSystems/CSII/StraightLinebasicBlock.html"},n),e=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=s}].concat(e);["layout","transition"].forEach(function(n){var a=t.options.PageComponent;a&&(t.options[n]=a[n]),void 0===t.options[n]&&(t.options[n]=s[n])}),t.options.name="page-wrapper-"+s.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("layout-manager",[a("p",[a("img",{attrs:{src:"WBSChart.png",alt:"EngineeringSoftwareDesign",title:"WBSChart"}})]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[a("code",{pre:!0,attrs:{class:"language-tex"}},[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("standalone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("forest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usetikzlibrary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arrows.meta,shapes,positioning,shadows,trees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\tikzset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    basic/.style  = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("draw, text width=2cm, drop shadow, font="),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\sffamily")]),t._v(", rectangle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    root/.style   = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("basic, rounded corners=2pt, thin, align=center,\n                     fill=green!30"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    onode/.style = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("basic, thin, rounded corners=2pt, align=center, fill=green!60,text width=3cm,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    tnode/.style = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("basic, thin, align=left, fill=pink!60, text width=6.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    xnode/.style = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("basic, thin, rounded corners=2pt, align=center, fill=blue!20,text width=5cm,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    wnode/.style = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("basic, thin, align=left, fill=pink!10!blue!80!red!10, text width=6.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    edge from parent/.style="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("draw=black, edge from parent fork right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("forest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" for tree="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    grow=east,\n    growth parent anchor=east,\n    parent anchor=east,\n    child anchor=west,\n    edge path="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\noexpand")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\forestoption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",->, >="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("latex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n         (!u.parent anchor) -- +(5pt,0pt) |- (.child anchor)\n         "),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\forestoption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("edge label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Networked Game Work BreakDown, root\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Software Engineering Report, xnode\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Setting shape, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Choosing color, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Adding shading, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Game Demo Preparation, onode\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Using a Matrix, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Relatively, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Absolutely, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Using overlays, wnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Project Proposal and Game Logic, onode\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Default arrows, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Arrow library, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Resizing tips, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Shortening, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Bending, tnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("forest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])])},[],!1,null,null,null);"function"==typeof e&&e(o);n.default=o.exports}}]);