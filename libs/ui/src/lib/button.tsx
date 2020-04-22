import { lighten, styled } from '@theme-app/utils';
import React from 'react';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledButton = styled.div`
  color: ${p => p.theme.blackColor};
  border-radius: 18px;
  padding: 12px 20px;
  background: linear-gradient(
    135deg,
    ${p => p.theme.orangeBase},
    ${p => p.theme.orangeBase},
    ${p => lighten(p.theme.orangeBase, 0.5)}
  );
`;

export const Button = (props: UiProps) => {
  return <StyledButton>Click here!</StyledButton>;
};

export default Button;
