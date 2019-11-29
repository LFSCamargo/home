import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  @media (min-width: 800px) {
    grid-template-columns: 10% 90%;
  }
  display: grid;
  align-items: center;
  justify-content: center;
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

const HeaderItemsContainer = styled.section`
  justify-content: flex-end;
  padding: 20px;
  div {
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: black;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`

const ProfileImageContainer = styled.section`
  justify-content: center;
  @media (min-width: 800px) {
    padding: 25px;
  }
  @media (max-width: 800px) {
    padding: 15px;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: black;
    box-shadow: 0px 0px 20px 0px grey;
  };
  p {
    font-size: 30px;
    color: black;
  }
`;

export const routes = [
  {
    goTo: '/',
    routeName: 'Home',
    special: false,
  },
  {
    goTo: '/articles',
    routeName: 'Articles',
    special: false,
  },
  {
    goTo: '/contact',
    routeName: 'Contact Me',
    special: true,
  }
];

interface Props {
  profileImage: string | any;
  renderImage: boolean;
  history: any;
}

class Header extends React.Component<Props> {
  static defaultProps = {
    renderImage: true,
  };
  render() {
    const { profileImage, history, renderImage } = this.props;
    return (
      <Wrapper>
        <ProfileImageContainer>
          {renderImage && <img onClick={() => history.push('/')} src={profileImage} />}
        </ProfileImageContainer>
        <HeaderItemsContainer>
          {routes.map((route, i) => {
            if (route.special) {
              return (
                <div key={i}>
                  <Button onClick={() => history.push(route.goTo)} title={route.routeName} />
                </div>
              )
            }

            return (
              <div key={i} onClick={() => history.push(route.goTo)}>{route.routeName}</div>
            );
          })}
        </HeaderItemsContainer>
      </Wrapper>
    )
  }
}

export default Header;