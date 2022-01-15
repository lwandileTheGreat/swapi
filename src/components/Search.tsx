import React from "react";
import Characters from "./Characters";
import { useQuery } from "@apollo/client";
import { PERSON_QUERY } from "./Queries";
import { useParams } from "react-router-dom";

const Search: React.FC = () => {

  const {name} = useParams() as {name:string};

  const usePeople = () => {
    const { loading, error, data } = useQuery(PERSON_QUERY, {
      variables: { name },
    });
    return { loading, error, data };
  };

  return <Characters data={usePeople} currentPage={1} />;
};

export default Search;
