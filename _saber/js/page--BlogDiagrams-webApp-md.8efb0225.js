(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{74:function(e,n,t){"use strict";t.r(n);var a=t(0),r=function(e){var n,t,a=((n={}).internal=t=void 0,n.contentType="markdown",n.slug="BlogDiagrams/webApp",n.content=t,n.title="webApp.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="webApp.png" alt="BlogDiagrams" title="webApp"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567390847097),n.type="page",n.permalink="/BlogDiagrams/webApp.html",n.assets={},n.attributes=n,n.prevPost={title:"blockchainInSimpleApp.png",permalink:"/ReportDiagrams/ENGR446/blockchainInSimpleApp.html"},n.nextPost={title:"dna.png",permalink:"/ReportDiagrams/ENGR446/dna.html"},n),r=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=a}].concat(r);["layout","transition"].forEach(function(n){var t=e.options.PageComponent;t&&(e.options[n]=t[n]),void 0===e.options[n]&&(e.options[n]=a[n])}),e.options.name="page-wrapper-"+a.slug.replace(/[^0-9a-z\-]/i,"-")},p=Object(a.a)({},function(){var e=this.$createElement,n=this._self._c||e;return n("layout-manager",[n("p",[n("img",{attrs:{src:"webApp.png",alt:"BlogDiagrams",title:"webApp"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz,border=3.14mm]{standalone}\n\\usetikzlibrary{shapes.geometric,shapes.symbols,fit,positioning,shadows}\n% https://tex.stackexchange.com/a/12039/121799\n\\makeatletter\n\\pgfkeys{/pgf/.cd,\n  parallelepiped offset x/.initial=2mm,\n  parallelepiped offset y/.initial=2mm\n}\n\\pgfdeclareshape{parallelepiped}\n{\n  \\inheritsavedanchors[from=rectangle] % this is nearly a rectangle\n  \\inheritanchorborder[from=rectangle]\n  \\inheritanchor[from=rectangle]{north}\n  \\inheritanchor[from=rectangle]{north west}\n  \\inheritanchor[from=rectangle]{north east}\n  \\inheritanchor[from=rectangle]{center}\n  \\inheritanchor[from=rectangle]{west}\n  \\inheritanchor[from=rectangle]{east}\n  \\inheritanchor[from=rectangle]{mid}\n  \\inheritanchor[from=rectangle]{mid west}\n  \\inheritanchor[from=rectangle]{mid east}\n  \\inheritanchor[from=rectangle]{base}\n  \\inheritanchor[from=rectangle]{base west}\n  \\inheritanchor[from=rectangle]{base east}\n  \\inheritanchor[from=rectangle]{south}\n  \\inheritanchor[from=rectangle]{south west}\n  \\inheritanchor[from=rectangle]{south east}\n  \\backgroundpath{\n    % store lower right in xa/ya and upper right in xb/yb\n    \\southwest \\pgf@xa=\\pgf@x \\pgf@ya=\\pgf@y\n    \\northeast \\pgf@xb=\\pgf@x \\pgf@yb=\\pgf@y\n    \\pgfmathsetlength\\pgfutil@tempdima{\\pgfkeysvalueof{/pgf/parallelepiped offset x}}\n    \\pgfmathsetlength\\pgfutil@tempdimb{\\pgfkeysvalueof{/pgf/parallelepiped offset y}}\n    \\def\\ppd@offset{\\pgfpoint{\\pgfutil@tempdima}{\\pgfutil@tempdimb}}\n    \\pgfpathmoveto{\\pgfqpoint{\\pgf@xa}{\\pgf@ya}}\n    \\pgfpathlineto{\\pgfqpoint{\\pgf@xb}{\\pgf@ya}}\n    \\pgfpathlineto{\\pgfqpoint{\\pgf@xb}{\\pgf@yb}}\n    \\pgfpathlineto{\\pgfqpoint{\\pgf@xa}{\\pgf@yb}}\n    \\pgfpathclose\n    \\pgfpathmoveto{\\pgfqpoint{\\pgf@xb}{\\pgf@ya}}\n    \\pgfpathlineto{\\pgfpointadd{\\pgfpoint{\\pgf@xb}{\\pgf@ya}}{\\ppd@offset}}\n    \\pgfpathlineto{\\pgfpointadd{\\pgfpoint{\\pgf@xb}{\\pgf@yb}}{\\ppd@offset}}\n    \\pgfpathlineto{\\pgfpointadd{\\pgfpoint{\\pgf@xa}{\\pgf@yb}}{\\ppd@offset}}\n    \\pgfpathlineto{\\pgfqpoint{\\pgf@xa}{\\pgf@yb}}\n    \\pgfpathmoveto{\\pgfqpoint{\\pgf@xb}{\\pgf@yb}}\n    \\pgfpathlineto{\\pgfpointadd{\\pgfpoint{\\pgf@xb}{\\pgf@yb}}{\\ppd@offset}}\n  }\n}\n% https://tex.stackexchange.com/a/103691/121799\n\\pgfdeclareshape{document}{\n\\inheritsavedanchors[from=rectangle] % this is nearly a rectangle\n\\inheritanchorborder[from=rectangle]\n\\inheritanchor[from=rectangle]{center}\n\\inheritanchor[from=rectangle]{north}\n\\inheritanchor[from=rectangle]{north east}\n\\inheritanchor[from=rectangle]{north west}\n\\inheritanchor[from=rectangle]{south}\n\\inheritanchor[from=rectangle]{south east}\n\\inheritanchor[from=rectangle]{south west}\n\\inheritanchor[from=rectangle]{west}\n\\inheritanchor[from=rectangle]{east}\n\\backgroundpath{%\n\\southwest \\pgf@xa=\\pgf@x \\pgf@ya=\\pgf@y\n\\northeast \\pgf@xb=\\pgf@x \\pgf@yb=\\pgf@y\n\\pgf@xc=\\pgf@xb \\advance\\pgf@xc by-5pt % this should be a parameter\n\\pgf@yc=\\pgf@ya \\advance\\pgf@yc by5pt\n\\pgfpathmoveto{\\pgfpoint{\\pgf@xa}{\\pgf@ya}}\n\\pgfpathlineto{\\pgfpoint{\\pgf@xa}{\\pgf@yb}}\n\\pgfpathlineto{\\pgfpoint{\\pgf@xb}{\\pgf@yb}}\n\\pgfpathlineto{\\pgfpoint{\\pgf@xb}{\\pgf@yc}}\n\\pgfpathlineto{\\pgfpoint{\\pgf@xc}{\\pgf@ya}}\n\\pgfpathclose\n% add little corner\n\\pgfpathmoveto{\\pgfpoint{\\pgf@xc}{\\pgf@ya}}\n\\pgfpathlineto{\\pgfpoint{\\pgf@xc}{\\pgf@yc}}\n\\pgfpathlineto{\\pgfpoint{\\pgf@xb}{\\pgf@yc}}\n\\pgfpathclose\n}\n}\n\\makeatother\n\\begin{document}\n\\tikzset{doc/.style={document,fill=blue!10,draw,thin,minimum\nheight=1.2cm,align=center},\npics/.cd,\npack/.style={code={%\n\\draw[fill=blue!50,opacity=0.2] (0,0) -- (0.5,-0.25) -- (0.5,0.25) -- (0,0.5) -- cycle;\n\\draw[fill=blue!50,opacity=0.2] (0,0) -- (-0.5,-0.25) -- (-0.5,0.25) -- (0,0.5) -- cycle;\n\\draw[fill=blue!60,opacity=0.2] (0,0) -- (-0.5,-0.25) -- (0,-0.5) -- (0.5,-0.25) -- cycle;\n\\draw[fill=blue!60] (0,0) -- (0.25,0.125) -- (0,0.25) -- (-0.25,0.125) -- cycle;\n\\draw[fill=blue!50] (0,0) -- (0.25,0.125) -- (0.25,-0.125) -- (0,-0.25) -- cycle;\n\\draw[fill=blue!50] (0,0) -- (-0.25,0.125) -- (-0.25,-0.125) -- (0,-0.25) -- cycle;\n\\draw[fill=blue!50,opacity=0.2] (0,-0.5) -- (0.5,-0.25) -- (0.5,0.25) -- (0,0) -- cycle;\n \\draw[fill=blue!50,opacity=0.2] (0,-0.5) -- (-0.5,-0.25) -- (-0.5,0.25) -- (0,0) -- cycle;\n\\draw[fill=blue!60,opacity=0.2] (0,0.5) -- (-0.5,0.25) -- (0,0) -- (0.5,0.25) -- cycle;\n}}}\n\\begin{tikzpicture}[font=\\sffamily,every label/.append\nstyle={font=\\small\\sffamily,align=center}]\n\\node[cylinder, cylinder uses custom fill, cylinder end fill=blue!25,\ncylinder body fill=blue!50,shape border rotate=90,text=white,\naspect=0.4,minimum width=1cm,minimum height=1.4cm](Store){Store};\n\\node[right=1cm of Store,regular polygon,regular polygon sides=6,fill=orange,\nxscale=1.2,text=white] (Router) {Router};\n\\node[fit=(Store) (Router)](fit1){};\n\\node[below=1cm of fit1,tape, draw,thin, tape bend top=none,fill=purple,\ntext=white,minimum width=2.2cm,double copy shadow,minimum height=1.5cm]\n(Components) {Components};\n\\node[draw,dashed,rounded corners,fit=(Store) (Router) (Components),inner\nsep=10pt,label={above:{Universal\\\\ Application Code}}](fit2){};\n\\node[right=1cm of fit2,doc] (js) {app.js};\n\\node[above right=1cm of js,doc] (Server) {Server\\\\ entity};\n\\node[below right=1cm of js,doc] (Client) {Client\\\\ entry};\n\\draw(fit2.east) -- (js);\n\\draw[-latex] (js) |- (Server);\n\\draw[-latex] (js) |- (Client);\n\\draw[-] (Client) -- ++ (1,0) |- (Server) coordinate[pos=0.25] (aux1);\n\\node[draw,dashed,rounded corners,fit=(fit2) (aux1),inner\nxsep=10pt,inner ysep=30pt,label={above:{Source}}](fit3){};\n%\n\\pic[right=2cm of aux1,local bounding box=Webpack,scale=2] (Webpack) {pack};\n\\node[below=1mm of Webpack,font=\\small\\sffamily,align=center]{Webpack\\\\ build};\n%\n\\node[above right=1cm and 2cm of Webpack.east,doc,fill=red!10] (ServerBundle)\n{Server\\\\ bundle};\n\\node[below right=1cm and 2cm of Webpack.east,doc,fill=red!10] (ClientBundle) {Client\\\\\nbundle};\n\\node[right=2cm of ServerBundle,parallelepiped,draw=yellow,fill=red!80,\n  minimum width=2cm,minimum height=1.5cm,align=center,text=white]\n  (BundleRenderer)   {Bundle\\\\ Renderer};\n\\node[right=2cm of ClientBundle,doc,fill=yellow,minimum width=2cm,minimum height=1.5cm] (HTML) {HTML};\n\\draw[-latex] (aux1) -- (Webpack);\n\\draw[-latex] (Webpack) -- ++ (2,0) coordinate(aux2) |- (ServerBundle);\n\\draw[-latex] (aux2) |- (ClientBundle);\n\\draw[-latex] (ClientBundle) -- (HTML) node[midway,below,font=\\small\\sffamily]{Hydrate};\n\\draw (ServerBundle) -- (BundleRenderer);\n\\draw[-latex] (BundleRenderer) -- (HTML) node[midway,right,font=\\small\\sffamily]{Render};\n% \n\\node[draw,dashed,rounded corners,fit=(ServerBundle) (BundleRenderer),inner\nsep=10pt,label={above:{Node server}}](fit4){};\n\\node[draw,dashed,rounded corners,fit=(ClientBundle) (HTML),inner\nsep=10pt,label={below:{Browser}}](fit5){};\n\\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof r&&r(p);n.default=p.exports}}]);