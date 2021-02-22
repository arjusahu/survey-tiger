import React, { useState } from "react";
import DropDown from "./Dropdown";
import Input from "./Input";
import Option from "./Option";
import Result from "../Pages/Result";
import { Button } from "react-bootstrap";
import "./Components.css";

const SecondPage = ({ setMulti, setSingle, single, multi }) => {
  const [inputag, setInputag] = useState(false);
  const [opt, setOpt] = useState([]);
  const [id, setId] = useState(0);
  const [select, setSelect] = useState("");
  const [isbutton, setIsbutton] = useState(false);
  const [que, setQue] = useState("");
  const [ans, setAns] = useState({});
  const [publish, setPublish] = useState(true);
  let first = [],
    second = [];

  const handleChange = (event) => {
    setOpt([id]);
    setId((id) => id + 1);
    setInputag(true);
    setIsbutton(false);
    setQue("");
    setAns({});
    if (event) {
      let val = event.target.value;
      setSelect(val);
    }
  };

  let handleAdd = () => {
    if (select == "Multi-Select" && opt.length < 4) {
      setOpt([...opt, id]);
      setId((id) => id + 1);
    }
    if (select == "Single-Select" && opt.length < 2) {
      setOpt([...opt, id]);
      setId((id) => id + 1);
    }
    if (
      (select == "Multi-Select" && opt.length == 3) ||
      (select == "Single-Select" && opt.length == 1)
    ) {
      setIsbutton(true);
    }
  };

  let handleSub = (index) => {
    if (opt.length > 1) {
      let list = opt.filter((indx) => index !== indx);
      setOpt(list);
    }
    setIsbutton(false);
  };

  let handleOption = (event, id) => {
    const ele = event.target;
    const obj = {
      [id]: ele.value,
    };
    setAns({ ...ans, ...obj });
  };

  let handleQue = (event) => {
    setQue(event.target.value);
  };

  let handleList = () => {
    if (select == "Multi-Select") {
      const obj = {
        question: que,
        answer: ans,
      };
      first = [...multi, obj];
      setMulti(first);
    } else {
      const obj = {
        question: que,
        answer: ans,
      };
      second = [...single, obj];
      setSingle(second);
    }

    handleChange();
  };

  return (
    <>
      {publish ? (
        <>
          <DropDown handleChange={handleChange} />
          {inputag && (
            <>
              <Input handleQue={handleQue} que={que} />
              <p className="option mx-auto">Options</p>
              {opt.map((item) => (
                <Option
                  handleAdd={handleAdd}
                  handleSub={handleSub}
                  key={item}
                  id={item}
                  handleOption={handleOption}
                />
              ))}
            </>
          )}
          {isbutton && (
            <div className="btn">
              <Button variant="danger" onClick={handleList}>
                add
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  handleList();
                  setPublish(false);
                }}
              >
                publish
              </Button>
            </div>
          )}
        </>
      ) : (
        <Result multi={multi} single={single} />
      )}
    </>
  );
};

export default SecondPage;
