(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{201:function(e,t,n){"use strict";n.r(t);var i=n(0),r=function(e){var t,n,i=((t={}).internal=n=void 0,t.contentType="markdown",t.slug="EngineeringSoftwareDesign/CPUPicture",t.content=n,t.title="CPUPicture.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="CPUPicture.png" alt="EngineeringSoftwareDesign" title="CPUPicture"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567390847093),t.type="page",t.permalink="/EngineeringSoftwareDesign/CPUPicture.html",t.assets={},t.attributes=t,t.prevPost={title:"a5a11_a.png",permalink:"/DSP/a5a11_a.html"},t.nextPost={title:"a5_4c.png",permalink:"/DSP/a5_4c.html"},t),r=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=i}].concat(r);["layout","transition"].forEach(function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=i[t])}),e.options.name="page-wrapper-"+i.slug.replace(/[^0-9a-z\-]/i,"-")},m=Object(i.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"CPUPicture.png",alt:"EngineeringSoftwareDesign",title:"CPUPicture"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass[tikz, border=2mm]{standalone}\n\n\\usetikzlibrary{positioning,shapes,arrows,backgrounds,external,fit,calc}\n\\usepackage[T1]{fontenc}\n\\usepackage[utf8]{inputenc}\n\\usepackage{lmodern}\n\n\\tikzset{\n    BlockCPU/.style={draw,thick, fill=blue!20, rectangle},\n    BlockAltre/.style={draw,thick, fill=blue!35, rectangle},\n    Periferic/.style={ellipse, draw, fill=blue!15},\n    Registre/.style={rectangle, draw, fill=blue!5},\n    RegistreBuit/.style={rectangle, draw, fill=blue!30,minimum width=.9cm, minimum height=3mm, inner sep =0pt, outer sep=0.pt, anchor=south east},\n    Bus/.style={fill=blue!50},\n    Nom/.style={font=\\normalsize\\sffamily,text centered, minimum size=1cm, text width=1.5cm}\n    }\n\n\\begin{document}\n\\begin{tikzpicture}[font={\\sffamily\\scriptsize}]\n\n\\node[Registre, minimum width=3.9cm, minimum height=3.4cm, anchor=south west, label={above:CPU (Processor)}] (CPU) at (0,0) {};\n%\\node[Nom,above right, align=left] (CPUnom) at (CPU.north west) {CPU};\n\\node[BlockCPU, minimum width=2cm, anchor=south west] (IB) at (0.3,0.3) {Bus interface};\n\\node[RegistreBuit] (Reg1) at ($(IB.north east)+(-2mm,5mm)$) {};\n\\node[RegistreBuit] (Reg2) at (Reg1.north east) {};\n\\node[RegistreBuit] (Reg3) at (Reg2.north east) {};\n\\node[RegistreBuit] (Reg4) at (Reg3.north east) {};\n\\node[RegistreBuit,label={above:Registers}] (Reg5) at (Reg4.north east) {};\n\\node[BlockCPU, left=3mm of Reg3] (PC) {PC};\n\\node[BlockCPU, right=5mm of Reg3, minimum width=1cm, minimum height=2cm] (ALU) {ALU};\n\n\\draw let \\p1=($(Reg1.south) - (Reg1|-IB.north)$), \\n1={veclen(\\x1,\\y1)} in node[double arrow, Bus, shape border rotate=90,anchor=north, minimum height=\\n1-\\pgflinewidth,minimum width=1mm, double arrow head extend=.5mm]  at ([yshift=.5\\pgflinewidth]Reg1.south) {};\n\n\\node[single arrow, Bus, anchor=west, minimum width=2mm, single arrow head extend=.5mm, minimum height=5mm-.5\\pgflinewidth] at (Reg4.east) {};\n\n\\node[single arrow, Bus, anchor=west, minimum width=2mm, single arrow head extend=.75mm, minimum height=5mm-.5\\pgflinewidth, shape border rotate=180] at (Reg2.east) {};\n\n\\node[double arrow, Bus,, anchor=west, minimum width=1mm, double arrow head extend=.75mm] (BusS) at (IB.east) {System bus};\n\n\\node[Registre,minimum width=12mm,minimum height=8mm, anchor=west] (ES) at (BusS.east) {E/S Bridge};\n\n\\node[double arrow, Bus,, anchor=west, minimum width=1mm, double arrow head extend=.75mm] (BusM) at (ES.east) {Memory bus};\n\n\\node[Registre,minimum width=12mm,minimum height=8mm, text centered,text width=12mm,anchor=west] (Mem) at (BusM.east) {Main memory};\n\n\\node[double arrow, Bus,, anchor=north, minimum height=9cm, minimum width=2mm, double arrow head extend=.75mm,anchor=north] (BusES) at ([yshift=-.3cm]ES.south) {Input/Output bus};\n\n\\node[single arrow, Bus,, anchor=north, minimum width=2mm, single arrow head extend=.75mm, minimum height=3mm-.5\\pgflinewidth, shape border rotate=90] (BusESP) at (ES.south) {};\n\n\\node[single arrow, Bus,, anchor=north, minimum width=2mm, single arrow head extend=.75mm, minimum height=5mm-.5\\pgflinewidth, shape border rotate=270] (Per1) at ([shift={(-3.5cm,1mm)}]BusES.south) {};\n\n\\node[Periferic,anchor=north] (Ratoli) at (Per1.south) {Mouse};\n\n\\node[single arrow, Bus, anchor=north, minimum width=2mm, single arrow head extend=.75mm, minimum height=5mm-.5\\pgflinewidth, shape border rotate=270] (Per2) at ([shift={(-1.8cm,1mm)}]BusES.south) {};\n\n\\node[Periferic,anchor=north] (Teclat) at (Per2.south) {Keyboard};\n\n\\node[single arrow, Bus,, anchor=north, minimum width=2mm, single arrow head extend=.75mm, minimum height=5mm, shape border rotate=270] (Per3) at ([shift={(0cm,1mm)}]BusES.south) {};\n\n\\node[Periferic,anchor=north] (Pantalla) at (Per3.south) {Display};\n\n\\node[single arrow, Bus,, anchor=north, minimum width=2mm, single arrow head extend=.75mm, minimum height=5mm, shape border rotate=270] (Per4) at ([shift={(1.5cm,1mm)}]BusES.south) {};\n\n\\node[Periferic,anchor=north] (Disc) at (Per4.south) {Disc};\n\n\\node[single arrow, Bus,, anchor=north, minimum width=2mm, single arrow head extend=.75mm, minimum height=5mm, shape border rotate=270] (Per5) at ([shift={(3.5cm,1mm)}]BusES.south) {};\n\n\\node[Periferic,anchor=north] (Xarxa) at (Per5.south) {Network};\n\n\\path (Disc) -- node {\\dots} (Xarxa);\n\n\\end{tikzpicture}\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof r&&r(m);t.default=m.exports}}]);