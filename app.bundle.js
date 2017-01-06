webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// load main.scss file
	__webpack_require__(1);


	// load all .js file from modules
	var reqModuleJS = __webpack_require__(5);
	reqModuleJS.keys().forEach(function (key) {
	    reqModuleJS(key);
	});
	// load all .js file from shared
	var reqSharedJS = __webpack_require__(13);
	reqSharedJS.keys().forEach(function (key) {
	    reqSharedJS(key);
	});
	// load all .js file from services
	var reqServicesJS = __webpack_require__(20);
	reqServicesJS.keys().forEach(function (key) {
	    reqServicesJS(key);
	});

	//load angular app
	__webpack_require__(26);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/import-glob-loader/index.js!./main.sass", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/import-glob-loader/index.js!./main.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n  blockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.flex {\n  display: flex;\n  width: 100%; }\n  .flex--wrap {\n    flex-wrap: wrap; }\n  .flex--center {\n    justify-content: center;\n    align-items: center;\n    align-content: center; }\n  .flex--center-justify {\n    justify-content: center; }\n  .flex--center-items {\n    align-items: center; }\n  .flex--center-align {\n    align-content: center; }\n  .flex--center-content {\n    align-content: center; }\n  .flex__xs-1 {\n    width: 8.33333%; }\n  .flex__xs-order-1 {\n    order: 1; }\n  .flex__xs-2 {\n    width: 16.66667%; }\n  .flex__xs-order-2 {\n    order: 2; }\n  .flex__xs-3 {\n    width: 25%; }\n  .flex__xs-order-3 {\n    order: 3; }\n  .flex__xs-4 {\n    width: 33.33333%; }\n  .flex__xs-order-4 {\n    order: 4; }\n  .flex__xs-5 {\n    width: 41.66667%; }\n  .flex__xs-order-5 {\n    order: 5; }\n  .flex__xs-6 {\n    width: 50%; }\n  .flex__xs-order-6 {\n    order: 6; }\n  .flex__xs-7 {\n    width: 58.33333%; }\n  .flex__xs-order-7 {\n    order: 7; }\n  .flex__xs-8 {\n    width: 66.66667%; }\n  .flex__xs-order-8 {\n    order: 8; }\n  .flex__xs-9 {\n    width: 75%; }\n  .flex__xs-order-9 {\n    order: 9; }\n  .flex__xs-10 {\n    width: 83.33333%; }\n  .flex__xs-order-10 {\n    order: 10; }\n  .flex__xs-11 {\n    width: 91.66667%; }\n  .flex__xs-order-11 {\n    order: 11; }\n  .flex__xs-12 {\n    width: 100%; }\n  .flex__xs-order-12 {\n    order: 12; }\n  @media screen and (min-width: 500px) {\n    .flex__sm-1 {\n      width: 8.33333%; }\n    .flex__sm-order-1 {\n      order: 1; }\n    .flex__sm-2 {\n      width: 16.66667%; }\n    .flex__sm-order-2 {\n      order: 2; }\n    .flex__sm-3 {\n      width: 25%; }\n    .flex__sm-order-3 {\n      order: 3; }\n    .flex__sm-4 {\n      width: 33.33333%; }\n    .flex__sm-order-4 {\n      order: 4; }\n    .flex__sm-5 {\n      width: 41.66667%; }\n    .flex__sm-order-5 {\n      order: 5; }\n    .flex__sm-6 {\n      width: 50%; }\n    .flex__sm-order-6 {\n      order: 6; }\n    .flex__sm-7 {\n      width: 58.33333%; }\n    .flex__sm-order-7 {\n      order: 7; }\n    .flex__sm-8 {\n      width: 66.66667%; }\n    .flex__sm-order-8 {\n      order: 8; }\n    .flex__sm-9 {\n      width: 75%; }\n    .flex__sm-order-9 {\n      order: 9; }\n    .flex__sm-10 {\n      width: 83.33333%; }\n    .flex__sm-order-10 {\n      order: 10; }\n    .flex__sm-11 {\n      width: 91.66667%; }\n    .flex__sm-order-11 {\n      order: 11; }\n    .flex__sm-12 {\n      width: 100%; }\n    .flex__sm-order-12 {\n      order: 12; } }\n  @media screen and (min-width: 900px) {\n    .flex__md-1 {\n      width: 8.33333%; }\n    .flex__md-order-1 {\n      order: 1; }\n    .flex__md-2 {\n      width: 16.66667%; }\n    .flex__md-order-2 {\n      order: 2; }\n    .flex__md-3 {\n      width: 25%; }\n    .flex__md-order-3 {\n      order: 3; }\n    .flex__md-4 {\n      width: 33.33333%; }\n    .flex__md-order-4 {\n      order: 4; }\n    .flex__md-5 {\n      width: 41.66667%; }\n    .flex__md-order-5 {\n      order: 5; }\n    .flex__md-6 {\n      width: 50%; }\n    .flex__md-order-6 {\n      order: 6; }\n    .flex__md-7 {\n      width: 58.33333%; }\n    .flex__md-order-7 {\n      order: 7; }\n    .flex__md-8 {\n      width: 66.66667%; }\n    .flex__md-order-8 {\n      order: 8; }\n    .flex__md-9 {\n      width: 75%; }\n    .flex__md-order-9 {\n      order: 9; }\n    .flex__md-10 {\n      width: 83.33333%; }\n    .flex__md-order-10 {\n      order: 10; }\n    .flex__md-11 {\n      width: 91.66667%; }\n    .flex__md-order-11 {\n      order: 11; }\n    .flex__md-12 {\n      width: 100%; }\n    .flex__md-order-12 {\n      order: 12; } }\n  @media screen and (min-width: 1200px) {\n    .flex__lg-1 {\n      width: 8.33333%; }\n    .flex__lg-order-1 {\n      order: 1; }\n    .flex__lg-2 {\n      width: 16.66667%; }\n    .flex__lg-order-2 {\n      order: 2; }\n    .flex__lg-3 {\n      width: 25%; }\n    .flex__lg-order-3 {\n      order: 3; }\n    .flex__lg-4 {\n      width: 33.33333%; }\n    .flex__lg-order-4 {\n      order: 4; }\n    .flex__lg-5 {\n      width: 41.66667%; }\n    .flex__lg-order-5 {\n      order: 5; }\n    .flex__lg-6 {\n      width: 50%; }\n    .flex__lg-order-6 {\n      order: 6; }\n    .flex__lg-7 {\n      width: 58.33333%; }\n    .flex__lg-order-7 {\n      order: 7; }\n    .flex__lg-8 {\n      width: 66.66667%; }\n    .flex__lg-order-8 {\n      order: 8; }\n    .flex__lg-9 {\n      width: 75%; }\n    .flex__lg-order-9 {\n      order: 9; }\n    .flex__lg-10 {\n      width: 83.33333%; }\n    .flex__lg-order-10 {\n      order: 10; }\n    .flex__lg-11 {\n      width: 91.66667%; }\n    .flex__lg-order-11 {\n      order: 11; }\n    .flex__lg-12 {\n      width: 100%; }\n    .flex__lg-order-12 {\n      order: 12; } }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\na {\n  cursor: pointer; }\n\nbody {\n  background-color: #ececec; }\n\n/*================= */\n/*  widget */\n/*================= */\ninput, textarea, select {\n  display: inline-block;\n  padding: 5px 10px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  font-size: inherit;\n  font-family: inherit; }\n\nlabel {\n  display: inline-block; }\n\ntextarea {\n  resize: vertical; }\n\ninput[type=\"button\"] {\n  display: inline-block;\n  width: auto; }\n\n/*================= */\n/*  page nav */\n/*================= */\n.page-nav {\n  background: #9797a8;\n  display: flex;\n  justify-content: space-between; }\n  .page-nav__logo {\n    padding: 25px 40px; }\n  .page-nav__item {\n    display: inline-block;\n    padding: 25px 40px; }\n  .page-nav__link {\n    text-decoration: none; }\n\n/*================= */\n/*  jumbotron */\n/*================= */\n.jumbotron {\n  text-align: center;\n  padding: 50px 10px; }\n  .jumbotron__title {\n    padding-bottom: 30px;\n    font-size: 3em; }\n\n/*================= */\n/*  side bar */\n/*================= */\n.side-bar {\n  background: #ffffff;\n  padding: 20px; }\n\n/*================= */\n/*  widget */\n/*================= */\n.widget__title {\n  font-size: 2em;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #000;\n  margin-bottom: 10px; }\n\n.widget__item {\n  margin-left: 50px;\n  padding-left: 20px;\n  list-style-type: decimal; }\n\n.widget__link {\n  text-decoration: underline; }\n\n/*================= */\n/*  films */\n/*================= */\n.film {\n  display: flex;\n  margin-bottom: 50px; }\n  .film__title {\n    font-weight: bold;\n    font-size: 1.5em;\n    text-align: left;\n    padding-bottom: 15px; }\n  .film__details {\n    width: calc(100% - 100px); }\n  .film__image {\n    width: 100px;\n    height: 100%;\n    margin-right: 15px; }\n  .film__desc {\n    text-align: justify; }\n  .film__link {\n    display: block;\n    padding-top: 15px;\n    text-align: right; }\n\n/*================= */\n/*  form */\n/*================= */\n.form {\n  font-size: 1em; }\n  .form__group {\n    margin: 10px 0; }\n\n.form--block .form__in {\n  width: 100%;\n  display: block; }\n\n.form--block .form__label {\n  padding-top: 15px;\n  padding-bottom: 5px; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./films/add/add.controller.js": 6,
		"./films/id/id.controller.js": 8,
		"./films/id/id.service.js": 10,
		"./home/home.controller.js": 11
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('app.filmsAdd', [
	    'ui.router'
	])
	    .config([
	        '$stateProvider', function ($stateProvider) {
	            $stateProvider.state('filmsAdd', {
	                name: 'filmsAdd',
	                url: '/films/add',
	                controller: 'filmsAddCtrl',
	                template: __webpack_require__(7)
	            })
	        }
	    ])
	    .controller('filmsAddCtrl', ['$scope', 'filmService' ,'countriesService', 'genresService', 'errorCallbackProvider', function ($scope, countriesService, filmService,genresService, errorCallbackProvider) {
	        $scope.form = {};
	        countriesService.getAll()
	            .then(function successCallback(response) {
	                var output = response.data;
	                var status = output.status;
	                if (status == "success") {
	                    $scope.countries = output.data;

	                } else if (status == "fail") {
	                    alert("Error - check console");
	                    console.log(output.data);
	                }
	            }, function errorCallback(response) {
	                errorCallbackProvider(response);
	            });

	        genresService.getAll()
	            .then(function successCallback(response) {
	                var output = response.data;
	                var status = output.status;
	                if (status == "success") {
	                    $scope.genres = output.data;

	                } else if (status == "fail") {
	                    alert("Error - check console");
	                    console.log(output.data);
	                }
	            }, function errorCallback(response) {
	                errorCallbackProvider(response);
	            });


	        $scope.send = function () {
	            filmService.add($scope.form)
	                .then(function (response) {
	                    alert("poszło");
	                    console.log(response);
	                }, function (reponse) {
	                    errorCallbackProvider(response);
	                });



	        };

	        $scope.genres = [
	            {
	                "nazwa": "ggegeg"
	            }, {
	                "nazwa": "gggggg"
	            }
	        ];

	        $scope.countries = [
	            {
	                "nazwa": "coun"
	            }, {
	                "nazwa": "counasds"
	            }
	        ]
	    }])
	;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<form novalidate class=\"form form--block\">\n    <div class=\"form__group\">\n        <label class=\"form__label\" for=\"title\">Tytuł filmu</label>\n        <input ng-model=\"form.tytul\" id=\"title\" class=\"form__in form--input\" type=\"text\">\n    </div>\n    <div class=\"form__group\">\n        <label class=\"form__label\" for=\"rok_premiery\">Rok premiery</label>\n        <input ng-model=\"form.rok_premiery\" id=\"rok_premiery\" class=\"form__in form--input\" type=\"number\">\n    </div>\n    <div class=\"form__group\">\n        <label class=\"form__label\" for=\"genres\">Gatunki</label>\n        <select ng-model=\"form.gatunki\" ng-options=\"genre.nazwa for genre in genres\" multiple id=\"genres\"\n                class=\"form__in form--select\"></select>\n    </div>\n    <div class=\"form__group\">\n        <label class=\"form__label\" for=\"url_p\">Plakat</label>\n        <input ng-model=\"form.url_p\" id=\"url_p\" class=\"form__in form--input\" type=\"text\">\n    </div>\n    <div class=\"form__group\">\n        <label class=\"form__label\" for=\"kraj\">Kraje</label>\n        <select ng-model=\"form.kraje\" ng-options=\"country.nazwa for country in countries\" id=\"kraj\"\n                class=\"form__in form--select\"\n                multiple></select>\n    </div>\n    <div class=\"form__group\">\n        <label class=\"form__label\" for=\"url_z\">Zwiastun</label>\n        <input ng-model=\"form.url_z\" id=\"url_z\" class=\"form__in form--input\" type=\"text\">\n    </div>\n\n    <div class=\"form__group\">\n        <label class=\"form__label\" for=\"opis\">Opis filmu</label>\n        <textarea ng-model=\"form.opis\" id=\"opis\" class=\"form__in form--textarea\" rows=\"10\"></textarea>\n    </div>\n    <input type=\"button\" ng-click=\"send()\" value=\"Zapisz\">\n</form>\n\n<film details=\"form\"></film>\n\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('app.filmsId', [
	    'ui.router'
	])
	    .config([
	        '$stateProvider', function ($stateProvider) {
	            $stateProvider.state('filmsId', {
	                name: 'filmsId',
	                url: '/films/{id}',
	                controller: 'filmsIdCtrl',
	                template: __webpack_require__(9)
	            })
	        }
	    ])
	    .controller('filmsIdCtrl', ['$scope', '$stateParams', 'filmService', 'errorCallbackProvider', function ($scope, $stateParams, filmService, errorCallbackProvider) {
	        var id = $stateParams.id;
	        filmService.get(id)
	            .then(function successCallback(response) {
	                var output = response.data;
	                var status = output.status;
	                if (status == "success") {
	                    $scope.film = output.data;

	                } else if (status == "fail") {
	                    alert("Error - check console");
	                    console.log(output.data);
	                }
	            }, function errorCallback(response) {
	                errorCallbackProvider(response);
	            });


	    }])
	;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<h1>Test FILMU</h1>\n<h2>Wszystkie dane:</h2>\n<pre>\n    {{film}}\n</pre>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	// angular
	//     .module('nerd.service', [])
	//     .service('nerdService', ['$http', function ($http) {
	//
	//         return {
	//             // call to get all nerds
	//             get: function () {
	//                 return $http.get('/api/nerds');
	//             },
	//
	//
	//             // these will work when more API routes are defined on the Node side of things
	//             // call to POST and create a new nerd
	//             create: function (nerdData) {
	//                 return $http.post('/api/nerds', nerdData);
	//             },
	//
	//             // call to DELETE a nerd
	//             delete: function (id) {
	//                 return $http.delete('/api/nerds/' + id);
	//             }
	//         }
	//
	//     }]);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('app.mainCtrl', [
	    'ui.router'
	])
	    .config([
	        '$stateProvider', function ($stateProvider) {
	            $stateProvider.state('home', {
	                name: 'home',
	                url: '/',
	                controller: 'homeCtrl',
	                template: __webpack_require__(12)
	            })
	        }
	    ]).controller('homeCtrl', [
	    '$scope', 'filmService', 'errorCallbackProvider', function ($scope, filmService, errorCallbackProvider) {
	        filmService.getAll()
	            .then(function successCallback(response) {
	                var output = response.data;
	                var status = output.status;
	                if (status == "success") {
	                    $scope.films = output.data;

	                } else if (status == "fail") {
	                    alert(output.data.message);
	                }
	            }, function errorCallback(response) {
	                errorCallbackProvider(response);
	            });
	    }])
	;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"jumbotron__title\">Biblia filmów</h1>\n    <p class=\"jumbotron__desc\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dapibus risus. Praesent vel volutpat metus.\n        Cras est mauris, sollicitudin quis ipsum quis, tempor ullamcorper velit. Pellentesque varius mauris nulla, eget\n        aliquam risus porttitor ac. Vestibulum vestibulum leo non augue gravida efficitur. Phasellus quis suscipit\n        lectus. Fusce molestie tortor vel nunc pulvinar cursus. Donec feugiat.\n    </p>\n</div>\n\n<div class=\"film-container\">\n    <h2>Najnowsze filmy</h2>\n    <film ng-repeat=\"film in films | orderBy:'tytul'\" details=\"film\"></film>\n</div>\n\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./film/film.controller.js": 14,
		"./page-nav/pageNav.controller.js": 16,
		"./side-bar/sideBar.controller.js": 18
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	angular
	    .module('app.film', [])
	    .directive('film', function () {
	        return {
	            controller: 'film',
	            template: __webpack_require__(15),
	            scope: {
	                details: '='
	            },
	            link: function (scope, element, attrs) {

	            }
	        };
	    }).controller('film', [
	    '$scope', function ($scope) {
	        
	    }
	])
	;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"film\">\n    <img class=\"film__image\" ng-src=\"{{details.url_p}}\" alt=\"alt\">\n    <div class=\"film__details\">\n        <h2 class=\"film__title\">{{details.tytul}}</h2>\n        <p class=\"film__desc\">{{details.opis}}</p>\n        <a class=\"film__link\" href=\"#!/films/{{details.film_id}}\">Zobacz całość</a>\n\n        <!--<ul>-->\n            <!--<li ng-repeat=\"country in details.kraje\">{{country.nazwa}}</li>-->\n        <!--</ul>-->\n        <!--<h1>Gatunki</h1>-->\n        <!--<ul>-->\n            <!--<li ng-repeat=\"genre in details.gatunki\">{{genre.nazwa}}</li>-->\n        <!--</ul>-->\n        <!--<h1>Rok</h1>-->\n        <!--<p>{{details.rok_premiery}}</p>-->\n    </div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	angular
	    .module('app.pageNav', [])
	    .directive('pageNav', function () {
	        return {
	            controller: 'pageNav',
	            template: __webpack_require__(17),
	            scope: {},
	            link: function (scope, element, attrs) {

	            }
	        };
	    }).controller('pageNav', [
	    '$scope', function ($scope) {
	        $scope.references = [
	            {
	                name: 'Strona główna',
	                href: '#!/'
	            }, {
	                name: 'Dodaj film',
	                href: '#!/films/add'
	            }
	        ]
	    }
	])
	;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"page-nav\">\n    <span class=\"page-nav__logo\">\n        <h1>FiLmY</h1>\n    </span>\n    <ul class=\"page-nav__list\">\n        <li class=\"page-nav__item\" ng-repeat=\"reference in references\">\n            <a class=\"page-nav__link\" ng-href=\"{{reference.href}}\">\n                {{reference.name}}\n            </a>\n        </li>\n    </ul>\n</nav>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	angular
	    .module('app.sideBar', [])
	    .directive('sideBar', function () {
	        return {
	            controller: 'sideBar',
	            template: __webpack_require__(19),
	            scope: {},
	            link: function (scope, element, attrs) {

	            }
	        };
	    }).controller('sideBar', [
	    '$scope', function ($scope) {
	        
	    }
	])
	;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"side-bar\">\n    <div class=\"widget\">\n      <h3 class=\"widget__title\">Title</h3>\n        <ul class=\"widget__list\">\n            <li class=\"widget__item\">\n                <a class=\"widget__link\">\n                    LINK\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./api.provider.js": 21,
		"./countries.service.js": 22,
		"./errorCallback.provider.js": 23,
		"./film.service.js": 24,
		"./genres.service.js": 25
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 20;


