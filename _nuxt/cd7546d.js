(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9,10],{308:function(t,e,n){var map={"./img/about-profile.jpg":310,"./img/favicon.png":311,"./img/image3.jpg":312,"./img/logo.svg":210,"./img/soferrara/SF1.jpg":313,"./img/soferrara/SF2.jpg":314,"./img/soferrara/SF3.jpg":315,"./img/soferrara/SF4.jpg":316,"./img/soferrara/SF5.jpg":317,"./img/soferrara/SF6.jpg":318};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=308},310:function(t,e,n){t.exports=n.p+"img/about-profile.7659b3d.jpg"},311:function(t,e,n){t.exports=n.p+"img/favicon.caca075.png"},312:function(t,e,n){t.exports=n.p+"img/image3.d3eacf7.jpg"},313:function(t,e,n){t.exports=n.p+"img/SF1.a52dacf.jpg"},314:function(t,e,n){t.exports=n.p+"img/SF2.a293be2.jpg"},315:function(t,e,n){t.exports=n.p+"img/SF3.89e6c5a.jpg"},316:function(t,e,n){t.exports=n.p+"img/SF4.9e90776.jpg"},317:function(t,e,n){t.exports=n.p+"img/SF5.8e95d48.jpg"},318:function(t,e,n){t.exports=n.p+"img/SF6.19ceeb5.jpg"},319:function(t,e,n){"use strict";(function(t){e.a={name:"LightboxComponent",props:{title:{type:String},images:{type:Object}},data:function(){return{lightbox:{}}},updated:function(){this.addGLightbox()},destroyed:function(){this.lightbox.close()},methods:{addGLightbox:function(){var e=n(331);this.lightbox=e({zoomable:!1}),t(".project-images").imagesLoaded().progress((function(e,image){var n=t(image.img).parent();n.removeClass("is-loading"),image.isLoaded||n.addClass("is-broken")}))}}}}).call(this,n(66))},326:function(t,e,n){"use strict";n.r(e);n(109),n(43),n(69),n(26),n(146),n(11);var r={name:"DetailDescription",props:{desc:{type:String,default:""},tags:{type:Array,default:function(){return[]}}},computed:{joinTags:function(){var t=this,e=this.tags.map((function(e){var link=t.tagLink(e),n=t.verifyRoutes("/".concat(link));return'<NuxtLink class="reset-anchor" to="/'.concat(n?link:"",'">').concat(e,"</NuxtLink>")})).join(", ");return{name:"TagsComponent",template:e="<span>".concat(e,"</span>")}}},methods:{tagLink:function(t){return t.toLowerCase().split(" ").join("-")},verifyRoutes:function(link){return this.$router.options.routes.some((function(t){return t.path===link}))}}},o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-5 position-sticky"},[n("h2",[t._v("Idea")]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v(t._s(t.desc))]),t._v(" "),n("div",{staticClass:"p-4 bg-light mb-5"},[n("ul",{staticClass:"list-unstyled mb-0"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"d-flex"},[n("h6",{staticClass:"mb-0"},[t._v("Tags:")]),t._v(" "),n("p",{staticClass:"ml-3 text-muted mb-0"},[n(t.joinTags,{tag:"component"})],1)])])]),t._v(" "),n("h2",{staticClass:"h3 mb-4"},[t._v("Share")]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"d-flex mb-2"},[n("h6",{staticClass:"mb-0"},[t._v("Category:")]),t._v(" "),n("p",{staticClass:"ml-3 text-muted mb-0"},[t._v("Creative")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"d-flex mb-2"},[n("h6",{staticClass:"mb-0"},[t._v("Date:")]),t._v(" "),n("p",{staticClass:"ml-3 text-muted mb-0"},[t._v("23 Dec 2019")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-inline space-below"},[n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor social-share-link facebook",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-f mr-2"}),t._v("Share")])]),t._v(" "),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor social-share-link twitter",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter mr-2"}),t._v("Tweet")])]),t._v(" "),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor social-share-link instagram",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram mr-2"}),t._v("Share")])])])}],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(319).a,o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-7 project-images"},[t.images.rrss.length>0?r("div",[r("h3",[t._v("Social Media Design")]),t._v(" "),t._l(t.images.rrss,(function(image,e){return r("a",{key:e,staticClass:"glightbox is-loading",attrs:{href:n(308)("./img"+image),"data-gallery":"rrss-gallery"}},[r("img",{staticClass:"img-fluid mb-4",attrs:{src:n(308)("./img"+image),alt:"image"}}),t._v(" "),t._m(0,!0)])}))],2):t._e(),t._v(" "),t.images.web.length>0?r("div",[r("h3",[t._v("Web Design")]),t._v(" "),t._l(t.images.web,(function(image,e){return r("a",{key:e,staticClass:"glightbox is-loading",attrs:{href:n(308)("./img"+image),"data-gallery":"web-gallery"}},[r("img",{staticClass:"img-fluid mb-4",attrs:{src:n(308)("./img"+image),alt:"image"}}),t._v(" "),t._m(1,!0)])}))],2):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-spinner"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-spinner"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}],!1,null,null,null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);n(11),n(36);var r={name:"DetailComponent",components:{LightboxComponent:n(330).default},data:function(){return{projectData:{id:0,title:"",short_description:"",long_description:"",tags:[],thumbnail:"",images:{web:[],rrss:[]}}}},created:function(){this.fetchProject()},methods:{fetchProject:function(){var t=this;fetch("/projects.json").then((function(data){return data.json()})).then((function(e){var n=e.projects.filter((function(e){return e.id===parseInt(t.$route.params.id)}));t.projectData=n[0]})).catch((function(t){console.error(t)}))}}},o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7"},[n("h1",[t._v(t._s(t.projectData.title))]),t._v(" "),n("p",{staticClass:"text-muted mb-5"},[t._v(t._s(t.projectData.short_description))])])]),t._v(" "),n("div",{staticClass:"row mb-5"},[n("lightbox-component",{attrs:{title:t.projectData.title,images:t.projectData.images}}),t._v(" "),n("detail-description",{attrs:{desc:t.projectData.long_description,tags:t.projectData.tags}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailDescription:n(326).default})}}]);