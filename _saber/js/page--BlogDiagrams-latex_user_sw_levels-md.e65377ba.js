(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{68:function(t,e,n){"use strict";n.r(e);var s=n(0),i=function(t){var e,n,s=((e={}).internal=n=void 0,e.contentType="markdown",e.slug="BlogDiagrams/latex_user_sw_levels",e.content=n,e.title="latex_user_sw_levels.png",e.date="2019-08-31",e.layout="test",e.markdownHeadings=[],e.excerpt='<p><img src="latex_user_sw_levels.png" alt="BlogDiagrams" title="latex_user_sw_levels"></p>\n',e.createdAt=new Date(15672096e5),e.updatedAt=new Date(1567390847101),e.type="page",e.permalink="/BlogDiagrams/latex_user_sw_levels.html",e.assets={},e.attributes=e,e.prevPost={title:"simpleTimeline.png",permalink:"/ReportDiagrams/ENGR446/simpleTimeline.html"},e.nextPost={title:"smartContractsExp.png",permalink:"/ReportDiagrams/ENGR446/smartContractsExp.html"},e),i=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=s}].concat(i);["layout","transition"].forEach(function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=s[e])}),t.options.name="page-wrapper-"+s.slug.replace(/[^0-9a-z\-]/i,"-")},a=Object(s.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("layout-manager",[e("p",[e("img",{attrs:{src:"latex_user_sw_levels.png",alt:"BlogDiagrams",title:"latex_user_sw_levels"}})]),this._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[e("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("% Interaction diagram, LaTeX user level and TeX system software level\n% Author: Agostino De Marco\n% Based on diagram from Marco Miani and Pascal Seppecher.\n\\documentclass{article}\n\\usepackage{tikz}\n%%%<\n\\usepackage{verbatim}\n\\usepackage[active,tightpage]{preview}\n\\PreviewEnvironment{tikzpicture}\n\\setlength\\PreviewBorder{5pt}%\n%%%>\n\\usetikzlibrary{positioning}\n\n\\newcommand{\\yslant}{0.5}\n\\newcommand{\\xslant}{-0.6}\n\\begin{document}\n\\begin{tikzpicture}[scale=1.1,every node/.style={minimum size=1cm},on grid]\n\n\t% Software level\n\t\\begin{scope}[\n\t\tyshift=-120,\n\t\tevery node/.append style={yslant=\\yslant,xslant=\\xslant},\n\t\tyslant=\\yslant,xslant=\\xslant\n\t] \n\t\t% The lower frame:\n\t\t\\draw[black, dashed, thick] (-1.3,0) rectangle (8.2,4.8); \n\t\t% Agents:\n\t\t\\draw[fill=red]  \n\t\t\t(7.5,2) circle (.1) % .pdf file\n\t\t\t(5,2) circle (.1) % .ps file\n\t\t\t(2,2) circle (.1) % .dvi file\n\t\t\t(-0.5,2) circle (.1); % .tex file\n\t\t% Flows:\n\t\t\\draw[-latex,ultra thick,shorten <=5pt,shorten >=5pt] \n\t\t\t(-0.5,2) to[out=0,in=-180] (2,2); % latex\n\t\t\\draw[-latex,ultra thick,shorten <=5pt,shorten >=5pt] \n\t\t\t(2,2) to[out=0,in=-180] (5,2); % dvi2ps\n\t\t\\draw[latex-latex,ultra thick,shorten <=5pt,shorten >=5pt] \n\t\t\t(5,2) to[out=0,in=-180] (7.5,2); % ps2pdf, pdf2ps\n\t\t\\draw[-latex,ultra thick,shorten <=5pt,shorten >=5pt] \n\t\t\t(-0.5,2) to[out=90,in=-180] (3.5,3.8) to[out=0,in=90] (7.5,2); % pdflatex\n\t\t\\draw[-latex,ultra thick,shorten <=5pt,shorten >=5pt] \n\t\t\t(2,2) to[out=90,in=-180] (2.7,3.0) to[out=0,in=-180] (6.7,3.0) to[out=0,in=135] (7.5,2); % ps2pdfm\n\t\t % Labels:\n\t\t\\fill[black]\n\t\t\t(1.0,2) node[above=-3pt, scale=0.9] {\\textsf{\\bfseries file}}\t\t\t\n\t\t\t(3.5,2) node[above=-5pt, scale=0.9] {\\textsf{\\bfseries hash}}\n\t\t\t(6.25,2) node[above=-5pt, scale=0.9] {\\textsf{\\bfseries interacts}}\n\t\t\t%(6.25,2) node[xshift=-1ex,below=-5pt, scale=0.9] {\\textsf{\\bfseries pdf2ps}}\n\t\t\t(3.5,3.8) node[xshift=2ex,below=-5pt, scale=0.9] {\\textsf{\\bfseries logic contained in}}\n\t\t\t(4.3,3.0) node[xshift=2ex,below=-5pt, scale=0.9] {\\textsf{\\bfseries complements}}\n\t\t\t(1.3,0.1) node[above=-2pt, scale=1.1] {\\textbf{Blockchain/Ethereum Level}}\n\t\t\t(-0.5,2) node[below,scale=.9]{\\textsf{\\bfseries Dapp} }\n\t\t\t(2,2) node[below,scale=.9]{\\textsf{\\bfseries IPFS}}\n\t\t\t(5,2) node[below,scale=.9]{\\textsf{\\bfseries Metamask}}\n\t\t\t(7.5,2) node[below,scale=.9]{\\textsf{\\bfseries Solidity}};\t\n\t\\end{scope}\n\t\n\t% vertical lines for linking agents on the 2 levels\n\t\\draw[thick](6.3,5.1) to (6.3,0.9);\n\t\\draw[thick](3.8,4) to (3.8,-0.32);\n\t\\draw[thick](0.8,2.4) to (.8,-1.8);\n\t\\draw[thick](-1.70,1.02) to (-1.70,-3);\n\t\n\t% User level\n\t\\begin{scope}[\n\t\tyshift=0,\n\t\tevery node/.append style={yslant=\\yslant,xslant=\\xslant},\n\t\tyslant=\\yslant,xslant=\\xslant\n\t]\n\t\t% The upper frame:\n\t\t\\fill[white,fill opacity=.70] (-3.1,0) rectangle (9.9,6); % Opacity\n\t\t\\draw[black, dashed, thick] (-3.1,0) rectangle (9.9,6); \n\t\t % Agents:\n\t\t\\draw [fill=red]\n\t\t\t(7.5,2) circle (.1) % .pdf file\n\t\t\t(5,2) circle (.1) % .ps\n\t\t\t(2,2) circle (.1) % .dvi\n\t\t\t(-0.5,2) circle (.1); % .tex file\n\n\t\t% the icons\n\t\t\\node[anchor=south,inner sep=0,xshift=-20pt,yshift=10pt,fill=white] at (-0.5,2)\n\t\t\t{\\includegraphics[width=2.5cm]{truffle.png}};\n\t\t\\node[anchor=south,inner sep=0,xshift=0pt,yshift=8pt] at (2,2)\n\t\t\t{\\includegraphics[width=2.5cm]{ipfs-logo.png}};\n\t\t\\node[anchor=south,inner sep=0,xshift=-5pt,yshift=8pt] at (5,2)\n\t\t\t{\\includegraphics[width=3.0cm]{metamask.png}};\n\t\t\\node[anchor=south,inner sep=0,xshift=20pt,yshift=8pt] at (7.5,2)\n\t\t\t{\\includegraphics[width=3.5cm]{ethereum.png}};\n\n\t\t\\fill[black]\n\t\t\t(7.5,2) node[below right,,xshift=-20pt,yshift=-5pt,scale=.9,text width=2.5cm,align=left,fill=white]\n\t\t\t\t{\\textsf{\\bfseries \\mbox{Smart Contracts}}\\\\ \\textsf{\\bfseries IPFS Hashes}\n\t\t\t\t\\\\ \\textsf{\\bfseries Authentication}}\n\t\t\t(-2.5,5.5) node[anchor=west,inner sep=0, scale=1.1] {\\textbf{User level}}\n\t\t\t(5.1,1.9) node[below right,xshift=-20pt,scale=.9,text width=2cm,align=left,fill=white]\n\t\t\t\t{\\textsf{\\bfseries Transactions}\\\\ \\textsf{\\bfseries Ethereum Browser} }\n\t\t\t(1.9,1.9) node[below right,xshift=-10pt,scale=.9,text width=2cm,align=left,fill=white]\n\t\t\t\t{\\textsf{\\bfseries File Storage}\\\\ \\textsf{\\bfseries Peer to Peer}}\n\t\t\t(-0.5,2) node[below right,xshift=-20pt,yshift=-5pt,scale=.9,text width=2.5cm,align=left,fill=white]\n\t\t\t\t{\\textsf{\\bfseries Drizzle}\\\\ \\textsf{\\bfseries React}\\\\\n\t\t\t\t\t\\textsf{\\bfseries Truffle}} \n\t\t;\n\t\\end{scope} \n\\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof i&&i(a);e.default=a.exports}}]);