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
		features: {
			type: 'array',
			source: 'children',
			selector: 'ul.pricing-table__features',
		},
		buttonUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'a.pricing-table__button',
			attribute: 'href',
		},
		buttonText: {
			type: 'array',
			source: 'childern',
			selector: 'a.pricing-table__button',
		}
	},
	edit: props => {

		const focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		const attributes = props.attributes;

		const onChangeTitle = value => {
			props.setAttributes( { title: value } );
		};
		const onFocusTitle = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
		};

		const onChangeSubTitle = value => {
			props.setAttributes( { subTitle: value } );
		};
		const onFocusSubTitle = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'subTitle' } ) );
		};

		const onChangeFeatures = value => {
			props.setAttributes( { features: value } );
		};
		const onFocusFeatures = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'features' } ) );
		};

		const onChangeButton = value => {
			props.setAttributes( { buttonText: value } );
		};

		const onFocusButton = focus => {
			console.log( focus );
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
				<RichText
					tagName="ul"
					className="pricing-table__features"
					multiline="li"
					placeholder={ __( 'Write a list of features…' ) }
					value={ attributes.features }
					onChange={ onChangeFeatures }
					focus={ focusedEditable === 'features' }
				/>
				<RichText
					tagName="a"
					className="pricing-table__button"
					href={ attributes.buttonUrl }
					value={ attributes.buttonText }
					placeholder={ __( 'Button text…' ) }
					onChange={ onChangeButton }
					onFocus={ onFocusButton }
				/>
				{ props.isSelected && (
					<UrlInput
						value={ attributes.buttonUrl }
						onChange={ ( value ) => props.setAttributes( { buttonUrl: value } ) }
					/>
				) }
			</div>
		);
	},
	save: props => {
		const {
			className,
			attributes: {
				title,
				subTitle,
				features,
				buttonUrl,
				buttonText
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
				<ul className="pricing-table__features">
					{ features }
				</ul>
				<div className="pricing-table__actions">
					<a href={ buttonUrl } className="pricing-table__button">
						{ buttonText }
					</a>
				</div>
			</div>
		);
	}
} );
