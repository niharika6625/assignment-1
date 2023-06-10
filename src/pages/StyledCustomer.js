import { styled } from "@mui/material/styles";

const StyledCustomer = styled("div")(
  ({ theme }) => `
.cust-wrap {
    background-color:#f2f3f5 ;
    padding: 50px;
}

.cust-wrap .cust-header{
    padding-top: 20px;
}

.cust-wrap .cust-content{
display: flex;
justify-content: space-between;
margin: 50px;
}

.cust-wrap .cust-list{
    width: 20%;

}
.cust-wrap .cust-content .cust-contracts{
    padding-left: 20px;
    width: 80%;
}

@media (max-width: 600px){
    .cust-wrap {
        padding: 10px;
    }
    .cust-wrap .cust-content{
        display: block;
        margin: 00px;
    }
    .cust-wrap .cust-list{
        width: 100%;
    
    }
    .cust-wrap .cust-content .cust-contracts{
        padding-left: 00px;
        margin-top: 20px;
        width: 100%;
    }
}

    `
);

export { StyledCustomer };
