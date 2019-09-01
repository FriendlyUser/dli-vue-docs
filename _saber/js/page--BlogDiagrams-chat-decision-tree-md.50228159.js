(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{43:function(e,n,t){"use strict";t.r(n);var o=t(0),r=function(e){var n,t,o=((n={}).internal=t=void 0,n.contentType="markdown",n.slug="BlogDiagrams/chat-decision-tree",n.content=t,n.title="chat-decision-tree.png",n.date="2019-08-31",n.layout="test",n.markdownHeadings=[],n.excerpt='<p><img src="chat-decision-tree.png" alt="BlogDiagrams" title="chat-decision-tree"></p>\n',n.createdAt=new Date(15672096e5),n.updatedAt=new Date(1567371739079),n.type="page",n.permalink="/BlogDiagrams/chat-decision-tree.html",n.assets={},n.attributes=n,n.prevPost={title:"bar-chart.png",permalink:"/ReportDiagrams/bar-chart.html"},n.nextPost={title:"flow-chart.png",permalink:"/ReportDiagrams/flow-chart.html"},n),r=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=o}].concat(r);["layout","transition"].forEach(function(n){var t=e.options.PageComponent;t&&(e.options[n]=t[n]),void 0===e.options[n]&&(e.options[n]=o[n])}),e.options.name="page-wrapper-"+o.slug.replace(/[^0-9a-z\-]/i,"-")},a=Object(o.a)({},function(){var e=this.$createElement,n=this._self._c||e;return n("layout-manager",[n("p",[n("img",{attrs:{src:"chat-decision-tree.png",alt:"BlogDiagrams",title:"chat-decision-tree"}})]),this._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[n("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("% Decision Tree for conversation\n\n\\documentclass[border=10pt,multi,tikz,dvipsnames,svgnames,rgb]{standalone}\n\\usepackage[edges]{forest}\n\\usetikzlibrary{arrows.meta}\n\\forestset{\n  declare dimen register=gap,\n  gap'=10mm,\n  declare count register=twist,\n  twist'=2,\n  family tree/.style={\n    forked edges,\n    for tree={\n      rounded corners,\n      minimum width/.wrap pgfmath arg={##1}{(\\textwidth-6*(gap))/3},\n      minimum height=4ex,\n      edge={-Latex},\n      font=\\sffamily,\n      text centered,\n      % blur shadow,\n      edge=thick,\n    },\n    where={level()<(twist)}{%\n      parent anchor=children,\n      l sep+=10pt,\n      s sep'+=10pt,\n    }{%\n      folder,\n      grow'=0,\n      l sep'+=2pt,\n      if={level()==(twist)}{%\n        before typesetting nodes={child anchor=north},\n        !u.s sep'+=10pt,\n        edge path'={%\n          (!u.parent anchor) -- ++(0,-10pt) -| (.child anchor)\n        },\n      }{},\n    },\n  },\n  branch shade/.style args={from #1 to #2}{\n    before typesetting nodes={\n      tempcountc/.max={level}{current,tree},\n      tempcountb/.option=level,\n      tempcounta=(tempcountc)-(tempcountb)+1,\n      temptoksa/.option=name,\n      TeX/.wrap pgfmath arg={\n        \\colorlet{##1col1}{#1}\n        \\colorlet{##1col2}{#2}\n      }{name()},\n      for tree={\n        rounded corners,\n        top color/.wrap 2 pgfmath args={##2col2!##1!##2col1}{100*((level()-(tempcountb))/(tempcounta))}{(temptoksa)},\n        +edge/.wrap 2 pgfmath args={##2col2!##1!##2col1}{100*((level()-(tempcountb))/(tempcounta))}{(temptoksa)},\n        bottom color/.wrap 2 pgfmath args={##2col2!##1!##2col1}{100*((level()-(tempcountb)+1)/(tempcounta))}{(temptoksa)},\n        draw/.wrap 2 pgfmath args={##2col2!##1!##2col1}{100*((level()-(tempcountb)+1)/(tempcounta))}{(temptoksa)},\n        thick,\n      },\n    }\n  },\n}\n\\begin{document}\n\\begin{forest}\n  family tree,\n   [Chatbot, left color=cyan, right color=SpringGreen, middle color=Pink, draw=Silver\n     [Resume, branch shade=from cyan to blue\n       [Co-op\n         [ENGR 001 \\& 002\n         \t[ENGR 003 \\& 004]\n         ]\n       ]\n       [Github\n       \t [Projects]\n       \t [Academic]\n       ]\n     ]\n     [Education, branch shade=from Pink to WildStrawberry\n       [UVIC\n         [SENG]\n         [CENG]\n       ]\n     ]\n     [Personal, branch shade=from SpringGreen to ForestGreen\n       [Blockchain\n         [Ethereum]\n         [Hashgraph]\n       ]\n     ]\n   ]\n\\end{forest}\n%\\begin{forest}\n%  family tree,\n%   [Grandparent, fill=darkgray, text=Silver, double=Silver, draw=darkgray\n%     [Parent 1, branch shade=from blue!80 to blue!20\n%       [Child 1\n%         [Grandchild 1]\n%       ]\n%     ]\n%     [Parent 2, branch shade=from WildStrawberry!80 to WildStrawberry!20\n%       [Child 2\n%         [Grandchild 2]\n%       ]\n%     ]\n%     [Parent 3, branch shade=from ForestGreen!80 to ForestGreen!20\n%       [Child 3\n%         [Grandchild 3]\n%       ]\n%     ]\n%   ]\n%\\end{forest}\n\\end{document}\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n%\\documentclass[border=10pt]{standalone}\n%\\usepackage{tikz}\n%\\usepackage{forest}\n%\\begin{document}\n%\\begin{forest}\n%  roundish filling/.style={%\n%    draw=#1,\n%    inner color=#1!25,\n%    outer color=#1,\n%  },\n%  for tree={%\n%    double,\n%    rounded corners,\n%  },\n%  where level=0{% for the root node\n%    minimum size=20pt,\n%    roundish filling=red,\n%    ultra thick,\n%  }{%\n%    if level=1{% middle nodes\n%      minimum size=15pt,\n%      semithick,\n%      roundish filling=blue!50!cyan,\n%    }\n%    {% remaining nodes\n%      delay={%\n%        if n children=0{%\n%          label/.wrap pgfmath arg={-90:#1}{content},\n%          !u.s sep'+=5pt,\n%          !uu.s sep'+=10pt,\n%          content=,\n%        }{},\n%      },\n%      green!75!black,\n%      circle,\n%      fill,\n%      fill opacity=.5,\n%      draw opacity=1,\n%      draw,\n%      minimum size=5pt,\n%      inner sep=0pt,\n%    },\n%  },\n%  [ChatBot\n%    [B [C][Ch]]\n%    [D [Dd][E][F][Ff [black]]]\n%  ]\n%\\end{forest}\n%\\end{document}\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n% Reference Decision tree\n% Author: Stefan Kottwitz\n% https://www.packtpub.com/hardware-and-creative/latex-cookbook\n%\\documentclass[border=10pt]{standalone}\n%\\usepackage{tikz}\n%\\tikzset{\n%  treenode/.style = {shape=rectangle, rounded corners,\n%                     draw, align=center,\n%                     top color=white, bottom color=blue!20},\n%  root/.style     = {treenode, font=\\Large, bottom color=red!30},\n%  env/.style      = {treenode, font=\\ttfamily\\normalsize},\n%  dummy/.style    = {circle,draw}\n%}\n%\\begin{document}\n%\\begin{tikzpicture}\n%  [\n%    grow                    = down,\n%    sibling distance        = 6em,\n%    level distance          = 10em,\n%    edge from parent/.style = {draw, -latex},\n%    every node/.style       = {font=\\footnotesize},\n%    sloped\n%  ]\n%  \\node [root] {Formula}\n%    child { node [env] {equation}\n%      edge from parent node [below] {single-line?} }\n%    child { node [dummy] {}\n%      child { node [dummy] {}\n%        child { node [env] {align\\\\flalign}\n%          edge from parent node [above] {at relation sign?} }\n%        child { node [env] {alignat}\n%          edge from parent node [above] {at several}\n%                           node [below] {places?} }\n%        child { node [env] {gather}\n%                edge from parent node [above] {centered?} }\n%        edge from parent node [below] {aligned?} }\n%      child { node [env] {multline}\n%              edge from parent node [above, align=center]\n%                {first left,\\\\centered,}\n%              node [below] {last right}}\n%              edge from parent node [above] {multi-line?} };\n%\\end{tikzpicture}\n%\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof r&&r(a);n.default=a.exports}}]);