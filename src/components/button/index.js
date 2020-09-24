import React from 'react';
import { ButtonWrapper, ButtonInner, ButtonText } from './ButtonStyles';

function Button({ children, type, fluid, fn }) {
	return (
		<ButtonWrapper type={type} fluid={fluid} fn={fn}>
			<ButtonInner>
				<ButtonText onClick={() => (fn ? fn() : null)}>{children}</ButtonText>
			</ButtonInner>
		</ButtonWrapper>
	);
}

export default Button;
