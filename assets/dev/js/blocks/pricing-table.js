const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;
const {
	InspectorControls,
	ColorPalette,
	RichText,
	Editable,
	MediaUpload,
	UrlInput
} = wp.editor;
const {
	Button,
	Dashicon,
	IconButton,
	PanelColor,
	SelectControl,
	PanelBody,
	RangeControl
} = wp.components;

registerBlockType( 'jet-press/pricing-table', {
	title: __( 'Pricing Table' ),
	icon: 'clipboard',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2.pricing-table__title',
			default: __( 'Main Title' )
		},
		subTitle: {
			type: 'array',
			source: 'children',
			selector: 'h3.pricing-table__subtitle',
			default: __( 'Subitle' )
		},
		prefix: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-prefix',
			default: __( '$' )
		},
		price: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-val',
			default: __( '99' )
		},
		suffix: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-suffix',
			default: __( '/per month' )
		},
		features: {
			type: 'array',
			source: 'children',
			selector: 'ul.pricing-table__features',
		},
		btnText: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__btn',
			default: __( 'Add to cart' )
		},
		btnUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.pricing-table__btn',
		},
		priceStyle: {
			type: 'string',
			source: 'attribute',
			attribute: 'data-style',
			selector: 'div[data-style]',
			default: 'style-1'
		},
		titleColor: {
			type: 'string',
		},
		subtitleColor: {
			type: 'string',
		},
		headingGap: {
			type: 'string',
		},
		headingBg: {
			type: 'string',
		}
	},
	edit: props => {

		const focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		const attributes = props.attributes;
		const styles = [
			{
				value: 'style-1',
				label: 'Style 1',
			},
			{
				value: 'style-2',
				label: 'Style 2',
			},
			{
				value: 'style-2',
				label: 'Style 2',
			},
		]

		const onChangeTitle = value => {
			props.setAttributes( { title: value } );
		};

		const onChangeSubTitle = value => {
			props.setAttributes( { subTitle: value } );
		};

		const onChangePrefix = value => {
			props.setAttributes( { prefix: value } );
		};

		const onChangePrice = value => {
			props.setAttributes( { price: value } );
		};

		const onChangeSuffix = value => {
			props.setAttributes( { suffix: value } );
		};

		const onChangeFeatures = value => {
			props.setAttributes( { features: value } );
		};

		const onChangeBtnText = value => {
			props.setAttributes( { btnText: value } );
		};

		const onChangeBtnUrl = value => {
			props.setAttributes( { btnUrl: value } );
		};

		const onChangeStyle = value => {
			props.setAttributes( { priceStyle: value } );
		};

		return [
			props.isSelected && (
					<InspectorControls
						key={ 'inspector' }
					>
						<PanelBody title={ __( 'General Settings' ) }>
							<SelectControl
								label={ __( 'Style' ) }
								value={ attributes.priceStyle }
								options={ styles }
								onChange={ onChangeStyle }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Heading' ) } initialOpen={ false }>
							<RangeControl
								label={ __( 'Heading Vertical Gap' ) }
								value={ attributes.headingGap }
								min='1'
								max='100'
								onChange={ ( value ) => props.setAttributes( { headingGap: value } ) }
							/>
							<p>{ __( 'Title Color' ) }</p>
							<ColorPalette
								value={ attributes.titleColor }
								onChange={ ( value ) => props.setAttributes( { titleColor: value } ) }
							/>
							<p>{ __( 'Subtitle Color' ) }</p>
							<ColorPalette
								value={ attributes.subtitleColor }
								onChange={ ( value ) => props.setAttributes( { subtitleColor: value } ) }
							/>
							<p>{ __( 'Heading Background' ) }</p>
							<ColorPalette
								value={ attributes.headingBg }
								onChange={ ( value ) => props.setAttributes( { headingBg: value } ) }
							/>
						</PanelBody>

					</InspectorControls>
			),
			<div className={ props.className } data-style={ attributes.priceStyle }>
				<div className={ [ 'pricing-table', 'pricing-' + attributes.priceStyle ].join(' ') }>
					<div className="pricing-table__heading" style={ {
						paddingTop: attributes.headingGap + 'px',
						paddingBottom: attributes.headingGap + 'px',
						backgroundColor: attributes.headingBg
					} }>
						<RichText
							className="pricing-table__title"
							tagName="h2"
							placeholder={ __( 'Write title…' ) }
							value={ attributes.title }
							onChange={ onChangeTitle }
							focus={ focusedEditable === 'title' }
							style={ {
								color: attributes.titleColor
							} }
						/>
						<RichText
							className="pricing-table__subtitle"
							tagName="h3"
							placeholder={ __( 'Write subtitle…' ) }
							value={ attributes.subTitle }
							onChange={ onChangeSubTitle }
							focus={ focusedEditable === 'subTitle' }
							style={ {
								color: attributes.subtitleColor
							} }
						/>
					</div>
					<div className="pricing-table__price">
						<RichText
							tagName="span"
							className="pricing-table__price-prefix"
							placeholder="$"
							value={ attributes.prefix }
							onChange={ onChangePrefix }
							focus={ focusedEditable === 'prefix' }
						/>
						<RichText
							tagName="span"
							className="pricing-table__price-val"
							placeholder="99"
							value={ attributes.price }
							onChange={ onChangePrice }
							focus={ focusedEditable === 'price' }
						/>
						<RichText
							tagName="span"
							className="pricing-table__price-suffix"
							placeholder="/month"
							value={ attributes.suffix }
							onChange={ onChangeSuffix }
							focus={ focusedEditable === 'suffix' }
						/>
					</div>
					<RichText
						tagName="ul"
						className="pricing-table__features"
						multiline="li"
						placeholder={ __( 'Write a list of features…' ) }
						value={ attributes.features }
						onChange={ onChangeFeatures }
						focus={ focusedEditable === 'features' }
					/>
					<div className="pricing-table__actions">
						<RichText
							className="pricing-table__btn"
							tagName="a"
							href="{ attributes.btnUrl }"
							placeholder={ __( 'Button text…' ) }
							value={ attributes.btnText }
							onChange={ onChangeBtnText }
							focus={ focusedEditable === 'btnText' }
						/>
						{ props.isSelected && (
							<UrlInput
								value={ attributes.btnUrl }
								onChange={ onChangeBtnUrl }
							/>
						) }
					</div>
				</div>
			</div>
		];
	},
	save: props => {
		const {
			className,
			attributes: {
				title,
				titleColor,
				subTitle,
				subtitleColor,
				headingBg,
				headingGap,
				prefix,
				price,
				suffix,
				features,
				btnText,
				btnUrl,
				priceStyle
			}
		} = props;
		return (
			<div className={ className } data-style={ priceStyle }>
				<div className={ [ 'pricing-table', 'pricing-' + priceStyle ].join(' ') }>
					<div className="pricing-table__heading" style={ {
						paddingTop: headingGap + 'px',
						paddingBottom: headingGap + 'px',
						backgroundColor: headingBg
					} }>
						<h2 className="pricing-table__title" style={ {
								color: titleColor
							} } >
							{ title }
						</h2>
						<h3 className="pricing-table__subtitle" style={ {
								color: subtitleColor
							} }>
							{ subTitle }
						</h3>
					</div>
					<div className="pricing-table__price">
						<span className="pricing-table__price-prefix">
							{ prefix }
						</span>
						<span className="pricing-table__price-val">
							{ price }
						</span>
						<span className="pricing-table__price-suffix">
							{ suffix }
						</span>
					</div>
					<ul className="pricing-table__features">
						{ features }
					</ul>
					<div className="pricing-table__actions">
						<a className="pricing-table__btn" href={ btnUrl }>
							{ btnText }
						</a>
					</div>
				</div>
			</div>
		);
	}
} );
