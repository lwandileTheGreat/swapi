import React from "react";
import backGround from "./stars.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import { PEOPLE_QUERY } from "./components/Queries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Details from "./components/Details";
import Title from "./components/Title";
import Page from "./components/Page";
import Search from "./components/Search";

const client = new ApolloClient({
  uri: "https://3sdv5.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});


const App: React.FC = (): JSX.Element => {
  const usePeople = () => {
    const { loading, error, data } = useQuery(PEOPLE_QUERY);
    return { loading, error, data };
  };
  return (
    <div
      
     
    >
      <ApolloProvider client={client}>
        <BrowserRouter>
     
          <div>
            <section>
              <Title />
            </section>
            <Routes>
            <Route
              path="/"
             element={<Characters data={usePeople} currentPage={1} />}/>
            <Route  path="/person/:name/:index" element={<Details/>} />
            
            <Route  path="/page/:number" element={<Page/>} />
            <Route  path="/search/:name" element={<Search/>} />
            </Routes>
          </div>
          
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
