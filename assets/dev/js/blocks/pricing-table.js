const { __ } = wp.i18n;
const {
	registerBlockType,
	RichText,
	MediaUpload,
	UrlInput
} = wp.blocks;
const {
	Button,
	Dashicon,
	IconButton
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
		},
		subTitle: {
			type: 'array',
			source: 'children',
			selector: 'h3.pricing-table__subtitle',
		},
		prefix: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-prefix',
		},
		price: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-val',
		},
		suffix: {
			type: 'array',
			source: 'children',
			selector: '.pricing-table__price-suffix',
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
		},
		btnUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.pricing-table__btn',
		}
	},
	edit: props => {

		const focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		const attributes = props.attributes;

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

		return (
			<div className={ props.className }>
				<RichText
					className="pricing-table__title"
					tagName="h2"
					placeholder={ __( 'Write subtitle…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					focus={ focusedEditable === 'title' }
				/>
				<RichText
					className="pricing-table__subtitle"
					tagName="h3"
					placeholder={ __( 'Write title…' ) }
					value={ attributes.subTitle }
					onChange={ onChangeSubTitle }
					focus={ focusedEditable === 'subTitle' }
				/>
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
		);
	},
	save: props => {
		const {
			className,
			attributes: {
				title,
				subTitle,
				prefix,
				price,
				suffix,
				features,
				btnText,
				btnUrl
			}
		} = props;
		return (
			<div className={ className }>
				<h2 className="pricing-table__title">
					{ title }
				</h2>
				<h3 className="pricing-table__subtitle">
					{ subTitle }
				</h3>
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
		);
	}
} );
