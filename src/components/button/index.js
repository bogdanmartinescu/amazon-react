import React from "react";
import { ButtonWrapper, ButtonInner, ButtonText } from "./ButtonStyles";

function Button({ children, type, fluid, size, fn }) {
  return (
    <ButtonWrapper type={type} fluid={fluid} size={size} fn={fn}>
      <ButtonInner>
        <ButtonText
          onClick={() => (fn && typeof fn === "function" ? fn() : null)}
        >
          {children}
        </ButtonText>
      </ButtonInner>
    </ButtonWrapper>
  );
}

export default Button;
