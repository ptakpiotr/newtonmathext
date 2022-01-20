import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 10px;
  border: none;
  background: blue;
  color: whitesmoke;
  margin: 5px;
  border-radius: 5px;
  &:hover {
    background: darkblue;
  }
`;

function OperationButton({ operation, setOper, expr, basicUrl, setResult }) {
  const calculate = async () => {
    let url = encodeURI(`${basicUrl}${operation}/${expr}`);
    url = url.replace("+", "%2B");
    console.log(url);
    let f = await fetch(url);

    let json = await f.json();
    setResult(json.result);
  };

  return (
    <StyledBtn
      onClick={() => {
        setOper(operation);

        calculate();
      }}
    >
      {operation}
    </StyledBtn>
  );
}

export default OperationButton;
