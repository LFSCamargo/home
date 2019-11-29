import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import Button from '../../components/Button';
import Header from '../../components/Header';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  min-height: 100px;
  @media (max-width: 800px) {
    width: 200px;
  }
  @media (min-width: 800px) {
    width: 700px;
  } 
  padding: 20px 40px;
  border-radius: 30px;
  background-color: white;
  margin-bottom: 20px;
  box-shadow: 0px 0px 20px 0px #c6c6c6;
  h1 {
    @media (max-width: 800px) {
      font-size: 20px;
    }
    @media (min-width: 800px) {
      font-size: 30px;
    } 
    font-weight: 500;
  }
  p {
    @media (max-width: 800px) {
      font-size: 18px;
      width: 150px;
    }
    @media (min-width: 800px) {
      font-size: 20px;
    } 
    font-weight: 300;
    margin-bottom: 40px;
  }
`;

const InvertedRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 10px;
`

const Input = styled.input`
  @media (max-width: 800px) {
    width: 165px;
  }
  display: flex;
  flex: 1;
  width: 95%;
  margin-bottom: 20px;
  border-radius: 100px;
  background-color: rgb(241, 243, 244);
  color: black;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 20px 20px;
  font-size: 16px;
`

const TextArea = styled.textarea`
  @media (max-width: 800px) {
    width: 150px;
  }
  display: flex;
  flex: 1;
  width: 92%;
  margin-bottom: 20px;
  border-radius: 30px;
  background-color: rgb(241, 243, 244);
  color: black;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 30px;
  font-size: 16px;
`

interface Props extends RouteComponentProps {}

interface State {
  name: string;
  body: string;
}

class Contact extends React.Component<Props, State> {
  state = {
    name: '',
    body: '',
  };

  goTo = () => {
    const { name, body } = this.state;
    if (!name || !body) {
      return alert('Please fill all the fields');
    }

    window.open(`mailto:luizepauloxd@gmail.com?subject=${this.state.name}&body=${this.state.body}`);
  }

  render() {
    const { name, body } = this.state;
    return (
      <div>
        <Header history={this.props.history} profileImage="https://avatars2.githubusercontent.com/u/18129416?s=460&v=4" />
        <Container>
          <Card>
            <h1>Send me a email</h1>
            <p>Fill the form bellow to send a email to luizepauloxd@gmail.com</p>
            <Input value={name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="Name" />
            <TextArea value={body} onChange={(e) => this.setState({ body: e.target.value })} placeholder="Body of the message" />
            <InvertedRow>
              <Button title="Send" onClick={this.goTo} />
            </InvertedRow>
          </Card>
        </Container>
      </div>
    )
  }
};

export default Contact;
