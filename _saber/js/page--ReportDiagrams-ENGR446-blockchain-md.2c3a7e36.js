(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{72:function(n,t,a){"use strict";a.r(t);var e=a(0),o=function(n){var t,a,e=((t={}).internal=a=void 0,t.contentType="markdown",t.slug="ReportDiagrams/ENGR446/blockchain",t.content=a,t.title="blockchain.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="blockchain.png" alt="ReportDiagrams/ENGR446" title="blockchain"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567371739075),t.type="page",t.permalink="/ReportDiagrams/ENGR446/blockchain.html",t.assets={},t.attributes=t,t.prevPost={title:"webApp.png",permalink:"/BlogDiagrams/webApp.html"},t.nextPost={title:"tech-stack.png",permalink:"/BlogDiagrams/tech-stack.html"},t),o=n.options.beforeCreate||[];n.options.beforeCreate=[function(){this.$page=e}].concat(o);["layout","transition"].forEach(function(t){var a=n.options.PageComponent;a&&(n.options[t]=a[t]),void 0===n.options[t]&&(n.options[t]=e[t])}),n.options.name="page-wrapper-"+e.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(e.a)({},function(){var n=this.$createElement,t=this._self._c||n;return t("layout-manager",[t("p",[t("img",{attrs:{src:"blockchain.png",alt:"ReportDiagrams/ENGR446",title:"blockchain"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz]{standalone}\n\\usetikzlibrary{shadows,chains,scopes}\n\\usetikzlibrary{decorations.pathmorphing, shapes}\n\\begin{document}\n\\begin{tikzpicture}\n  [\n    start chain=going right,\n    node distance=5mm,\n    every on chain/.style={\n      thick,\n      draw=black,\n      top color=white,\n      bottom color=yellow!40,\n      font=\\sffamily\\small,\n      minimum width=6mm,\n      minimum height=6mm,\n      %drop shadow,\n      %label={below:block \\tikzchaincount},\n    },\n    decoration={coil},\n    dna/.style={decorate, thick, decoration={aspect=0, segment length=5cm}},\n%    post join/.style={\n%      -stealth,\n%      line width=1.5mm,\n%      red,\n%      rounded corners=1mm,\n%    },\n\tsquare/.style={thick,\n\t      draw=black,\n\t      top color=white,\n\t      bottom color=black!10,\n\t      font=\\sffamily\\small,\n\t      minimum width=12mm,\n\t      minimum height=10mm,\n\t      drop shadow},\n    every label/.style={\n      font=\\sffamily\\scriptsize\n    },\n  ]\n  \\draw[dna, decoration={amplitude=.15cm}] (0,-0) -- (1.1,-0);\n  \\draw[dna, decoration={amplitude=.35cm}] (1.15,0) -- (1.15,-1.1);\n  \\draw[dna, decoration={amplitude=.35cm}] (1.15,-1.1) -- (0,-1.1);\n  \\draw[dna, decoration={amplitude=.35cm}] (0,-1.1) -- (0,0);\n%  \\draw[dna, decoration={amplitude=.15cm}] (.1,-0) -- (1.5,-0);\n%  \n%  \\draw[dna, decoration={amplitude=.15cm}] (2.25,-0) -- (3.65,-0);\n%   %\\draw[dna, decoration={amplitude=.35cm}] (.9,-0) -- (1.5,-0);\n%  \\draw[dna, decoration={amplitude=.15cm}] (1.85,-0) -- (3.25,-0);\n%    \n%  \\draw[dna, decoration={amplitude=.15cm}] (.5,-2.5) -- (1.9,-2.5);\n%  %\\draw[dna, decoration={amplitude=.35cm}] (.9,-0) -- (1.5,-0);\n%  \\draw[dna, decoration={amplitude=.15cm}] (.1,-2.5) -- (1.5,-2.5);\n%    \n%  \\draw[dna, decoration={amplitude=.15cm}] (2.25,-2.5) -- (3.65,-2.5);\n%   %\\draw[dna, decoration={amplitude=.35cm}] (.9,-0) -- (1.5,-0);\n%   \\draw[dna, decoration={amplitude=.15cm}] (1.85,-2.5) -- (3.25,-2.5);\n   \n   %% Path for dots\n  \\node [on chain] {};\n  \\node [on chain] {};\n  \\node [on chain=going below] {};\n  {[continue chain=going left]\n    \\node [on chain] {};\n  }\n  %\\node[square,left of= chain-6] {G};\n  {[transparency group, opacity=.25]\n%    \\draw [post join] (chain-1.south) |- (chain-3.center) |- (chain-6.center) -- (chain-6.north);\n  }\n %\\path (chain-3.south) -- (chain-4.north) node [black, font=\\Huge, midway, sloped,xshift=0cm] {$\\dots$};\n \n%\\node[] at (1.75,-1.25) { \\textsc{BLOCKCHAIN}};\n\\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof o&&o(i);t.default=i.exports}}]);