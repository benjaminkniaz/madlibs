(this["webpackJsonpmadlib-cut-paste"]=this["webpackJsonpmadlib-cut-paste"]||[]).push([[0],{13:function(e,a,t){e.exports=t(24)},21:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),i=t(7);var s={getParagraphWords:function(e){var a=e.replace(/(?<!\s)\[/g," [").split(/\s+(?=[^[\]]*(?:\[|$))/);return a=a.filter((function(e){return""!==e})),console.log("split words",a),a},getFillBlankInstruction:function(e){var a=e.match(/\[(.*?)\]/);return null!==a?a[1]:""},getAdjacentFillBlankCharacters:function(e){var a=e.split("]");return a.length>1?a[1]:""}},o=t(26),u=t(27),m=t(12),d=t(28),p=t(29),h=function(e){var a=e.printableArea,t=e.madLibsText,n=e.setMadLibsText;return r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement("h1",null,'Printable, Cut-and-Paste "Mad Libs"'),r.a.createElement(d.a,{className:"mad-libs-entry-area"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{as:"textarea",rows:"6",className:"mad-libs-create-text",value:t,onChange:function(e){return n(e.target.value)}}))),r.a.createElement("div",{className:"printable-area"},a),r.a.createElement(p.a,{onClick:window.print,variant:"dark",className:"print-btn"},"Print me!"),r.a.createElement("p",{className:"credit"},"by Ben Kniaz"))))},b=function(e){var a=e.fillBlankInstruction,t=e.adjacentFillBlankCharacters;return r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"fill-blank"},r.a.createElement("span",{className:"instruction"},a)),t," ")},f=function(e){var a=e.word;return r.a.createElement(n.Fragment,null,a," ")};t(21);function v(){var e=Object(n.useState)('Type the story here. Use square brackets to create blanks in the paragraph. For example: "Johnny [verb] a [adjective] pie because it was [holiday]."'),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(r.a.createElement("div",null)),o=Object(i.a)(c,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){var e=[];s.getParagraphWords(t).forEach((function(a,t){var n=s.getFillBlankInstruction(a);if(""!==n){var l=s.getAdjacentFillBlankCharacters(a);e.push(r.a.createElement(b,{key:t,fillBlankInstruction:n,adjacentFillBlankCharacters:l}))}else e.push(r.a.createElement(f,{key:t,word:a}))})),m(e)}),[t]),r.a.createElement(h,{printableArea:u,madLibsText:t,setMadLibsText:l})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(22),t(23);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.c3acb0dc.chunk.js.map