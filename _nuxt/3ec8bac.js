(window.webpackJsonp=window.webpackJsonp||[]).push([[25,8,9,10],{309:function(t,e,n){"use strict";(function(t){e.a={name:"LightboxComponent",props:{title:{type:String},images:{type:Object}},data:function(){return{lightbox:{}}},mounted:function(){this.addGLightbox()},updated:function(){this.addGLightbox()},destroyed:function(){document.body.classList.contains("glightbox-open")&&this.lightbox.close()},methods:{addGLightbox:function(){var e=n(321);this.lightbox=e({zoomable:!1}),t(".project-images").imagesLoaded().progress((function(e,image){var n=t(image.img).parent();n.removeClass("is-loading"),image.isLoaded||n.addClass("is-broken")}))}}}}).call(this,n(66))},316:function(t,e,n){"use strict";n.r(e);n(109),n(43),n(69),n(26),n(146),n(11);var r={name:"DetailDescription",props:{desc:{type:String,default:""},tags:{type:Array,default:function(){return[]}}},computed:{joinTags:function(){var t=this,e=this.tags.map((function(e){var link=t.tagLink(e),n=t.verifyRoutes("/".concat(link));return'<NuxtLink class="reset-anchor" to="/'.concat(n?link:"",'">').concat(e,"</NuxtLink>")})).join(", ");return{name:"TagsComponent",template:e="<span>".concat(e,"</span>")}}},methods:{tagLink:function(t){return t.toLowerCase().split(" ").join("-")},verifyRoutes:function(link){return this.$router.options.routes.some((function(t){return t.path===link}))}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-5 position-sticky"},[n("h2",[t._v("Idea")]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v(t._s(t.desc))]),t._v(" "),n("div",{staticClass:"p-4 bg-light mb-5"},[n("ul",{staticClass:"list-unstyled mb-0"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"d-flex"},[n("h6",{staticClass:"mb-0"},[t._v("Tags:")]),t._v(" "),n("p",{staticClass:"ml-3 text-muted mb-0"},[n(t.joinTags,{tag:"component"})],1)])])]),t._v(" "),n("h2",{staticClass:"h3 mb-4"},[t._v("Share")]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"d-flex mb-2"},[n("h6",{staticClass:"mb-0"},[t._v("Category:")]),t._v(" "),n("p",{staticClass:"ml-3 text-muted mb-0"},[t._v("Creative")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"d-flex mb-2"},[n("h6",{staticClass:"mb-0"},[t._v("Date:")]),t._v(" "),n("p",{staticClass:"ml-3 text-muted mb-0"},[t._v("23 Dec 2019")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-inline space-below"},[n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor social-share-link facebook",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-f mr-2"}),t._v("Share")])]),t._v(" "),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor social-share-link twitter",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter mr-2"}),t._v("Tweet")])]),t._v(" "),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor social-share-link instagram",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram mr-2"}),t._v("Share")])])])}],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);var r=n(309).a,l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7 project-images"},[t.images.hasOwnProperty("rrss")?n("div",[n("h3",[t._v("Social Media Design")]),t._v(" "),t._l(t.images.rrss,(function(image,e){return n("a",{key:e,staticClass:"glightbox is-loading",attrs:{href:image,"data-gallery":"rrss-gallery"}},[n("img",{staticClass:"img-fluid mb-4",attrs:{src:image,alt:"image"}}),t._v(" "),t._m(0,!0)])}))],2):t._e(),t._v(" "),t.images.hasOwnProperty("web")?n("div",[n("h3",[t._v("Web Design")]),t._v(" "),t._l(t.images.web,(function(image,e){return n("a",{key:e,staticClass:"glightbox is-loading",attrs:{href:image,"data-gallery":"web-gallery"}},[n("img",{staticClass:"img-fluid mb-4",attrs:{src:image,alt:"image"}}),t._v(" "),t._m(1,!0)])}))],2):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-spinner"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-spinner"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}],!1,null,null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(51),n(36),n(11),{name:"DetailComponent",components:{LightboxComponent:n(320).default},data:function(){return{projectData:{id:null,title:"",short_description:"",long_description:"",tags:[],thumbnail:"",images:{web:[],rrss:[]}}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$content("projects").fetch();case 3:n=e.sent,r=n.filter((function(e){return e.id===t.$route.params.id})),t.projectData=r[0],e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7"},[n("h1",[t._v(t._s(t.projectData.title))]),t._v(" "),n("p",{staticClass:"text-muted mb-5"},[t._v(t._s(t.projectData.short_description))])])]),t._v(" "),n("div",{staticClass:"row mb-5"},[n("lightbox-component",{attrs:{title:t.projectData.title,images:t.projectData.images}}),t._v(" "),n("detail-description",{attrs:{desc:t.projectData.long_description,tags:t.projectData.tags}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailDescription:n(316).default})},345:function(t,e,n){"use strict";n.r(e);var r={name:"DetailPage",layout:"CustomLayout"},l=n(19),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-component")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailComponent:n(325).default})}}]);