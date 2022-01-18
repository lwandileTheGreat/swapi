import React, { useState, useEffect } from "react";
import axios from "axios";
import { PERSON_QUERY } from "./Queries";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Details: React.FC = () => {
 
  const { name} = useParams() as { name:string} ;
  const { loading, error, data } = useQuery(PERSON_QUERY, {
    variables: { name },
  });


  let Navigate = useNavigate();
  const goToPrevPath = () => Navigate(-1);

  const [homeWorld, sethomeWorld] = useState("Not Available");

  if (loading) return <img className="center" src={require("../images/Lightsaber-Progress-Bar.gif")} alt="loading"  width="500" />;
  if (error) return <p>Error, Details not found :(</p>;

  const imageURLs: Array<string>= ['Starwars1.jpg','Starwars2.jpg', 'Starwars3.jpg', 'Starwars4.jpg', 'starwars5.jpg', 'starwars6.jpg', 'starwars7.jpg','starwars8.jpg', 'starwars9.jpg'];

  
  const counter = Math.floor(Math.random() * (8 + 1));

  
  const person = data.person[0];

  async function fetchHomeWorld() {
    await axios
      .get(person.homeworld)
      .then((json) => sethomeWorld(String(json.data.name)));
  }
  fetchHomeWorld();

  
  return (
  
    <motion.div className="backdrop" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      
    <Card className='card-modal'>
  <Card.Img variant="top" src={require("../images/Starwars/" + imageURLs[counter])} alt="Past movie image of Starwars" />
  <Card.Body>
    <Card.Title>Name: {person.name}</Card.Title>
    <Card.Text>
    Height: {person.height} <br/>
    Mass: {person.mass} <br/>
    Gender: {person.gender} <br/>
    Home World: {homeWorld}
    </Card.Text>
    <Button onClick={goToPrevPath} variant="primary">Go Back</Button>
  </Card.Body>
</Card>
  

    </motion.div>
  );
};


export default Details;
