import { useState, useEffect } from "react";
import "./app.css";

const App = () => {
  const [value01, setValue01] = useState("");
  const [value02, setValue02] = useState("");
  const [value03, setValue03] = useState("");

  const [value04, setValue04] = useState("");
  const [value05, setValue05] = useState("");
  const [value06, setValue06] = useState("");

  const [value07, setValue07] = useState("");
  const [value08, setValue08] = useState("");
  const [value09, setValue09] = useState("");

  const [indicator, setIndicator] = useState(true);
  const [message, setMessage] = useState("");

  const [inputArray, setInputArray] = useState([]);

  //**********************************************************************
  //*Logic checking:-
  // const inputArray = [];
  const logicCheck = () => {
    if (
      inputArray[0] === undefined
      // &&
      //inputArray[1] !== " "
      //&&
      // inputArray[2] !== " " &&
      // inputArray[0] === inputArray[1] &&
      // inputArray[1] === inputArray[2]

      //||
      // inputArray[3] !== " " ||
      // inputArray[4] !== " " ||
      // (inputArray[5] !== " " &&
      //   inputArray[3] === inputArray[4] &&
      //   inputArray[4] === inputArray[5])

      //||

      // (inputArray[6] !== " " &&
      //   inputArray[6] === inputArray[7] &&
      //   inputArray[7] !== " " &&
      //   inputArray[8] !== " " &&
      //   inputArray[7] === inputArray[8]) ||
      // (inputArray[0] !== " " &&
      //   inputArray[0] === inputArray[3] &&
      //   inputArray[3] !== " " &&
      //   inputArray[6] !== " " &&
      //   inputArray[3] === inputArray[6]) ||
      // (inputArray[1] !== " " &&
      //   inputArray[1] === inputArray[4] &&
      //   inputArray[4] !== " " &&
      //   inputArray[7] !== " " &&
      //   inputArray[4] === inputArray[7]) ||
      // (inputArray[2] !== " " &&
      //   inputArray[2] === inputArray[5] &&
      //   inputArray[5] !== " " &&
      //   inputArray[8] !== " " &&
      //   inputArray[5] === inputArray[8]) ||
      // (inputArray[0] !== " " &&
      //   inputArray[0] === inputArray[4] &&
      //   inputArray[4] !== " " &&
      //   inputArray[8] !== " " &&
      //   inputArray[4] === inputArray[8]) ||
      // (inputArray[2] !== " " &&
      //   inputArray[2] === inputArray[4] &&
      //   inputArray[4] !== " " &&
      //   inputArray[6] !== " " &&
      //   inputArray[4] === inputArray[6])
    ) {
      console.log("inputArray", inputArray);
      setMessage("Match complete");
    } else {
      setMessage("Continue..");
    }
  };

  //**********************************************************************

  const handleClick = (e) => {
    console.log("e.target.value #", e.target.value);
    switch (e.target.value) {
      // Verify the below code. the input array is not getting updated immediately.
      //
      //
      case "box01":
        {
          console.log("inside Box01 ");
          const input = indicator ? "X" : "O";
          setValue01(input);
          console.log("input_array_before", inputArray);
          // inputArray.push("x");
          setInputArray((prev) => [...prev, input]);

          // setInputArray((prevArray) => [...prevArray, input]);
          // setInputArray((prevArray) => {
          //   var newArray = [...prevArray, input];
          //   return newArray;
          // });
           
          logicCheck();
          setIndicator(!indicator);
        }

        break;

      // case "box02":
      //   {
      //     console.log("inside Box02 ");
      //     const input = indicator ? "X" : "O";
      //     setValue02(input);
      //     setIndicator(!indicator);
      //     setInputArray((prevArray) => [...prevArray, input]);
      //     logicCheck();
      //   }
      //   break;

      // case "box03":
      //   {
      //     console.log("inside Box03 ");
      //     setIndicator(!indicator);
      //     const input = indicator ? "X" : "O";
      //     setValue03(input);
      //     setInputArray((prevArray) => [...prevArray, input]);
      //     logicCheck();
      //   }

      //   break;

      // case "box04":
      //   {
      //     setIndicator(!indicator);
      //     const input = indicator ? "X" : "O";
      //     setValue04(input);
      //     setInputArray((prevArray) => [...prevArray, input]);
      //     logicCheck();
      //   }

      //   break;

      // case "box05":
      //   {
      //     setIndicator(!indicator);
      //     const input = indicator ? "X" : "O";
      //     setValue05(input);
      //     setInputArray((prevArray) => [...prevArray, input]);
      //     logicCheck();
      //   }

      //   break;

      // case "box06":
      //   {
      //     setIndicator(!indicator);
      //     const input = indicator ? "X" : "O";
      //     setValue06(input);
      //     setInputArray((prevArray) => [...prevArray, input]);
      //     logicCheck();
      //   }

      //   break;

      // case "box07":
      //   {
      //     setIndicator(!indicator);
      //     const input = indicator ? "X" : "O";
      //     setValue07(input);
      //     setInputArray((prevArray) => [...prevArray, input]);
      //     logicCheck();
      //   }

      //   break;

      // case "box08":
      //   {
      //     setIndicator(!indicator);
      //     const input = indicator ? "X" : "O";
      //     setValue08(input);
      //     setInputArray((prevArray) => [...prevArray, input]);
      //     logicCheck();
      //   }

      //   break;

      // default: {
      //   setIndicator(!indicator);
      //   const input = indicator ? "X" : "O";
      //   setValue09(input);
      //   setInputArray((prevArray) => [...prevArray, input]);
      //   logicCheck();
      // }
    }
  };

  return (
    <>
      <div className="container">
        <h1>Tic tac toe game</h1>
        <div className="game-container">
          <button className="button" value="box01" onClick={handleClick}>
            {value01}
          </button>
          <button className="button" value="box02" onClick={handleClick}>
            {value02}
          </button>
          <button className="button" value="box03" onClick={handleClick}>
            {value03}
          </button>

          <br />

          <button className="button" value="box04" onClick={handleClick}>
            {value04}
          </button>
          <button className="button" value="box05" onClick={handleClick}>
            {value05}
          </button>
          <button className="button" value="box06" onClick={handleClick}>
            {value06}
          </button>

          <br />

          <button className="button" value="box07" onClick={handleClick}>
            {value07}
          </button>
          <button className="button" value="box08" onClick={handleClick}>
            {value08}
          </button>
          <button className="button" value="box09" onClick={handleClick}>
            {value09}
          </button>
        </div>
        {message}
      </div>
    </>
  );
};

export default App;
