import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [inputSign, setInputSign] = useState("X");
  const [arr, setArr] = useState(new Array(9));
  console.log("Arr data", arr);
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [box4, setBox4] = useState("");
  const [box5, setBox5] = useState("");
  const [box6, setBox6] = useState("");
  const [box7, setBox7] = useState("");
  const [box8, setBox8] = useState("");
  const [box9, setBox9] = useState("");

  const logicCheck = () => {
    if (
      (arr[0] !== undefined && arr[0] === arr[1] && arr[1] === arr[2]) ||
      (arr[3] !== undefined && arr[3] === arr[4] && arr[4] === arr[5]) ||
      (arr[6] !== undefined && arr[6] === arr[7] && arr[7] === arr[8]) ||
      (arr[0] !== undefined && arr[0] === arr[3] && arr[3] === arr[6]) ||
      (arr[1] !== undefined && arr[1] === arr[4] && arr[4] === arr[7]) ||
      (arr[2] !== undefined && arr[2] === arr[5] && arr[5] === arr[8]) ||
      (arr[0] !== undefined && arr[0] === arr[4] && arr[4] === arr[8]) ||
      (arr[2] !== undefined && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
      console.log("match done");
      console.log("winner is #", inputSign);
    } else {
      console.log("match continue");
    }
  };

  const handleBox1Click = () => {
    console.log("clicked in box1");
    setBox1(inputSign);
    arr[0] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox2Click = () => {
    console.log("clicked in box2");
    setBox2(inputSign);
    arr[1] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox3Click = () => {
    console.log("clicked in box3");
    setBox3(inputSign);
    arr[2] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox4Click = () => {
    console.log("clicked in box4");
    setBox4(inputSign);
    arr[3] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox5Click = () => {
    console.log("clicked in box5");
    setBox5(inputSign);
    arr[4] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox6Click = () => {
    console.log("clicked in box6");
    setBox6(inputSign);
    arr[5] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox7Click = () => {
    console.log("clicked in box7");
    setBox7(inputSign);
    arr[6] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox8Click = () => {
    console.log("clicked in box8");
    setBox8(inputSign);
    arr[7] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  const handleBox9Click = () => {
    console.log("clicked in box9");
    setBox9(inputSign);
    arr[8] = inputSign;
    logicCheck();
    setInputSign(inputSign === "X" ? "0" : "X");
  };

  return (
    <div>
      <div>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox1Click}
        >
          {box1}
        </button>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox2Click}
        >
          {box2}
        </button>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox3Click}
        >
          {box3}
        </button>
        <br />
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox4Click}
        >
          {box4}
        </button>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox5Click}
        >
          {box5}
        </button>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox6Click}
        >
          {box6}
        </button>
        <br />
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox7Click}
        >
          {box7}
        </button>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox8Click}
        >
          {box8}
        </button>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={handleBox9Click}
        >
          {box9}
        </button>
      </div>
    </div>
  );
}
