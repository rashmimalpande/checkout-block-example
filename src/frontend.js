import metadata from './block.json';
import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import { __ } from '@wordpress/i18n';
import { useEffect, useState, useCallback } from '@wordpress/element';

// Global import
const { registerCheckoutBlock } = wc.blocksCheckout;

const Block = ({ children, checkoutExtensionData }) => { 
	const [ giftMessage, setGiftMessage ] = useState('');
    const { setExtensionData } = checkoutExtensionData;

    useEffect( () => {
        setExtensionData( 'checkout-block-example', 'gift_message', giftMessage  );
	}, [] );

    const onInputChange = useCallback(
		( value ) => {
			setGiftMessage( value );
			setExtensionData( 'checkout-block-example', 'gift_message', value );
		},
		[ setGiftMessage. setExtensionData ]
	)

    return (
        <div className={ 'example-fields' }> 
                <ValidatedTextInput
                        id="gift_message"
                        type="text"
                        required={false}
                        className={'gift-message'}
                        label={
                            'Gift Message'
                        }
                        value={ giftMessage }
                        onChange={ onInputChange }
                />
		</div>
    )
}

const options = {
	metadata,
	component: Block
};

registerCheckoutBlock( options );