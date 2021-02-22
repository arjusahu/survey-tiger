import React from 'react';
import {InputGroup,FormControl} from "react-bootstrap";

const Input = ({handleQue,que}) => {
    return (
        <div className="mx-auto input">
     <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Question"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={handleQue}
      value={que}
    />
  </InputGroup>


        </div>
    );
};

export default Input;