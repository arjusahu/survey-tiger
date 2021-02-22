import React, { useState } from "react";
import FirstPage from "../Components/FirstPage";
import SecondPage from "../Components/SecondPage";

const Home = () => {
  const [isFirst, setIsfirst] = useState(true);
  const [multi, setMulti] = useState([]);
  const [single, setSingle] = useState([]);

  let handleClick = () => {
    setIsfirst(false);
  };

  return (
    <>
      {isFirst ? (
        <FirstPage handleClick={handleClick} />
      ) : (
        <SecondPage
          setMulti={setMulti}
          setSingle={setSingle}
          multi={multi}
          single={single}
        />
      )}
    </>
  );
};

export default Home;