/***/ },
/* 21 */
/***/ function(module, exports) {

	angular
	    .module('api.provider', [])
	    .provider('apiProvider', function ApiProvider() {
	        var apiBaseUrl = 'http://localhost/filmweb/api/index.php';

	        this.setApiBaseUrl = function (url) {
	            apiBaseUrl = url;
	        };

	        this.$get = function () {
	            return function() {
	                return apiBaseUrl;
	            }
	        }


	    });


/***/ },
/* 22 */
/***/ function(module, exports) {

	angular
	    .module('countries.service', [])
	    .service('countriesService', ['$http', 'apiProvider', function ($http, apiProvider) {
	        
	        return {
	            getAll: function () {
	                return $http({
	                    method: 'GET',
	                    url: apiProvider() + "/countries"
	                });
	            }
	            //
	            // get: function (id) {
	            //     return $http({
	            //         method: 'GET',
	            //         url: apiProvider() + "/films/" + id
	            //     });
	            // },
	            //
	            // add: function (data) {
	            //     return $http({
	            //         method: 'POST',
	            //         url: apiProvider() + "/films/add"
	            //     });
	            // },
	            // delete: function (id) {
	            //     return $http({
	            //         method: 'GET',
	            //         url: apiProvider() + "/films/remove/" + id
	            //     });
	            // }
	        }

	    }]);


/***/ },
/* 23 */
/***/ function(module, exports) {

	angular
	    .module('errorCallback.provider', [])
	    .provider('errorCallbackProvider', function ErrorCallbackProvider() {
	        this.$get = function () {
	            return function (data) {
	                return console.log("connection problem \\toDo");
	            }
	        }
	    });


/***/ },
/* 24 */
/***/ function(module, exports) {

	angular
	    .module('film.service', [])
	    .service('filmService', ['$http', 'apiProvider', function ($http, apiProvider) {
	        
	        return {
	            getAll: function () {
	                return $http({
	                    method: 'GET',
	                    url: apiProvider() + "/films"
	                });
	            },

	            get: function (id) {
	                return $http({
	                    method: 'GET',
	                    url: apiProvider() + "/films/" + id
	                });
	            },

	            add: function (data) {
	                return $http({
	                    method: 'POST',
	                    url: apiProvider() + "/films/add"
	                });
	            },
	            delete: function (id) {
	                return $http({
	                    method: 'GET',
	                    url: apiProvider() + "/films/remove/" + id
	                });
	            }
	        }

	    }]);


/***/ },
/* 25 */
/***/ function(module, exports) {

	angular
	    .module('genres.service', [])
	    .service('genresService', ['$http', 'apiProvider', function ($http, apiProvider) {
	        
	        return {
	            getAll: function () {
	                return $http({
	                    method: 'GET',
	                    url: apiProvider() + "/genres"
	                });
	            }
	            //
	            // get: function (id) {
	            //     return $http({
	            //         method: 'GET',
	            //         url: apiProvider() + "/films/" + id
	            //     });
	            // },
	            //
	            // add: function (data) {
	            //     return $http({
	            //         method: 'POST',
	            //         url: apiProvider() + "/films/add"
	            //     });
	            // },
	            // delete: function (id) {
	            //     return $http({
	            //         method: 'GET',
	            //         url: apiProvider() + "/films/remove/" + id
	            //     });
	            // }
	        }

	    }]);


/***/ },
/* 26 */
/***/ function(module, exports) {

	angular
	    .module('app', [
	        'ui.router',

	        'api.provider',
	        'errorCallback.provider',

	        'ngAnimate',
	        'app.pageNav',
	        'app.sideBar',
	        'app.film',

	        'film.service',
	        'countries.service',
	        'genres.service',

	        'app.filmsAdd',
	        'app.filmsId',
	        'app.mainCtrl'

	    ])
	    .config([
	        '$stateProvider', function ($stateProvider) {

	        }
	    ])
	;






/***/ }
]);