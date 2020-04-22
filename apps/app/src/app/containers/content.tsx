import * as React from 'react';
import { sizes, styled } from '@theme-app/utils';
import * as Color from 'color';

const Component = styled.div`
  flex: 4 1 auto;
  height: 100%;
  background-color: ${p =>
    Color(p.theme.yellowBase)
      .darken(0.2)
      .hex()};

  margin-right: ${p => p.theme.basicSpacing};
  margin-left: ${p => p.theme.basicSpacing};

  @media (max-width: ${sizes.phone}px) {
    flex: 1 1 auto;
    min-height: 300px;
  }
`;

interface ContentProps {
  className?: string;
}
class Content extends React.Component<ContentProps> {
  render() {
    return (
      <Component>
        Content
      </Component>
    );
  }
}

export default Content;
