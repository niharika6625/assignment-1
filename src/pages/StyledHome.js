import { styled } from "@mui/material/styles";

const StyledHome = styled("div")(
  ({ theme }) => `
.content-wrap{
    background-color:#f2f3f5 ;
    display: flex;
    height: 800px;
    padding-top: 200px;
}

.content-wrap .content-body{
    width: 60%;
    padding-top: 20px;
    
}

.content-wrap .content-body .content-btn{
padding: 20px;
display: flex;
justify-content: center;
}

`
);

export { StyledHome };
