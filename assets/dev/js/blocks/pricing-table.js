const { __ } = wp.i18n;
const {
	registerBlockType,
	RichText,
	MediaUpload
} = wp.blocks;
const { Button } = wp.components;

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

		return (
			<div className={ props.className }>
				<RichText
					className="pricing-table__title"
					tagName="h2"
					placeholder={ __( 'Write subtitle…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					focus={ focusedEditable === 'title' }
					onFocus={ onFocusTitle }
				/>
				<RichText
					className="pricing-table__subtitle"
					tagName="h3"
					placeholder={ __( 'Write title…' ) }
					value={ attributes.subTitle }
					onChange={ onChangeSubTitle }
					focus={ focusedEditable === 'subTitle' }
					onFocus={ onFocusSubTitle }
				/>
				<RichText
					tagName="ul"
					className="pricing-table__features"
					multiline="li"
					placeholder={ __( 'Write a list of features…' ) }
					value={ attributes.features }
					onChange={ onChangeFeatures }
					focus={ focusedEditable === 'features' }
					onFocus={ onFocusFeatures }
				/>
			</div>
		);
	},
	save: props => {
		const {
			className,
			attributes: {
				title,
				subTitle,
				features
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
			</div>
		);
	}
} );
