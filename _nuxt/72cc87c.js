(window.webpackJsonp=window.webpackJsonp||[]).push([[23,15,16],{308:function(t,e,r){var map={"./img/about-profile.jpg":310,"./img/favicon.png":311,"./img/image3.jpg":312,"./img/logo.svg":210,"./img/soferrara/SF1.jpg":313,"./img/soferrara/SF2.jpg":314,"./img/soferrara/SF3.jpg":315,"./img/soferrara/SF4.jpg":316,"./img/soferrara/SF5.jpg":317,"./img/soferrara/SF6.jpg":318};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=308},309:function(t,e,r){"use strict";(function(t){var n=r(83),o=r(8);r(51),r(26),r(68),r(11),r(36),r(52),r(67),r(109),r(43),r(146),r(44);e.a={name:"MasonryWrapper",data:function(){return{projects:[],projectsToShow:[],path:""}},watch:{$route:function(t,e){this.path=t.path.replace("/",""),this.filterProjectsAccordingToPath()}},mounted:function(){this.masonryDistribution(!0)},created:function(){this.filterProjectsAccordingToPath()},methods:{masonryDistribution:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t(document).ready((function(){var r=t(".masonry-wrapper");e?r.masonry("reloadItems"):(r.masonry({itemSelector:".grid-item",columnWidth:".grid-item",percentPosition:!0,transitionDuration:300}),r.imagesLoaded().progress((function(e,image){var n=t(image.img).parent();n.removeClass("is-loading"),image.isLoaded||n.addClass("is-broken"),r.masonry()})))}))},fetchProjects:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/projects.json").then((function(data){return data.json()})).then((function(e){t.projects=Object(n.a)(e.projects)})).catch((function(t){return t}));case 2:case"end":return e.stop()}}),e)})))()},filterProjectsAccordingToPath:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchProjects();case 2:t.path=t.$route.path.replace("/",""),r=t.capitalizePathName(t.path),t.projectsToShow=null===r?t.projects:t.projects.filter((function(t){return t.tags.includes(r)})),t.masonryDistribution();case 6:case"end":return e.stop()}}),e)})))()},capitalizePathName:function(path){return""===path?null:path.split("-").map((function(t){return"".concat(t[0].toUpperCase()+t.slice(1))})).join(" ")}}}}).call(this,r(66))},310:function(t,e,r){t.exports=r.p+"img/about-profile.7659b3d.jpg"},311:function(t,e,r){t.exports=r.p+"img/favicon.caca075.png"},312:function(t,e,r){t.exports=r.p+"img/image3.d3eacf7.jpg"},313:function(t,e,r){t.exports=r.p+"img/SF1.a52dacf.jpg"},314:function(t,e,r){t.exports=r.p+"img/SF2.a293be2.jpg"},315:function(t,e,r){t.exports=r.p+"img/SF3.89e6c5a.jpg"},316:function(t,e,r){t.exports=r.p+"img/SF4.9e90776.jpg"},317:function(t,e,r){t.exports=r.p+"img/SF5.8e95d48.jpg"},318:function(t,e,r){t.exports=r.p+"img/SF6.19ceeb5.jpg"},320:function(t,e,r){"use strict";r.r(e);var n={name:"GridItem",props:{project:{type:Object,required:!0}}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-md-6 grid-item mb-4"},[n("div",{staticClass:"listing-item"},[n("div",{staticClass:"position-relative"},[n("ul",{staticClass:"list-inline listing-tags m-0"},[n("li",{staticClass:"list-inline-item"},[n("NuxtLink",{staticClass:"reset-anchor font-weight-normal text-gray text-small",attrs:{to:"/works/"+t.project.id}},[t._v("Creative")])],1)]),t._v(" "),n("NuxtLink",{staticClass:"reset-anchor d-block listing-img-holder is-loading",attrs:{to:"/works/"+t.project.id}},[n("div",{staticClass:"lds-spinner"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")]),t._v(" "),n("img",{staticClass:"img-fluid",attrs:{src:r(308)("./img"+t.project.thumbnail),alt:""}}),t._v(" "),n("p",{staticClass:"\n            mb-0\n            text-primary\n            small\n            d-flex\n            align-items-center\n            listing-btn\n          "},[n("span",[t._v("Look inside")]),t._v(" "),n("svg",{staticClass:"svg-icon text-primary svg-icon-sm ml-2"},[n("use",{attrs:{"xlink:href":"#arrow-right-1"}})])])])],1),t._v(" "),n("div",{staticClass:"py-3"},[n("NuxtLink",{staticClass:"reset-anchor",attrs:{to:"/works/"+t.project.id}},[n("h2",{staticClass:"h5 listing-item-heading"},[t._v(t._s(t.project.title))])]),t._v(" "),n("p",{staticClass:"text-small mb-0 listing-item-description"},[t._v("\n        "+t._s(t.project.short_description)+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);var n=r(309).a,o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"masonry-wrapper"},t._l(t.projectsToShow,(function(t){return r("grid-item",{key:t.id,attrs:{project:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GridItem:r(320).default})},353:function(t,e,r){"use strict";r.r(e);var n={name:"SocialMediaDesignPage",layout:"CustomLayout"},o=r(19),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("client-only",[e("masonry-wrapper")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MasonryWrapper:r(321).default})}}]);