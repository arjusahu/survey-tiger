import React from 'react';
import {Button} from "react-bootstrap";
import "./Components.css";


const FirstPage = ({handleClick}) => {
    return (
 <div className="mx-auto firstPage">
 
  <Button variant="danger" size="lg" block onClick={handleClick}>
    Create Survey
  </Button><br/>
  <Button variant="danger" size="lg" block>
    Take Survey
  </Button>
</div>
    
    );
};

export default FirstPage;