(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{126:function(e,n,t){"use strict";t.r(n);var o=t(0),a=function(e){var n,t,o=((n={}).internal=t=void 0,n.contentType="markdown",n.slug="PCC/SwitchDiagram",n.content=t,n.title="SwitchDiagram.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="SwitchDiagram.png" alt="PCC" title="SwitchDiagram"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567371739087),n.type="page",n.permalink="/PCC/SwitchDiagram.html",n.assets={},n.attributes=n,n.prevPost={title:"Q6BlockDiagram4.png",permalink:"/ControlSystems/CSI/Q6BlockDiagram4.html"},n.nextPost={title:"Q6BlockDiagram.png",permalink:"/ControlSystems/CSI/Q6BlockDiagram.html"},n),a=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=o}].concat(a);["layout","transition"].forEach(function(n){var t=e.options.PageComponent;t&&(e.options[n]=t[n]),void 0===e.options[n]&&(e.options[n]=o[n])}),e.options.name="page-wrapper-"+o.slug.replace(/[^0-9a-z\-]/i,"-")},d=Object(o.a)({},function(){var e=this.$createElement,n=this._self._c||e;return n("layout-manager",[n("p",[n("img",{attrs:{src:"SwitchDiagram.png",alt:"PCC",title:"SwitchDiagram"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz]{standalone}\n\\usetikzlibrary{arrows,chains,positioning,scopes,quotes,bending,calc}\n\n\\tikzset{\n    edge/.style={draw,text width=8em,minimum height=1em,align=center,fill=blue!30},\n    blade/.style={draw,text width=1em,minimum height=5em,align=center,fill=red!30},\n    switch/.style={draw,text width=4em,minimum height=3em,align=center,fill=yellow!30},\n    arrow/.style={->}\n}\n\n\\begin{document}\n    \\begin{tikzpicture}[>=stealth']\n    % Direction Switches\n    {[start chain]\n        \\node[switch,on chain] (M0) {Direction Switch};\n        \\node[switch,on chain,right=3cm of M0] (M1) {Direction Switch 2};\n    }\n    % Edge switches\n    {[start chain]\n        \\node[edge,on chain,below left=2cm and 0.25cm of M0] (N0) {Edge Switch 1};\n        \\node[edge,on chain,right=1cm of N0] (N1) {Edge Switch 2};\n        %\\node[block,on chain,join=by {arrow},right=1cm of N1] (N2) {N2};\n        \\node[on chain,right=1cm of N1] (N2) {$\\cdots$};\n        \\node[edge,on chain,right=1cm of N2] (N3) {Edge Switch 56};\n    }\n    % Blade Switches\n     {[start chain]\n        \\node[blade,on chain, below left=0.7cm and 0.1cm of N0] (B0) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 0 \\\\ 0};\n        \\node[blade,on chain,right=0.25cm of B0] (B1) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 0 \\\\ 1 };\n        %\\node[block,on chain,join=by {arrow},right=1cm of N1] (N2) {N2};\n        \\node[on chain,right=0.25cm of B1] (B2) {$\\cdots$};\n        \\node[blade,on chain,right=0.25cm of B2] (B3) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 1 \\\\ 7};\n    }\n    % node containing number of blades\n    \\node[below =0.25cm of N0] (L1) {\\underline{18}};\n    % arrows from blade to edge\n    \\draw [->] (B0.north) -- (N0);\n    \\draw [->] (B1.north) -- (N0);\n    \\draw [->] (B3.north) -- (N0);\n    \\draw[red,thick,dotted] ($(B0.north west)+(-0.3,0.1)$)  rectangle ($(B3.south east)+(0.3,-0.1)$);\n    \\node [below = 1cm of B2](Lsd0) {\\small{chasis 0}};\n    {[start chain]\n        \\node[blade,on chain, below left=0.7cm and 0.1cm of N1] (C0) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\  0 \\\\ 0 };\n        \\node[blade,on chain,right=0.25cm of C0] (C1) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 0 \\\\ 1 };\n        %\\node[block,on chain,join=by {arrow},right=1cm of N1] (N2) {N2};\n        \\node[on chain,right=0.25cm of C1] (C2) {$\\cdots$};\n        \\node[blade,on chain,right=0.25cm of C2] (C3) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 1 \\\\ 7};\n    }\n    % node containing number of blades\n    \\node[below =0.25cm of N1] (L2) {\\underline{18}};\n    % arrows from blade to edge\n    \\draw [->] (C0.north) -- (N1);\n    \\draw [->] (C1.north) -- (N1);\n    \\draw [->] (C3.north) -- (N1);\n    % bounding box\n    \\draw[red,thick,dotted] ($(C0.north west)+(-0.3,0.1)$)  rectangle ($(C3.south east)+(0.3,-0.1)$);\n    \\node [below = 1cm of C2](Lsd1) {\\small{chasis 1}};\n    {[start chain]\n        \\node[blade,on chain, below left=0.7cm and 0.1cm of N3] (D0) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 0 \\\\ 0};\n        \\node[blade,on chain,right=0.25cm of D0] (D1) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 0 \\\\ 1 };\n        %\\node[block,on chain,join=by {arrow},right=1cm of N1] (N2) {N2};\n        \\node[on chain,right=0.25cm of D1] (D2) {$\\cdots$};\n        \\node[blade,on chain,right=0.25cm of D2] (D3) {B \\\\ l \\\\ a \\\\ d \\\\ e \\\\ 1 \\\\ 7};\n    }\n    % node containing number of blades\n    \\node[below =0.25cm of N3] (L3) {\\underline{18}};\n    % arrows from blade to edge\n    \\draw [->] (D0.north) -- (N3);\n    \\draw [->] (D1.north) -- (N3);\n    \\draw [->] (D3.north) -- (N3);\n        % bounding box\n    \\draw[red,thick,dotted] ($(D0.north west)+(-0.3,0.1)$)  rectangle ($(D3.south east)+(0.3,-0.1)$);\n    \\node [below = 1cm of D2](Lsd3) {\\small{chasis 56}};\n    \n    % Edge switchs to direction switches arrows\n    \\path (N1.north west) edge[blue,->,bend left=10] node [left] {} (M0); \n    \\path (N1.north west) edge[blue,->,bend left=30] node [left] {} (M0);\n    \\path (N1.north west) edge[blue,->] node [left] {} (M0); \n    \n    \\path (N1.north east) edge[blue,->,bend left=10] node [left] {} (M1); \n    \\path (N1.north east) edge[blue,->,bend left=30] node [left] {} (M1);\n    \\path (N1.north east) edge[blue,->] node [left] {} (M1); \n    \n    % N1, switch 2\n    \\path (N0.north west) edge[blue,->,bend left=10] node [left] {} (M0); \n    \\path (N0.north west) edge[blue,->,bend left=30] node [left] {} (M0);\n    \\path (N0.north west) edge[blue,->] node [left] {} (M0); \n    \n    \\path (N0.north east) edge[blue,->,bend left=10] node [left] {} (M1); \n    \\path (N0.north east) edge[blue,->,bend left=30] node [left] {} (M1);\n    \\path (N0.north east) edge[blue,->] node [left] {} (M1); \n    % N3, edge switch 56\n    \\path (N3.north west) edge[blue,->,bend left=20] node [left] {} (M0.east); \n    \\path (N3.north west) edge[blue,->,bend left=40] node [left] {} (M0.east);\n    \\path (N3.north west) edge[blue,->] node [left] {} (M0.east); \n    \\path (N3) edge[blue,->,bend left=20] node [left] {} (M1); \n    \\path (N3) edge[blue,->,bend left=40] node [left] {} (M1);\n    \\path (N3) edge[blue,->] node [left] {} (M1); \n    \n    \\node[above right =0.10cm of N1.north west] (NL1) {\\underline{9}};\n    \\node[above =0.25cm of N0.north west] (NL0) {\\underline{9}};\n    \\node[above =0.25cm of N0.north west] (NL0) {\\underline{9}};\n    \\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(d);n.default=d.exports}}]);