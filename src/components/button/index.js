import React from 'react';

import { ButtonWrapper, ButtonInner, ButtonText } from './ButtonStyles';

function Button({ children, color, fluid }) {
	return (
		<ButtonWrapper color={color} fluid={fluid}>
			<ButtonInner>
				<ButtonText>{children}</ButtonText>
			</ButtonInner>
		</ButtonWrapper>
	);
}

export default Button;
