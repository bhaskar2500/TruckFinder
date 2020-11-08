import React, { Component } from "react";

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const FooterContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100% !important;
  height: 50px !important ;
  color:#fff;
  background: #000;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography variant="caption"> Copyright@ Bhaskar Kaushal</Typography>
      </FooterContainer>
    );
  }
}

export default Footer;