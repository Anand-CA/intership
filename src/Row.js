import React from "react";
import styled from "styled-components";

function Row({
  big,
  no,
  platform,
  tradedPrice,
  sellPrice,
  difference,
  savings,
}) {
  return (
    <Container style={{ color: `${big ? "grey" : "#fff"}` }}>
      <p>{big ? "#" : no}</p>
      <p>{big ? "Platform" : platform}</p>
      <p>{big ? "Last Traded Price" : tradedPrice}</p>
      <p>{big ? "Buy / Sell Price" : sellPrice}</p>
      <p>{big ? "Difference" : difference}</p>
      <p>{big? "Savings":savings}</p>
    </Container>
  );
}

export default Row;

const Container = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  p {
    font-size: 30px;
  }
`;
