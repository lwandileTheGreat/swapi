import React from "react";
import Characters from "./Characters";
import { useQuery } from "@apollo/client";
import { PAGE_QUERY } from "./Queries";
import { useParams } from "react-router-dom";

const Page: React.FC = () => {
  const { number }  = useParams() as { number: string } ;
  
  const peoplePage = parseInt(number);
  const usePeople = () => {
    const { loading, error, data } = useQuery(PAGE_QUERY, {
      variables: { peoplePage },
    });
    return { loading, error, data };
  };

  return <Characters data={usePeople} currentPage={peoplePage} />;
};

export default Page;
