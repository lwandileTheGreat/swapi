import { gql, DocumentNode } from "@apollo/client";

const PEOPLE_QUERY: DocumentNode = gql`
  query getAllPeople {
    allPeople {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

const PERSON_QUERY: DocumentNode = gql`
  query getPerson($name: String!) {
    person(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

const PAGE_QUERY: DocumentNode = gql`
  query getPersonByPage($peoplePage: Int!) {
    people(page: $peoplePage) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export { PEOPLE_QUERY, PERSON_QUERY, PAGE_QUERY };
