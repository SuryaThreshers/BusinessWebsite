import styled from "styled-components";
import { AddressCard, ContainerBox, CustomHead } from "components";
import { APP_CONFIG } from "config/appConfig";
import Image from "next/image";
import { ADDRESS_CONTENT } from "content";
import { Grid } from "@mui/material";

const HomeWrapper = styled.div`
    .address-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 24px auto;
        justify-content: space-around;
        max-width: 960px;
    }
`;

const ImageContainer = styled.div`
  width: 360px;
  margin: 48px auto;
`;

const TypographyWrapper = styled.div`
  text-align: center;
  font-size: 24px;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <CustomHead />
      <ImageContainer>
        <Image src={APP_CONFIG?.logoBanner} />
      </ImageContainer>
      <TypographyWrapper>
        Something Awesome is Coming. Stay tuned.
      </TypographyWrapper>
      <Grid className="address-wrapper">
        {ADDRESS_CONTENT.map((content) => (
          <AddressCard key={content?.title} {...content} />
        ))}
      </Grid>
    </HomeWrapper>
  );
}
