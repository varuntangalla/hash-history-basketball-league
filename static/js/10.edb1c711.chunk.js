(this["webpackJsonphash-history-basketball-league"]=this["webpackJsonphash-history-basketball-league"]||[]).push([[10],{273:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(t),a.d(t,"default",(function(){return E}));var l=a(7),c=a(8),i=a(10),o=a(9),s=a(0),u=a.n(s),m=a(1),h=a(11),d=a(38),f=a(61),p=a(69),y=a(40),v=a.n(y),b=a(12),E=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,teamNames:{},articles:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;Promise.all([Object(d.d)(),Object(d.e)(this.props.match.params.teamId)]).then((function(t){var a=r(t,2),n=a[0],l=a[1];e.setState((function(){return{teamNames:n,articles:l,loading:!1}}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.teamNames,n=e.articles,r=this.props.match,l=r.params.teamId;return!1===t&&!1===a.includes(l)?u.a.createElement(m.a,{to:"/"}):u.a.createElement("div",null,u.a.createElement(p.a,{id:l},(function(e){return null===e?u.a.createElement(b.a,null):u.a.createElement("div",{className:"panel"},u.a.createElement(f.a,{id:l}),u.a.createElement("h1",{className:"medium-header"},e.name),u.a.createElement("h4",{style:{margin:5}},u.a.createElement(h.b,{style:{cursor:"pointer"},to:{pathname:"/players",search:"?teamId=".concat(l)}},"View Roster")),u.a.createElement("h4",null,"Championships"),u.a.createElement("ul",{className:"championships"},e.championships.map((function(e){return u.a.createElement("li",{key:e},e)}))),u.a.createElement("ul",{className:"info-list row",style:{width:"100%"}},u.a.createElement("li",null,"Established",u.a.createElement("div",null,e.established)),u.a.createElement("li",null,"Manager",u.a.createElement("div",null,e.manager)),u.a.createElement("li",null,"Coach",u.a.createElement("div",null,e.coach)),u.a.createElement("li",null,"Record",u.a.createElement("div",null,e.wins,"-",e.losses))),u.a.createElement("h2",{className:"header"},"Articles"),u.a.createElement("ul",{className:"articles"},n.map((function(e){return u.a.createElement("li",{key:e.id},u.a.createElement(h.b,{to:"".concat(r.url,"/articles/").concat(v()(e.title))},u.a.createElement("h4",{className:"article-title"},e.title),u.a.createElement("div",{className:"article-date"},e.date.toLocaleDateString())))}))))})))}}]),a}(s.Component)},69:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(7),r=a(8),l=a(10),c=a(9),i=a(0),o=a(38),s=(a(87),function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={team:null},e.fetchTeam=function(t){e.setState((function(){return{team:null}})),Object(o.c)(t).then((function(t){return e.setState((function(){return{team:t}}))}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchTeam(this.props.id)}},{key:"componentWillReceiveProps",value:function(e){this.props.id!==e.id&&this.fetchTeam(e.id)}},{key:"render",value:function(){return this.props.children(this.state.team)}}]),a}(i.Component))}}]);
//# sourceMappingURL=10.edb1c711.chunk.js.map