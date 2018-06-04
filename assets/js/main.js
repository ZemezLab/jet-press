/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_pricing_table__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_pricing_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_pricing_table__);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    RichText = _wp$blocks.RichText;
var __ = wp.i18n.__;


registerBlockType('jet-press/pricing-table', {
	title: __('Pricing Table'),
	icon: 'clipboard',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2'
		},
		subTitle: {
			type: 'array',
			source: 'children',
			selector: 'h4'
		},
		features: {
			type: 'array',
			source: 'children',
			selector: '.features'
		}
	},
	edit: function edit(props) {

		var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		var attributes = props.attributes;

		var onChangeTitle = function onChangeTitle(value) {
			props.setAttributes({ title: value });
		};
		var onFocusTitle = function onFocusTitle(focus) {
			props.setFocus(_.extend({}, focus, { editable: 'title' }));
		};

		var onChangeSubTitle = function onChangeSubTitle(value) {
			props.setAttributes({ subTitle: value });
		};
		var onFocusSubTitle = function onFocusSubTitle(focus) {
			props.setFocus(_.extend({}, focus, { editable: 'subTitle' }));
		};

		var onChangeFeatures = function onChangeFeatures(value) {
			props.setAttributes({ features: value });
		};
		var onFocusFeatures = function onFocusFeatures(focus) {
			props.setFocus(_.extend({}, focus, { editable: 'features' }));
		};

		return wp.element.createElement(
			'div',
			{ className: props.className },
			wp.element.createElement(RichText, {
				tagName: 'h2',
				placeholder: __('Write title…'),
				value: attributes.title,
				onChange: onChangeTitle,
				focus: focusedEditable === 'title',
				onFocus: onFocusTitle
			}),
			wp.element.createElement(RichText, {
				tagName: 'h3',
				placeholder: __('Write subtitle…'),
				value: attributes.subTitle,
				onChange: onChangeSubTitle,
				focus: focusedEditable === 'subTitle',
				onFocus: onFocusTitle
			}),
			wp.element.createElement(RichText, {
				tagName: 'ul',
				multiline: 'li',
				placeholder: __('Write a list of features…'),
				value: attributes.features,
				onChange: onChangeFeatures,
				focus: focusedEditable === 'features',
				onFocus: onFocusFeatures,
				className: 'features'
			})
		);
	},
	save: function save(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    title = _props$attributes.title,
		    subTitle = _props$attributes.subTitle,
		    features = _props$attributes.features;

		return wp.element.createElement(
			'div',
			{ className: className },
			wp.element.createElement(
				'h2',
				null,
				title
			),
			wp.element.createElement(
				'h3',
				null,
				subTitle
			),
			wp.element.createElement(
				'ul',
				{ className: 'features' },
				features
			)
		);
	}
});

/***/ })
/******/ ]);