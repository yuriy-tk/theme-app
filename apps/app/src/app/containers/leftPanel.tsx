import { sizes, styled } from '@theme-app/utils';
import * as React from 'react';
import { WidgetCard } from '../components';

const Component = styled.div`
  flex: 1 1 auto;
  height: 100%;
  display: block;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 16px;
  }

  margin-right: ${p => p.theme.basicSpacing};

   @media (max-width: ${sizes.phone}px) {
    flex-direction: row;

    > div {
      width: 100%;
      margin: 0px;
      margin-bottom: 0;
      min-height: 150px;

      &:first-child {
        margin-right: 8px;
        margin-bottom: 0px;
      }
      &:last-child {
        margin-left: 8px;
      }
    }
  }
`;

interface LeftPanelProps {
  className?: string;
}
class LeftPanel extends React.Component<LeftPanelProps> {
  render() {
    return (
      <Component>
        <WidgetCard />
        <WidgetCard color={'grey'} />
      </Component>
    );
  }
}

export default LeftPanel;
