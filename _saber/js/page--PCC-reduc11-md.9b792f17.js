(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{126:function(e,n,t){"use strict";t.r(n);var i=t(0),a=function(e){var n,t,i=((n={}).internal=t=void 0,n.contentType="markdown",n.slug="PCC/reduc11",n.content=t,n.title="reduc11.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="reduc11.png" alt="PCC" title="reduc11"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567396211537),n.type="page",n.permalink="/PCC/reduc11.html",n.assets={},n.attributes=n,n.prevPost={title:"Q5BlockDiagram6.png",permalink:"/ControlSystems/CSI/Q5BlockDiagram6.html"},n.nextPost={title:"Q5BlockDiagram5.png",permalink:"/ControlSystems/CSI/Q5BlockDiagram5.html"},n),a=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=i}].concat(a);["layout","transition"].forEach(function(n){var t=e.options.PageComponent;t&&(e.options[n]=t[n]),void 0===e.options[n]&&(e.options[n]=i[n])}),e.options.name="page-wrapper-"+i.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(i.a)({},function(){var e=this.$createElement,n=this._self._c||e;return n("layout-manager",[n("p",[n("img",{attrs:{src:"reduc11.png",alt:"PCC",title:"reduc11"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz]{standalone}\n\\tikzset{near start abs/.style={xshift=1cm}}\n\n\\usetikzlibrary{positioning}\n\\begin{document}\n\\begin{tikzpicture}[node distance=1.5cm]\n    % place nodes\n    \\node[circle,draw=black, fill=white, inner sep=0pt,minimum size=10pt] (r) {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,right of=r, minimum size=10pt] (r1a)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,above right of=r, minimum size=10pt] (r2a)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,right of=r2a, minimum size=10pt] (r2b)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,above of=r2a, minimum size=10pt] (r3a)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,right of=r3a, minimum size=10pt] (r3b)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,above right of=r3a, minimum size=10pt] (r4a)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,right of=r4a, minimum size=10pt] (r4b)  {};\n    % Extension from 7 nodes\n    % Blank node\n    \\node[inner sep=0pt,below right of=r, minimum size=10pt] (t)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,below right of=t, minimum size=10pt] (t1)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,above right of=t1, minimum size=10pt] (t2a)  {};\n    \\node[circle,draw=black, fill=white, inner sep=0pt,right of=t1, minimum size=10pt] (t2b)  {};\n    \\draw (r) -- node[above] {\\small{1}} ++(r1a);\n    \\draw (r) -- node[above] {\\small{2}} ++(r2a);\n    \\draw (r3a) -- node[above] {\\small{3}} ++(r);\n    \\draw (r2a) -- node[above] {\\small{1}} ++(r2b);\n    \\draw (r3a) -- node[above] {\\small{1}} ++(r3b);\n    \\draw (r3a) -- node[above] {\\small{2}} ++(r4a);\n    \\draw (r4a) -- node[above] {\\small{1}} ++(r4b);\n    \n    \\draw[->, thick] (r) -- node[above] {\\small{4}} ++(t1);\n    \\draw (t1) -- node[above] {\\small{3}} ++(t2a);\n    \\draw (t1) -- node[above] {\\small{2}} ++(t2b);\n\\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(r);n.default=r.exports}}]);