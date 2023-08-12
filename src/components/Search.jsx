import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(input);
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 5rem;
  div {
    position: relative;
    width: 100%;
    input {
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1.2rem;
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      outline: none;
      width: 100%;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
    }
  }
`;

export default Search;
