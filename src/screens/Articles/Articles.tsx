import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

const ArticlesContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  min-width: 200px;
  @media (max-width: 800px) {
    width: 200px;
  }
  @media (min-width: 800px) {
    width: 700px;
  } 
  min-height: 100px;
  padding: 20px 40px;
  border-radius: 30px;
  background-color: white;
  margin-bottom: 20px;
  box-shadow: 0px 0px 20px 0px #c6c6c6;
  h1 {
    font-size: 30px;
    font-weight: 500;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvertedRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 10px;
`

const LoadingContainer = styled.div`
  margin: 200px;
`;

const client = new ApolloClient({
  uri: 'https://micro-medium-api.now.sh/graphql',
});

const ArticlesQuery = gql`
  query ArticlesQuery($username: String!, $limit: Int) {
    posts(username: $username, limit: $limit) {
      title
      url
      subtitle
      id
    }
  }
`;

interface Item {
  id: string;
  url: string;
  subtitle: string;
  title: string;
}

interface Props extends RouteComponentProps {}

class Articles extends React.Component<Props> {
  render() {
    return (
      <div>
        <Header history={this.props.history} profileImage="https://avatars2.githubusercontent.com/u/18129416?s=460&v=4" />
        <ArticlesContainer>
          <Wrapper>
            <Query 
              client={client}
              variables={{
                username: 'lXSPandora',
                limit: 100,
              }}
              query={ArticlesQuery}
            >
              {({ loading, error, data }) => {
                if (loading) {
                  return (
                    <LoadingContainer>
                      <Loading />
                    </LoadingContainer>
                  );
                }

                if (error) {
                  return (
                    <Card>
                      <p>Oops there was an error while we comunicate to the medium servers</p>
                    </Card>
                  );
                }

                return (
                  <div>
                    {data.posts.map((item: Item) => (
                      <Card key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <InvertedRow>
                          <Button onClick={() => window.open(item.url)} title="See Article" />
                        </InvertedRow>
                      </Card>
                    ))}
                  </div>
                );
              }}
            </Query>
          </Wrapper>
        </ArticlesContainer>
      </div>
    )
  }
};

export default Articles;
