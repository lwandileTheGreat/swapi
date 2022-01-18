import React from "react";
import { Link, Outlet } from "react-router-dom";
import Card from 'react-bootstrap/Card';


interface Props {
  name: string;
  index: number;
}
const Character: React.FC<Props> = (Props) => {
  // const imageURL: string = `/characters/${Props.index + 1}.jpg`;
  return (
    <div
     
    >
     
      <Card style={{ width: '18rem', marginLeft:'50%' }}>
          
          <Card.Title>{Props.name}</Card.Title>
       
          <Card.Text>
          <Link to={`/person/${Props.name}/${Props.index + 1}`}>Details</Link>

     
         
    </Card.Text>
            
        
    </Card >
   <Outlet/>
    </div>
  );
};

export default Character;
