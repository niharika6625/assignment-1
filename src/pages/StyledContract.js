import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
const StyledContract = styled("div")(
  ({ theme }) => `
.cont-wrap {
    background-color: ${theme.palette.customColor.red_1} ;
    padding: 50px;
    .cont-header{
        padding-bottom: 30px;
    }
    .cont-content{
        padding-left: 40px;
    }
}

`
);

const StylesButton = styled(Button)(
  ({ theme }) => `
    
    background-color: blue;
    `
);

export { StyledContract, StylesButton };
