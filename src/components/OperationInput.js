import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  margin: 5px;
  min-width: 90%;
  padding-top: 5px;
  border-radius: 5px;
  border: none;
  border: 1px solid blue;
  color: darkblue;
  ::placeholder {
    color: blue;
  }
`;

function OperationInput({setExpr}) {
  return <StyledInput placeholder="Write your expression" onChange={(e)=>{
    setExpr(e.target.value);
  }}></StyledInput>;
}

export default OperationInput;
