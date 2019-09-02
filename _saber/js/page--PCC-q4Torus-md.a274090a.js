(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{121:function(n,o,t){"use strict";t.r(o);var e=t(0),a=function(n){var o,t,e=((o={}).internal=t=void 0,o.contentType="markdown",o.slug="PCC/q4Torus",o.content=t,o.title="q4Torus.png",o.date="2019-08-31",o.layout="test",o.markdownHeadings=[],o.excerpt='<p><img src="q4Torus.png" alt="PCC" title="q4Torus"></p>\n',o.createdAt=new Date(15672096e5),o.updatedAt=new Date(1567390847097),o.type="page",o.permalink="/PCC/q4Torus.html",o.assets={},o.attributes=o,o.prevPost={title:"Q5Diagram620.png",permalink:"/ControlSystems/CSI/Q5Diagram620.html"},o.nextPost={title:"Q5BlockDiagram6.png",permalink:"/ControlSystems/CSI/Q5BlockDiagram6.html"},o),a=n.options.beforeCreate||[];n.options.beforeCreate=[function(){this.$page=e}].concat(a);["layout","transition"].forEach(function(o){var t=n.options.PageComponent;t&&(n.options[o]=t[o]),void 0===n.options[o]&&(n.options[o]=e[o])}),n.options.name="page-wrapper-"+e.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(e.a)({},function(){var n=this.$createElement,o=this._self._c||n;return o("layout-manager",[o("p",[o("img",{attrs:{src:"q4Torus.png",alt:"PCC",title:"q4Torus"}})]),this._v(" "),o("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[o("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[o("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz]{standalone}\n\\usetikzlibrary{arrows,chains,positioning,scopes,quotes,bending,calc,intersections}\n\n\\tikzset{\n    block/.style={draw,minimum width=1em,minimum height=1em,align=center,fill=blue!30},\n    arrow/.style={->},\n    line/.style={-}\n}\n\n\\begin{document}\n    \\begin{tikzpicture}[>=stealth',node distance=0.5cm]\n    % Creating rows of blocks\n    {[start chain]\n        \\node[on chain] (s0) {};\n        \\node[on chain] (s1) {};\n        \\node[on chain] (s2) {};\n        \\node[on chain] (s3) {};\n        \\node[on chain] (s4) {};\n    }\n    {[start chain]\n        \\node[block,on chain, below = 0.15 cm of s0] (A0) {};\n        \\node[block,on chain, join =by {line}] (A1) {};\n        \\node[block,on chain, join =by {line}] (A2) {};\n        \\node[block,on chain, join =by {line}] (A3) {};\n        \\node[block,on chain, join =by {line}] (A4) {};\n    }\n    {[start chain]\n        \\node[block,on chain, below = of A0] (B0) {};\n        \\node[block,on chain, join =by {line}] (B1) {};\n        \\node[block,on chain, join =by {line}] (B2) {};\n        \\node[block,on chain, join =by {line}] (B3) {};\n        \\node[block,on chain, join =by {line}] (B4) {};\n    }\n    {[start chain]\n        \\node[block,on chain, below = of B0] (C0) {};\n        \\node[block,on chain, join =by {line}] (C1) {};\n        \\node[block,on chain, join =by {line}] (C2) {};\n        \\node[block,on chain, join =by {line}] (C3) {};\n        \\node[block,on chain, join =by {line}] (C4) {};\n    }\n    {[start chain]\n        \\node[block,on chain, below = of C0] (D0) {};\n        \\node[block,on chain, join =by {line}] (D1) {};\n        \\node[block,on chain, join =by {line}] (D2) {};\n        \\node[block,on chain, join =by {line}] (D3) {};\n        \\node[block,on chain, join =by {line}] (D4) {};\n    }\n    % {[start chain]\n    %     \\node[block,on chain, below = of D0] (E0) {};\n    %     \\node[block,on chain, join =by {line}] (E1) {};\n    %     \\node[block,on chain, join =by {line}] (E2) {};\n    %     \\node[block,on chain, join =by {line}] (E3) {};\n    %     \\node[block,on chain, join =by {line}] (E4) {};\n    % }\n    % Drawing vertical lines\n    \\draw (A0) -- (B0) -- (C0) -- (D0); % -- (E0);\n    \\draw (A1) -- (B1) -- (C1) -- (D1); % -- (E1);\n    \\draw (A2) -- (B2) -- (C2) -- (D2); % -- (E2);\n    \\draw (A3) -- (B3) -- (C3) -- (D3); % -- (E3);\n    \\draw (A4) -- (B4) -- (C4) -- (D4); % -- (E4);\n    % Drawing loop backs horizontal\n    \\draw (A0.west) -- ($(A0.west) - (0.15, 0)$);\n    \\draw ($(A0.west) - (0.15, 0)$) -- ($(A0.west) - (0.15, 0)+(0,0.5)$);\n    \\draw ($(A0.west) - (0.15, 0)+(0,0.5)$) -- ($(A0.west) +(4,0.5)$);\n    \\draw ($(A0.west) +(4,0.5)$) |- (A4.east);\n    % \\draw (A0.north) |- (s2.north east) -| (A4.north);\n    % B row\n    \\draw (B0.west) -- ($(B0.west) - (0.15, 0)$);\n    \\draw ($(B0.west) - (0.15, 0)$) -- ($(B0.west) - (0.15, 0)+(0,0.5)$);\n    \\draw ($(B0.west) - (0.15, 0)+(0,0.5)$) -- ($(B0.west) +(4,0.5)$);\n    \\draw ($(B0.west) +(4,0.5)$) |- (B4.east);\n    % C row\n    \\draw (C0.west) -- ($(C0.west) - (0.15, 0)$);\n    \\draw ($(C0.west) - (0.15, 0)$) -- ($(C0.west) - (0.15, 0)+(0,0.5)$);\n    \\draw ($(C0.west) - (0.15, 0)+(0,0.5)$) -- ($(C0.west) +(4,0.5)$);\n    \\draw ($(C0.west) +(4,0.5)$) |- (C4.east);\n    % D row\n    \\draw (D0.west) -- ($(D0.west) - (0.15, 0)$);\n    \\draw ($(D0.west) - (0.15, 0)$) -- ($(D0.west) - (0.15, 0)+(0,0.5)$);\n    \\draw ($(D0.west) - (0.15, 0)+(0,0.5)$) -- ($(D0.west) +(4,0.5)$);\n    \\draw ($(D0.west) +(4,0.5)$) |- (D4.east);\n     % E row\n    %\\draw (E0.west) -- ($(E0.west) - (0.15, 0)$);\n    %\\draw ($(E0.west) - (0.15, 0)$) -- ($(E0.west) - (0.15, 0)+(0,0.5)$);\n    %\\draw ($(E0.west) - (0.15, 0)+(0,0.5)$) -- ($(E0.west) +(4,0.5)$);\n    %\\draw ($(E0.west) +(4,0.5)$) |- (E4.east);\n    % Vertical Loopbacks\n    \n    % 0 column\n    \\draw (A0.north) -- ($(A0.north) + (0.0, 0.15)$);\n    \\draw ($(A0.north) + (0, 0.15)$) -- ($(A0.north) + (0, 0.15)+(-0.5,0)$);\n    \\draw ($(A0.north) + (0, 0.15)+(-0.5,0)$) -- ($(D0.north) +(-0.5,-0.65)$);\n    \\draw ($(D0.north) +(-0.5,-0.65)$) -| (D0.south);\n    % 1 column\n    \\draw (A1.north) -- ($(A1.north) + (0.0, 0.15)$);\n    \\draw ($(A1.north) + (0, 0.15)$) -- ($(A1.north) + (0, 0.15)+(-0.5,0)$);\n    \\draw ($(A1.north) + (0, 0.15)+(-0.5,0)$) -- ($(D1.north) +(-0.5,-0.65)$);\n    \\draw ($(D1.north) +(-0.5,-0.65)$) -| (D1.south);\n    % 2 column\n    \\draw (A2.north) -- ($(A2.north) + (0.0, 0.15)$);\n    \\draw ($(A2.north) + (0, 0.15)$) -- ($(A2.north) + (0, 0.15)+(-0.5,0)$);\n    \\draw ($(A2.north) + (0, 0.15)+(-0.5,0)$) -- ($(D2.north) +(-0.5,-0.65)$);\n    \\draw ($(D2.north) +(-0.5,-0.65)$) -| (D2.south);\n    \n    % 3 column\n    \\draw (A3.north) -- ($(A3.north) + (0.0, 0.15)$);\n    \\draw ($(A3.north) + (0, 0.15)$) -- ($(A3.north) + (0, 0.15)+(-0.5,0)$);\n    \\draw ($(A3.north) + (0, 0.15)+(-0.5,0)$) -- ($(D3.north) +(-0.5,-0.65)$);\n    \\draw ($(D3.north) +(-0.5,-0.65)$) -| (D3.south);\n    \n    % 4 column\n    \\draw (A4.north) -- ($(A4.north) + (0.0, 0.15)$);\n    \\draw ($(A4.north) + (0, 0.15)$) -- ($(A4.north) + (0, 0.15)+(-0.5,0)$);\n    \\draw ($(A4.north) + (0, 0.15)+(-0.5,0)$) -- ($(D4.north) +(-0.5,-0.65)$);\n    \\draw ($(D4.north) +(-0.5,-0.65)$) -| (D4.south);\n    \\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(r);o.default=r.exports}}]);