import { styled } from '@theme-app/utils';
import * as Color from 'color';
import * as React from 'react';

const Component = styled.div`
  width: 100%;
  flex: 1 1 auto;
  background-color: ${p =>
    p.color
      ? p.color
      : Color(p.theme.greenBase)
          .darken(0.5)
          .hex()};

  [data-container] {
    height: 100%;
  }
`;

interface WidgetCardProps {
  color?: string;
}
class WidgetCard extends React.Component<WidgetCardProps> {
  render() {
    return (
      <Component color={this.props.color}>
        <div data-container>WidgetCard</div>
      </Component>
    );
  }
}

export default WidgetCard;
