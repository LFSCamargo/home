import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import Header from '../../components/Header';
import Button from '../../components/Button';

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
    background-image: url('https://avatars0.githubusercontent.com/u/44933973?s=460&v=4');
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
  article {
    display: flex;
    width: '100%';
    @media (min-width: 800px) {
      width: 700px;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
    }
    @media (max-width: 800px) {
      width: 300px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    } 
    button {
      margin: 10px;
    }
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
    }
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
`;

class Landing extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Header
          history={this.props.history}
          profileImage='https://avatars0.githubusercontent.com/u/44933973?s=460&v=4'
        />
        <ProfileConatiner>
          <ProfileImageDescription>
            <div>
              <h1>Luiz Fernando Sousa Camargo</h1>
              <p>Hello here's my portifolio, im Senior Software Engineer at Popstand and i work remotely from Brazil</p>
              <p>
                Techs that im used to work: React, React-Native, Relay Modern, Apollo, GraphQL, NodeJS, Redux, Redux-Saga, WebRTC
              </p>
              <p>
                Today I work as Software Engineer at Popstand, Popstand is a consulting company for startups and big
                tech companies! We can transform everything that you want in code and very successful products!!
              </p>
              <p>
                I Also play guitar, game a lot, and when im not hunting some demons i code some open source stuff
              </p>
              <article>
                <Button title='My Github' onClick={() => window.open('https://github.com/LFSCamargo')} />
                <Button title='My Linkedin' onClick={() => window.open('https://www.linkedin.com/in/luizfernando-lxspandora/')} />
                <Button title='My Instagram' onClick={() => window.open('https://instagram.com/lxsluizinho')} />
              </article>
            </div>
          </ProfileImageDescription>
          
          <ProfileImageContainer>
            <div />
          </ProfileImageContainer>
        </ProfileConatiner>
      </div>
    );
  }
}

export default Landing;
