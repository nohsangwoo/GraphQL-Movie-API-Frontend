import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  // GET_MOVIES의 쿼리를 가져와서 사용하는데 loading여부 , error여부 , data의 확인을 props 받아올수있음
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    const { movies } = data;
    return movies.map((m, i) => <h1 key={i}>{m.id}</h1>);
  }
};
