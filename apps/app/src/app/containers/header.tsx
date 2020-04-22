import * as React from 'react';
import { styled, darken, sizes } from '@theme-app/utils';

import * as Color from 'color';

const Component = styled.div`
  width: 100%;
  background-color: ${p =>
    Color(p.theme.greenBase)
      .darken(0.7)
      .hex()};
  margin-bottom: 16px;

  [data-container] {
    height: 60px;
  }

  @media (max-width: ${sizes.phone}px) {
    margin-bottom: 8px;
  }
`;

interface HeaderProps {
  className?: string;
}
class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <Component>
        <div data-container>Header</div>
      </Component>
    );
  }
}

export default Header;
