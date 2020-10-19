import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE = gql`
  query movie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

function Detail() {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });

  if (error) {
    console.log(error);
  }

  if (loading) {
    return "loading";
  } else {
    return <>{data?.movie?.title}</>;
  }
}

export default Detail;
