import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60p;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;
export default () => {
  // GET_MOVIES의 쿼리를 가져와서 사용하는데 loading여부 , error여부 , data의 확인을 props 받아올수있음
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (error) {
    console.log(error);
  }
  if (loading) {
    return <Loading>Loading...</Loading>;
  } else {
    const { movies } = data;
    return (
      <Container>
        <Header>
          <Title>Apollo 2020</Title>
          <Subtitle>I love GraphQL</Subtitle>
        </Header>

        {movies.map((m, i) => (
          <Movies>
            <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
          </Movies>
        ))}
      </Container>
    );
  }
};
