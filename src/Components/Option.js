import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Option = ({ handleAdd, handleSub, id, handleOption }) => {
  return (
    <div className="mx-auto option">
      <InputGroup className="mb-3">
        <FormControl
          onChange={(event) => handleOption(event, id)}
          placeholder="Option"
          aria-label="Amount (to the nearest dollar)"
          id={`${id}`}
        />
        <InputGroup.Append>
          <InputGroup.Text onClick={handleAdd} style={{ cursor: "pointer" }}>
            +
          </InputGroup.Text>
          <InputGroup.Text
            onClick={() => handleSub(id)}
            style={{ cursor: "pointer" }}
          >
            {" "}
            -
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Option;
