import React, { useState, useEffect } from "react";
import Form from "./components/Form";

import "./App.css";
import { upperCaseLetters, lowerCaseLetters, numbers, special } from "./data";

import { toast } from "react-hot-toast";

//get the data from local storage
const getDatafromLocal = () => {
  const data = localStorage.getItem("password");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [password, setPassword] = useState([getDatafromLocal()]);
  const [counter, setCounter] = useState(6);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  

  const increaseCounter = (e) => {
    e.preventDefault();

    if (counter < 20) {
      setCounter((count) => count + 1);
    }
  };

  const decreaseCounter = (e) => {
    e.preventDefault();

    if (counter > 6) {
      setCounter((count) => count - 1);
    }
  };
  const generatePassword = (e) => {
    e.preventDefault();
    let newPassword = "";

    for (let i = 0; i < counter; i++) {
      newPassword += getRandom();
    }

    setPassword(newPassword);
  };

  const getRandom = () => {
    const chars = [];

    if (isUppercase) {
      chars.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }

    if (isLowercase) {
      chars.push(
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
    }
    if (isNumber) {
      chars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (isSymbol) {
      chars.push(special[Math.floor(Math.random() * special.length)]);
    }

    if (chars.length === 0) {
      return "";
    } else {
      return chars[Math.floor(Math.random() * chars.length)];
    }
  };

  const handleClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      toast.success("Copied to your clipboard");
    } else {
      toast.error("No password to copy");
    }
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

  return (
    <Form
      password={password}
      handleClipboard={handleClipboard}
      decreaseCounter={decreaseCounter}
      counter={counter}
      increaseCounter={increaseCounter}
      isUppercase={isUppercase}
      setIsUppercase={setIsUppercase}
      isLowercase={isLowercase}
      setIsLowercase={setIsLowercase}
      setIsNumber={setIsNumber}
      isNumber={isNumber}
      isSymbol={isSymbol}
      setIsSymbol={setIsSymbol}
      generatePassword={generatePassword}
      
    />
  );
}

export default App;
