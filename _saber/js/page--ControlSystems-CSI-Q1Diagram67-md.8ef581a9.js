(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{88:function(t,e,n){"use strict";n.r(e);var a=n(0),i=function(t){var e,n,a=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="ControlSystems/CSI/Q1Diagram67",e.content=n,e.title="Q1Diagram67.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="Q1Diagram67.png" alt="ControlSystems/CSI" title="Q1Diagram67"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567396211537),e.type="page",e.permalink="/ControlSystems/CSI/Q1Diagram67.html",e.assets={},e.attributes=e,e.prevPost={title:"requiredFields.png",permalink:"/ReportDiagrams/ENGR003-004/requiredFields.html"},e.nextPost={title:"advancedTimeline.png",permalink:"/ReportDiagrams/ENGR446/advancedTimeline.html"},e),i=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=a}].concat(i);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=a[e])}),t.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},s=Object(a.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"Q1Diagram67.png",alt:"ControlSystems/CSI",title:"Q1Diagram67"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{amsmath}  % For math\n\\usepackage{amssymb}  % For more math\n\n\\usepackage{blox}\n\\usepackage{tikz}\n\\begin{document}\n\\begin{tikzpicture}\n\\bXInput{A}\n\\bXComp{B}{A}\n\\bXLink[$R(s)$]{A}{B}\n\\bXBloc[2]{C}{$K\\cfrac{s+1}{s+5}$}{B}\n%\\bXLink[$V_1$]{B}{C}\n\\bXLink{B}{C}\n\\bXBloc[2]{D}{$\\cfrac{2}{s^2(s+2)}$}{C}\n\\bXLink{C}{D}\n\\bXOutput[4]{E}{D}\n\\bXLink[$C(s)$]{D}{E}\n\\bXReturn{D-E}{B}{}\n\\end{tikzpicture}\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof i&&i(s);e.default=s.exports}}]);