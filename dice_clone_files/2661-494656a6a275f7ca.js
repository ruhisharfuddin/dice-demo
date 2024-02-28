(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2661],{54098:function(e,t){var r="undefined"!=typeof self?self:this,n=function(){function F(){this.fetch=!1,this.DOMException=r.DOMException}return F.prototype=r,new F}();(function(e){var t={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};function normalizeName(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw TypeError("Invalid character in header field name");return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e=String(e)),e}function iteratorFor(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function Headers(e){this.map={},e instanceof Headers?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function consumed(e){if(e.bodyUsed)return Promise.reject(TypeError("Already read"));e.bodyUsed=!0}function fileReaderReady(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function readBlobAsArrayBuffer(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsArrayBuffer(e),r}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e){if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else{var r;t.arrayBuffer&&t.blob&&(r=e)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))?this._bodyArrayBuffer=bufferClone(e):this._bodyText=e=Object.prototype.toString.call(e)}}else this._bodyText="";!this.headers.get("content-type")&&("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(!this._bodyFormData)return Promise.resolve(new Blob([this._bodyText]));throw Error("could not read FormData body as blob")},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var e,t,r,n=consumed(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=fileReaderReady(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(!this._bodyFormData)return Promise.resolve(this._bodyText);throw Error("could not read FormData body as text")},t.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},Headers.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),iteratorFor(e)},Headers.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),iteratorFor(e)},Headers.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),iteratorFor(e)},t.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Request(e,t){var r,n,o=(t=t||{}).body;if(e instanceof Request){if(e.bodyUsed)throw TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new Headers(t.headers)),this.method=(n=(r=t.method||this.method||"GET").toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function decode(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function Response(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""});return e.type="error",e};var a=[301,302,303,307,308];Response.redirect=function(e,t){if(-1===a.indexOf(t))throw RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})},e.DOMException=n.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function fetch(r,n){return new Promise(function(o,i){var a=new Request(r,n);if(a.signal&&a.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function abortXhr(){s.abort()}s.onload=function(){var e,t,r={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new Headers,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;o(new Response(n,r))},s.onerror=function(){i(TypeError("Network request failed"))},s.ontimeout=function(){i(TypeError("Network request failed"))},s.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&t.blob&&(s.responseType="blob"),a.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),a.signal&&(a.signal.addEventListener("abort",abortXhr),s.onreadystatechange=function(){4===s.readyState&&a.signal.removeEventListener("abort",abortXhr)}),s.send(void 0===a._bodyInit?null:a._bodyInit)})}fetch.polyfill=!0,n.fetch||(n.fetch=fetch,n.Headers=Headers,n.Request=Request,n.Response=Response),e.Headers=Headers,e.Request=Request,e.Response=Response,e.fetch=fetch,Object.defineProperty(e,"__esModule",{value:!0})})({}),n.fetch.ponyfill=!0,delete n.fetch.polyfill,(t=n.fetch).default=n.fetch,t.fetch=n.fetch,t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response,e.exports=t},18638:function(e,t,r){"use strict";r.d(t,{_:function(){return useAnimation}});var n=r(81439),o=r(24394),i=r(16368),a=r(87962);function animationControls(){var e=!1,t=[],r=new Set,s={subscribe:function(e){return r.add(e),function(){r.delete(e)}},start:function(n,o){if(!e)return new Promise(function(e){t.push({animation:[n,o],resolve:e})});var a=[];return r.forEach(function(e){a.push((0,i.d5)(e,n,{transitionOverride:o}))}),Promise.all(a)},set:function(t){return(0,o.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),r.forEach(function(e){(0,a.gg)(e,t)})},stop:function(){r.forEach(function(e){(0,i.p_)(e)})},mount:function(){return e=!0,t.forEach(function(e){var t=e.animation,r=e.resolve;s.start.apply(s,(0,n.ev)([],(0,n.CR)(t))).then(r)}),function(){e=!1,s.stop()}}};return s}var s=r(67294),u=r(45930);function useAnimation(){var e=(0,u.h)(animationControls);return(0,s.useEffect)(e.mount,[]),e}},58089:function(e,t,r){"use strict";r.d(t,{m:function(){return i}});var n=r(5407),o=r(38808),i=(0,n.D)(o.w)},25633:function(e,t,r){"use strict";var n=r(54098),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(){function Variation(e){this.data={},this.data=e}return Variation.prototype.id=function(){return this.data.id},Variation.prototype.ref=function(){return this.data.ref},Variation.prototype.label=function(){return this.data.label},Variation}(),i=function(){function Experiment(e){this.data={},this.data=e,this.variations=(e.variations||[]).map(function(e){return new o(e)})}return Experiment.prototype.id=function(){return this.data.id},Experiment.prototype.googleId=function(){return this.data.googleId},Experiment.prototype.name=function(){return this.data.name},Experiment}(),a=function(){function Experiments(e){e&&(this.drafts=(e.drafts||[]).map(function(e){return new i(e)}),this.running=(e.running||[]).map(function(e){return new i(e)}))}return Experiments.prototype.current=function(){return this.running.length>0?this.running[0]:null},Experiments.prototype.refFromCookie=function(e){if(!e||""===e.trim())return null;var t=e.trim().split(" ");if(t.length<2)return null;var r=t[0],n=parseInt(t[1],10),o=this.running.filter(function(e){return e.googleId()===r&&e.variations.length>n})[0];return o?o.variations[n].ref():null},Experiments}(),s=function(){function LazySearchForm(e,t){this.id=e,this.api=t,this.fields={}}return LazySearchForm.prototype.set=function(e,t){return this.fields[e]=t,this},LazySearchForm.prototype.ref=function(e){return this.set("ref",e)},LazySearchForm.prototype.query=function(e){return this.set("q",e)},LazySearchForm.prototype.pageSize=function(e){return this.set("pageSize",e)},LazySearchForm.prototype.fetch=function(e){return console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead."),this.set("fetch",e)},LazySearchForm.prototype.fetchLinks=function(e){return console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead."),this.set("fetchLinks",e)},LazySearchForm.prototype.graphQuery=function(e){return this.set("graphQuery",e)},LazySearchForm.prototype.lang=function(e){return this.set("lang",e)},LazySearchForm.prototype.page=function(e){return this.set("page",e)},LazySearchForm.prototype.after=function(e){return this.set("after",e)},LazySearchForm.prototype.orderings=function(e){return this.set("orderings",e)},LazySearchForm.prototype.url=function(){var e=this;return this.api.get().then(function(t){return LazySearchForm.toSearchForm(e,t).url()})},LazySearchForm.prototype.submit=function(e){var t=this;return this.api.get().then(function(r){return LazySearchForm.toSearchForm(t,r).submit(e)})},LazySearchForm.toSearchForm=function(e,t){var r=t.form(e.id);if(r)return Object.keys(e.fields).reduce(function(t,r){var n=e.fields[r];if("q"===r)return t.query(n);if("pageSize"===r)return t.pageSize(n);if("fetch"===r)return t.fetch(n);if("fetchLinks"===r)return t.fetchLinks(n);if("graphQuery"===r)return t.graphQuery(n);if("lang"===r)return t.lang(n);if("page"===r)return t.page(n);else if("after"===r)return t.after(n);else if("orderings"===r)return t.orderings(n);else return t.set(r,n)},r);throw Error("Unable to access to form "+e.id)},LazySearchForm}(),u=function(){function SearchForm(e,t){for(var r in this.httpClient=t,this.form=e,this.data={},e.fields)e.fields[r].default&&(this.data[r]=[e.fields[r].default])}return SearchForm.prototype.set=function(e,t){var r=this.form.fields[e];if(!r)throw Error("Unknown field "+e);var n=""===t||void 0===t?null:t,o=this.data[e]||[];return o=r.multiple?n?o.concat([n]):o:n?[n]:o,this.data[e]=o,this},SearchForm.prototype.ref=function(e){return this.set("ref",e)},SearchForm.prototype.query=function(e){if("string"==typeof e)return this.query([e]);if(Array.isArray(e))return this.set("q","["+e.join("")+"]");throw Error("Invalid query : "+e)},SearchForm.prototype.pageSize=function(e){return this.set("pageSize",e)},SearchForm.prototype.fetch=function(e){console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.");var t=Array.isArray(e)?e.join(","):e;return this.set("fetch",t)},SearchForm.prototype.fetchLinks=function(e){console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.");var t=Array.isArray(e)?e.join(","):e;return this.set("fetchLinks",t)},SearchForm.prototype.graphQuery=function(e){return this.set("graphQuery",e)},SearchForm.prototype.lang=function(e){return this.set("lang",e)},SearchForm.prototype.page=function(e){return this.set("page",e)},SearchForm.prototype.after=function(e){return this.set("after",e)},SearchForm.prototype.orderings=function(e){return e?this.set("orderings","["+e.join(",")+"]"):this},SearchForm.prototype.url=function(){var e=this.form.action;if(this.data){var t=e.indexOf("?")>-1?"&":"?";for(var r in this.data)if(Object.prototype.hasOwnProperty.call(this.data,r)){var n=this.data[r];if(n)for(var o=0;o<n.length;o++)e+=t+r+"="+encodeURIComponent(n[o]),t="&"}}return e},SearchForm.prototype.submit=function(e){return this.httpClient.cachedRequest(this.url()).then(function(t){return e&&e(null,t),t}).catch(function(t){throw e&&e(t),t})},SearchForm}();function encode(e){if("string"==typeof e)return'"'+e+'"';if("number"==typeof e)return e.toString();if(e instanceof Date)return e.getTime().toString();if(Array.isArray(e))return"["+e.map(function(e){return encode(e)}).join(",")+"]";if("boolean"==typeof e)return e.toString();throw Error("Unable to encode "+e+" of type "+typeof e)}var f={near:function(e,t,r,n){return"[geopoint.near("+e+", "+t+", "+r+", "+n+")]"}},h={before:function(e,t){return"[date.before("+e+", "+encode(t)+")]"},after:function(e,t){return"[date.after("+e+", "+encode(t)+")]"},between:function(e,t,r){return"[date.between("+e+", "+encode(t)+", "+encode(r)+")]"},dayOfMonth:function(e,t){return"[date.day-of-month("+e+", "+t+")]"},dayOfMonthAfter:function(e,t){return"[date.day-of-month-after("+e+", "+t+")]"},dayOfMonthBefore:function(e,t){return"[date.day-of-month-before("+e+", "+t+")]"},dayOfWeek:function(e,t){return"[date.day-of-week("+e+", "+encode(t)+")]"},dayOfWeekAfter:function(e,t){return"[date.day-of-week-after("+e+", "+encode(t)+")]"},dayOfWeekBefore:function(e,t){return"[date.day-of-week-before("+e+", "+encode(t)+")]"},month:function(e,t){return"[date.month("+e+", "+encode(t)+")]"},monthBefore:function(e,t){return"[date.month-before("+e+", "+encode(t)+")]"},monthAfter:function(e,t){return"[date.month-after("+e+", "+encode(t)+")]"},year:function(e,t){return"[date.year("+e+", "+t+")]"},hour:function(e,t){return"[date.hour("+e+", "+t+")]"},hourBefore:function(e,t){return"[date.hour-before("+e+", "+t+")]"},hourAfter:function(e,t){return"[date.hour-after("+e+", "+t+")]"}},c={gt:function(e,t){return"[number.gt("+e+", "+t+")]"},lt:function(e,t){return"[number.lt("+e+", "+t+")]"},inRange:function(e,t,r){return"[number.inRange("+e+", "+t+", "+r+")]"}},p={at:function(e,t){return"[at("+e+", "+encode(t)+")]"},not:function(e,t){return"[not("+e+", "+encode(t)+")]"},missing:function(e){return"[missing("+e+")]"},has:function(e){return"[has("+e+")]"},any:function(e,t){return"[any("+e+", "+encode(t)+")]"},in:function(e,t){return"[in("+e+", "+encode(t)+")]"},fulltext:function(e,t){return"[fulltext("+e+", "+encode(t)+")]"},similar:function(e,t){return'[similar("'+e+'", '+t+")]"},date:h,dateBefore:h.before,dateAfter:h.after,dateBetween:h.between,dayOfMonth:h.dayOfMonth,dayOfMonthAfter:h.dayOfMonthAfter,dayOfMonthBefore:h.dayOfMonthBefore,dayOfWeek:h.dayOfWeek,dayOfWeekAfter:h.dayOfWeekAfter,dayOfWeekBefore:h.dayOfWeekBefore,month:h.month,monthBefore:h.monthBefore,monthAfter:h.monthAfter,year:h.year,hour:h.hour,hourBefore:h.hourBefore,hourAfter:h.hourAfter,number:c,gt:c.gt,lt:c.lt,inRange:c.inRange,near:f.near,geopoint:f},l=decodeURIComponent,d={parse:function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");var r={},n=e.split(/; */),o=(t||{}).decode||l;return n.forEach(function(e){var t=e.indexOf("=");if(!(t<0)){var n=e.substr(0,t).trim(),i=e.substr(++t,e.length).trim();'"'==i[0]&&(i=i.slice(1,-1)),void 0==r[n]&&(r[n]=function(e,t){try{return t(e)}catch(t){return e}}(i,o))}}),r}};function createPreviewResolver(e,t,r){return{token:e,documentId:t,resolve:function(n,o,i){return t&&r?r(t,{ref:e}).then(function(e){if(!e)return i&&i(null,o),o;var t=n&&n(e)||e.url||o;return i&&i(null,t),t}):Promise.resolve(o)}}}var y="io.prismic.preview",m="io.prismic.experiment",g=function(){function ResolvedApi(e,t,r){this.data=e,this.masterRef=e.refs.filter(function(e){return e.isMasterRef})[0],this.experiments=new a(e.experiments),this.bookmarks=e.bookmarks,this.httpClient=t,this.options=r,this.refs=e.refs,this.tags=e.tags,this.types=e.types,this.languages=e.languages}return ResolvedApi.prototype.form=function(e){var t=this.data.forms[e];return t?new u(t,this.httpClient):null},ResolvedApi.prototype.everything=function(){var e=this.form("everything");if(!e)throw Error("Missing everything form");return e},ResolvedApi.prototype.master=function(){return this.masterRef.ref},ResolvedApi.prototype.ref=function(e){var t=this.data.refs.filter(function(t){return t.label===e})[0];return t?t.ref:null},ResolvedApi.prototype.currentExperiment=function(){return this.experiments.current()},ResolvedApi.prototype.query=function(e,t,r){void 0===r&&(r=function(){});var n="function"==typeof t?{options:{},callback:t}:{options:t||{},callback:r},o=n.options,i=n.callback,a=this.everything();for(var s in o)a=a.set(s,o[s]);if(!o.ref){var u="";this.options.req?u=this.options.req.headers.cookie||"":"undefined"!=typeof window&&window.document&&(u=window.document.cookie||"");var f=d.parse(u),h=f[y],c=this.experiments.refFromCookie(f[m]);a=a.ref(h||c||this.masterRef.ref)}return e&&a.query(e),a.submit(i)},ResolvedApi.prototype.queryFirst=function(e,t,r){var n="function"==typeof t?{options:{},callback:t}:{options:t||{},callback:r||function(){}},o=n.options,i=n.callback;return o.page=1,o.pageSize=1,this.query(e,o).then(function(e){var t=e&&e.results&&e.results[0];return i(null,t),t}).catch(function(e){throw i(e),e})},ResolvedApi.prototype.getByID=function(e,t,r){var n=t?__assign({},t):{};return n.lang||(n.lang="*"),this.queryFirst(p.at("document.id",e),n,r)},ResolvedApi.prototype.getByIDs=function(e,t,r){var n=t?__assign({},t):{};return n.lang||(n.lang="*"),this.query(p.in("document.id",e),n,r)},ResolvedApi.prototype.getByUID=function(e,t,r,n){var o=r?__assign({},r):{};if("*"===o.lang)throw Error("FORBIDDEN. You can't use getByUID with *, use the predicates instead.");return o.page||(o.page=1),this.queryFirst(p.at("my."+e+".uid",t),o,n)},ResolvedApi.prototype.getSingle=function(e,t,r){var n=t?__assign({},t):{};return this.queryFirst(p.at("document.type",e),n,r)},ResolvedApi.prototype.getBookmark=function(e,t,r){var n=this.data.bookmarks[e];return n?this.getByID(n,t,r):Promise.reject("Error retrieving bookmarked id")},ResolvedApi.prototype.getPreviewResolver=function(e,t){return createPreviewResolver(e,t,this.getByID.bind(this))},ResolvedApi.prototype.previewSession=function(e,t,r,n){var o=this;return console.warn("previewSession function is deprecated in favor of getPreviewResolver function."),new Promise(function(i,a){o.httpClient.request(e,function(s,u){if(s)n&&n(s),a(s);else if(u){if(u.mainDocument)return o.getByID(u.mainDocument,{ref:e}).then(function(e){if(e){var o=t&&t(e)||e.url||r;n&&n(null,o),i(o)}else n&&n(null,r),i(r)}).catch(a);n&&n(null,r),i(r)}})})},ResolvedApi}();function LRUCache(e){this.size=0,this.limit=e,this._keymap={}}LRUCache.prototype.put=function(e,t){var r={key:e,value:t};if(this._keymap[e]=r,this.tail?(this.tail.newer=r,r.older=this.tail):this.head=r,this.tail=r,this.size===this.limit)return this.shift();this.size++},LRUCache.prototype.shift=function(){var e=this.head;return e&&(this.head.newer?(this.head=this.head.newer,this.head.older=void 0):this.head=void 0,e.newer=e.older=void 0,delete this._keymap[e.key]),console.log("purging ",e.key),e},LRUCache.prototype.get=function(e,t){var r=this._keymap[e];if(void 0!==r)return r===this.tail||(r.newer&&(r===this.head&&(this.head=r.newer),r.newer.older=r.older),r.older&&(r.older.newer=r.newer),r.newer=void 0,r.older=this.tail,this.tail&&(this.tail.newer=r),this.tail=r),t?r:r.value},LRUCache.prototype.find=function(e){return this._keymap[e]},LRUCache.prototype.set=function(e,t){var r,n=this.get(e,!0);return n?(r=n.value,n.value=t):(r=this.put(e,t))&&(r=r.value),r},LRUCache.prototype.remove=function(e){var t=this._keymap[e];if(t)return delete this._keymap[t.key],t.newer&&t.older?(t.older.newer=t.newer,t.newer.older=t.older):t.newer?(t.newer.older=void 0,this.head=t.newer):t.older?(t.older.newer=void 0,this.tail=t.older):this.head=this.tail=void 0,this.size--,t.value},LRUCache.prototype.removeAll=function(){this.head=this.tail=void 0,this.size=0,this._keymap={}},"function"==typeof Object.keys?LRUCache.prototype.keys=function(){return Object.keys(this._keymap)}:LRUCache.prototype.keys=function(){var e=[];for(var t in this._keymap)e.push(t);return e},LRUCache.prototype.forEach=function(e,t,r){var n;if(!0===t?(r=!0,t=void 0):"object"!=typeof t&&(t=this),r)for(n=this.tail;n;)e.call(t,n.key,n.value,this),n=n.older;else for(n=this.head;n;)e.call(t,n.key,n.value,this),n=n.newer},LRUCache.prototype.toString=function(){for(var e="",t=this.head;t;)e+=String(t.key)+":"+t.value,(t=t.newer)&&(e+=" < ");return e};var v=function(){function DefaultApiCache(e){var t;void 0===e&&(e=1e3),this.lru=(t=e,new LRUCache(t))}return DefaultApiCache.prototype.isExpired=function(e){var t=this.lru.get(e,!1);return!!t&&0!==t.expiredIn&&t.expiredIn<Date.now()},DefaultApiCache.prototype.get=function(e,t){var r=this.lru.get(e,!1);r&&!this.isExpired(e)?t(null,r.data):t&&t(null)},DefaultApiCache.prototype.set=function(e,t,r,n){this.lru.remove(e),this.lru.put(e,{data:t,expiredIn:r?Date.now()+1e3*r:0}),n&&n(null)},DefaultApiCache.prototype.remove=function(e,t){this.lru.remove(e),t&&t(null)},DefaultApiCache.prototype.clear=function(e){this.lru.removeAll(),e&&e(null)},DefaultApiCache}(),b=function(){function DefaultRequestHandler(e){this.options=e||{}}return DefaultRequestHandler.prototype.request=function(e,t){!function(e,t,r){var o,i={headers:{Accept:"application/json"}};t&&t.proxyAgent&&(i.agent=t.proxyAgent);var a=n(e,i);(t.timeoutInMs?Promise.race([a,new Promise(function(r,n){o=setTimeout(function(){return n(Error(e+" response timeout"))},t.timeoutInMs)})]):a).then(function(t){return(clearTimeout(o),~~(t.status/100!=2))?t.text().then(function(){var r=Error("Unexpected status code ["+t.status+"] on URL "+e);throw r.status=t.status,r}):t.json().then(function(e){var n=t.headers.get("cache-control"),o=n?/max-age=(\d+)/.exec(n):null;r(null,e,t,o?parseInt(o[1],10):void 0)})}).catch(function(e){clearTimeout(o),r(e)})}(e,this.options,t)},DefaultRequestHandler}(),w=function(){function HttpClient(e,t,r,n){this.requestHandler=e||new b({proxyAgent:r,timeoutInMs:n}),this.cache=t||new v}return HttpClient.prototype.request=function(e,t){this.requestHandler.request(e,function(e,r,n,o){e?t&&t(e,null,n,o):r&&t&&t(null,r,n,o)})},HttpClient.prototype.cachedRequest=function(e,t){var r=this,n=t||{},run=function(t){var o=n.cacheKey||e;r.cache.get(o,function(i,a){i||a?t(i,a):r.request(e,function(e,i,a,s){if(e)t(e,null);else{var u=s||n.ttl;u&&r.cache.set(o,i,u,t),t(null,i)}})})};return new Promise(function(e,t){run(function(r,n){r&&t(r),n&&e(n)})})},HttpClient}();function separator(e){return e.indexOf("?")>-1?"&":"?"}var A=function(){function Api(e,t){if(this.options=t||{},this.url=e,this.options.accessToken){var r="access_token="+this.options.accessToken;this.url+=separator(e)+r}this.options.routes&&(this.url+=separator(e)+"routes="+encodeURIComponent(JSON.stringify(this.options.routes))),this.apiDataTTL=this.options.apiDataTTL||5,this.httpClient=new w(this.options.requestHandler,this.options.apiCache,this.options.proxyAgent,this.options.timeoutInMs)}return Api.prototype.get=function(e){var t=this;return this.httpClient.cachedRequest(this.url,{ttl:this.apiDataTTL}).then(function(r){var n=new g(r,t.httpClient,t.options);return e&&e(null,n),n}).catch(function(t){throw e&&e(t),t})},Api}(),R=function(){function DefaultClient(e,t){this.api=new A(e,t)}return DefaultClient.prototype.getApi=function(){return this.api.get()},DefaultClient.prototype.everything=function(){return this.form("everything")},DefaultClient.prototype.form=function(e){return new s(e,this.api)},DefaultClient.prototype.query=function(e,t,r){return this.getApi().then(function(n){return n.query(e,t,r)})},DefaultClient.prototype.queryFirst=function(e,t,r){return this.getApi().then(function(n){return n.queryFirst(e,t,r)})},DefaultClient.prototype.getByID=function(e,t,r){return this.getApi().then(function(n){return n.getByID(e,t,r)})},DefaultClient.prototype.getByIDs=function(e,t,r){return this.getApi().then(function(n){return n.getByIDs(e,t,r)})},DefaultClient.prototype.getByUID=function(e,t,r,n){return this.getApi().then(function(o){return o.getByUID(e,t,r,n)})},DefaultClient.prototype.getSingle=function(e,t,r){return this.getApi().then(function(n){return n.getSingle(e,t,r)})},DefaultClient.prototype.getBookmark=function(e,t,r){return this.getApi().then(function(n){return n.getBookmark(e,t,r)})},DefaultClient.prototype.previewSession=function(e,t,r,n){return this.getApi().then(function(o){return o.previewSession(e,t,r,n)})},DefaultClient.prototype.getPreviewResolver=function(e,t){var r=this;return createPreviewResolver(e,t,function(e,t){return r.getApi().then(function(r){return r.getByID(e,t)})})},DefaultClient.getApi=function(e,t){return new A(e,t).get()},DefaultClient}();function getApi(e,t){return R.getApi(e,t)}t.Z={experimentCookie:m,previewCookie:y,Predicates:p,Experiments:a,Api:A,client:function(e,t){return new R(e,t)},getApi:getApi,api:function(e,t){return getApi(e,t)}}}}]);