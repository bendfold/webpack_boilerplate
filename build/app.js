/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// TODO take this out once we are cooking on gas
	console.log('scripts loaded!');
	
	__webpack_require__(1);


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
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/stylus-loader/index.js!./index.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/stylus-loader/index.js!./index.styl");
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
	exports.push([module.id, "html {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nprogress {\n  vertical-align: baseline;\n}\ntemplate,\n[hidden] {\n  display: none;\n}\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\nb,\nstrong {\n  font-weight: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background-color: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\nimg {\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  margin: 0;\n}\noptgroup {\n  font-weight: bold;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\ntextarea {\n  overflow: auto;\n}\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nbody {\n  background-color: #0f0;\n}\nh1 {\n  color: #00f;\n  text-align: center;\n}\nh2 {\n  color: #f0f;\n  text-align: center;\n}\nh3 {\n  color: AliceBlue;\n  text-align: center;\n}\nh4 {\n  color: #0f0;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/./src/styles/src/styles/vendor/normalize.styl","/./src/styles/index.styl","/./src/styles/src/styles/index.styl"],"names":[],"mappings":"AAOA;EACE,wBAAA;EACA,2BAAA;EACA,+BAAA;CCND;ADYD;EACE,UAAA;CCVD;ADqBD;;;;;;;;;;;;EAYE,eAAA;CCnBD;ADyBD;;;;EAIE,sBAAA;CCvBD;AD6BD;EACE,cAAA;EACA,UAAA;CC3BD;ADiCD;EACE,yBAAA;CC/BD;ADsCD;;EAEE,cAAA;CCpCD;AD8CD;EACE,8BAAA;EACA,sCAAA;CC5CD;ADoDC;;EAEE,iBAAA;CClDH;AD4DD;EACE,oBAAA;EACA,2BAAA;EACA,kCAAA;CC1DD;ADgED;;EAEE,qBAAA;CC9DD;ADoED;;EAEE,oBAAA;CClED;ADwED;EACE,mBAAA;CCtED;AD6ED;EACE,eAAA;EACA,iBAAA;CC3ED;ADiFD;EACE,uBAAA;EACA,YAAA;CC/ED;ADqFD;EACE,eAAA;CCnFD;AD0FD;;EAEE,eAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;CCxFD;AD0FD;EACE,gBAAA;CCxFD;AD0FD;EACE,YAAA;CCxFD;ADiGD;EACE,mBAAA;CC/FD;ADqGD;EACE,iBAAA;CCnGD;AD6GD;;;;EAIE,kCAAA;EACA,eAAA;CC3GD;ADiHD;EACE,iBAAA;CC/GD;ADsHD;EACE,wBAAA;EACA,UAAA;EACA,kBAAA;CCpHD;AD8HD;;;;EAIE,cAAA;EACA,UAAA;CC5HD;ADkID;EACE,kBAAA;CChID;ADuID;;EAEE,kBAAA;CCrID;AD4ID;;EAEE,qBAAA;CC1ID;ADkJD;;;;EAIE,2BAAA;CChJD;ADsJD;;;;EAIE,mBAAA;EACA,WAAA;CCpJD;AD0JD;;;;EAIE,+BAAA;CCxJD;AD8JD;EACE,0BAAA;EACA,cAAA;EACA,+BAAA;CC5JD;ADqKD;EACE,uBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,oBAAA;CCnKD;ADyKD;EACE,eAAA;CCvKD;AD8KD;;EAEE,uBAAA;EACA,WAAA;CC5KD;ADkLD;;EAEE,aAAA;CChLD;ADuLD;EACE,8BAAA;EACA,qBAAA;CCrLD;AD2LD;;EAEE,yBAAA;CCzLD;AD+LD;EACE,eAAA;EACA,cAAA;CC7LD;ADoMD;EACE,2BAAA;EACA,cAAA;CClMD;ACvLD;EACC,uBAAA;CDyLA;ACvLD;EACC,YAAA;EACA,mBAAA;CDyLA;ACvLD;EACC,YAAA;EACA,mBAAA;CDyLA;ACvLD;EACC,iBAAA;EACA,mBAAA;CDyLA;ACvLD;EACC,YAAA;EACA,mBAAA;CDyLA","file":"index.styl","sourcesContent":["/* normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\r\n\r\nhtml\r\n  font-family sans-serif // 1\r\n  -ms-text-size-adjust 100% // 2\r\n  -webkit-text-size-adjust 100% // 2\r\n\t\r\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\r\n \r\nbody\r\n  margin 0\r\n\t\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/* \r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\r\n \r\narticle,\r\naside,\r\ndetails, // 1\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nmain, // 2\r\nmenu,\r\nnav,\r\nsection,\r\nsummary // 1\r\n  display block\r\n\r\n/**\r\n * Add the correct display in IE 9-.\r\n */\r\n \r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo\r\n  display inline-block\r\n\t\r\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\r\n \r\naudio:not([controls])\r\n  display none\r\n  height 0\r\n\t\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera\r\n */\r\n \r\nprogress\r\n  vertical-align baseline\r\n\t\r\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\r\n \r\ntemplate, // 1\r\n[hidden]\r\n  display none\r\n\t\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\r\n \r\na\r\n  background-color transparent // 1\r\n  -webkit-text-decoration-skip objects // 2\r\n\t\r\n/**\r\n * Remove  the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\r\n \r\na\r\n  &:active,\r\n  &:hover\r\n    outline-width 0\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n \r\nabbr[title]\r\n  border-bottom none // 1\r\n  text-decoration underline // 2\r\n  text-decoration underline dotted // 2\r\n\t\r\n/**\r\n * Prevent the duplicate appliclation of `bolder` by the next rule in Safari 6.\r\n */\r\n\r\nb,\r\nstrong\r\n  font-weight inherit\r\n\t\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n \r\nb,\r\nstrong\r\n  font-weight bolder\r\n\t\r\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\r\n \r\ndfn\r\n  font-style italic\r\n\t\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n \r\nh1\r\n  font-size 2em\r\n  margin 0.67em 0\r\n \t\r\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\r\n \r\nmark\r\n  background-color #ff0\r\n  color #000\r\n\t\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n \r\nsmall\r\n  font-size 80%\r\n\t\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n \r\nsub,\r\nsup\r\n  font-size 75%\r\n  line-height 0\r\n  position relative\r\n  vertical-align baseline\r\n\r\nsub\r\n  bottom -0.25em\r\n\r\nsup\r\n  top -0.5em\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\r\n \r\nimg\r\n  border-style none\r\n\r\n/**\r\n * Hide the overflow in IE.\r\n */\r\n \r\nsvg:not(:root)\r\n  overflow hidden\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers\r\n */\r\n \r\ncode,\r\nkbd,\r\npre,\r\nsamp\r\n  font-family monospace, monospace // 1\r\n  font-size 1em // 2\r\n\r\n/**\r\n * Add the correct marin in IE 8.\r\n */\r\n \r\nfigure\r\n  margin 1em 40px\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n \r\nhr\r\n  box-sizing content-box // 1\r\n  height 0 // 1\r\n  overflow visible // 2\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari\r\n */\r\n \r\nbutton,\r\ninput,\r\nselect,\r\ntextarea\r\n  font inherit // 1\r\n  margin 0 // 2\r\n\t\r\n/**\r\n * Restore the font weight unset by previous rule.\r\n */\r\n \r\noptgroup\r\n  font-weight bold\r\n\t\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n \r\nbutton,\r\ninput\r\n  overflow visible\r\n\t\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox\r\n */\r\n \r\nbutton,\r\nselect\r\n  text-transform none\r\n\t\r\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *\t\tcontrols in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n \r\nbutton,\r\nhtml [type=\"button\"], // 1\r\n[type=\"reset\"],\r\n[type=\"submit\"]\r\n  -webkit-appearance button // 2\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox\r\n */\r\n \r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner\r\n  border-style none\r\n  padding 0\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n \r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring\r\n  outline 1px dotted ButtonText\r\n\t\r\n/**\r\n * Change the border, margin, and padding, in all browsers (opinionated).\r\n */\r\n\r\nfieldset\r\n  border 1px solid #c0c0c0\r\n  margin 0 2px\r\n  padding 0.35em 0.625em 0.75em\r\n\t\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n \r\nlegend\r\n  box-sizing border-box // 1\r\n  color inherit // 2\r\n  display table // 1\r\n  max-width 100% // 1\r\n  padding 0 // 3\r\n  white-space normal // 1\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\r\n \r\ntextarea\r\n  overflow auto\r\n\t\r\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\r\n \r\n[type=\"checkbox\"],\r\n[type=\"radio\"]\r\n  box-sizing border-box // 1\r\n  padding 0 // 2\r\n\t\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n \r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button\r\n  height auto\r\n\t\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n \r\n[type=\"search\"]\r\n  -webkit-appearance textfield\r\n  outline-offset -2px\r\n\r\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration\r\n  -webkit-appearance none\r\n\r\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari\r\n */\r\n\r\n::-webkit-input-placeholder\r\n  color inherit\r\n  opacity 0.54\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button\r\n  -webkit-appearance button // 1\r\n  font inherit // 2\t","html {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nprogress {\n  vertical-align: baseline;\n}\ntemplate,\n[hidden] {\n  display: none;\n}\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\nb,\nstrong {\n  font-weight: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background-color: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\nimg {\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  margin: 0;\n}\noptgroup {\n  font-weight: bold;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\ntextarea {\n  overflow: auto;\n}\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nbody {\n  background-color: #0f0;\n}\nh1 {\n  color: #00f;\n  text-align: center;\n}\nh2 {\n  color: #f0f;\n  text-align: center;\n}\nh3 {\n  color: AliceBlue;\n  text-align: center;\n}\nh4 {\n  color: #0f0;\n  text-align: center;\n}\n","@import './vendor/normalize'\r\n\r\nbody\r\n\tbackground-color lime\r\n\t\r\nh1\r\n\tcolor blue\r\n\ttext-align center\r\n\t\r\nh2\r\n\tcolor magenta\r\n\ttext-align center\r\n\t\r\nh3\r\n\tcolor AliceBlue\r\n\ttext-align center\r\n\t\r\nh4\r\n\tcolor lime\r\n\ttext-align center\r\n\r\n"],"sourceRoot":"webpack://"}]);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map