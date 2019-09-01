(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{161:function(e,t,n){"use strict";n.r(t);var l=n(0),a=function(e){var t,n,l=((t={}).internal=n=void 0,t.contentType="markdown",t.slug="EngineeringSoftwareDesign/SeqDiagramReport",t.content=n,t.title="SeqDiagramReport.png",t.date="2019-08-31",t.layout="test",t.markdownHeadings=[],t.excerpt='<p><img src="SeqDiagramReport.png" alt="EngineeringSoftwareDesign" title="SeqDiagramReport"></p>\n',t.createdAt=new Date(15672096e5),t.updatedAt=new Date(1567371739075),t.type="page",t.permalink="/EngineeringSoftwareDesign/SeqDiagramReport.html",t.assets={},t.attributes=t,t.prevPost={title:"block412.png",permalink:"/ControlSystems/CSII/block412.html"},t.nextPost={title:"block410.png",permalink:"/ControlSystems/CSII/block410.html"},t),a=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=l}].concat(a);["layout","transition"].forEach(function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=l[t])}),e.options.name="page-wrapper-"+l.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(l.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("layout-manager",[t("p",[t("img",{attrs:{src:"SeqDiagramReport.png",alt:"EngineeringSoftwareDesign",title:"SeqDiagramReport"}})]),this._v(" "),t("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"tex"}},[t("pre",{pre:!0,attrs:{class:"saber-highlight-code language-tex"}},[t("code",{pre:!0,attrs:{class:"language-tex"}},[this._v("\\documentclass{standalone}\n\\usepackage{tikz}\n\\usepackage{tikzscale}\n\\pgfdeclarelayer{background,foreground}\n\\pgfsetlayers{background,main,foreground}\n\\usepackage{tikz-uml}\n\\usepackage[english]{babel}  % load this package so tikz-uml loads, it may be due to my japanesse localle lol.\n\n\\begin{document}\n\\begin{tikzpicture}\n\t\\begin{umlseqdiag}\n\t\t\\umlactor{Player A}\n\t\t\\umlobject{Server}\n\t\t\\umlactor{Player B}\n\t\t\n\t\t% Player spawns, no other player on the map\n\t\t\\begin{umlcall}[op=new-player,return=update-players]{Player A}{Server}\n\t\t\\end{umlcall}\n\t\t\n\t\t% Player spawns after player A, update both\n\t\t\\begin{umlcall}[dt=7.5,op=new-player,return=update-players]{Player B}{Server}\n\t\t\n\t\t\\begin{umlcall}[type=return,op=update-players]{Server}{Player A} \n\t\t\\end{umlcall} \n\t\t\\end{umlcall}\n\t\t\n\t\t% Player B shoots a bullet\n\t\t\\begin{umlcall}[op=shoot-bullet,return=bullets-update]{Player B}{Server}\n\t\t\\begin{umlcall}[type=return,op=bullets-update]{Server}{Player A} \n\t\t\\end{umlcall} \n\t\t\\end{umlcall}\n\t\t\n\t\t% Player A Moves\n\t\t\\begin{umlcall}[op=move-player,return=update-players]{Player B}{Server}\n\t\t\\begin{umlcall}[type=return,op=update-players]{Server}{Player A} \n\t\t\\end{umlcall} \n\t\t\\end{umlcall}\n\t\t\\begin{umlfragment}[type=loop]\n\t\t\\begin{umlcallself}[dt=5,op=ServerGameLoop]{Server}\n\t\t\\begin{umlcallself}[op=spawnHealthPacks]{Server}\n\t\t\\end{umlcallself}\n\t\t% Update hearts, mini-ships on both sides\n\t\t\\begin{umlcall}[type=return,op=healthPack-update]{Server}{Player A} \n\t\t\\end{umlcall} \n\t\t\\begin{umlcall}[type=return,op=healthPack-update]{Server}{Player B}\n\t\t\\begin{umlcall}[type=return,op=bullet-update]{Server}{Player A} \n\t\t\\end{umlcall}  \n\t\t\\begin{umlcall}[type=return,op=bullet-update]{Server}{Player B} \n\t\t\\end{umlcall}  \n\t\t\\end{umlcall} \n\t\t\t\t\\end{umlcallself}\n\t\t\\end{umlfragment}\n\t\\end{umlseqdiag}\n\\end{tikzpicture}\n\n\n\\end{document}")])])])])},[],!1,null,null,null);"function"==typeof a&&a(r);t.default=r.exports}}]);