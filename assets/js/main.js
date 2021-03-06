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
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    RichText = _wp$editor.RichText,
    Editable = _wp$editor.Editable,
    MediaUpload = _wp$editor.MediaUpload,
    UrlInput = _wp$editor.UrlInput;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton,
    PanelColor = _wp$components.PanelColor,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;


registerBlockType('jet-press/pricing-table', {
	title: __('Pricing Table'),
	icon: 'clipboard',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2.pricing-table__title',
			default: __('Main Title')
		},
		subTitle: {
			type: 'array',
			source: 'children',
			selector: 'h3.pricing-table__subtitle',
			default: __('Subitle')
		},
		prefix: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-prefix',
			default: __('$')
		},
		price: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-val',
			default: __('99')
		},
		suffix: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-suffix',
			default: __('/per month')
		},
		features: {
			type: 'array',
			source: 'children',
			selector: 'ul.pricing-table__features'
		},
		btnText: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__btn',
			default: __('Add to cart')
		},
		btnUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.pricing-table__btn'
		},
		priceStyle: {
			type: 'string',
			source: 'attribute',
			attribute: 'data-style',
			selector: 'div[data-style]',
			default: 'style-1'
		},
		titleColor: {
			type: 'string'
		},
		subtitleColor: {
			type: 'string'
		},
		headingGap: {
			type: 'string'
		},
		headingBg: {
			type: 'string'
		},
		pricePrefixColor: {
			type: 'string'
		},
		priceColor: {
			type: 'string'
		},
		priceSuffixColor: {
			type: 'string'
		},
		priceGap: {
			type: 'string'
		},
		priceBg: {
			type: 'string'
		}
	},
	edit: function edit(props) {

		var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		var attributes = props.attributes;
		var styles = [{
			value: 'style-1',
			label: 'Style 1'
		}, {
			value: 'style-2',
			label: 'Style 2'
		}, {
			value: 'style-2',
			label: 'Style 2'
		}];

		var onChangeTitle = function onChangeTitle(value) {
			props.setAttributes({ title: value });
		};

		var onChangeSubTitle = function onChangeSubTitle(value) {
			props.setAttributes({ subTitle: value });
		};

		var onChangePrefix = function onChangePrefix(value) {
			props.setAttributes({ prefix: value });
		};

		var onChangePrice = function onChangePrice(value) {
			props.setAttributes({ price: value });
		};

		var onChangeSuffix = function onChangeSuffix(value) {
			props.setAttributes({ suffix: value });
		};

		var onChangeFeatures = function onChangeFeatures(value) {
			props.setAttributes({ features: value });
		};

		var onChangeBtnText = function onChangeBtnText(value) {
			props.setAttributes({ btnText: value });
		};

		var onChangeBtnUrl = function onChangeBtnUrl(value) {
			props.setAttributes({ btnUrl: value });
		};

		var onChangeStyle = function onChangeStyle(value) {
			props.setAttributes({ priceStyle: value });
		};

		return [props.isSelected && wp.element.createElement(
			InspectorControls,
			{
				key: 'inspector'
			},
			wp.element.createElement(
				PanelBody,
				{ title: __('General Settings') },
				wp.element.createElement(SelectControl, {
					label: __('Style'),
					value: attributes.priceStyle,
					options: styles,
					onChange: onChangeStyle
				})
			),
			wp.element.createElement(
				PanelBody,
				{ title: __('Heading'), initialOpen: false },
				wp.element.createElement(RangeControl, {
					label: __('Heading Vertical Gap'),
					value: attributes.headingGap,
					min: '1',
					max: '100',
					onChange: function onChange(value) {
						return props.setAttributes({ headingGap: value });
					}
				}),
				wp.element.createElement(
					'p',
					null,
					__('Title Color')
				),
				wp.element.createElement(ColorPalette, {
					value: attributes.titleColor,
					onChange: function onChange(value) {
						return props.setAttributes({ titleColor: value });
					}
				}),
				wp.element.createElement(
					'p',
					null,
					__('Subtitle Color')
				),
				wp.element.createElement(ColorPalette, {
					value: attributes.subtitleColor,
					onChange: function onChange(value) {
						return props.setAttributes({ subtitleColor: value });
					}
				}),
				wp.element.createElement(
					'p',
					null,
					__('Heading Background')
				),
				wp.element.createElement(ColorPalette, {
					value: attributes.headingBg,
					onChange: function onChange(value) {
						return props.setAttributes({ headingBg: value });
					}
				})
			),
			wp.element.createElement(
				PanelBody,
				{ title: __('Price'), initialOpen: false },
				wp.element.createElement(RangeControl, {
					label: __('Price Vertical Gap'),
					value: attributes.priceGap,
					min: '1',
					max: '100',
					onChange: function onChange(value) {
						return props.setAttributes({ priceGap: value });
					}
				}),
				wp.element.createElement(
					'p',
					null,
					__('Price Prefix Color')
				),
				wp.element.createElement(ColorPalette, {
					value: attributes.pricePrefixColor,
					onChange: function onChange(value) {
						return props.setAttributes({ pricePrefixColor: value });
					}
				}),
				wp.element.createElement(
					'p',
					null,
					__('Price Color')
				),
				wp.element.createElement(ColorPalette, {
					value: attributes.priceColor,
					onChange: function onChange(value) {
						return props.setAttributes({ priceColor: value });
					}
				}),
				wp.element.createElement(
					'p',
					null,
					__('Price Suffix Color')
				),
				wp.element.createElement(ColorPalette, {
					value: attributes.priceSuffixColor,
					onChange: function onChange(value) {
						return props.setAttributes({ priceSuffixColor: value });
					}
				}),
				wp.element.createElement(
					'p',
					null,
					__('Price Background')
				),
				wp.element.createElement(ColorPalette, {
					value: attributes.priceBg,
					onChange: function onChange(value) {
						return props.setAttributes({ priceBg: value });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: props.className, 'data-style': attributes.priceStyle },
			wp.element.createElement(
				'div',
				{ className: ['pricing-table', 'pricing-' + attributes.priceStyle].join(' ') },
				wp.element.createElement(
					'div',
					{ className: 'pricing-table__heading', style: {
							paddingTop: attributes.headingGap + 'px',
							paddingBottom: attributes.headingGap + 'px',
							backgroundColor: attributes.headingBg
						} },
					wp.element.createElement(RichText, {
						className: 'pricing-table__title',
						tagName: 'h2',
						placeholder: __('Write title…'),
						value: attributes.title,
						onChange: onChangeTitle,
						focus: focusedEditable === 'title',
						style: {
							color: attributes.titleColor
						}
					}),
					wp.element.createElement(RichText, {
						className: 'pricing-table__subtitle',
						tagName: 'h3',
						placeholder: __('Write subtitle…'),
						value: attributes.subTitle,
						onChange: onChangeSubTitle,
						focus: focusedEditable === 'subTitle',
						style: {
							color: attributes.subtitleColor
						}
					})
				),
				wp.element.createElement(
					'div',
					{ className: 'pricing-table__price', style: {
							paddingTop: attributes.priceGap + 'px',
							paddingBottom: attributes.priceGap + 'px',
							backgroundColor: attributes.priceBg
						} },
					wp.element.createElement(RichText, {
						tagName: 'span',
						className: 'pricing-table__price-prefix',
						placeholder: '$',
						value: attributes.prefix,
						onChange: onChangePrefix,
						focus: focusedEditable === 'prefix',
						style: {
							color: attributes.pricePrefixColor
						}
					}),
					wp.element.createElement(RichText, {
						tagName: 'span',
						className: 'pricing-table__price-val',
						placeholder: '99',
						value: attributes.price,
						onChange: onChangePrice,
						focus: focusedEditable === 'price',
						style: {
							color: attributes.priceColor
						}
					}),
					wp.element.createElement(RichText, {
						tagName: 'span',
						className: 'pricing-table__price-suffix',
						placeholder: '/month',
						value: attributes.suffix,
						onChange: onChangeSuffix,
						focus: focusedEditable === 'suffix',
						style: {
							color: attributes.priceSuffixColor
						}
					})
				),
				wp.element.createElement(RichText, {
					tagName: 'ul',
					className: 'pricing-table__features',
					multiline: 'li',
					placeholder: __('Write a list of features…'),
					value: attributes.features,
					onChange: onChangeFeatures,
					focus: focusedEditable === 'features'
				}),
				wp.element.createElement(
					'div',
					{ className: 'pricing-table__actions' },
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
				)
			)
		)];
	},
	save: function save(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    title = _props$attributes.title,
		    titleColor = _props$attributes.titleColor,
		    subTitle = _props$attributes.subTitle,
		    subtitleColor = _props$attributes.subtitleColor,
		    headingBg = _props$attributes.headingBg,
		    headingGap = _props$attributes.headingGap,
		    prefix = _props$attributes.prefix,
		    pricePrefixColor = _props$attributes.pricePrefixColor,
		    price = _props$attributes.price,
		    priceColor = _props$attributes.priceColor,
		    suffix = _props$attributes.suffix,
		    priceSuffixColor = _props$attributes.priceSuffixColor,
		    priceBg = _props$attributes.priceBg,
		    priceGap = _props$attributes.priceGap,
		    features = _props$attributes.features,
		    btnText = _props$attributes.btnText,
		    btnUrl = _props$attributes.btnUrl,
		    priceStyle = _props$attributes.priceStyle;

		return wp.element.createElement(
			'div',
			{ className: className, 'data-style': priceStyle },
			wp.element.createElement(
				'div',
				{ className: ['pricing-table', 'pricing-' + priceStyle].join(' ') },
				wp.element.createElement(
					'div',
					{ className: 'pricing-table__heading', style: {
							paddingTop: headingGap + 'px',
							paddingBottom: headingGap + 'px',
							backgroundColor: headingBg
						} },
					wp.element.createElement(
						'h2',
						{ className: 'pricing-table__title', style: {
								color: titleColor
							} },
						title
					),
					wp.element.createElement(
						'h3',
						{ className: 'pricing-table__subtitle', style: {
								color: subtitleColor
							} },
						subTitle
					)
				),
				wp.element.createElement(
					'div',
					{ className: 'pricing-table__price', style: {
							paddingTop: priceGap + 'px',
							paddingBottom: priceGap + 'px',
							backgroundColor: priceBg
						} },
					wp.element.createElement(
						'span',
						{ className: 'pricing-table__price-prefix', style: {
								color: pricePrefixColor
							} },
						prefix
					),
					wp.element.createElement(
						'span',
						{ className: 'pricing-table__price-val', style: {
								color: priceColor
							} },
						price
					),
					wp.element.createElement(
						'span',
						{ className: 'pricing-table__price-suffix', style: {
								color: priceSuffixColor
							} },
						suffix
					)
				),
				wp.element.createElement(
					'ul',
					{ className: 'pricing-table__features' },
					features
				),
				wp.element.createElement(
					'div',
					{ className: 'pricing-table__actions' },
					wp.element.createElement(
						'a',
						{ className: 'pricing-table__btn', href: btnUrl },
						btnText
					)
				)
			)
		);
	}
});

/***/ })
/******/ ]);