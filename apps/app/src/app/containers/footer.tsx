import { Button } from '@theme-app/ui';
import * as React from 'react';
import * as Color from 'color';
import { styled, invert, isDark, sizes } from '@theme-app/utils';

const Component = styled.div`
  flex: 1 1 200px;
  width: 100%;
  font-size: 0.8em;
  background-color: ${p =>
    Color(p.theme.yellowBase)
      .darken(0.5)
      .hex()};
  color: ${p =>
    isDark(p.theme.primaryColor)
      ? p.theme.normalColor
      : invert(p.theme.normalColor)};

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface FooterProps {
  className?: string;
}

class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <Component>
        <Button />
      </Component>
    );
  }
}

export default Footer;
