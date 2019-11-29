import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import Header from '../../components/Header';

const ProfileConatiner = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 55% 45%;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
  div {
    display: flex;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: center;
    }
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ProfileImageContainer = styled.div`
  @media (min-width: 800px) {
    justify-content: flex-start;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
  div {
    @media (min-width: 800px) {
      width: 500px;
      height: 500px;
      margin-left: 30px;
      margin: 120px 0px;
    }
    @media (max-width: 800px) {
      width: 200px;
      height: 200px;
      margin-left: -10px;
      margin: 20px 0px;
    }
    border-radius: 250px;
    background-image: url('https://avatars2.githubusercontent.com/u/18129416?s=460&v=4');
    background-size: cover;
    box-shadow: 0px 0px 20px 0px grey;
  }
`;

const ProfileImageDescription = styled.div`
  @media (min-width: 800px) {
    justify-content: flex-end;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
  div {
    flex-direction: column;
    margin-right: 20px;
    @media (min-width: 800px) {
      width: 700px;
    }
    @media (max-width: 800px) {
      width: 300px;
    }
    h1 {
      @media (min-width: 800px) {
        font-size: 3.5em;
        text-align: left;
      }
      @media (max-width: 800px) {
        font-size: 2.5em;
        text-align: center;
      }
      color: black;
      font-size: 3.5em;
      font-weight: 600;
    };
    p {
      color: black;
      @media (min-width: 800px) {
        font-size: 1.5em;
        text-align: left;
      }
      @media (max-width: 800px) {
        font-size: 1.2em;
        text-align: center;
      }
      font-weight: 100;
    }
  }
`

class Landing extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Header history={this.props.history} profileImage="https://avatars2.githubusercontent.com/u/18129416?s=460&v=4" />
        <ProfileConatiner>
          <ProfileImageDescription>
            <div>
              <h1>Luiz Fernando Sousa Camargo</h1>
              <p>Hello, my name is Luiz Fernando, I live in São Paulo - SP,  I code almost all the time, some times a lil bit of design (UI and UX), I speak at meetups and conferences!, and i game when im not hunting some demons.</p>
              <p>Today I work as Software Engineer at Popstand, Popstand is a consulting company for startups and big tech companies! We can transform everything that you want in code!!</p>
            </div>
          </ProfileImageDescription>
          <ProfileImageContainer>
            <div />
          </ProfileImageContainer>
        </ProfileConatiner>
      </div>
    )
  }
};

export default Landing;
