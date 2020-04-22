import { sizes, styled } from '@theme-app/utils';
import * as Color from 'color';
import * as React from 'react';

const Component = styled.div`
  flex: 1 1 auto;
  height: 100%;
  background-color: ${p =>
    Color(p.theme.orangeBase)
      .darken(0.2)
      .hex()};
  margin-bottom: 16px;
  margin-left: ${p => p.theme.basicSpacing};

  @media (max-width: ${sizes.phone}px) {
    flex: 1 1 auto;
    min-height: 250px;
    margin-bottom: 8px;
  }
`;

interface RightPanelProps {
  className?: string;
}
class RightPanel extends React.Component<RightPanelProps> {
  render() {
    return (
      <Component>
        RightPanel
      </Component>
    );
  }
}

export default RightPanel;
