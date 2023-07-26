import React from "react";
import { FaClipboard } from "react-icons/fa";

const Form = ({
  password,
  handleClipboard,

  decreaseCounter,
  counter,
  increaseCounter,
  isUppercase,
  setIsUppercase,
  isLowercase,
  setIsLowercase,
  setIsNumber,
  isNumber,
  isSymbol,
  setIsSymbol,
  generatePassword,
}) => {
  return (
    <section>
      <div className="container">
        <form id="pg__form">
          <div className="result">
            <input type="text" id="result" readOnly value={password} />
            <div className="clipboard" onClick={handleClipboard}>
              <FaClipboard></FaClipboard>
            </div>
          </div>

          <div>
            <div className="count">
              <button className="size" onClick={decreaseCounter}>
                <b>-</b>
              </button>
              <span>{counter}</span>
              <button className="size" onClick={increaseCounter}>
                <b>+</b>
              </button>
            </div>
            <div className="field">
              <label htmlFor="uppercase">Uppercase</label>
              <input
                checked={isUppercase}
                onChange={(e) => setIsUppercase(e.target.checked)}
                type="checkbox"
                id="uppercase"
                name="uppercase"
              />
            </div>

            <div className="field">
              <label htmlFor="lowercase">Lowercase</label>
              <input
                checked={isLowercase}
                onChange={(e) => setIsLowercase(e.target.checked)}
                type="checkbox"
                id="lowercase"
                name="lowercase"
              />
            </div>

            <div className="field">
              <label htmlFor="numbers">Numbers</label>
              <input
                checked={isNumber}
                onChange={(e) => setIsNumber(e.target.checked)}
                type="checkbox"
                id="numbers"
                name="numbers"
              />
            </div>

            <div className="field">
              <label htmlFor="symbols">Symbols</label>
              <input
                checked={isSymbol}
                onChange={(e) => setIsSymbol(e.target.checked)}
                type="checkbox"
                id="symbols"
                name="symbols"
              />
            </div>
            <div>
              <button type="submit" onClick={generatePassword}>
                Generate Password
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="password">
        <br />
        <div className="align">
          {/* display 5 password on the screen */}
          <label><u>Generated Password:</u></label>
          {/* <p>{password}</p> */}
          <p>1. {password[0]}</p>
          <p>2. {password[1]}</p>
          <p>3. {password[2]}</p>
          <p>4. {password[3]}</p>
        </div>
      </div>
    </section>
  );
};

export default Form;
