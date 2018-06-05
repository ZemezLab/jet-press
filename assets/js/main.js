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

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    RichText = _wp$blocks.RichText,
    MediaUpload = _wp$blocks.MediaUpload,
    UrlInput = _wp$blocks.UrlInput;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton;


registerBlockType('jet-press/pricing-table', {
	title: __('Pricing Table'),
	icon: 'clipboard',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2.pricing-table__title'
		},
		subTitle: {
			type: 'array',
			source: 'children',
			selector: 'h3.pricing-table__subtitle'
		},
		features: {
			type: 'array',
			source: 'children',
			selector: 'ul.pricing-table__features'
		},
		btnText: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__btn'
		},
		btnUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.pricing-table__btn'
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

		var onChangeBtnText = function onChangeBtnText(value) {
			props.setAttributes({ btnText: value });
		};

		var onChangeBtnUrl = function onChangeBtnUrl(value) {
			props.setAttributes({ btnUrl: value });
		};

		return wp.element.createElement(
			'div',
			{ className: props.className },
			wp.element.createElement(RichText, {
				className: 'pricing-table__title',
				tagName: 'h2',
				placeholder: __('Write subtitle…'),
				value: attributes.title,
				onChange: onChangeTitle,
				focus: focusedEditable === 'title'
			}),
			wp.element.createElement(RichText, {
				className: 'pricing-table__subtitle',
				tagName: 'h3',
				placeholder: __('Write title…'),
				value: attributes.subTitle,
				onChange: onChangeSubTitle,
				focus: focusedEditable === 'subTitle'
			}),
			wp.element.createElement(RichText, {
				tagName: 'ul',
				className: 'pricing-table__features',
				multiline: 'li',
				placeholder: __('Write a list of features…'),
				value: attributes.features,
				onChange: onChangeFeatures,
				focus: focusedEditable === 'features'
			}),
			wp.element.createElement(RichText, {
				className: 'pricing-table__btn',
				tagName: 'a',
				href: '{ attributes.btnUrl }',
				placeholder: __('Button text…'),
				value: attributes.btnText,
				onChange: onChangeBtnText,
				focus: focusedEditable === 'btnText'
			}),
			props.isSelected && wp.element.createElement(UrlInput, {
				value: attributes.btnUrl,
				onChange: onChangeBtnUrl
			})
		);
	},
	save: function save(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    title = _props$attributes.title,
		    subTitle = _props$attributes.subTitle,
		    features = _props$attributes.features,
		    btnText = _props$attributes.btnText,
		    btnUrl = _props$attributes.btnUrl;

		return wp.element.createElement(
			'div',
			{ className: className },
			wp.element.createElement(
				'h2',
				{ className: 'pricing-table__title' },
				title
			),
			wp.element.createElement(
				'h3',
				{ className: 'pricing-table__subtitle' },
				subTitle
			),
			wp.element.createElement(
				'ul',
				{ className: 'pricing-table__features' },
				features
			),
			wp.element.createElement(
				'a',
				{ className: 'pricing-table__btn', href: btnUrl },
				btnText
			)
		);
	}
});

/***/ })
/******/ ]);