(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{311:function(t,o,e){var map={"./img/about-profile.jpg":313,"./img/favicon.png":314,"./img/logo.svg":213,"./img/news-1.jpg":315,"./img/news-2.jpg":316,"./img/portfolio-1.jpg":317,"./img/portfolio-2.jpg":318,"./img/portfolio-3.jpg":319,"./img/portfolio-4.jpg":320,"./img/portfolio-5.jpg":321,"./img/portfolio-6.jpg":322,"./img/portfolio-7.jpg":323,"./img/portfolio-8.jpg":324,"./img/portfolio-9.jpg":325,"./img/soferrara/SF1.jpg":326,"./img/soferrara/SF2.jpg":327,"./img/soferrara/SF3.jpg":328,"./img/soferrara/SF4.jpg":329,"./img/soferrara/SF5.jpg":330,"./img/soferrara/SF6.jpg":331,"./img/template-mac.png":332,"./img/text-img.jpg":333};function r(t){var o=n(t);return e(o)}function n(t){if(!e.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=311},313:function(t,o,e){t.exports=e.p+"img/about-profile.7659b3d.jpg"},314:function(t,o,e){t.exports=e.p+"img/favicon.caca075.png"},315:function(t,o,e){t.exports=e.p+"img/news-1.5900c84.jpg"},316:function(t,o,e){t.exports=e.p+"img/news-2.18a3fec.jpg"},317:function(t,o,e){t.exports=e.p+"img/portfolio-1.082102c.jpg"},318:function(t,o,e){t.exports=e.p+"img/portfolio-2.b532569.jpg"},319:function(t,o,e){t.exports=e.p+"img/portfolio-3.3357d1e.jpg"},320:function(t,o,e){t.exports=e.p+"img/portfolio-4.cba8f07.jpg"},321:function(t,o,e){t.exports=e.p+"img/portfolio-5.0170ded.jpg"},322:function(t,o,e){t.exports=e.p+"img/portfolio-6.9a98c2b.jpg"},323:function(t,o,e){t.exports=e.p+"img/portfolio-7.21eb4ac.jpg"},324:function(t,o,e){t.exports=e.p+"img/portfolio-8.619f4e6.jpg"},325:function(t,o,e){t.exports=e.p+"img/portfolio-9.7adbb43.jpg"},326:function(t,o,e){t.exports=e.p+"img/SF1.a52dacf.jpg"},327:function(t,o,e){t.exports=e.p+"img/SF2.a293be2.jpg"},328:function(t,o,e){t.exports=e.p+"img/SF3.89e6c5a.jpg"},329:function(t,o,e){t.exports=e.p+"img/SF4.9e90776.jpg"},330:function(t,o,e){t.exports=e.p+"img/SF5.8e95d48.jpg"},331:function(t,o,e){t.exports=e.p+"img/SF6.19ceeb5.jpg"},332:function(t,o,e){t.exports=e.p+"img/template-mac.515a423.png"},333:function(t,o,e){t.exports=e.p+"img/text-img.4959661.jpg"},334:function(t,o,e){"use strict";(function(t){o.a={name:"LightboxComponent",props:{title:{type:String},images:{type:Object}},data:function(){return{lightbox:{}}},updated:function(){this.addGLightbox()},destroyed:function(){this.lightbox.close()},methods:{addGLightbox:function(){var o=e(346);this.lightbox=o({zoomable:!1}),t(".project-images").imagesLoaded().progress((function(o,image){var e=t(image.img).parent();e.removeClass("is-loading"),image.isLoaded||e.addClass("is-broken")}))}}}}).call(this,e(66))},345:function(t,o,e){"use strict";e.r(o);var r=e(334).a,n=e(19),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"col-lg-7 project-images"},[t.images.rrss.length>0?r("div",[r("h3",[t._v("Social Media Design")]),t._v(" "),t._l(t.images.rrss,(function(image,o){return r("a",{key:o,staticClass:"glightbox is-loading",attrs:{href:e(311)("./img"+image),"data-gallery":"rrss-gallery"}},[r("img",{staticClass:"img-fluid mb-4",attrs:{src:e(311)("./img"+image),alt:"image"}}),t._v(" "),t._m(0,!0)])}))],2):t._e(),t._v(" "),t.images.web.length>0?r("div",[r("h3",[t._v("Web Design")]),t._v(" "),t._l(t.images.web,(function(image,o){return r("a",{key:o,staticClass:"glightbox is-loading",attrs:{href:e(311)("./img"+image),"data-gallery":"web-gallery"}},[r("img",{staticClass:"img-fluid mb-4",attrs:{src:e(311)("./img"+image),alt:"image"}}),t._v(" "),t._m(1,!0)])}))],2):t._e()])}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"lds-spinner"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"lds-spinner"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])}],!1,null,null,null);o.default=component.exports}}]);