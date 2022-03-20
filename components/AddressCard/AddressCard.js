import { Paper, Typography } from "@mui/material";
import styled from "styled-components";

const AddressCardWrapper = styled.div`

    max-width: 360px;
    margin: 24px 0px;

    .address-body {
        padding: 16px 24px;
        border-radius: 8px;
    }

`;

const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
`


export function AddressCard(content) {
  const { title, address, contactNumbers } = content;

  return (
    <AddressCardWrapper>
      <Paper elevation={2} className="address-body">
        <Title>{title}</Title>
        <Typography>{address}</Typography>
        <br />
        {contactNumbers.map((contact) => (
          <Typography key={contact} >{contact}</Typography>
        ))}
      </Paper>
    </AddressCardWrapper>
  );
}
