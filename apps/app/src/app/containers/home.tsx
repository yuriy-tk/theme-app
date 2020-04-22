import { sizes, styled } from '@theme-app/utils';
import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';
import Content from './content';
import Footer from './footer';
import Header from './header';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';

const ComponentStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${p => p.theme.bgColor};

  @media (max-width: ${sizes.phone}px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 16px;

  @media (max-width: ${sizes.phone}px) {
    flex-direction: column;
    margin-bottom: 8px;

    > div {
      width: 100%;
      margin: 8px 0;
    }
  }
`;

interface HomeProps {
  theme?: string;
  setTheme: Dispatch<SetStateAction<{ [k: string]: string }>>;
}

type HomeState = {
  isPhone: boolean;
};

class Home extends Component<HomeProps> {
  state: HomeState = {
    isPhone: false
  };

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize = () => this.setState({ isPhone: window.innerWidth <= sizes.phone });

  render() {
    const { isPhone } = this.state;

    return (
      <ComponentStyle>
        <Header />
        <Wrapper>
          {!isPhone && <LeftPanel />}
          <Content />
          {isPhone && <LeftPanel />}
          <RightPanel />
        </Wrapper>
        <Footer />
      </ComponentStyle>
    );
  }
}

export default Home;
