const { registerBlockType, RichText } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType( 'jet-press/pricing-table', {
	title: __( 'Pricing Table' ),
	icon: 'clipboard',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		subTitle: {
			type: 'array',
			source: 'children',
			selector: 'h4',
		},
		features: {
			type: 'array',
			source: 'children',
			selector: '.features',
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
					tagName="h2"
					placeholder={ __( 'Write title…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					focus={ focusedEditable === 'title' }
					onFocus={ onFocusTitle }
				/>
				<RichText
					tagName="h3"
					placeholder={ __( 'Write subtitle…' ) }
					value={ attributes.subTitle }
					onChange={ onChangeSubTitle }
					focus={ focusedEditable === 'subTitle' }
					onFocus={ onFocusTitle }
				/>
				<RichText
					tagName="ul"
					multiline="li"
					placeholder={ __( 'Write a list of features…' ) }
					value={ attributes.features }
					onChange={ onChangeFeatures }
					focus={ focusedEditable === 'features' }
					onFocus={ onFocusFeatures }
					className="features"
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
				<h2>
					{ title }
				</h2>
				<h3>
					{ subTitle }
				</h3>
				<ul className="features">
					{ features }
				</ul>
			</div>
		);
	}
} );