webpackJsonp([1],{"/2Op":function(t,e){},"/aPV":function(t,e,a){"use strict";var s=a("GojP");e.a={props:{movieDetail:{type:Object,default:{}}},data:function(){return{needNullStar:!0,wantedText:"想看",hasWatched:!1,watchedText:"看过 ☆☆☆☆☆"}},computed:{tags:function(){var t=this;return t.movieDetail.year+"/"+t.movieDetail.genres.join("/")},pubdate:function(){for(var t=this,e="",a=t.movieDetail.pubdates,s=0;s<a.length;s++)if(-1===a[s].indexOf("电影节")&&(e=a[s]),a[s].indexOf("中国大陆")>-1){e=a[s];break}return e||(e="暂无信息"),e},rating:function(){return 0!==this.movieDetail.rating.average},allcasts:function(){var t=[];this.movieDetail.directors.forEach(function(e,a){e.isDirector=!0,null===e.avatars&&t.push(a)});for(var e=t.length;e>0;e--)this.movieDetail.directors.splice(t[e-1],1);t=[],this.movieDetail.casts.forEach(function(e,a){null===e.avatars&&t.push(a)});for(var a=t.length;a>0;a--)this.movieDetail.casts.splice(t[a-1],1);return this.movieDetail.directors.concat(this.movieDetail.casts)}},methods:{normalizeScore:function(){return this.movieDetail.rating.average.toString().length<2?this.movieDetail.rating.average+".0":this.movieDetail.rating.average}},components:{Star:s.a}}},0:function(t,e){},"472v":function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("kakv"),o=(a("xst1"),a("7+uW")),r=a("NYxO");e.a={data:function(){return{selected:"1",hotMovies:[],comingMovies:[],listLoading:!0,MovieTotal:null,listQuery:{pagesize:10,currPage:1},needDate:!0}},components:{"MovieList-show":n.a},mounted:function(){var t=this;t.getMovieList(),t.getcomingMovieList()},methods:i()({getMovieList:function(){var t=this;t.listLoading=!0;var e={count:t.listQuery.pagesize,start:t.listQuery.currPage-1};o.default.http.jsonp("https://api.douban.com/v2/movie/in_theaters",{params:e}).then(function(e){var a=e.body;a.subjects?(t.hotMovies=a.subjects,console.log("列表数据",t.hotMovies),t.listQuery.currPage=a.start+1,t.listQuery.pagesize=a.count,t.MovieTotal=a.total,t.listLoading=!1):(Message({showClose:!0,message:e.body.resultMsg,type:"error"}),t.listLoading=!1)},function(e){t.listLoading=!1},!0)},getcomingMovieList:function(){var t=this;t.listLoading=!0;var e={count:t.listQuery.pagesize,start:t.listQuery.currPage-1};o.default.http.jsonp("https://api.douban.com/v2/movie/coming_soon",{params:e}).then(function(e){var a=e.body;a.subjects?(t.comingMovies=a.subjects,console.log("即将上映列表数据",t.comingMovies),t.listQuery.currPage=a.start+1,t.listQuery.pagesize=a.count,t.MovieTotal=a.total,t.listLoading=!1):(Message({showClose:!0,message:e.body.resultMsg,type:"error"}),t.listLoading=!1)},function(e){t.listLoading=!1},!0)},goSearch:function(){this.$router.push({path:"/search"})},selectMovie:function(t){this.setMovie(t),this.$router.push({path:"/movie/"+t.id})}},a.i(r.c)({setMovie:"SET_MOVIE"}))}},"9B3G":function(t,e){},A1IV:function(t,e,a){"use strict";var s=a("RP6l");e.a={name:"search",data:function(){return{doubanTag:["经典","豆瓣高分","冷门佳片"],movieTag:["剧情","爱情","喜剧","科幻","动作","悬疑","治愈","青春","文艺"],countryTag:["日本","韩国"]}},components:{"Search-Box":s.a}}},C8Fg:function(t,e){},CHJC:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s={apikey:"0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd"}},"Du/2":function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s="SET_MOVIE"},Dx7P:function(t,e,a){"use strict";function s(t){a("uOFg")}var i=a("472v"),n=a("kTwH"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-1c0e398c",null);e.a=c.exports},FhoZ:function(t,e,a){(function(e){var s=a("o/zv");t.exports={build:{env:a("rBKV"),index:s.resolve(e,"../dist/index.html"),assetsRoot:s.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"./",staticPath:"./static",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:a.i({NODE_ENV:"production"}).npm_config_report},dev:{env:a("dhIU"),port:8080,autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",staticPath:"/static/",proxyTable:{},cssSourceMap:!1}}}).call(e,"/")},GSiV:function(t,e,a){"use strict";function s(t){a("n4vA")}var i=a("pFN2"),n=a("Z7Yn"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-61e87856",null);e.a=c.exports},GojP:function(t,e,a){"use strict";function s(t){a("/2Op")}var i=a("u4Do"),n=a("MT2T"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-4ef06006",null);e.a=c.exports},IcnI:function(t,e,a){"use strict";var s=a("7+uW"),i=a("NYxO"),n=a("lwq5"),o=a("ukYY"),r=a("UjVw");s.default.use(i.a),e.a=new i.a.Store({getters:r,state:n.a,mutations:o.a})},LYrQ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"search"}},[a("Search-Box"),t._v(" "),a("div",{staticClass:"shortcut-wrapper"},[a("div",{staticClass:"shortcut"},[a("div",[a("div",{staticClass:"tag-list"},[a("div",{staticClass:"douban-tag tag"},t._l(t.doubanTag,function(e){return a("span",{staticClass:"tag-item"},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"movie-tag tag"},t._l(t.movieTag,function(e){return a("span",{staticClass:"tag-item"},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"country-tag tag"},t._l(t.countryTag,function(e){return a("span",{staticClass:"tag-item"},[t._v(t._s(e))])}))]),t._v(" "),t._m(0)])])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"confrim"})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-history"},[a("h1",{staticClass:"title"},[a("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),a("span",{staticClass:"clear"},[a("i",{})])]),t._v(" "),a("div",{staticClass:"history-list"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-result"},[a("div",{staticClass:"suggest"})])}],n={render:s,staticRenderFns:i};e.a=n},M5PT:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=(a("xst1"),a("7+uW")),o=a("NYxO"),r=a("CHJC"),c=a("QBvU"),l=a("GSiV"),v=a("yzTV");e.a={name:"movieDetail",data:function(){return{movieDetail:{},selected:"1"}},components:{"Movie-Info":c.a,"Movie-Comment":l.a,"Movie-Review":v.a},computed:i()({},a.i(o.b)(["movie"])),mounted:function(){this.getMovieDetail()},methods:{back:function(){this.$router.back()},getMovieDetail:function(){var t=this;if(t.listLoading=!0,console.log("电影ID",t.movie.id),!t.movie.id)return void t.$router.push("/movie-hot");var e="?apikey="+r.a.apikey;n.default.http.jsonp("https://api.douban.com/v2/movie/subject/"+t.movie.id+e).then(function(e){var a=e.body;console.log("电影详情",a),a?(t.movieDetail=a,console.log("列表数据",t.movieDetail),t.listLoading=!1):(Message({showClose:!0,message:e.body.resultMsg,type:"error"}),t.listLoading=!1)},function(e){t.listLoading=!1},!0)}}}},M93x:function(t,e,a){"use strict";function s(t){a("NSGX")}var i=a("xJD8"),n=a("U6zv"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,null,null);e.a=c.exports},MT2T:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"star",class:t.starType},[t._l(t.itemClasses,function(e){return t.score||t.needNullStar?a("span",{staticClass:"star-item",class:e}):t._e()}),t._v(" "),t.score?t._e():a("span",{staticClass:"no-score",class:{block:t.needNullStar}},[t._v("暂无评分")]),t._v(" "),t.showScore&&t.score?a("span",{staticClass:"show-score"},[t._v(t._s(t.normalizeScore))]):t._e()],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("M93x"),n=a("YaEn"),o=a("IcnI"),r=a("ORbq"),c=a("fI3C"),l=(a.n(c),a("Au9i")),v=a.n(l),u=a("d8/S");a.n(u);s.default.use(v.a),s.default.use(r.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:n.a,store:o.a,template:"<App/>",components:{App:i.a}})},NSGX:function(t,e){},"Q+V/":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"movie-info"}},[s("div",{staticClass:"overall"},[s("div",{staticClass:"desc"},[s("h2",{staticClass:"title"},[t._v(t._s(t.movieDetail.title))]),t._v(" "),s("span",{staticClass:"tag"},[t._v(t._s(t.tags))]),t._v(" "),s("span",{staticClass:"original-title"},[t._v("原名:"+t._s(t.movieDetail.original_title))]),t._v(" "),s("span",{staticClass:"pubdate"},[t._v("上映时间:"+t._s(t.pubdate))]),t._v(" "),s("span",{staticClass:"duration"},[t._v("片长:"+t._s(t.movieDetail.durations[0]))])]),t._v(" "),s("div",{staticClass:"rank"},[s("span",{staticClass:"origin"},[t._v("豆瓣评分")]),t._v(" "),t.rating?s("span",{staticClass:"rating"},[t._v(t._s(t.normalizeScore()))]):t._e(),t._v(" "),s("Star",{attrs:{size:24,score:t.movieDetail.rating.average,needNullStar:t.needNullStar}}),t._v(" "),t.rating?s("span",{staticClass:"num"},[t._v(t._s(t.movieDetail.ratings_count)+"人")]):t._e()],1)]),t._v(" "),s("div",{staticClass:"operate"},[s("div",{staticClass:"want-watch",domProps:{textContent:t._s(t.wantedText)}}),t._v(" "),s("div",{staticClass:"has-watched"},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.hasWatched,expression:"hasWatched"}],attrs:{src:a("Trrb"),alt:"",width:"25",height:"25"}}),t._v(t._s(t.watchedText)+"\n\t\t")])]),t._v(" "),s("div",{staticClass:"summary"},[s("h2",{staticClass:"title"},[t._v("剧情简介")]),t._v(" "),s("p",{staticClass:"content"},[t._v("    "+t._s(t.movieDetail.summary))])]),t._v(" "),s("div",{staticClass:"casts"},[s("div",{staticClass:"casts-content"},[s("h2",{staticClass:"title"},[t._v("影人")]),t._v(" "),t._l(t.allcasts,function(e){return s("div",{staticClass:"cast-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatars.large,expression:"item.avatars.large"}],attrs:{width:"90",height:"120"}}),t._v(" "),s("h3",{staticClass:"item-title"},[t._v(t._s(e.name))]),t._v(" "),e.isDirector?s("span",[t._v("导演")]):t._e()])}),t._v(" "),t.allcasts.length?t._e():s("div",{staticClass:"no-result"},[t._v("\n\t\t\t\t抱歉，暂无影人信息\n\t\t\t")])],2)])])},i=[],n={render:s,staticRenderFns:i};e.a=n},QBvU:function(t,e,a){"use strict";function s(t){a("wrlH")}var i=a("/aPV"),n=a("Q+V/"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-089675c7",null);e.a=c.exports},RP6l:function(t,e,a){"use strict";function s(t){a("9B3G")}var i=a("oO6K"),n=a("erIv"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-778e6346",null);e.a=c.exports},Trrb:function(t,e,a){t.exports=a.p+"static/img/avatar.ab7112d.jpg"},U6zv:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),t._v(" "),a("Footertab")],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},UjVw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"movie",function(){return s});var s=function(t){return t.movie}},YOyO:function(t,e,a){"use strict";function s(t){a("zPvp")}var i=a("A1IV"),n=a("LYrQ"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-0867ebaa",null);e.a=c.exports},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),i=a("/ocq"),n=a("Dx7P"),o=a("jmDM"),r=a("YOyO");s.default.use(i.a),e.a=new i.a({routes:[{path:"/",redirect:"/movie-hot"},{path:"/movie-hot",component:n.a},{path:"/search",component:r.a},{path:"/movie/:movieid",component:o.a,children:[]}]})},Z7Yn:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"movie-comment"}},[a("ul",t._l(t.movieComments,function(e,s){return a("li",{staticClass:"comment-item"},[a("div",{staticClass:"avatar"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.author.avatar,expression:"comment.author.avatar"}],attrs:{width:"36",height:"36"}})]),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"name"},[t._v(t._s(e.author.name))]),t._v(" "),a("Star",{attrs:{size:24,score:e.rating.value}}),t._v(" "),a("p",{staticClass:"text"},[t._v(t._s(e.content))]),t._v(" "),a("span",{staticClass:"createdate"},[t._v(t._s(e.created_at))]),t._v(" "),a("div",{staticClass:"useful-count"},[a("i",{staticClass:"iconfont"}),t._v(t._s(e.useful_count)+"\n\t\t\t\t")])],1)])})),t._v(" "),a("div",{staticClass:"allcomment"},[a("span",[t._v("全部短评"+t._s(t.commentsCount)+"条")])])])},i=[],n={render:s,staticRenderFns:i};e.a=n},Ziph:function(t,e,a){"use strict";var s=a("GojP");e.a={props:{listMovie:{type:Array,default:[]},needDate:{type:Boolean,default:!1},hasMore:{type:Boolean,default:!0}},data:function(){return{small:null,average:0,showScore:!0}},components:{Star:s.a},created:function(){this.indexMap={}},methods:{selectItem:function(t){this.$emit("select",t)},dateEqual:function(t){return 0!==t&&(console.log(this.listMovie[t].date),this.listMovie[t].date===this.listMovie[t-1].date)},getMap:function(){for(var t={},e=0;e<this.listMovie.length;e++)t[this.listMovie[e].date]?t[this.listMovie[e].date].push(e):t[this.listMovie[e].date]=[e];this.indexMap=t}}}},cT5r:function(t,e){},"d8/S":function(t,e){},dhIU:function(t,e,a){var s=a("2cg0"),i=a("rBKV");t.exports=s(i,{NODE_ENV:'"development"'})},erIv:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-box"},[a("i",{staticClass:"iconfont icon-sousuo"}),t._v(" "),a("input",{staticClass:"box",attrs:{type:"text",placeholder:t.placeholder}}),t._v(" "),a("span",{staticClass:"cansel",on:{click:t.back}},[t._v("取消")])])},i=[],n={render:s,staticRenderFns:i};e.a=n},fI3C:function(t,e){!function(t,e){var a=t.documentElement,s="orientationchange"in window?"orientationchange":"resize",i=function(){var t=a.clientWidth;t&&(a.style.fontSize=t/375*20+"px")};t.addEventListener&&(e.addEventListener(s,i,!1),t.addEventListener("DOMContentLoaded",i,!1))}(document,window)},fJpe:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"movie-review"}},[a("ul",t._l(t.movieReviews,function(e,s){return a("li",{staticClass:"review-item"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"user-info"},[a("div",{staticClass:"avatar"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.author.avatar,expression:"review.author.avatar"}],attrs:{alt:"",width:"25",height:"25"}})]),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(e.author.name))]),t._v(" "),a("Star",{attrs:{size:24,score:2*e.rating.value}})],1),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(e.summary))])])])})),t._v(" "),a("div",{staticClass:"allreview"},[a("span",[t._v("全部影评"+t._s(t.reviewsCount)+" 条")])])])},i=[],n={render:s,staticRenderFns:i};e.a=n},fMB2:function(t,e,a){"use strict";function s(t){a("C8Fg")}var i=a("pLIX"),n=a("qVyR"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-39e01a1c",null);e.a=c.exports},iA6x:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"movie-detail"}},[a("div",{staticClass:"fixed-title"},[a("span",{staticClass:"back",on:{click:t.back}},[a("i",{staticClass:"iconfont icon-back"})]),t._v(" "),a("span",{ref:"fixed",staticClass:"type"},[t._m(0)])]),t._v(" "),a("div",{staticClass:"movie-detail",attrs:{data:t.movieDetail}},[a("div",{staticClass:"scroll-wrapper"},[t.movieDetail.images?a("div",{staticClass:"scroll-content"},[a("div",{staticClass:"bg-image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.movieDetail.images.large,expression:"movieDetail.images.large"}]})]),t._v(" "),a("Movie-Info",{attrs:{movieDetail:t.movieDetail}}),t._v(" "),a("div",{staticClass:"comments"},[a("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"1"}},[t._v("短评")]),t._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[t._v("影评")])],1),t._v(" "),a("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-container-item",{attrs:{id:"1"}},[a("Movie-Comment",{attrs:{movieComments:t.movieDetail.popular_comments,commentsCount:t.movieDetail.comments_count}})],1),t._v(" "),a("mt-tab-container-item",{attrs:{id:"2"}},[a("Movie-Review",{attrs:{movieReviews:t.movieDetail.popular_reviews,reviewsCount:t.movieDetail.reviews_count}})],1)],1)],1)],1):t._e()])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"iconfont icon-fangying"}),t._v("\n\t\t\t\t电影\n\t\t\t")])}],n={render:s,staticRenderFns:i};e.a=n},jmDM:function(t,e,a){"use strict";function s(t){a("nCmo")}var i=a("M5PT"),n=a("iA6x"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-6eb343aa",null);e.a=c.exports},kTwH:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"movie-hot"}},[a("div",{staticClass:"go-search",on:{click:t.goSearch}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"1"}},[t._v("正在热映")]),t._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[t._v("即将上映")])],1),t._v(" "),a("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-container-item",{attrs:{id:"1"}},[a("div",{staticClass:"scroll",attrs:{data:t.hotMovies}},[a("div",{staticClass:"list-inner"},[a("MovieList-show",{attrs:{listMovie:t.hotMovies},on:{select:t.selectMovie}})],1)])]),t._v(" "),a("mt-tab-container-item",{attrs:{id:"2"}},[a("div",{staticClass:"scroll",attrs:{data:t.comingMovies,needDate:t.needDate}},[a("div",{staticClass:"list-inner"},[a("MovieList-show",{attrs:{listMovie:t.comingMovies}})],1)])])],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:a("mJVK")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-content"},[a("span",[a("i",{staticClass:"iconfont icon-sousuo"})]),t._v(" "),a("span",[t._v("电影/电视剧/影人")])])}],n={render:s,staticRenderFns:i};e.a=n},kakv:function(t,e,a){"use strict";function s(t){a("nmKj")}var i=a("Ziph"),n=a("u7sw"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,null,null);e.a=c.exports},lwq5:function(t,e,a){"use strict";var s={movie:{}};e.a=s},mJVK:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjIyMUZGOTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjIyMUZGQTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMjIxRkY3NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyMjIxRkY4NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vlyY+wAAAYBQTFRFBa8QAKoAFdkhLsg4E8YeAMYBALEAN9JBAMoJErAcB8wTBsYSg9qIB9ITB88TWthijt+TBbAQB84TAM0ABsASBsQS////BsISALsABsoTBscTBrkRBroRBbYRBr4SdNt7b+V3SuFTBbQRBbMR5frmALIJoeOl7fvuE7sdBrwSKbwzCcgWTNRUeOh/FNAf0fbUxvXJHbUnt+i6QsVKSstTk+uYoOylcN13tvK6yu/N8/z0Y9psverAo++oAKMAwuzF+v77AK8LbNVxUsdaAbcKdNN74vbjYMtnrOawxu3JvvPB2/XdGMAjVs5fCNMW2fnbac9wBboQAtEQC7MUOsJDB80WB7oTB7gT/P/8BrYSBLYRBawQB9cUB9YUB9QUB9UUBa0QBrcRQtpLBrwRB64SBbURV+JfC9gYDdYab8919/33BrYUqvGvBc4SBrMTCK8PBrsTBrQSELwbBbEQ+/77BbgRBbgSCK8T6PnqBMsOBbwQA84NC70V2PTazvDQ////esWf9QAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAEbUlEQVR42uzb/V/aRhzA8Ts0B2yM0rI6NrcpKoJYmIA4yxR8SBWcWmmpXS3Wyaabm9s6Hzasq/zrDTjygM038Y7c+Wr7+a25+H2TiIEqQY3OooeJcM3VxdzhwamRKwzq+PfhvqvqROFsFIDnss6orVyJETN4wkG2Rc++HU5UHW8/ehV+WKtyyDXdCR9WOZUwwtxcVb6E61WOrejgGk/4l6gKJ6pcq7XhiSrnsv/Drm3ePWzBWe7udrgF8z/g5iGjxrQAd3tQgfd3BORqoNyvIuCdFXQoxN0ZRIkXQqqhsBjYjdxiYBdyfYB5wclPzHvEGDA6CcDrQebW12ng8+TsClPT4SDNEful2T7GTvxBCvhRcIIV/iEJwX6TzoPTrHAuGTSbDsIrrPBvdLDEfKr7qGC/tM/qTnnOaWC/5K4x5fac+QH4jml/SIyd+01ng7CTKfBHQrrJ8JmHojNm+IlHooElzxNL+HMwz/jUNxRlx8/guZawNEh37bglscIJOvg7ZvhbQUccooVDNxbu/QJMD0eXRuByehie23sd2C2Ng4VuOQT3hOAXo5DbqSO2GBa6dy34YzAjbLGvAYb3fS/hu2BG2GJfAwzv+wF+L+DPwIywxb4GGN5XgT8FIwYY3tcIw/u+GzDRw6SLcC8mYLjHITi7MAC2UHQIvtZbH0t49Wswehieu3pz4QFRsI/yfxKWcGwMjGTo4B4Cz42ho5/AXpHJgHW+UVX83tfckCGv4LlHKPYl2FiZ2Ci/psKT+daWsTF4bswKViorvZTbhvyyfCWZvFZ/mfcfaW6xHGoHbnZ61HNZXJE7FzeJdq1ME9nWQLswVn+qRq9OLuOACi/gTbtwv53IpDq6gjc7FmUyoq7Gia15/XZhWa63Rxdx2bi2ibVHdUFk2/CprXRnc5U8NSzJOK2uDeB+e/MUeNdOT3VH5cP/6JdOSUx/3Ti1NW/XLrxLjubaw5dIxPiYFlS3LpPdLsMyntGuEfiZYaWkrpSIbB/+yl7aD5Ty9NrSL6xqZzpgWIG6BlzR5sfwM3X7Fta9flV0C5bwnr30T6FAfkvdHhmuay8QJGJz2h4ID0V0EVzQfv0TIep2HNcekC8fMQTDQyb9TozvZvO6U7qW1zZvaJsz+Y73u3t/m00H4PnHo/f1FZZ0f1AqqZtLc9rm1wX9F1yU1vAQAA+blH/A/GenvsfEbDoEB5jduRimgX3McI4OZj/iEzq4G99jAPYemzT/V2CGrfQiNht+7DWH/5zPY9aGaeDj49vzjJmPbsK3heRFKTFwCsWRkFIoIwaOow0xcAWNioGXUV0MXESNigj33xxqBETAiw3UyP38I/8Kzc/eHvB3460P/Ub5H/LM5eeri885t9z+KHuGr+s9acM5L1e4pN01UODpBvQ3aDzg52aMt6RwkxdPOm7CSXs5nmfDbUdLHJ7bqZm33mjlc9rdyJncWnZ/0Um2kgZuprs4SDl00VhOw3fxKc+yg0w8lfJ2r1S8slyMdjJvBBgAjaD61EhSiREAAAAASUVORK5CYII="},n4vA:function(t,e){},nCmo:function(t,e){},nmKj:function(t,e){},oO6K:function(t,e,a){"use strict";e.a={props:{placeholder:{type:String,default:"搜索电影/影人"}},methods:{back:function(){this.$router.back()}}}},pFN2:function(t,e,a){"use strict";var s=a("GojP");e.a={props:{movieComments:{type:Array,default:[]},commentsCount:{type:Number,default:0}},components:{Star:s.a}}},pLIX:function(t,e,a){"use strict";e.a={data:function(){return{}}}},qVyR:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/movie-hot"}},[a("span",{staticClass:"tab-icon"},[a("i",{staticClass:"iconfont icon-fangying"})]),t._v(" "),a("span",{staticClass:"tab-link"},[t._v("热映")])]),t._v(" "),a("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:""}},[a("span",{staticClass:"tab-icon"},[a("i",{staticClass:"iconfont icon-lily-rank"})]),t._v(" "),a("span",{staticClass:"tab-link"},[t._v("排行")])]),t._v(" "),a("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:""}},[a("span",{staticClass:"tab-icon"},[a("i",{staticClass:"iconfont icon-wode"})]),t._v(" "),a("span",{staticClass:"tab-link"},[t._v("我的")])])],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},rBKV:function(t,e){t.exports={NODE_ENV:'"production"'}},u4Do:function(t,e,a){"use strict";e.a={props:{size:{type:Number,default:24},score:{type:Number,default:0},showScore:{type:Boolean,default:!1},needNullStar:{type:Boolean,default:!1}},data:function(){return{}},computed:{normalizeScore:function(){return this.score.toString().length<2?this.score+".0":this.score},starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],e=Math.floor(this.score)/2,a=e%1!=0,s=Math.floor(e),i=0;i<s;i++)t.push("on");for(a&&t.push("half");t.length<5;)t.push("off");return t}}}},u7sw:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"movie-list"}},[a("ul",t._l(t.listMovie,function(e,s){return a("li",{ref:"group",refInFor:!0,on:{click:function(a){t.selectItem(e)}}},[t.needDate&&!t.dateEqual(s)?a("div",{staticClass:"date"},[t._v(t._s(e.date))]):t._e(),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"info-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.small,expression:"movie.images.small"}],attrs:{height:"120",width:"80"}})]),t._v(" "),a("div",{staticClass:"info-desc"},[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("Star",{attrs:{size:24,score:e.rating.average,showScore:t.showScore}}),t._v(" "),a("div",{staticClass:"director"},[t._v("\n\t\t\t\t\t\t导演:"),t._l(e.directors,function(e){return a("span",[t._v(t._s(e.name))])})],2),t._v(" "),a("div",{staticClass:"casts"},[t._v("\n\t\t\t\t\t\t主演:"),t._l(e.casts,function(e){return a("span",[t._v(t._s(e.name)+" ")])})],2),t._v(" "),a("div",{staticClass:"hasWatched"},[t._v(t._s(e.collect_count)+"人看过")])],1)])])}))])},i=[],n={render:s,staticRenderFns:i};e.a=n},uOFg:function(t,e){},ukYY:function(t,e,a){"use strict";var s=a("bOdI"),i=a.n(s),n=a("Du/2"),o=i()({},n.a,function(t,e){t.movie=e});e.a=o},wCud:function(t,e,a){"use strict";var s=a("GojP");e.a={props:{movieReviews:{type:Array,default:[]},reviewsCount:{type:Number,default:0}},components:{Star:s.a}}},wrlH:function(t,e){},xJD8:function(t,e,a){"use strict";var s=a("fMB2");e.a={name:"app",components:{Footertab:s.a}}},xst1:function(t,e,a){"use strict";var s=a("FhoZ");s.build.staticPath},yzTV:function(t,e,a){"use strict";function s(t){a("cT5r")}var i=a("wCud"),n=a("fJpe"),o=a("VU/8"),r=s,c=o(i.a,n.a,r,"data-v-3b734731",null);e.a=c.exports},zPvp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.500b93f220c28a76aa58.js.map